# Chapter 7: Connecting Python Agents to ROS Controllers

## 7.1 How an AI Brain Actually Talks to a Real Robot

Full loop kuch is tarah hai:

```
Sensors → ROS 2 topics → Python AI Agent → Decision → ROS 2 Action/Topic → Robot Controllers → Motors
                                   ↑                                      ↓
                             Feedback (progress, errors) ←───────────────
```

**Python agent** motors ko directly touch nahi karta.
Ye sirf ROS 2 (topics, services, actions) bolta hai.
Baaki sab existing, battle-tested ROS controllers (Nav2, MoveIt, joint controllers, etc.) handle karte hain.

## 7.2 Using LLMs (ChatGPT, Claude, Llama 3, etc.) with ROS 2 via `rclpy`

Haan, aap apne robot ko literally ChatGPT jaisa brain de sakte ho.

### Typical Flow

1. User kehta hai: “Robot, kitchen se mujhe red cup le aao”
2. Python agent ye sentence LLM ko bhejta hai
3. LLM structured plan return karta hai:

   ```json
   [
     {"action": "navigate_to", "location": "kitchen"},
     {"action": "find_object", "object": "red cup"},
     {"action": "pick", "object": "red cup"},
     {"action": "navigate_to", "location": "user"},
     {"action": "place", "object": "red cup"}
   ]
   ```
4. Python agent ROS 2 actions use karke har step execute karta hai

### Minimal Working Example (Python + rclpy + OpenAI/Groq/Local LLM)

```python
import rclpy
from rclpy.node import Node
from rclpy.action import ActionClient
from nav2_msgs.action import NavigateToPose
from geometry_msgs.msg import PoseStamped
import openai  # or groq, ollama, etc.

class LLMRobotAgent(Node):
    def __init__(self):
        super().__init__('llm_agent')
        self.nav_client = ActionClient(self, NavigateToPose, 'navigate_to_pose')

    def ask_llm(self, user_command: str):
        response = openai.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": user_command + 
             "\nReply ONLY in JSON with list of actions."}]
        )
        return response.choices[0].message.content

    def execute_plan(self, plan):
        import json
        actions = json.loads(plan)
        for a in actions:
            if a["action"] == "navigate_to":
                self.send_navigation_goal(a["location"])

    def send_navigation_goal(self, location_name):
        goal_msg = NavigateToPose.Goal()
        goal_msg.pose.header.frame_id = 'map'
        goal_msg.pose.pose.position.x = 2.0   # example
        goal_msg.pose.pose.position.y = 1.0
        self.nav_client.wait_for_server()
        self.nav_client.send_goal_async(goal_msg).add_done_callback(self.goal_response)

    def goal_response(self, future):
        goal_handle = future.result()
        if goal_handle.accepted:
            goal_handle.get_result_async().add_done_callback(self.get_result)

    def get_result(self, future):
        result = future.result().result
        self.get_logger().info(f'Navigation finished: {result}')

def main():
    rclpy.init()
    agent = LLMRobotAgent()
    plan = agent.ask_llm("Go to the kitchen and come back")
    agent.execute_plan(plan)
    rclpy.spin(agent)

if __name__ == '__main__':
    main()
```

Ye actually 2025 me kaam karta hai.

## 7.3 Simple Decision Trees in Python (No ML needed)

Kabhi kabhi LLM ki zarurat nahi. Clear decision tree fast aur 100% reliable hai.

```python
class SimpleAgent(Node):
    def __init__(self):
        super().__init__('simple_agent')
        self.cmd_vel_pub = self.create_publisher(Twist, '/cmd_vel', 10)
        self.sub = self.create_subscription(
            LaserScan, '/scan', self.laser_callback, 10)

    def laser_callback(self, msg):
        front_distance = min(msg.ranges[0:30] + msg.ranges[-30:])  # front 60°

        if front_distance < 0.5:
            self.move_backward()
        elif self.target_seen:
            self.move_forward()
        else:
            self.turn_left()   # search

    def move_forward(self):
        twist = Twist()
        twist.linear.x = 0.3
        self.cmd_vel_pub.publish(twist)
```

## 7.4 From High-Level Decision → Real Motor Commands

| High-Level Decision   | ROS 2 Way to Send It  | Example Topic/Action            |
| --------------------- | --------------------- | ------------------------------- |
| “Go to kitchen”       | Action goal           | `NavigateToPose` (Nav2)         |
| “Pick red cup”        | Action goal           | MoveIt ya custom `Grasp` action |
| “Move forward slowly” | Publish to topic      | `/cmd_vel` (Twist message)      |
| “Open gripper”        | Service call          | `/gripper_command` service      |
| “Stop immediately”    | Publish zero velocity | `/cmd_vel` → sab zeros          |

Agent sirf decide karta hai **kya karna hai**, **kaise** controller karta hai.

## 7.5 Error Handling & Safety (Robot crash mat hone do!)

```python
def safe_navigate(self, x, y):
    goal_msg = NavigateToPose.Goal()
    goal_msg.pose.pose.position.x = x
    goal_msg.pose.pose.position.y = y

    send_goal_future = self.nav_client.send_goal_async(goal_msg)
    send_goal_future.add_done_callback(self.goal_response)

    rclpy.spin_until_future_complete(self, send_goal_future, timeout_sec=30)
    if not send_goal_future.done():
        self.get_logger().error("Navigation timeout!")
        self.emergency_stop()
        return False
    return True

def emergency_stop(self):
    stop_msg = Twist()
    self.cmd_vel_pub.publish(stop_msg)
    self.get_logger().warn("EMERGENCY STOP!")
```

Hamesha:

* Timeouts set karo
* Action servers available check karo
* Fallback plan rakho (stop → human se pooch → retry)

## 7.6 Real-World Examples That Actually Work Today

### Example 1: Pick-and-Place with Vision + Agent

1. Camera → object detect → publish pose
2. Python agent pose dekhe → MoveIt `FollowJointTrajectory` goal send kare
3. Agar grasp fail → agent different gripper angle se retry kare

### Example 2: Warehouse Robot with Dynamic Replanning

1. Agent `NavigateToPose` shelf A ko bheje
2. Human path block kare → Nav2 feedback “path blocked” bheje
3. Agent current goal cancel kare → naya route plan kare → new goal send kare

### Example 3: Home Assistant Robot (LLM-powered)

User kehta: “I’m thirsty, get me water”
→ LLM plan create kare: kitchen jao → fridge open → bottle grasp → wapas lao
→ Agent har step execute kare, agar fail ho → user se poochhe

## What You Should Be Able to Do After This Chapter

* Kisi bhi Python AI (rule-based, decision tree, ya full LLM) ko real robot se `rclpy` ke through connect karna
* Navigation, manipulation, aur gripper commands safely bhejna
* Feedback, timeouts, aur errors handle karna
* Robot build karna jo natural language samajh sake aur act kare

Ab aapke paas complete recipe hai apne robot ko real brain dene ki.
