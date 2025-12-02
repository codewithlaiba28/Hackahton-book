# Quickstart: Robot Modeling and Simulation Environment

## What You Need

- Computer with Ubuntu 22.04 or 20.04
- ROS 2 already installed (from Part 2 quickstart)
- Internet connection
- GPU recommended (for simulation)

## Step 1: Make Sure ROS 2 is Installed

If you haven't done this yet, install ROS 2 first (see Part 2 quickstart).

## Step 2: Install Gazebo (Simulator)

Gazebo is the main tool for simulating robots with SDF format.

```bash
sudo apt install gazebo
```

For ROS 2 integration:
```bash
sudo apt install ros-humble-gazebo-ros-pkgs
```

## Step 3: Install URDF Tools

Tools to work with URDF files:

```bash
sudo apt install ros-humble-urdf-tutorial ros-humble-xacro
```

**What you get**:
- `check_urdf` - Validate URDF files
- `xacro` - Simplify URDF with macros
- Sample robot files to learn from

## Step 4: Install USD Tools (Optional)

USD is advanced - only if you need it.

### 4.1 Install NVIDIA Drivers
Make sure your graphics drivers are up to date.

### 4.2 Install Omniverse (Optional)
For professional simulation:
1. Go to: https://www.nvidia.com/en-us/omniverse/
2. Download Omniverse Launcher
3. Install Code Editor or Connectors

### 4.3 USD Python Library
```bash
pip install usd-core
```

## Step 5: Set Up Your IDE

Use VS Code with these extensions:
- **XML** - Edit URDF/SDF files
- **Python** - For kinematics scripts
- **C/C++** - For dynamics libraries
- **Markdown** - For documentation

## Step 6: Test Your Setup

### 6.1 Test URDF Tools

**Validate a URDF file**:
```bash
check_urdf my_robot.urdf
```

**Visualize in RViz**:
```bash
ros2 launch urdf_tutorial display.launch.py model:=my_robot.urdf
```

### 6.2 Test Gazebo

**Open Gazebo**:
```bash
gazebo
```

You should see the simulator window. You can:
- Add models
- Edit physics
- Test SDF files

### 6.3 Quick Test

**Create a simple URDF file** (`simple_robot.urdf`):
```xml
<robot name="test_robot">
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.1 0.1 0.1"/>
      </geometry>
    </visual>
  </link>
</robot>
```

**Check it**:
```bash
check_urdf simple_robot.urdf
```

**View it**:
```bash
ros2 launch urdf_tutorial display.launch.py model:=simple_robot.urdf
```

## Done!

Your robot modeling environment is ready! You can now:
- ✓ Create URDF files
- ✓ Simulate with Gazebo (SDF)
- ✓ Visualize robots
- ✓ Test kinematics and dynamics