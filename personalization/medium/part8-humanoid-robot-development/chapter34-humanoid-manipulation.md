# **Chapter 34: Humanoid Manipulation**

Humanoid robots have arms and hands designed like human limbs. This helps them **grasp, hold, and manipulate objects** with dexterity and precision.

---

## **Design of Arms and Hands**

### **Arms**

* Robot arms have multiple joints to move like human arms:

  * **Shoulder**: can move up/down (pitch), rotate (yaw), and tilt (roll)
  * **Elbow**: bends like a human elbow (pitch)
  * **Wrist**: moves in multiple directions (pitch, yaw, roll)
* Motors in the joints provide strength while keeping the arm **lightweight**.

### **Hands**

* Robot hands range from **simple grippers** to **complex multi-fingered hands**:

  * **Anthropomorphic Hands**: 3–5 fingers, multiple joints per finger, can do **power grasps** and **precision grasps**. Soft fingertips help hold objects securely.
  * **Underactuated Hands**: Fewer motors control many joints, reducing cost and complexity. The mechanical design allows adaptive grasping.

---

## **Grasping Strategies**

Robots need to handle both **heavy tools** and **delicate items**.

### **Power Grasps**

* Use the **whole hand and palm**.
* Good for heavy objects (e.g., holding a hammer).

### **Precision Grasps**

* Use **fingertips and thumb**.
* Good for small or delicate objects (e.g., picking up a pen).

### **Adaptive Grasping**

* Robots adjust grip using **sensor feedback**:

  * **Tactile sensors** detect contact pressure
  * **Force sensors** control grip strength
* Ensures objects are held securely without damage.

---

## **Fine Motor Control**

Fine motor control helps with **precise movements**.

* **Tactile Feedback**: Fingers sense pressure and texture.
* **Force Control**: Adjust grip strength for delicate or slippery objects.
* **Vision-Guided Manipulation**: Cameras help locate and manipulate objects accurately.

---

## **Tool Use**

Robots can use tools like humans.

* **Tool Recognition**: Identify the tool and its parts.
* **Grasp Planning**: Choose the best way to hold it.
* **Task-Oriented Control**: Move the tool effectively to complete the task.

---

## **In-Hand Manipulation**

* Robots can **reposition objects within their hand** without letting go.
* Techniques include:

  * **Finger Gaits**: Move fingers individually to roll or slide an object.
  * **Palm-Finger Synergy**: Use palm and fingers together for complex movements.

---

Modern humanoid robots can now **perform complex, human-like tasks**, making them versatile for industrial work and interactive environments.

