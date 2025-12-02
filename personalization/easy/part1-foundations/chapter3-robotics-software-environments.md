# Chapter 3: Robotics Software & Development Environments

## What is ROS?

**ROS (Robot Operating System)** is software that helps different parts of a robot talk to each other and work together.

Think of it like a post office for robots - different parts send messages to each other through ROS.

## ROS Core Components

**Nodes** - Small programs that do one job
- Example: One node reads the camera, another moves the wheels

**Topics** - Channels where nodes send and receive messages
- Like chat rooms where nodes talk to each other

**Services** - When one node asks another to do something and waits for a reply
- Like calling someone and waiting for their answer

**Packages** - Folders that organize code and files
- Contains everything needed for a task

## Operating Systems

**Linux** is the best operating system for robots because:
- Free and open-source
- Very stable and reliable
- Works with all robot hardware
- Big community to help

**Ubuntu** is the most popular Linux version for robotics

## Programming Languages

### Python
**When to use**: Quick testing, learning, simple tasks

**Advantages**:
- Easy to learn and write
- Fast to develop
- Great libraries for AI and vision

**Uses**: Testing ideas, high-level control, AI

### C++
**When to use**: Speed matters, real-time control

**Advantages**:
- Very fast
- Precise timing
- Direct hardware control

**Uses**: Motor control, complex algorithms, drivers

## Development Tools

**Text Editor/IDE**: VS Code (best for ROS)

**Build System**: 
- ROS 1 uses Catkin
- ROS 2 uses Colcon

**Version Control**: Git (track code changes and collaborate)

## Computing Platforms

### Workstations
- Powerful computers for development
- Use: Writing code, testing, simulation

### Edge Devices
- Small computers on the robot
- Examples: Jetson Nano, Raspberry Pi
- Use: Real-time control, fast decisions

### Cloud Systems
- Remote servers on the internet
- Use: Heavy AI processing, managing many robots, data storage

## Quick Summary

| Tool | Purpose |
|------|---------|
| **ROS** | Connect all robot parts |
| **Linux** | Operating system |
| **Python/C++** | Programming languages |
| **Git** | Save and share code |
| **Workstation** | Development computer |
| **Edge Device** | Robot's own computer |
| **Cloud** | Remote processing |

## What You'll Learn

- What ROS is and how it works
- Why Linux is best for robots
- When to use Python vs C++
- How to set up a development environment
- Different computing platforms for robots