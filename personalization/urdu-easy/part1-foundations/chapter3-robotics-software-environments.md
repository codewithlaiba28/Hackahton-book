# Chapter 3: Robotics Software & Development Environments

## What is ROS?

**ROS (Robot Operating System)** software hai jo robot ke different parts ko ek dusre se baat karne aur sath kaam karne mein madad karta hai.

Isay aise samjho jaise robots ke liye post office - different parts ROS ke through messages bhejte aur receive karte hain.

## ROS Core Components

**Nodes** - Chote programs jo ek kaam karte hain

* Example: Ek node camera read karta hai, doosra wheels move karta hai

**Topics** - Channels jahan nodes messages bhejte aur receive karte hain

* Jaise chat rooms jahan nodes ek dusre se baat karte hain

**Services** - Jab ek node doosre se kuch karne ko kehta hai aur reply ka wait karta hai

* Jaise kisi ko call karke unke answer ka wait karna

**Packages** - Folders jo code aur files organize karte hain

* Task ke liye sab kuch contain karte hain

## Operating Systems

**Linux** robots ke liye best OS hai kyunki:

* Free aur open-source
* Bohat stable aur reliable
* Sab robot hardware ke saath kaam karta hai
* Badi community madad ke liye

**Ubuntu** robotics ke liye sabse popular Linux version hai

## Programming Languages

### Python

**When to use**: Quick testing, learning, simple tasks

**Advantages**:

* Easy to learn aur write
* Fast development
* AI aur vision ke liye great libraries

**Uses**: Ideas test karna, high-level control, AI

### C++

**When to use**: Speed important hai, real-time control

**Advantages**:

* Bohat fast
* Precise timing
* Direct hardware control

**Uses**: Motor control, complex algorithms, drivers

## Development Tools

**Text Editor/IDE**: VS Code (ROS ke liye best)

**Build System**:

* ROS 1 uses Catkin
* ROS 2 uses Colcon

**Version Control**: Git (code changes track karne aur collaborate karne ke liye)

## Computing Platforms

### Workstations

* Powerful computers development ke liye
* Use: Code likhna, testing, simulation

### Edge Devices

* Chote computers robot par
* Examples: Jetson Nano, Raspberry Pi
* Use: Real-time control, fast decisions

### Cloud Systems

* Internet par remote servers
* Use: Heavy AI processing, multiple robots manage karna, data store karna

## Quick Summary

| Tool            | Purpose                       |
| --------------- | ----------------------------- |
| **ROS**         | Sab robot parts connect karna |
| **Linux**       | Operating system              |
| **Python/C++**  | Programming languages         |
| **Git**         | Code save aur share karna     |
| **Workstation** | Development computer          |
| **Edge Device** | Robot ka apna computer        |
| **Cloud**       | Remote processing             |

## What You'll Learn

* ROS kya hai aur kaise kaam karta hai
* Linux robots ke liye best kyun hai
* Python aur C++ kab use karna hai
* Development environment kaise set up karein
* Robots ke liye different computing platforms
