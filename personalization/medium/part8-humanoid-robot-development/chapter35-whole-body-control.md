# **Chapter 35: Whole-Body Control**

Whole-Body Control (WBC) is about making a humanoid robot move **all its joints together**—arms, legs, torso, and head—so it can perform tasks smoothly, stay balanced, and interact safely with the environment. Instead of controlling each limb separately, WBC treats the robot as **one connected system**.

---

## **Inverse Kinematics (IK) and Inverse Dynamics (ID)**

### **Inverse Kinematics (IK)**

* IK calculates the **joint angles** needed to move an end-effector (like a hand or foot) to a specific position.
* WBC uses IK to move **multiple limbs at once** while considering balance and joint limits.

### **Inverse Dynamics (ID)**

* ID calculates the **forces or torques** needed at each joint to produce the desired motion.
* It ensures that the robot moves safely and efficiently while reacting to forces from the environment.

---

## **Prioritized Task Execution**

Robots often have **many tasks at the same time**, and some may conflict (like reaching for an object while keeping balance). WBC uses **priority levels**:

1. **High-Priority Tasks**: Must always succeed (e.g., don’t fall, avoid collisions).
2. **Medium-Priority Tasks**: Achieved if possible without interfering with higher-priority tasks (e.g., reach for an object).
3. **Low-Priority Tasks**: Use leftover freedom to optimize posture, energy, or smoothness.

> Think of it like a “to-do list” where important tasks are done first, and smaller tasks fill in the gaps.

---

## **Balance and Compliance**

### **Maintaining Balance**

* WBC moves the **Center of Mass (CoM)**, adjusts foot forces, and uses arms and torso to keep the robot stable.
* Works during **standing, walking, or if something pushes the robot**.

### **Compliance**

* Compliance means the robot can **yield slightly to forces**, making it safer and smoother.
* Types:

  * **Joint-Level Compliance**: Joints act like springs or dampers.
  * **Task-Level Compliance**: Robot can be soft in some directions (like pushing horizontally) but stiff in others (like supporting its weight).

---

## **Reactive Responses to Disturbances**

* WBC allows the robot to react quickly to **pushes, slips, or uneven ground**.
* How it works:

  * **Disturbance Estimation**: Sensors detect unexpected forces.
  * **Real-time Adaptation**: Robot recalculates joint angles and forces to regain balance and continue tasks.
  * Strategies include **stepping, moving arms for balance, or adjusting posture**.

---

Whole-Body Control is **the most advanced way** to make humanoid robots move dynamically, safely, and naturally in complex environments, especially around humans.

