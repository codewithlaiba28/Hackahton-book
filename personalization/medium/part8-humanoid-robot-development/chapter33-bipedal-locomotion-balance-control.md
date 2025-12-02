# **Chapter 33: Bipedal Locomotion and Balance Control**

Humanoid robots walk on **two legs**, just like humans. This allows them to move in human-friendly spaces and handle obstacles. Walking on two legs is **tricky**, because robots must constantly keep their balance.

---

## **Key Concepts of Balance**

### **Center of Mass (CoM)**

* The **CoM** is the point where the robot's weight is balanced.
* To stay stable, the robot must keep its **CoM projection** within its **support polygon** (the area under the feet).
* If the CoM goes outside the support polygon, the robot risks falling.

### **Zero Moment Point (ZMP)**

* The **ZMP** is the point on the ground where the robot’s forces are balanced.
* If the ZMP stays inside the support polygon, the robot will **not fall**.
* ZMP is used by controllers to maintain balance during walking or dynamic movements.

---

## **Dynamic Walking Controllers**

Robots don’t just stand—they walk dynamically. Controllers help them move naturally while keeping balance.

### **Model Predictive Control (MPC)**

* MPC predicts the robot’s **future motion** and adjusts steps to maintain balance.
* It considers forces, CoM, and ZMP to plan safe walking.

### **Capture Point**

* The **capture point** is where the robot should step to stop a fall.
* Controlling the capture point helps robots **recover from disturbances** during walking.

---

## **Walking on Uneven Terrain**

Robots need to adapt when the ground isn’t flat.

### **Terrain Adaptation**

* Sensors like **lidar, depth cameras, and force sensors** detect the ground.
* Robots adjust **step height, foot placement, and posture** to navigate slopes or obstacles.

### **Compliance Control**

* Joints can **give slightly** to the terrain, instead of being rigid.
* This improves stability and reduces stress when stepping on uneven surfaces.

---

## **Dynamic Actions: Running and Jumping**

Advanced robots can perform more challenging movements.

### **Running**

* Includes **aerial phases** where both feet are off the ground.
* Controllers manage momentum and safe landing.

### **Jumping**

* Requires strong vertical push and controlled landing.
* It’s one of the most difficult actions for bipedal robots.

---

Maintaining balance while walking, running, or jumping is **complex**, but ongoing research is helping humanoid robots move more naturally and safely in real environments.


