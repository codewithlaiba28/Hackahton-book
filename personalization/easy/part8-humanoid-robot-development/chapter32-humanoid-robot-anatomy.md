# Chapter 32: Humanoid Robot Anatomy

## Introduction to Humanoid Anatomy

Humanoid robots are designed like the human body. This helps them work in human spaces, use tools made for humans, and interact naturally with people. Knowing this anatomy is important for designing, controlling, and programming humanoid robots.

## Upper Body Structure

The upper body usually includes the torso, head, and arms, each with its own functions and movement abilities.

### Torso

The **torso** is the robot’s main body. It connects the legs to the head and arms. It often contains:

* Main computers and processing units
* Power systems
* Communication hardware

A movable torso that can bend or rotate helps with balance, reaching, and expressive movements.

### Head

The **head** is important for seeing, hearing, and interacting. It usually has:

* **Sensors**: Cameras, depth sensors, microphones, and sometimes smell sensors.
* **Actuators**: Motors to move the neck (up/down, left/right, tilt) and sometimes move facial features (eyes, mouth) for expressions.

### Arms

Robot **arms** mimic human arms to reach, grab, and manipulate objects. They include:

* **Shoulder**: Can move in multiple directions (up/down, sideways, rotate).
* **Elbow**: Bends and straightens (up/down).
* **Wrist**: Can rotate and tilt (up/down, left/right, twist).
* **Hand**: The part that grabs or holds objects (explained in Chapter 34).

## Lower Body Structure

The lower body provides movement, support, and balance. It includes the pelvis, legs, and feet.

### Pelvis

The **pelvis** connects the torso to the legs. Moving the pelvis shifts the robot’s center of mass, which is very important for walking and balance.

### Legs

Robot **legs** have multiple joints for walking, standing, and absorbing impact. Main joints are:

* **Hip**: Moves the leg in different directions.
* **Knee**: Bends and straightens.
* **Ankle**: Moves and tilts the foot, helping balance.

### Feet

The **feet** touch the ground and keep the robot stable. They often have sensors to measure weight and balance.

## Joints and Degrees of Freedom (DoF)

A robot’s **Degrees of Freedom (DoF)** are the number of ways its joints can move. More DoF means more flexibility and human-like motion, but it also makes control harder. Humanoid robots often have 30–60 DoF in total.

## Hardware Integration

Good hardware is essential for a humanoid robot’s performance.

### Lightweight Materials

Using **light materials** like aluminum or carbon fiber reduces weight. This makes the robot faster, uses less energy, and improves balance.

### Motors and Actuators

**Servo motors** and **BLDC motors** are common. They are strong, precise, and efficient. Some robots use **series elastic actuators (SEAs)** to make movements softer and safer, similar to human muscles.

### Sensors

Humanoids use many **sensors** to know their own state and the environment:

* **Proprioceptive Sensors**: Measure joint positions, speeds, and forces. IMUs in torso/head track orientation and balance.
* **Exteroceptive Sensors**: Cameras, depth sensors, lidar, and ultrasonic sensors help the robot see and understand its surroundings.

By carefully designing the body and combining these parts, humanoid robots can perform complex movements and smart behaviors safely and efficiently.
