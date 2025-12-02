# Chapter 34: Humanoid Manipulation

## Design of Humanoid Hands and Arms

Humanoid robots have arms and hands designed like human arms and hands. This allows them to interact with objects in a flexible and precise way. The design focuses on a balance between strength, reach, and accuracy.

### Arm Structure

Robot arms usually have many **joints** to move like human arms:

* **Shoulder**: Can move up/down, rotate, and turn side-to-side
* **Elbow**: Bends and straightens
* **Wrist**: Rotates and tilts

Motors (like servo or BLDC motors) power these joints. Some motors are inside the arm, and sometimes cables or tendons are used to keep the arm light.

### Hand and Gripper Design

Robot hands can be simple (two fingers) or very complex (like human hands).

* **Anthropomorphic Hands**: Look like human hands, with 3–5 fingers, each with multiple joints. Can perform power grasps, precision grasps, and move objects inside the hand. Soft materials like silicone improve grip.
* **Underactuated Hands**: Fewer motors control multiple joints. Clever design allows adaptive gripping while keeping the hand simpler and cheaper.

## Grasping Strategies: Strong vs. Delicate

Robots need to pick up different kinds of objects, from heavy to fragile.

### Power Grasps

**Power grasps** use the palm and all fingers to hold an object tightly. Good for heavy or big objects, like a hammer.

### Precision Grasps

**Precision grasps** use only the fingertips and thumb. Good for small or delicate objects, like a pen or small electronics.

### Adaptive Grasping

Modern robots adjust their grip automatically using **sensor feedback** (like tactile or force sensors). This ensures objects are held safely without slipping or breaking.

## Fine Motor Control

Fine motor control helps robots handle objects with precision.

* **Tactile Feedback**: Fingertip sensors detect pressure and texture to improve grip.
* **Force Control**: Robots control how hard they grip, avoiding damage to delicate objects.
* **Vision-Guided Manipulation**: Cameras help the robot see and locate objects accurately, even in messy environments.

## Tool Use

Robots can also use human tools, like screwdrivers, drills, or pens. This requires:

* **Tool Recognition**: Understanding the tool and its parts.
* **Grasp Planning**: Deciding how to hold the tool correctly.
* **Task-Oriented Control**: Moving the tool in the right way to complete a task.

## In-Hand Manipulation

**In-hand manipulation** is moving or rotating an object inside the hand without letting go. This is difficult for robots but very useful. Techniques include:

* **Finger Gaits**: Moving individual fingers to roll or slide objects.
* **Palm-Finger Synergies**: Using both the palm and fingers together to adjust the object’s position.

Humanoid manipulation allows robots to perform complex tasks, making them closer to human-like interaction rather than just simple industrial actions.
