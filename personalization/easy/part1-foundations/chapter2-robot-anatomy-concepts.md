# Chapter 2: Robot Anatomy & Core Concepts

## Robot Parts

Every robot has four main parts:

1. **Sensors** (Eyes/Ears) - Gather information from the world
   - Cameras, LiDAR, touch sensors

2. **Actuators** (Muscles) - Create movement and force
   - Electric motors, hydraulics, pneumatics

3. **End-Effectors** (Hands/Tools) - Do the actual task
   - Grippers, welding torches, drills

4. **Control System** (Brain) - Makes decisions and controls everything
   - Computer, microprocessor

## Five Robot Subsystems

1. **Perception** - Understanding the world through sensors
2. **Movement** - Moving and manipulating objects
3. **Planning & Control** - Making decisions and sending commands
4. **Communication** - Sharing data internally and externally
5. **Power** - Providing energy to all parts

## Three Types of Robots

### Mobile Robots
- **What they do**: Move around and navigate
- **Types**: Wheeled, legged, drones, underwater
- **Uses**: Delivery, exploration, surveillance

### Manipulative Robots
- **What they do**: Grab and move objects with precision
- **Types**: Industrial arms, collaborative robots, delta robots
- **Uses**: Manufacturing, surgery, assembly

### Humanoid Robots
- **What they do**: Look and move like humans
- **Benefits**: Use human tools, work in human spaces, people trust them
- **Uses**: Research, disaster response, personal assistance

## Key Sensors

| Sensor | What It Does | Uses |
|--------|-------------|------|
| **LiDAR** | Maps the world with laser light | Navigation, obstacle detection |
| **Camera** | Sees the environment | Object detection, recognition |
| **IMU** | Measures motion and direction | Balance, navigation |
| **Force/Torque** | Measures pushing and pulling forces | Safe interaction, assembly |

## Types of Actuators

1. **Electric Motors** - Precise, common in robots
2. **Hydraulics** - Very powerful, for heavy work
3. **Pneumatics** - Fast and cheap, less powerful

## Degrees of Freedom (DOF)

**DOF** = Number of independent ways a robot can move

- Simple mobile robot: 3 DOF (X, Y, rotation)
- Industrial arm: 6 DOF (reach any position and angle)
- More DOF = more flexible, harder to control

## Robot Movement (Kinematics)

**Forward Kinematics**: You know the joint angles → Calculate where the hand is

**Inverse Kinematics**: You know where you want the hand → Calculate the joint angles needed

## What You'll Learn

- Identify robot parts and their functions
- Classify different types of robots
- Understand how sensors and actuators work
- Know what Degrees of Freedom means
- Understand robot movement basics