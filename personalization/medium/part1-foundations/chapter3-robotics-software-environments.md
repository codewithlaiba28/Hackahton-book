# Chapter 3: Robotics Software & Development Environments

This chapter covers ROS (the most widely used robotics framework), the tools around it, and the complete setup you need to actually build and run robot software.

## 1. The Robot Operating System (ROS)

### 1.1 What Exactly is ROS?

ROS is **not** a real operating system like Windows or Linux.  
It is a **middleware** — a collection of software tools, libraries, and rules that make it much easier to write robot programs.

Think of ROS as the “glue” that lets different parts of a robot talk to each other smoothly:
- Camera driver ↔ Object detection ↔ Planner ↔ Motor controller

Key benefits:
- Huge code reuse (thousands of ready-made packages)
- Works the same way on small hobby robots and big industrial systems
- Strong global community

### 1.2 ROS 1 vs ROS 2 (Quick Comparison)

| Feature                | ROS 1 (older)               | ROS 2 (current & future)             |
|------------------------|-----------------------------|---------------------------------------|
| Real-time performance  | Limited                     | Excellent (deterministic)             |
| Multi-robot systems    | Difficult                   | Built-in support                      |
| Security               | None                        | Encryption & authentication           |
| Works without internet | Yes                         | Yes (fully decentralized)             |
| Best for               | Research, universities      | Industry, real products               |

Today most new projects start with **ROS 2**.

### 1.3 Core Concepts You Must Know

| Concept     | What it is                                   | Simple Analogy                         |
|-------------|----------------------------------------------|----------------------------------------|
| **Node**    | A single running program (executable)        | One worker doing one specific job      |
| **Topic**   | A named channel for streaming data           | A radio station — anyone can listen    |
| **Message** | The actual data sent on a topic               | The song being played on that station  |
| **Service** | Request → Response (like a phone call)       | You call a friend and wait for answer  |
| **Package** | Folder that contains nodes, messages, etc.   | A toolbox with related tools           |

Example in real life:
- One node publishes camera images on topic `/camera/image_raw`
- Another node subscribes to that topic and detects objects
- A third node publishes movement commands on `/cmd_vel`

### 1.4 Important Tools in the ROS Ecosystem

| Tool       | What it does                                      | Why you’ll use it daily             |
|------------|---------------------------------------------------|-------------------------------------|
| **RViz**   | 3D visualization of robot + sensors + plans      | See what the robot is “seeing”      |
| **rqt**    | GUI dashboards and plots                          | Monitor numbers in real time        |
| **rosbag** | Record and replay sensor data                     | Debug without the real robot        |
| **Gazebo** | Full physics simulator (works perfectly with ROS)| Test everything safely in software  |
| **MoveIt** | Motion planning for arms                          | Make a robot arm move without crashing |

## 2. Operating Systems & Programming Languages

### 2.1 Why Almost Everyone Uses Linux (especially Ubuntu)

- Completely free and open-source
- Extremely stable — robots often run for weeks without reboot
- All ROS versions are officially built and tested on Ubuntu
- Powerful terminal and scripting tools

**Recommended**: Ubuntu 22.04 LTS (for ROS 2 Humble) or Ubuntu 24.04 (for newer ROS versions)

### 2.2 Python vs C++ in Robotics

| Language | When to use it                                   | Real examples in ROS                     |
|----------|--------------------------------------------------|------------------------------------------|
| **Python**| Fast prototyping, high-level logic, AI, scripting| Behavior code, state machines, ML models |
| **C++**   | Performance-critical code, real-time control     | Sensor drivers, SLAM, motion control     |

Most teams use **both**:
- Python for the “brain” and quick experiments
- C++ for speed-sensitive parts

## 3. Setting Up Your Robotics Development Environment

### 3.1 Must-Have Tools

| Tool             | Purpose                                      |
|------------------|----------------------------------------------|
| VS Code + extensions (Python, C++, ROS) | Best code editor for ROS            |
| Git              | Version control (mandatory for teams)        |
| colcon (ROS 2) or catkin (ROS 1) | Build system — compiles your code     |
| Terminal (bash/zsh) | You’ll live here most of the time         |

### 3.2 Basic Git Workflow (You Will Use This Every Day)

1. `git clone` the project
2. Create a new branch: `git checkout -b feature/my-cool-thing`
3. Write code → test → commit often
4. `git push` your branch
5. Open a Pull Request → someone reviews → merge

### 3.3 Typical Folder Structure (ROS 2)

```
~/ros2_ws/
   └── src/
       └── my_robot_package/
           ├── package.xml
           ├── CMakeLists.txt
           ├── src/          (C++ code)
           └── my_robot/     (Python code)
```

Build with: `colcon build --symlink-install`

## 4. Where the Computation Actually Happens

| Platform       | Hardware example             | What it’s best for                              | Latency   | Internet needed? |
|----------------|------------------------------|-------------------------------------------------|-----------|------------------|
| **Workstation**| Powerful laptop / desktop    | Development, simulation, training big AI models | Very low  | No               |
| **Edge Device**| NVIDIA Jetson, Raspberry Pi  | Real-time perception & control on the robot     | Lowest    | Usually no       |
| **Cloud**      | AWS, Google Cloud, Azure     | Fleet management, heavy training, data storage  | High      | Yes              |

Modern robots usually combine all three:
- Edge → immediate reactions
- Workstation → development & testing
- Cloud → fleet updates & long-term learning

## 5. Learning Outcomes

After this chapter you should be able to:

- Explain what ROS actually is and name its core concepts (nodes, topics, services, packages)
- Tell the difference between ROS 1 and ROS 2 and why ROS 2 is preferred now
- List the most important ROS tools (RViz, Gazebo, MoveIt, rosbag) and what they do
- Understand why Linux + Ubuntu is the standard, and when to use Python vs C++
- Set up a basic ROS 2 workspace and build a package
- Explain the three main computing platforms (workstation, edge, cloud) and their roles
