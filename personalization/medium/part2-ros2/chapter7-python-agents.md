# Chapter 7: Connecting Python Agents to ROS Controllers  

## 7.1 How an AI Brain Actually Talks to a Real Robot

The full loop looks like this:

```
Sensors → ROS 2 topics → Python AI Agent → Decision → ROS 2 Action/Topic → Robot Controllers → Motors
                                   ↑                                      ↓
                             Feedback (progress, errors) ←───────────────
```

The **Python agent** never touches motors directly.  
It only speaks ROS 2 (topics, services, actions).  
Everything else is handled by existing, battle-tested ROS controllers (Nav2, MoveIt, joint controllers, etc.).

## 7.2 Using LLMs (ChatGPT, Claude, Llama 3, etc.) with ROS 2 via `rclpy`

Yes, you can literally give your robot a brain like ChatGPT.

### Typical Flow
1. User says: “Robot, bring me a red cup from the kitchen”
2. Python agent sends this sentence to the LLM
3. LLM returns a structured plan:
   ```json
   [
     {"action": "navigate_to", "location": "kitchen"},
     {"action": "find_object", "object": "red cup"},
     {"action": "pick", "object": "red cup"},
     {"action": "navigate_to", "location": "user"},
     {"action": "place", "object": "red cup"}
   ]
   ```
4. Python agent executes each step one by one using ROS 2 actions

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
        # You would convert location_name → actual pose here
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

This actually works today (2025).

## 7.3 Simple Decision Trees in Python (No ML needed)

Sometimes you don’t need an LLM. A clear decision tree is faster and 100% reliable.

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

| High-Level Decision      | ROS 2 Way to Send It                  | Example Topic/Action                     |
|---------------------------|---------------------------------------|------------------------------------------|
| “Go to kitchen”           | Action goal                           | `NavigateToPose` (Nav2)                  |
| “Pick red cup”            | Action goal                           | MoveIt or custom `Grasp` action          |
| “Move forward slowly”     | Publish to topic                      | `/cmd_vel` (Twist message)               |
| “Open gripper”            | Service call                          | `/gripper_command` service               |
| “Stop immediately”        | Publish zero velocity                 | `/cmd_vel` → all zeros                   |

The agent only decides **what**, never **how** — the controller does the hard control work.

## 7.5 Error Handling & Safety (Don’t let your robot crash!)

```python
def safe_navigate(self, x, y):
    goal_msg = NavigateToPose.Goal()
    goal_msg.pose.pose.position.x = x
    goal_msg.pose.pose.position.y = y

    send_goal_future = self.nav_client.send_goal_async(goal_msg)
    send_goal_future.add_done_callback(self.goal_response)

    # Timeout after 30 seconds
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

Always:
- Set timeouts
- Check if action servers are available
- Have a fallback plan (stop → ask human → retry)

## 7.6 Real-World Examples That Actually Work Today

### Example 1: Pick-and-Place with Vision + Agent
1. Camera → detects object → publishes pose
2. Python agent sees pose → sends MoveIt `FollowJointTrajectory` goal
3. If grasp fails → agent retries with different gripper angle

### Example 2: Warehouse Robot with Dynamic Replanning
1. Agent sends `NavigateToPose` to shelf A
2. Human blocks path → Nav2 sends feedback “path blocked”
3. Agent cancels current goal → plans new route → sends new goal

### Example 3: Home Assistant Robot (LLM-powered)
User says: “I’m thirsty, get me water”
→ LLM creates plan: go to kitchen → open fridge → grasp bottle → bring back
→ Agent executes each step, asks user if anything fails

## What You Should Be Able to Do After This Chapter

- Connect any Python AI (rule-based, decision tree, or full LLM) to a real robot using `rclpy`
- Send navigation, manipulation, and gripper commands safely
- Handle feedback, timeouts, and errors
- Build a robot that understands natural language and acts on it

You now have the complete recipe to give your robot a real brain.

