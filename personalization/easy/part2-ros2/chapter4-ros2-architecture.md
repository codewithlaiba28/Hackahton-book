# Chapter 4: ROS 2 Architecture and Core Concepts

## What is ROS 2?

ROS 2 is the improved version of ROS 1. It's designed to be better for real robots with:
- Real-time performance (fast and precise)
- Security (keeps robots safe)
- Better support for multiple robots
- No central control point (more reliable)

## Key Differences: ROS 1 vs ROS 2

| Feature | ROS 1 | ROS 2 |
|---------|-------|-------|
| **Central Master** | Yes (one point of failure) | No (decentralized) |
| **Communication** | Custom TCP/UDP | DDS (standard) |
| **Real-time** | Limited | Full support |
| **Security** | Basic | Built-in |
| **Multi-robot** | Difficult | Designed for it |

## Nodes and Computation Graph

**Node** = A small program that does one job

**Computation Graph** = How all nodes connect and share information

Think of it like a network where each node is a computer talking to others.

## ROS 2 Communication Methods

### 1. Topics (Publisher & Subscriber)

**What it does**: Continuous stream of messages from one node to many others

**Example**: Camera node publishes images → Multiple nodes subscribe to see the images

**Use when**: Streaming data (sensor readings, camera feeds)

### 2. Services (Client & Server)

**What it does**: Ask a question and get an answer back immediately

**Example**: Ask "What is your current position?" → Get answer back

**Use when**: Need an immediate response, not continuous data

### 3. Actions (Long-running Tasks)

**What it does**: Start a task, get progress updates, then get final result

**Example**: "Move to position X" → Updates: "30% done" → Final: "Arrived!"

**Use when**: Tasks that take time and need feedback

## Parameters

**What they are**: Settings that change how a node works

**Example**: Motor speed parameter can be adjusted without restarting

**How to use**:
- Set from command line: `ros2 param set /node_name parameter_name value`
- Get from command line: `ros2 param get /node_name parameter_name`
- Load from files during startup

## Summary of ROS 2 Features

| Feature | Purpose |
|---------|---------|
| **Nodes** | Individual programs doing specific tasks |
| **Topics** | Send/receive continuous data streams |
| **Services** | Request-response communication |
| **Actions** | Long tasks with progress feedback |
| **Parameters** | Configuration settings for nodes |

## What You'll Learn

- Understand ROS 2 architecture and improvements
- Know how nodes communicate using topics, services, and actions
- Understand when to use each communication method
- Configure nodes with parameters