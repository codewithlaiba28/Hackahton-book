# Chapter 11: Gazebo Fundamentals

## What is Gazebo?

**Gazebo** is a 3D robot simulator that lets you test robots before building them.

**You can**:
- Create virtual robots
- Test them in simulated worlds
- See what sensors would detect
- Use same code as real robots

## Why Use Gazebo?

**Benefits**:
- ✓ Test safely (no crashes)
- ✓ Save time and money
- ✓ Try many experiments
- ✓ Works with ROS 2
- ✓ Realistic physics

## Gazebo Architecture

Gazebo has two parts:

### gzserver (The Brain)
- Runs the physics simulation
- Calculates motion
- Generates sensor data
- Works in background (no display needed)

### gzclient (The Eyes)
- Shows the visual display
- Lets you interact
- Move objects, apply forces
- See what's happening

**Benefit**: Run heavy simulation on powerful computer, view on laptop

## How Gazebo Describes Things

**File formats**:

### World Files (`.world`)
- Entire simulation environment
- All robots and objects
- Lighting and physics
- Settings and configuration

### Model Files (`.sdf` or `.urdf`)
- **SDF** - Gazebo's native format (more features)
- **URDF** - ROS format (simpler, but Gazebo can use it)

## Gazebo Plugins

**What they are**: Extra code that makes Gazebo do special things

**Examples**:
- **Motor controller** - Control robot joints
- **Camera plugin** - Simulate camera sensor
- **Lidar plugin** - Simulate lidar sensor
- **Gripper plugin** - Simulate gripper

**How they work**:
- Written in C++
- Load when Gazebo starts
- Run continuously during simulation

## ROS 2 Integration

**Connection between Gazebo and ROS 2**:

### Control the Robot
- Send commands via ROS 2 topics
- Robot in Gazebo responds

### Read Sensors
- Simulated camera publishes images on ROS 2 topics
- LiDAR publishes scan data on ROS 2 topics

### State Management
- Get robot position via ROS 2 services
- Set object positions via ROS 2 services

### Same Code Everywhere
```
ROS 2 Code
    ↓
Works with Gazebo Simulation
    ↓
Works with Real Robot (same code!)
```

## Basic Workflow

1. **Create world file** - Define environment
2. **Add robot model** - URDF or SDF
3. **Launch Gazebo** - Start simulation
4. **Connect with ROS 2** - Send commands, read sensors
5. **Test your code** - Use same control code as real robot

## Key Concepts

| Term | Meaning |
|------|---------|
| **Physics** | Gravity, friction, collision |
| **Plugins** | Extra code for behavior |
| **Topics** | ROS 2 messages (sensor data) |
| **Services** | ROS 2 requests (get/set state) |
| **SDF** | Gazebo file format |
| **URDF** | ROS robot format |

## Advantages of Gazebo Simulation

✓ **Cost effective** - No expensive robot hardware needed for testing
✓ **Fast iteration** - Quick test-modify-test cycles
✓ **Safety** - No risk of damaging real robots
✓ **Repeatability** - Run exact same scenario multiple times
✓ **Scalability** - Test many robots at once
✓ **Sensor simulation** - Realistic camera and sensor data

## What You'll Learn

- What Gazebo is and why to use it
- How Gazebo architecture works
- Create and edit world files
- Add robots and objects
- Write Gazebo plugins
- Integrate with ROS 2
- Control simulated robots
- Read simulated sensor data