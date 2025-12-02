# Chapter 7: Connecting Python Agents to ROS Controllers

## How AI Agents Control Robots

**Flow**:

1. **Sensors** world read karte hain (camera, lidar)
2. **AI Agent** sochta hai aur decide karta hai kya karna hai
3. **Agent** ROS 2 ke through commands bhejta hai
4. **Robot** commands execute karta hai
5. **Sensors** results agent ko report karte hain

**Example**:

* Sensor: "Mujhe cup nazar aaya"
* Agent: "Isay uthao"
* Robot: Arm move karta hai aur cup grab karta hai
* Sensor: "Cup gripper me hai"

## AI Agent to ROS 2 Commands

**AI agents 3 types ke commands bhejte hain**:

| Command      | Use                      | Example                                     |
| ------------ | ------------------------ | ------------------------------------------- |
| **Topics**   | Continuous control       | Speed 0.5 m/s se aage move karo             |
| **Services** | Quick requests           | Gripper abhi kholo                          |
| **Actions**  | Long tasks with feedback | Room 5 tak navigate karo (progress updates) |

## Large Language Models (LLMs) with ROS 2

**Kya matlab hai**: ChatGPT-style AI use karke robots control karna

**Kaise kaam karta hai**:

1. User kehta hai: "Kitchen jao"
2. LLM steps me todta hai:

   * Kitchen tak navigate karo
   * Aas paas dekho
   * Jo dekho report karo
3. Python agent har step ke liye ROS 2 commands bhejta hai

**Benefit**: Robots natural language commands samajhte hain

## Decision Trees for Robots

**Kya hain**: Simple IF-THEN rules jo robots ko batate hain kya karna hai

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

**Benefit**: Samajhna aur debug karna easy hai

## From High-Level Decision to Motor Control

**Steps**:

1. **High-level decision**: "1 meter aage move karo"
2. **ROS 2 translation**: `/cmd_vel` topic ko velocity command bhejo
3. **Low-level control**: PID controller motor power adjust karta hai
4. **Sensor feedback**: Position check karo aur zarurat ho toh adjust karo

**Example - Pick-and-place robot**:

* AI decide karta hai: "Cup grasp karo"
* Action arm controller ko bhejta hai
* Arm cup tak move karta hai → Gripper open → Gripper close
* Report karta hai: "Cup grasped"

## Error Handling and Safety

**Kya galat ho sakta hai**:

* Sensor bad data de (NaN values)
* AI decision unsafe ho
* Robot stuck ho jaye
* Motor fail ho jaye

**Kaise handle karein**:

| Problem         | Solution                                      |
| --------------- | --------------------------------------------- |
| Bad sensor data | Pehle data check aur validate karo            |
| Unsafe decision | Execute karne se pehle safety checks add karo |
| Robot stuck     | X seconds ke baad timeout, phir try karo      |
| Motor fails     | Turant sab movement stop karo                 |

**Fallback behaviors**:

* Sab motion STOP karo
* Safe location par jao
* Human control switch karo
* Jo hua uska log banao

## Real-World Example 1: Pick-and-Place Robot

**Task**: Conveyor se objects uthao aur bin me place karo

**AI Agent karta hai**:

1. Camera se object dekho
2. Decide karo kaunsa bin
3. Arm movement commands bhejo (ROS actions)
4. Gripper commands bhejo (ROS services):

   * Gripper kholo
   * Object tak move karo
   * Gripper close karo
   * Bin tak move karo
   * Gripper kholo
5. Agar grasp fail ho, try again ya operator ko alert karo

## Real-World Example 2: Autonomous Navigation

**Task**: Warehouse me packages deliver karo

**AI Agent karta hai**:

1. Map aur goal location receive karo
2. Navigation goal bhejo (ROS action)
3. Real-time me obstacles monitor karo
4. Agar path blocked ho:

   * Naya path request karo
   * Ya obstacle move hone ka wait karo
5. Agar emergency ho:

   * Emergency stop bhejo
   * Safe location par move karo

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

* Kaise AI agents robots ke saath ROS 2 ke through communicate karte hain
* LLMs use karke natural language robot control
* Decision trees build karna robot behavior ke liye
* Agent decisions translate karna motor commands me
* Safe error handling implement karna
* Real-world pick-and-place aur navigation examples
