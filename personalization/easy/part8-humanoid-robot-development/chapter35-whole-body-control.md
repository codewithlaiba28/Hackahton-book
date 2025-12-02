# Chapter 35: Whole-Body Control

## Introduction to Whole-Body Control

**Whole-Body Control (WBC)** is a way to move all parts of a robot—legs, arms, torso, head—together in a coordinated way. Instead of controlling each limb separately, WBC treats the robot as one system. This is important for humanoid robots because it helps them move smoothly, stay balanced, and do complex tasks in human environments.

## Inverse Kinematics and Inverse Dynamics

These are basic tools used in WBC:

### Inverse Kinematics (IK)

**Inverse Kinematics (IK)** calculates what joint angles the robot needs to put its hand, foot, or other part in a specific position and direction. In WBC, IK can calculate positions for multiple body parts at the same time, while keeping balance and avoiding joint limits.

### Inverse Dynamics (ID)

**Inverse Dynamics (ID)** calculates how much force or torque each joint needs to produce the desired movement. WBC uses ID to make sure the robot’s movements are physically possible and stable.

## Prioritized Task Execution

Robots often have to do many things at once. Some tasks are more important than others. **Prioritized task execution** solves this by ranking tasks:

### Hierarchy of Tasks

1. **High-Priority Tasks**: Must always be done (e.g., keeping balance, not hitting anything).
2. **Medium-Priority Tasks**: Done as much as possible without affecting higher-priority tasks (e.g., reaching for an object).
3. **Low-Priority Tasks**: Use any leftover movement or energy to improve posture, efficiency, or comfort.

If a high-priority task uses certain joints or forces, lower-priority tasks must work around it.

## Balance and Compliance

### Maintaining Balance

WBC helps robots stay stable. It can actively move the **Center of Mass (CoM)**, control the **Zero Moment Point (ZMP)**, and adjust foot forces to maintain balance while standing, walking, or reacting to pushes. Arms and torso can also help balance.

### Compliance

**Compliance** means the robot can “give” a little when pushed or when interacting with objects or humans. This makes movements safer and smoother.

* **Joint-Level Compliance**: Joints act like springs or dampers.
* **Task-Level Compliance**: Robot can be stiff in some directions but flexible in others, depending on the task (e.g., push gently horizontally, but stay strong vertically).

## Reactive Responses to Disturbances

WBC allows robots to react quickly if something unexpected happens, like a push or uneven ground.

* **Disturbance Estimation**: Sensors detect pushes or unexpected movements.
* **Real-time Adaptation**: WBC recalculates joint positions and forces to regain balance. The robot might step, move its arms, or adjust its posture to stay upright and continue its tasks.

**Whole-Body Control** is a cutting-edge approach that lets humanoid robots move dynamically, stay stable, and interact safely with humans in complex environments.
