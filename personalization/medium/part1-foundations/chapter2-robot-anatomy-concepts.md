# Chapter 2: Robot Anatomy & Core Concepts

This chapter explains the main parts of a robot, how they are organized, and the basic ideas needed to understand how robots move and work in the real world.

## 1. Introduction to Robot Anatomy

Every robot, no matter how simple or advanced, is built from a few essential parts that work together. Think of them as the robot’s senses, muscles, hands, and brain.

### 1.1 The Four Core Components

| Component         | What it does (in human terms)       | Real function                                      | Common examples                          |
|-------------------|-------------------------------------|----------------------------------------------------|------------------------------------------|
| **Sensors**       | Eyes, ears, skin, balance           | Turn real-world signals (light, sound, force) into data the robot can read | Cameras, LiDAR, microphones, IMUs, force sensors |
| **Actuators**     | Muscles                             | Turn electrical commands into actual movement     | Electric motors, hydraulic cylinders, pneumatic pistons |
| **End-Effectors** | Hands or tools                      | The part that actually touches or changes the world | Grippers, welding torches, suction cups, drills |
| **Control System**| Brain + nervous system              | Processes sensor data, makes decisions, sends commands to actuators | Computers, microcontrollers, software    |

### 1.2 Main Subsystems of a Robot

A robot is more than just separate parts — everything works together through subsystems:

- **Perception Subsystem** – collects and makes sense of sensor data (what the robot “sees” and “feels”).
- **Locomotion/Manipulation Subsystem** – legs, wheels, arms, grippers that move the robot or objects.
- **Planning & Control Subsystem** – decides what to do and sends exact commands to motors.
- **Communication Subsystem** – talks to other robots, computers, or humans (Wi-Fi, Bluetooth, cables).
- **Power Subsystem** – batteries, power regulators, charging system — keeps everything running.

Good robot design is all about making these subsystems work smoothly together.

## 2. Types of Robots (Based on Body Design)

Robots are grouped by their physical shape, called **morphology**. The shape decides what the robot is good at.

### 2.1 Mobile Robots (built to move around)

Main job: go from place to place.

- Wheeled robots → fast on flat floors (warehouse bots, delivery robots)
- Legged robots → can handle stairs, rocks, rough ground (Boston Dynamics Spot, Atlas)
- Drones → fly (quadcopters, delivery drones)
- Underwater robots → swim (AUVs, ROVs)

Used for: exploration, delivery, inspection, search & rescue.

### 2.2 Manipulative Robots (built to handle objects)

Main job: precise work with arms.

- Industrial arms → strong, super accurate, repeat the same motion millions of times (car factories)
- Cobots (collaborative robots) → safe to work next to humans, easy to teach new tasks
- Delta robots → extremely fast pick-and-place (food packaging)

Used for: assembly lines, welding, painting, surgery.

### 2.3 Humanoid Robots (built to look and move like people)

Main job: work in places made for humans.

- Walk on two legs, climb stairs, open normal doors
- Hands that can use regular tools
- Easier for people to understand and trust

Used for: research, elderly care, disaster response, space missions, future home assistants.

**Quick Comparison Table**

| Type              | Best at                     | Typical movement          | Where you see them most                  |
|-------------------|-----------------------------|---------------------------|------------------------------------------|
| Mobile            | Covering distance           | Wheels, legs, flying      | Warehouses, exploration, drones          |
| Manipulative      | Precise object handling     | Fixed or small base + arm | Factories, hospitals                     |
| Humanoid          | Working in human spaces     | Walking + human-like arms | Homes, care facilities, research labs    |

## 3. Important Hardware in Detail

### 3.1 Key Sensors

1. **LiDAR**  
   Shoots laser pulses and measures how long the light takes to bounce back → creates accurate 3D maps. Used in self-driving cars and mapping robots.

2. **Cameras**  
   - Normal cameras → see color and shapes  
   - Stereo cameras → calculate depth (like human eyes)  
   - Depth cameras (RGB-D) → give color + exact distance for every pixel

3. **IMU (Inertial Measurement Unit)**  
   Measures acceleration and rotation. Helps the robot know which way is up, keep balance, and track movement when GPS is not available.

4. **Force/Torque Sensors**  
   Usually placed in the wrist or fingers. Let the robot feel how hard it is pushing or pulling — essential for safe contact with people or delicate objects.

### 3.2 Main Types of Actuators (the “muscles”)

| Type             | Strength       | Speed      | Precision   | Typical use                              |
|------------------|----------------|------------|-------------|------------------------------------------|
| Electric motors  | Medium         | High       | Very high   | Most robots (servo motors in arms)       |
| Hydraulic        | Very high      | Medium     | Good        | Heavy machinery, big industrial robots   |
| Pneumatic        | Low–medium     | Very high  | Medium      | Fast grippers, simple factory robots     |

Choosing the right actuator depends on how much force, speed, and accuracy the task needs.

## 4. How Robots Move: Basic Concepts

### 4.1 Degrees of Freedom (DOF)

- Each independent direction a joint can move = 1 DOF.
- A floating object in 3D space has 6 DOF (move in X,Y,Z + rotate around each axis).
- Typical factory arm → 6 DOF (can reach any position and angle in its workspace).
- Humanoid robots often have 30–50+ DOF for natural movement.

More DOF = more flexible, but harder to control.

### 4.2 Kinematics (the math of movement)

- **Forward Kinematics** (easy)  
  You give joint angles → the computer calculates where the hand is.

- **Inverse Kinematics** (harder)  
  You say “put the hand here” → the computer figures out all the joint angles needed.  
  This is what the robot solves hundreds of times per second when it moves smoothly.

## 5. Learning Outcomes

After this chapter you should be able to:

- Name and explain the four core components (sensors, actuators, end-effectors, control system).
- Tell the difference between mobile, manipulative, and humanoid robots and give real examples.
- Describe what common sensors (LiDAR, cameras, IMU, force sensors) do and where they are used.
- Explain the main types of actuators and when each is preferred.
- Define Degrees of Freedom and understand why they matter.
- Explain the basic idea of forward and inverse kinematics.
