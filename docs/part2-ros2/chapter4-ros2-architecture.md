# Chapter 4: ROS 2 Architecture and Core Concepts

## 4.1 Introduction to ROS 2

ROS 2 (Robot Operating System 2) represents a significant evolution from its predecessor, ROS 1, designed to address the growing demands of modern robotics applications. While ROS 1 provided a robust framework for roboticists, it faced limitations in areas such as real-time performance, security, and support for distributed systems. ROS 2 was re-architected from the ground up to overcome these challenges, embracing a decentralized and more flexible communication model.

### Evolution from ROS 1
ROS 1, released in 2007, was instrumental in popularizing robotics research and development by offering a standardized set of tools and libraries. However, its client-server architecture, reliance on a central master node, and lack of native support for quality of service (QoS) or security proved challenging for deployment in production-grade and mission-critical robotic systems.

ROS 2's development began with a focus on addressing these pain points. Key design goals included:
*   **Real-time Capabilities**: Supporting applications with strict timing requirements.
*   **Security**: Incorporating robust security features by default.
*   **Distributed Systems**: Enabling communication across diverse network environments and heterogeneous computing platforms.
*   **Modularity**: Promoting highly modular and reusable software components.
*   **Multi-robot Support**: Facilitating coordination among multiple robots.

### Overview of ROS 2's Architecture
At its core, ROS 2 leverages a **decentralized** architecture, moving away from the single point of failure inherent in ROS 1's master node. This decentralization is primarily enabled by its reliance on the **Data Distribution Service (DDS)** standard for all inter-process communication.

The ROS 2 architecture can be visualized as a collection of independent processes (nodes) communicating over a middleware layer provided by DDS. Key characteristics include:
*   **No Central Master**: Nodes discover each other dynamically via DDS.
*   **Vendor Agnostic**: DDS is an open standard, allowing for different DDS implementations (e.g., Fast RTPS, Cyclone DDS) to be used interchangeably.
*   **Advanced Features**: DDS inherently provides Quality of Service (QoS) policies, which allow developers fine-grained control over communication reliability, latency, and throughput.

## 4.2 Nodes and the Computation Graph

In ROS 2, a **node** is an executable process that performs computation. Nodes are the fundamental building blocks of any ROS 2 system, designed to be modular and single-purpose. For instance, in a robotic system, there might be a node for reading sensor data, another for processing images, and yet another for controlling robot motors.

### What are Nodes?
Each node typically encapsulates a specific function or responsibility. This modularity allows developers to:
*   **Reuse Components**: Individual nodes can be easily reused in different robotic applications.
*   **Simplify Development**: Complex systems can be broken down into smaller, manageable parts.
*   **Facilitate Debugging**: Issues can often be isolated to specific nodes.
*   **Distribute Workload**: Nodes can run on different machines or even different operating systems, communicating seamlessly.

### The Concept of a Computation Graph
The **computation graph** in ROS 2 is a logical representation of the connections and data flow between nodes. Unlike ROS 1, where the graph was managed by a central `roscore` process, ROS 2's computation graph is a distributed concept, formed dynamically as nodes discover each other and establish communication pathways via DDS.

Key elements of the computation graph include:
*   **Nodes**: The processes performing computation.
*   **Topics**: Named buses over which nodes exchange data asynchronously (publish/subscribe).
*   **Services**: Request/reply mechanisms for synchronous communication between nodes.
*   **Actions**: For long-running, goal-oriented tasks with feedback.

### Node Management and Identification
ROS 2 nodes are often managed using `ros2 run` (for single nodes) or `ros2 launch` (for multiple nodes with complex configurations). Each node has a unique **node name** within its namespace, allowing for identification and introspection.

Nodes can also define parameters (discussed in a later section) that modify their behavior without requiring code changes. This allows for flexible configuration and tuning of robotic systems.

### Diagram: ROS 2 Computation Graph
<!-- TODO: Add a diagram illustrating the ROS 2 Computation Graph here. Place image file (e.g., .svg) in `img/chapter4/` and update this link. Refer to specs/001-ros2-architecture/contracts/diagram-standards.md for guidelines. Example: ![ROS 2 Computation Graph](../img/chapter4/ros2_computation_graph.svg) -->
![Placeholder for ROS 2 Computation Graph](data:image/jpeg;base64,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)



## 4.3 Communication Patterns: Topics (Publishers & Subscribers)

**Topics** are the primary mechanism for asynchronous, many-to-many communication in ROS 2. They represent a stream of messages that nodes can publish to or subscribe from. This publish/subscribe (pub/sub) pattern is highly decoupled, meaning publishers and subscribers don't need to know about each other's existence directly.

### Message Types
Data exchanged over topics are structured messages, defined using `.msg` files. These files specify the data fields and their types (e.g., `int32`, `float64`, `string`, `bool`). For example, a `Twist` message type, commonly used for robot velocities, might contain linear and angular components.

### Creating Publishers and Subscribers (Conceptual)
*   **Publisher**: A node that sends messages to a topic.
    *   Initializes a publisher object for a specific topic and message type.
    *   Periodically creates message instances, populates them with data, and publishes them.
*   **Subscriber**: A node that receives messages from a topic.
    *   Initializes a subscriber object for a specific topic and message type.
    *   Registers a callback function that is executed whenever a new message arrives on the subscribed topic.

This decoupled nature allows for flexible system design where components can be added or removed without impacting the entire system.

## 4.4 Communication Patterns: Services (Client-Server)

While topics are excellent for continuous streams of data, **services** provide a mechanism for synchronous, one-to-one communication, similar to a traditional function call. A client sends a request to a service, and the service processes that request and sends back a response.

### Request-Response Mechanism
Services are used for operations that require a direct response, such as:
*   Triggering an action (e.g., "Take a picture").
*   Querying a state (e.g., "What is the robot's current pose?").
*   Performing a computation (e.g., "Add two numbers").

### Service Definition
Services are defined using `.srv` files, which specify both the request and response message structures. A `---` separator in the `.srv` file distinguishes the request fields from the response fields.

### Creating Service Clients and Servers (Conceptual)
*   **Service Server**: A node that offers a service.
    *   Initializes a service server object, specifying the service type and a callback function.
    *   The callback function is invoked when a client sends a request, processes the request, and returns a response.
*   **Service Client**: A node that requests a service.
    *   Initializes a service client object for a specific service type.
    *   Creates a request message, sends it to the service server, and waits for the response.

Services are blocking, meaning the client typically waits until the server provides a response.

## 4.5 Communication Patterns: Actions (Goal-Oriented Tasks)

**Actions** are a higher-level communication primitive in ROS 2 designed for long-running, goal-oriented tasks that may take a significant amount of time to complete. Unlike services, actions provide continuous feedback about the progress of the goal and allow for preemption (canceling a goal before it completes).

### Goal, Feedback, Result
An action interaction involves three parts:
*   **Goal**: The request sent by the client to the action server, defining the task to be performed (e.g., "Navigate to a specific waypoint").
*   **Feedback**: Intermediate updates sent by the action server to the client, indicating the progress towards the goal (e.g., "Robot is 50% to waypoint").
*   **Result**: The final outcome of the action, sent by the action server once the goal is completed or aborted (e.g., "Waypoint reached successfully").

### Creating Action Clients and Servers (Conceptual)
*   **Action Server**: A node that offers an action.
    *   Initializes an action server, specifying the action type and callback functions for handling new goals, goal cancellation, and executing the goal.
    *   Provides periodic feedback to the client during goal execution.
    *   Sends a final result upon completion or preemption.
*   **Action Client**: A node that requests an action.
    *   Initializes an action client for a specific action type.
    *   Sends a goal to the action server.
    *   Receives and processes feedback messages.
    *   Receives the final result (or cancellation notification).

Actions are non-blocking from the client's perspective, allowing the client to continue other tasks while waiting for the action to complete.

## 4.6 Parameters

**Parameters** in ROS 2 provide a dynamic configuration mechanism for nodes. They allow you to modify a node's behavior at runtime without needing to recompile or restart the node. This is particularly useful for tuning algorithms (e.g., PID gains for motor control), changing operating modes, or providing configuration values.

### Dynamic Configuration of Nodes
Each ROS 2 node can declare its own set of parameters, specifying their names, types (e.g., `bool`, `int`, `double`, `string`), and default values.

### Setting and Getting Parameters
Parameters can be:
*   **Set** from the command line (e.g., `ros2 param set /my_node my_param_name new_value`).
*   **Get** from the command line (e.g., `ros2 param get /my_node my_param_name`).
*   **Accessed** programmatically within the node itself.
*   **Loaded** from YAML files during `ros2 launch`.

Parameters enable greater flexibility and reduce the need for hardcoding configuration values, making ROS 2 applications more adaptable to different environments and use cases.

### Diagram: ROS 2 Communication Patterns Overview
<!-- TODO: Add a diagram illustrating ROS 2 communication patterns (Topics, Services, Actions) here. Place image file (e.g., .svg) in `img/chapter4/` and update this link. Refer to specs/001-ros2-architecture/contracts/diagram-standards.md for guidelines. Example: ![ROS 2 Communication Patterns](../img/chapter4/ros2_communication_patterns.svg) -->
![Placeholder for ROS 2 Communication Patterns Diagram](https://docs.ros.org/en/jazzy/_images/Action-SingleActionClient.gif)


