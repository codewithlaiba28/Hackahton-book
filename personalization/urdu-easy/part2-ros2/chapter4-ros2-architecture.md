# Chapter 4: ROS 2 Architecture and Core Concepts

## What is ROS 2?

ROS 2 ROS 1 ka improved version hai. Ye asal robots ke liye behtar banaya gaya hai with:

* Real-time performance (fast aur precise)
* Security (robots ko safe rakhta hai)
* Multiple robots ka better support
* No central control point (zyada reliable)

## Key Differences: ROS 1 vs ROS 2

| Feature            | ROS 1                     | ROS 2              |
| ------------------ | ------------------------- | ------------------ |
| **Central Master** | Yes (ek point of failure) | No (decentralized) |
| **Communication**  | Custom TCP/UDP            | DDS (standard)     |
| **Real-time**      | Limited                   | Full support       |
| **Security**       | Basic                     | Built-in           |
| **Multi-robot**    | Difficult                 | Designed for it    |

## Nodes and Computation Graph

**Node** = Chota program jo ek kaam karta hai

**Computation Graph** = Kaise sab nodes connect hote aur information share karte hain

Isay aise samjho jaise network jahan har node ek computer hai jo doosron se baat karta hai.

## ROS 2 Communication Methods

### 1. Topics (Publisher & Subscriber)

**What it does**: Ek node se kai nodes tak continuous messages stream karna

**Example**: Camera node images publish karta hai → Multiple nodes subscribe karke images dekhte hain

**Use when**: Streaming data (sensor readings, camera feeds)

### 2. Services (Client & Server)

**What it does**: Sawal poochna aur turant jawab lena

**Example**: "Aapka current position kya hai?" → Answer milta hai

**Use when**: Immediate response chahiye, continuous data nahi

### 3. Actions (Long-running Tasks)

**What it does**: Task start karo, progress updates lo, phir final result lo

**Example**: "Move to position X" → Updates: "30% done" → Final: "Arrived!"

**Use when**: Tasks jo time lete hain aur feedback chahiye

## Parameters

**What they are**: Settings jo node kaam karne ka tareeqa change karte hain

**Example**: Motor speed parameter adjust kar sakte ho bina restart kiye

**How to use**:

* Command line se set karo: `ros2 param set /node_name parameter_name value`
* Command line se get karo: `ros2 param get /node_name parameter_name`
* Startup ke waqt files se load karo

## Summary of ROS 2 Features

| Feature        | Purpose                                      |
| -------------- | -------------------------------------------- |
| **Nodes**      | Individual programs specific tasks ke liye   |
| **Topics**     | Continuous data streams bhejna/receive karna |
| **Services**   | Request-response communication               |
| **Actions**    | Long tasks with progress feedback            |
| **Parameters** | Nodes ke liye configuration settings         |

## What You'll Learn

* ROS 2 architecture aur improvements samajhna
* Nodes kaise communicate karte hain using topics, services, aur actions
* Kab kaunsa communication method use karna hai samajhna
* Nodes ko parameters ke saath configure karna
