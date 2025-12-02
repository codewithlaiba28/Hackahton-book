# Chapter 7: Connecting Python Agents to ROS Controllers

## How AI Agents Control Robots

**Flow**:
1. **Sensors** read the world (camera, lidar)
2. **AI Agent** thinks and decides what to do
3. **Agent** sends commands via ROS 2
4. **Robot** executes the commands
5. **Sensors** report results back to agent

**Example**: 
- Sensor: "I see a cup"
- Agent: "Pick it up"
- Robot: Moves arm and grabs cup
- Sensor: "Cup is in gripper"

## AI Agent to ROS 2 Commands

**AI agents send 3 types of commands**:

| Command | Use | Example |
|---------|-----|---------|
| **Topics** | Continuous control | Move forward at speed 0.5 m/s |
| **Services** | Quick requests | Open gripper now |
| **Actions** | Long tasks with feedback | Navigate to room 5 (updates progress) |

## Large Language Models (LLMs) with ROS 2

**What it means**: Use ChatGPT-style AI to control robots

**How it works**:
1. User says: "Go to the kitchen"
2. LLM breaks it into steps:
   - Navigate to kitchen
   - Look around
   - Report what you see
3. Python agent sends ROS 2 commands for each step

**Benefit**: Robots understand natural language commands

## Decision Trees for Robots

**What they are**: Simple IF-THEN rules that tell robots what to do

**Example**:
```
IF object_detected:
  IF object_is_target:
    THEN grab_it()
  ELSE
    ignore_it()
ELSE
  search_for_object()
```

**Benefit**: Easy to understand and debug

## From High-Level Decision to Motor Control

**Steps**:

1. **High-level decision**: "Move forward 1 meter"
2. **ROS 2 translation**: Send velocity command to `/cmd_vel` topic
3. **Low-level control**: PID controller adjusts motor power
4. **Sensor feedback**: Check position and adjust if needed

**Example - Pick-and-place robot**:
- AI decides: "Grasp the cup"
- Sends action to arm controller
- Arm moves to cup → Opens gripper → Closes gripper
- Reports back: "Cup grasped"

## Error Handling and Safety

**What can go wrong**:
- Sensor gives bad data (NaN values)
- AI decision is unsafe
- Robot gets stuck
- Motor fails

**How to handle it**:

| Problem | Solution |
|---------|----------|
| Bad sensor data | Check and validate data first |
| Unsafe decision | Add safety checks before executing |
| Robot stuck | Timeout after X seconds, try again |
| Motor fails | Immediately stop all movement |

**Fallback behaviors**:
- STOP all motion
- Go to safe location
- Switch to human control
- Log what happened

## Real-World Example 1: Pick-and-Place Robot

**Task**: Pick objects from conveyor and place in bin

**AI Agent does**:
1. See object with camera
2. Decide which bin it goes to
3. Send arm movement commands (ROS actions)
4. Send gripper commands (ROS services):
   - Open gripper
   - Move to object
   - Close gripper
   - Move to bin
   - Open gripper
5. If grasp fails, try again or alert operator

## Real-World Example 2: Autonomous Navigation

**Task**: Deliver packages in warehouse

**AI Agent does**:
1. Receive map and goal location
2. Send navigation goal (ROS action)
3. Monitor obstacles in real-time
4. If path blocked:
   - Request new path
   - Or wait for obstacle to move
5. If emergency:
   - Send emergency stop
   - Move to safe location

## Integration Pattern

```
Sensor Data (ROS topics)
    ↓
AI Agent (Python)
    ├─ Perceive
    ├─ Decide
    └─ Plan
    ↓
ROS 2 Commands (topics, services, actions)
    ↓
Motor/Gripper Control
    ↓
Robot Actions (movement, grasping)
    ↓
Feedback (Sensors) → Back to AI Agent
```

## What You'll Learn

- How AI agents communicate with robots via ROS 2
- Use LLMs for natural language robot control
- Build decision trees for robot behavior
- Translate agent decisions to motor commands
- Implement safe error handling
- Real-world pick-and-place and navigation examples