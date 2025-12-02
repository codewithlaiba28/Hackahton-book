# **Chapter 32: Humanoid Robot Anatomy**

Humanoid robots are designed like humans. Understanding their anatomy helps us **design, control, and program them** to move, interact, and work in human environments.

---

## **Upper Body**

The upper body includes the **torso, head, and arms**.

### **Torso**

* Acts as the central hub connecting upper and lower body.
* Holds main processors, power, and communication systems.
* Can bend or rotate for **balance, reach, and expressiveness**.

### **Head**

* Important for seeing, hearing, and interacting.
* **Sensors:** Cameras, depth sensors, microphones (sometimes smell sensors).
* **Actuators:** Move the head (pitch, yaw, roll) and sometimes facial features.

### **Arms**

* Designed like human arms for reach and manipulation.
* **Shoulder:** Moves in multiple directions.
* **Elbow:** Bends and straightens (pitch).
* **Wrist:** Rotates and tilts (pitch, yaw, roll).
* **Hand:** End-effector for grasping and manipulating objects (detailed in Chapter 34).

---

## **Lower Body**

The lower body gives **mobility and balance**, including **pelvis, legs, and feet**.

### **Pelvis**

* Connects torso to legs.
* Helps shift the robot's **center of mass** for walking and balance.

### **Legs**

* Designed for walking, standing, and absorbing impacts.
* **Hip:** Moves legs in multiple directions.
* **Knee:** Bends and straightens.
* **Ankle:** Adjusts foot angle for balance.

### **Feet**

* Contact points with the ground.
* Often have **force sensors** to help balance and detect weight distribution.

---

## **Joints and Degrees of Freedom (DoF)**

* **DoF**: How many independent movements a robot joint can make.
* More DoF = more human-like motion, but harder to control.
* Humanoids usually have **30–60 DoF** for realistic movement.

---

## **Hardware Integration**

### **Lightweight Materials**

* Aluminum, carbon fiber, or composites reduce weight.
* Lighter robots need **less energy** and move faster.

### **Motors and Actuators**

* **Servo or BLDC motors** for precise and efficient motion.
* Gear reductions increase torque.
* **Series elastic actuators (SEAs)** mimic muscles for safety and flexibility.

### **Sensors**

* **Proprioceptive Sensors:** Joint encoders, force/torque sensors, IMUs for balance and motion.
* **Exteroceptive Sensors:** Cameras, lidar, and ultrasonic sensors to see and understand the environment.

---

A humanoid robot’s design, joints, motors, and sensors work together to **enable human-like motion and intelligent behaviors**.

