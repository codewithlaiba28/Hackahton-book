# Chapter 11: Gazebo Fundamentals

## What is Gazebo?

**Gazebo** ek 3D robot simulator hai jo aapko robots test karne deta hai before building.

**You can**:

* Virtual robots create karo
* Simulated worlds mein test karo
* Dekho sensors kya detect karte
* Same code use karo jo real robots ke liye hai

## Why Use Gazebo?

**Benefits**:

* ✓ Test safely (no crashes)
* ✓ Time aur paisa save karo
* ✓ Kai experiments try karo
* ✓ ROS 2 ke saath kaam karta hai
* ✓ Realistic physics

## Gazebo Architecture

Gazebo ke do parts hain:

### gzserver (The Brain)

* Physics simulation run karta hai
* Motion calculate karta hai
* Sensor data generate karta hai
* Background mein kaam karta hai (display ki zarurat nahi)

### gzclient (The Eyes)

* Visual display show karta hai
* Interact karne deta hai
* Objects move karo, forces apply karo
* Dekho kya ho raha hai

**Benefit**: Heavy simulation powerful computer pe run karo, view laptop pe

## How Gazebo Describes Things

**File formats**:

### World Files (`.world`)

* Poora simulation environment
* Sab robots aur objects
* Lighting aur physics
* Settings aur configuration

### Model Files (`.sdf` or `.urdf`)

* **SDF** - Gazebo ka native format (more features)
* **URDF** - ROS format (simpler, lekin Gazebo use kar sakta hai)

## Gazebo Plugins

**What they are**: Extra code jo Gazebo ko special cheezen karne deta hai

**Examples**:

* **Motor controller** - Robot joints control karo
* **Camera plugin** - Camera sensor simulate karo
* **Lidar plugin** - Lidar sensor simulate karo
* **Gripper plugin** - Gripper simulate karo

**How they work**:

* C++ mein likha jata hai
* Gazebo start hone par load hota hai
* Simulation ke dauran continuously run karta hai

## ROS 2 Integration

**Connection between Gazebo and ROS 2**:

### Control the Robot

* ROS 2 topics ke through commands bhejo
* Robot Gazebo mein respond karta hai

### Read Sensors

* Simulated camera ROS 2 topics pe images publish karta hai
* LiDAR scan data ROS 2 topics pe publish karta hai

### State Management

* Robot position ROS 2 services ke through get karo
* Object positions ROS 2 services ke through set karo

### Same Code Everywhere

```
ROS 2 Code
    ↓
Works with Gazebo Simulation
    ↓
Works with Real Robot (same code!)
```

## Basic Workflow

1. **Create world file** - Environment define karo
2. **Add robot model** - URDF ya SDF
3. **Launch Gazebo** - Simulation start karo
4. **Connect with ROS 2** - Commands bhejo, sensors read karo
5. **Test your code** - Same control code use karo jo real robot ke liye hai

## Key Concepts

| Term         | Meaning                        |
| ------------ | ------------------------------ |
| **Physics**  | Gravity, friction, collision   |
| **Plugins**  | Behavior ke liye extra code    |
| **Topics**   | ROS 2 messages (sensor data)   |
| **Services** | ROS 2 requests (get/set state) |
| **SDF**      | Gazebo file format             |
| **URDF**     | ROS robot format               |

## Advantages of Gazebo Simulation

✓ **Cost effective** - Expensive robot hardware ki zarurat nahi
✓ **Fast iteration** - Quick test-modify-test cycles
✓ **Safety** - Real robots damage ka risk nahi
✓ **Repeatability** - Same scenario multiple times run karo
✓ **Scalability** - Kai robots ek saath test karo
✓ **Sensor simulation** - Realistic camera aur sensor data

## What You'll Learn

* Gazebo kya hai aur kyun use karna hai
* Gazebo architecture kaam kaise karta hai
* World files create aur edit karna
* Robots aur objects add karna
* Gazebo plugins likhna
* ROS 2 ke saath integrate karna
* Simulated robots control karna
* Simulated sensor data read karna
