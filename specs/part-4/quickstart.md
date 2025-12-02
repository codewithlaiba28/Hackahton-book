# Quickstart: Digital Twin Simulation

**Purpose**: To provide a high-level overview of the steps required to get started with digital twin simulation for robotics.

## 1. Install Core Tools

Before you begin, you will need to install the primary software packages for simulation and visualization.

- **ROS 2**: The middleware for robot communication. Follow the official ROS 2 installation guide.
- **Gazebo**: The physics-based simulation environment. It is often installed as part of the `ros-dev-tools`.
- **Unity**: The high-fidelity rendering engine. Download and install Unity Hub and the latest stable version of the Unity Editor.

```bash
# Example for ROS 2 and Gazebo on Ubuntu
sudo apt update
sudo apt install ros-humble-desktop
sudo apt install ros-humble-gazebo-ros-pkgs
```

## 2. Obtain or Create a Robot Model

You need a robot description file, typically in URDF or SDF format. You can either use a pre-existing model for a common robot (e.g., TurtleBot, UR5) or create your own.

- **Xacro** is often used to simplify the creation of complex URDF files.

## 3. Create a Simulation World

Define the environment your robot will operate in using an SDF world file. This file can contain static objects (walls, tables), light sources, and global physics properties.

## 4. Launch the Simulation

Use a ROS 2 launch file to start Gazebo, spawn your robot model into the world, and launch any necessary control nodes.

```bash
# Example launch command
ros2 launch your_package_name simulation.launch.py
```

## 5. Visualize in Unity (Optional)

For high-fidelity graphics, you can connect your ROS 2 simulation to Unity.

- Use the [ROS TCP Connector](https://github.com/Unity-Technologies/ROS-TCP-Connector) package in Unity to establish communication with ROS 2.
- Create a Unity scene that mirrors your simulation world.
- Subscribe to ROS 2 topics (e.g., `/tf`, `/joint_states`) to animate the robot in Unity in real-time.

This quickstart provides a simplified overview. Each step involves significant detail, which is covered in the subsequent chapters of this part.
