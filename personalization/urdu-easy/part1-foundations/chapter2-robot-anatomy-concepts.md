# Chapter 2: Robot Anatomy & Core Concepts

## Robot Parts

Har robot ke chaar main parts hote hain:

1. **Sensors** (Eyes/Ears) - World se information gather karte hain

   * Cameras, LiDAR, touch sensors

2. **Actuators** (Muscles) - Movement aur force create karte hain

   * Electric motors, hydraulics, pneumatics

3. **End-Effectors** (Hands/Tools) - Asal task karte hain

   * Grippers, welding torches, drills

4. **Control System** (Brain) - Decisions leta hai aur sab control karta hai

   * Computer, microprocessor

## Five Robot Subsystems

1. **Perception** - Sensors ke through world ko samajhna
2. **Movement** - Move karna aur objects manipulate karna
3. **Planning & Control** - Decisions lena aur commands bhejna
4. **Communication** - Data share karna internally aur externally
5. **Power** - Sab parts ko energy provide karna

## Three Types of Robots

### Mobile Robots

* **What they do**: Ghoomte hain aur navigate karte hain
* **Types**: Wheeled, legged, drones, underwater
* **Uses**: Delivery, exploration, surveillance

### Manipulative Robots

* **What they do**: Objects ko precision ke saath grab aur move karte hain
* **Types**: Industrial arms, collaborative robots, delta robots
* **Uses**: Manufacturing, surgery, assembly

### Humanoid Robots

* **What they do**: Humans jese dekhte aur move karte hain
* **Benefits**: Human tools use karte hain, human spaces mein kaam karte hain, log trust karte hain
* **Uses**: Research, disaster response, personal assistance

## Key Sensors

| Sensor           | What It Does                                 | Uses                           |
| ---------------- | -------------------------------------------- | ------------------------------ |
| **LiDAR**        | Laser light se world map karta hai           | Navigation, obstacle detection |
| **Camera**       | Environment dekhta hai                       | Object detection, recognition  |
| **IMU**          | Motion aur direction measure karta hai       | Balance, navigation            |
| **Force/Torque** | Pushing aur pulling forces measure karta hai | Safe interaction, assembly     |

## Types of Actuators

1. **Electric Motors** - Precise, robots mein common
2. **Hydraulics** - Bohat powerful, heavy work ke liye
3. **Pneumatics** - Fast aur cheap, kam powerful

## Degrees of Freedom (DOF)

**DOF** = Kitne independent tareeqe hain jinse robot move kar sakta hai

* Simple mobile robot: 3 DOF (X, Y, rotation)
* Industrial arm: 6 DOF (har position aur angle reach kar sakta hai)
* Zyada DOF = zyada flexible, control karna mushkil

## Robot Movement (Kinematics)

**Forward Kinematics**: Joint angles pata hain → Calculate karo hand kahan hai

**Inverse Kinematics**: Hand kahan chahiye pata hai → Joint angles calculate karo jo chahiye

## What You'll Learn

* Robot parts aur unke functions identify karna
* Different types of robots classify karna
* Samajhna sensors aur actuators kaise kaam karte hain
* Degrees of Freedom ka matlab samajhna
* Robot movement basics samajhna
