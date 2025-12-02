# Chapter 4: ROS 2 Architecture & Core Concepts

This chapter explains how ROS 2 really works under the hood and the main ways nodes talk to each other.

## 4.1 What Changed from ROS 1 to ROS 2?

ROS 1 was great for universities and research, but it had big problems for real products:

| Problem in ROS 1               | How ROS 2 Fixes It                                  |
|--------------------------------|-----------------------------------------------------|
| One central “master” (roscore) | No central master → no single point of failure      |
| Poor real-time performance     | Built for real-time and safety-critical systems     |
| No security                    | Encryption & authentication built in                |
| Hard to run many robots        | Designed for multi-robot fleets from day one        |
| Only worked well on Linux      | Better support for embedded devices and Windows     |

ROS 2 uses an industry standard called **DDS** (Data Distribution Service) as its communication layer. This is the same technology used in airplanes, cars, and military systems — it’s rock solid.

## 4.2 Nodes and the Computation Graph

- A **node** is just one running program that does one job well.  
  Examples: read the camera, plan a path, control wheels, speak text, etc.
- All the nodes together + all their connections form the **computation graph**.
- In ROS 2, this graph is **decentralized** — nodes find each other automatically using DDS. No central boss needed.

You can run nodes on different computers (laptop, robot brain, cloud server) and they still talk perfectly.

## 4.3 Topics — The Main Way to Stream Data (Publish/Subscribe)

**Topics** = fire-and-forget streaming channels (many-to-many).

Perfect for continuous data:
- Camera images
- LiDAR point clouds
- Robot velocity commands
- Odometry (where the robot thinks it is)

How it works:
- One or more nodes **publish** messages to a topic (e.g., `/camera/image_raw`)
- One or more nodes **subscribe** to that topic and get every new message
- Publishers and subscribers never need to know about each other

Messages have fixed types defined in `.msg` files (like structs in C).

## 4.4 Services — Request/Response (Like a Function Call)

**Services** = synchronous one-to-one communication.

Use when you need an answer right away:
- “Take a photo now”
- “What is the battery level?”
- “Calibrate the camera”

Defined in `.srv` files (request part above `---`, response below).

- **Server** offers the service
- **Client** calls it and waits for the reply (blocking)

## 4.5 Actions — For Long-Running Tasks with Feedback

**Actions** = services that can take minutes + give progress updates + can be cancelled.

Perfect for:
- “Go to the kitchen” (navigation)
- “Pick up that cup” (manipulation)
- “Scan this room” (mapping)

An action has three message streams:
1. **Goal** – what the client wants
2. **Feedback** – “I’m 40 % there, battery is fine”
3. **Result** – “Done!” or “Cancelled” or “Failed”

The client can cancel the goal anytime.

## 4.6 Parameters — Change Settings Without Recompiling

Every node can have its own parameters (think of them as knobs you can turn while the robot is running).

Examples:
- Max speed = 0.5 m/s
- Camera exposure = 100
- Debug mode = true/false

You can change them:
- From the terminal (`ros2 param set`)
- From a launch file (YAML)
- From another node
- Using the `rqt_reconfigure` GUI

No need to stop the robot or rebuild code.

## Quick Summary Table: Topics vs Services vs Actions

| Feature                | Topics                  | Services                  | Actions                              |
|------------------------|-------------------------|---------------------------|--------------------------------------|
| Communication style    | One-way streaming       | Request → Response        | Goal → Feedback → Result             |
| Many-to-many           | Yes                     | No (one-to-one)           | No (one-to-one)                      |
| Takes a long time?     | No problem              | Usually short             | Designed for long tasks              |
| Can cancel?            | No                      | No                        | Yes                                  |
| Need progress updates? | No                      | No                        | Yes                                  |
| Best for               | Sensor data, commands   | Quick queries/actions     | Navigation, manipulation, scanning   |

## What You Should Be Able to Do After This Chapter

- Explain why ROS 2 is much better than ROS 1 for real robots
- Describe what a node is and how the computation graph works without a master
- Choose the right communication method (topic / service / action) for any task
- Understand how publishers, subscribers, clients, servers, and action clients/servers work
- Use parameters to tune a robot without recompiling
