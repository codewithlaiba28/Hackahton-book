# Chapter 34: Humanoid Manipulation

This chapter explains how humanoid robots **use their arms and hands** to interact with objects in flexible and precise ways. It covers arm and hand design, grasping strategies, fine motor control, tool use, and in-hand manipulation.

---

## Design of Humanoid Hands and Arms

Humanoid robots have arms and hands modeled after human anatomy to **reach, grasp, and manipulate objects** effectively. The design balances **strength, reach, and precision**.

### Arm Structure

Robot arms include multiple joints for human-like motion:

* **Shoulder**: Moves up/down, rotates, and swings side-to-side
* **Elbow**: Bends and straightens
* **Wrist**: Rotates and tilts

**Motors** (servo or BLDC) power these joints. Sometimes motors are inside the arm, and **cables or tendons** are used to reduce weight while keeping flexibility.

### Hand and Gripper Design

Hands can range from **simple grippers** to complex **anthropomorphic hands**:

* **Anthropomorphic Hands**:

  * 3–5 fingers with multiple joints
  * Perform power grasps, precision grasps, and in-hand object adjustments
  * Soft materials like silicone improve grip and reduce damage

* **Underactuated Hands**:

  * Fewer motors control multiple joints
  * Adaptive gripping while simplifying design and reducing cost

---

## Grasping Strategies: Strong vs. Delicate

Robots must handle both heavy and fragile objects.

### Power Grasps

* Use the palm and all fingers
* Good for heavy or large objects (e.g., hammer)

### Precision Grasps

* Use fingertips and thumb only
* Good for small or delicate objects (e.g., pen, small electronics)

### Adaptive Grasping

* Grip adjusts automatically using **sensor feedback** (tactile or force sensors)
* Prevents slipping or breaking objects

---

## Fine Motor Control

Fine control allows **precise handling of objects**:

* **Tactile Feedback**: Fingertip sensors detect pressure and texture
* **Force Control**: Adjust grip strength to avoid damage
* **Vision-Guided Manipulation**: Cameras locate objects accurately, even in cluttered spaces

---

## Tool Use

Humanoid robots can use **human tools**:

* **Tool Recognition**: Identify the tool and its parts
* **Grasp Planning**: Decide the correct way to hold it
* **Task-Oriented Control**: Move the tool to perform tasks correctly

---

## In-Hand Manipulation

**In-hand manipulation** = moving or rotating an object inside the hand without releasing it. Techniques include:

* **Finger Gaits**: Moving fingers individually to roll or slide objects
* **Palm-Finger Synergies**: Using palm and fingers together to adjust object position

---

**Summary**:

Humanoid manipulation enables robots to perform **complex, human-like tasks**. With advanced grasping, fine motor control, tool usage, and in-hand adjustments, robots can interact with objects safely and effectively, bridging the gap between industrial automation and human-like dexterity.
