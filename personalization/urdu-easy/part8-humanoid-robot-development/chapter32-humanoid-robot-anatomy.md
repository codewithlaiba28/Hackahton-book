# Chapter 32: Humanoid Robot Anatomy

This chapter explains the **structure and components of humanoid robots**, showing how they are designed to move and interact like humans. Understanding this anatomy is crucial for controlling, programming, and designing humanoid robots.

---

## Introduction to Humanoid Anatomy

Humanoid robots are modeled after the human body to:

* Operate in human spaces
* Use human tools
* Interact naturally with people

A proper understanding of their structure ensures efficient movement, balance, and task execution.

---

## Upper Body Structure

The **upper body** consists of the torso, head, and arms. Each part has specific functions and movement abilities.

### Torso

The **torso** is the robot’s central structure. It connects the legs to the head and arms and usually houses:

* Main computers and processing units
* Power systems
* Communication hardware

**Movable torso**: Bending or rotating the torso improves balance, reaching ability, and expressiveness.

### Head

The **head** enables perception and interaction. It commonly contains:

* **Sensors**: Cameras, depth sensors, microphones, and sometimes smell sensors
* **Actuators**: Motors to move the neck (up/down, left/right, tilt) and facial features for expressions

### Arms

The **arms** mimic human arms for reaching, grabbing, and manipulating objects. Components include:

* **Shoulder**: Moves in multiple directions (up/down, sideways, rotation)
* **Elbow**: Bends and straightens
* **Wrist**: Rotates and tilts (up/down, left/right, twist)
* **Hand**: Grabs or holds objects (detailed in Chapter 34)

---

## Lower Body Structure

The **lower body** provides movement, support, and balance, including the pelvis, legs, and feet.

### Pelvis

* Connects torso to legs
* Shifts center of mass for walking and balance

### Legs

Legs have multiple joints for walking, standing, and absorbing impact:

* **Hip**: Moves the leg in multiple directions
* **Knee**: Bends and straightens
* **Ankle**: Tilts and moves the foot for stability

### Feet

* Provide ground contact and stability
* Often include sensors to measure weight distribution and balance

---

## Joints and Degrees of Freedom (DoF)

* **Degrees of Freedom (DoF)** = number of independent joint movements
* More DoF → more flexibility and human-like motion
* Humanoids usually have **30–60 DoF** total

---

## Hardware Integration

Designing a humanoid robot requires careful integration of **materials, actuators, and sensors**.

### Lightweight Materials

* Aluminum, carbon fiber, or composites reduce weight
* Improves speed, energy efficiency, and balance

### Motors and Actuators

* **Servo motors** and **BLDC motors** are precise and strong
* **Series Elastic Actuators (SEAs)** mimic human muscle behavior for safer, softer movement

### Sensors

**Proprioceptive Sensors**: Measure joint positions, speeds, forces, and orientation (e.g., IMUs in torso/head)
**Exteroceptive Sensors**: Cameras, depth sensors, LiDAR, and ultrasonic sensors help perceive the environment

---

**Summary**:

By carefully combining torso, head, arms, legs, joints, actuators, and sensors, humanoid robots can perform complex, human-like movements safely and efficiently. Their **anatomy determines motion capability, balance, perception, and interaction potential**.
