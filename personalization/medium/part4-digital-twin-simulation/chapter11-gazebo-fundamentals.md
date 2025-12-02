---
sidebar_label: 'Chapter 11: Gazebo Fundamentals'
---

# Chapter 11: Gazebo Fundamentals (Medium Level)

Welcome to your journey into robot simulation! In this chapter, you’ll get a solid understanding of **Gazebo**, the most popular open-source 3D simulator used in modern robotics, especially with ROS 2.

Gazebo lets you build and test robots in realistic virtual worlds — long before you spend money on real hardware or risk breaking anything.

## Why Gazebo Matters in Robotics

Gazebo is much more than just pretty graphics. It combines:

- A **powerful physics engine** (you can choose ODE, Bullet, Simbody, or DART)
- Accurate **sensor simulation** (cameras, LiDAR, depth cameras, IMUs, contact sensors, etc.)
- Direct and deep integration with **ROS 2**

Thanks to these features, the same code you write for controlling or perceiving the world in simulation usually works on the real robot with little or no changes.

## How Gazebo Works: Client-Server Architecture

Gazebo is split into two main parts:

| Component       | Name          | What it does                                   | Can run headless? |
|-----------------|---------------|--------------------------------------------------|-------------------|
| Simulation core | `gzserver`    | Runs physics, updates sensors, does all calculations | Yes             |
| GUI             | `gzclient`    | Shows the 3D view and lets you interact (move objects, apply forces, etc.) | No              |

This separation is very useful: you can run a heavy simulation on a powerful computer (or in the cloud) and just stream the visualization to your laptop.

## Describing the World: SDF and URDF

Everything you see in Gazebo is defined using files:

1. **World file (.world)**  
   An SDF file that describes the whole scene: ground, sky, lighting, physics settings, and which models to load.

2. **Model files**  
   - **SDF** → Native Gazebo format. Very flexible, can include plugins, sensors, and full robot descriptions.  
   - **URDF** → Comes from ROS. Great for kinematics and visuals, but needs extra Gazebo tags (inside `<gazebo>` tags) for inertia, friction, plugins, etc.

Most modern ROS 2 robots use **xacro** (a URDF macro language) that gets converted to proper SDF at launch time.

## Plugins: The Magic Behind Robot Behavior

Plugins are small C++ libraries that Gazebo loads dynamically. They are what make a robot actually move and sense the world.

Common plugin types:
- **Model plugins** – attach to a robot (e.g., differential drive, arm controller)
- **Sensor plugins** – generate realistic noise and data (camera, LiDAR, IMU)
- **World plugins** – control lighting, weather, or global events
- **System plugins** – run when Gazebo starts (often used by ROS 2 bridge)

You’ll use many ready-made plugins from `gazebo_ros_pkgs`, but you can also write your own when needed.

## ROS 2 + Gazebo = Best Friends

The bridge between ROS 2 and Gazebo is provided by the `gazebo_ros2_control` and `ros_gz` packages (formerly `gazebo_ros_pkgs`).

What this gives you:
- Spawn robots into Gazebo directly from a ROS 2 launch file
- Publish real sensor data on standard ROS 2 topics (`/camera/image_raw`, `/scan`, `/imu`, etc.)
- Control joints using `joint_trajectory_controller` or `diff_drive_controller` just like on real hardware
- Pause, unpause, and reset the simulation with ROS 2 services

Because the topics, messages, and controllers are identical in simulation and reality, you achieve true **digital twin** behavior — the holy grail of modern robotics development.

### Quick Summary Table

| Feature                | What it means for you                              |
|------------------------|-----------------------------------------------------|
| Physics engines        | Realistic collisions, gravity, friction            |
| Sensor noise & updates | Test perception pipelines safely                   |
| Client-server split    | Run heavy sim on server, light GUI on laptop       |
| SDF / URDF + xacro     | One robot description works everywhere             |
| Plugins                | Make robots move and sense                         |
| ROS 2 integration      | Same code in sim ↔ real robot                      |

You’re now ready to install Gazebo, launch your first world, and spawn a robot — the next chapters will guide you step by step!