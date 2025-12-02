# Quickstart: Robot Modeling and Simulation Environment

## What You Need

* Computer with Ubuntu 22.04 ya 20.04
* ROS 2 pehle se installed (Part 2 quickstart se)
* Internet connection
* GPU recommended (simulation ke liye)

## Step 1: Make Sure ROS 2 is Installed

Agar abhi tak install nahi kiya, pehle ROS 2 install karo (Part 2 quickstart dekho).

## Step 2: Install Gazebo (Simulator)

Gazebo main tool hai robots ko SDF format me simulate karne ke liye.

```bash
sudo apt install gazebo
```

ROS 2 integration ke liye:

```bash
sudo apt install ros-humble-gazebo-ros-pkgs
```

## Step 3: Install URDF Tools

URDF files ke saath kaam karne ke tools:

```bash
sudo apt install ros-humble-urdf-tutorial ros-humble-xacro
```

**Kya milega**:

* `check_urdf` - URDF files validate karo
* `xacro` - URDF simplify karo macros ke saath
* Sample robot files learn karne ke liye

## Step 4: Install USD Tools (Optional)

USD advanced hai - sirf agar zarurat ho.

### 4.1 Install NVIDIA Drivers

Graphics drivers update hone chahiye.

### 4.2 Install Omniverse (Optional)

Professional simulation ke liye:

1. Go to: [https://www.nvidia.com/en-us/omniverse/](https://www.nvidia.com/en-us/omniverse/)
2. Omniverse Launcher download karo
3. Code Editor ya Connectors install karo

### 4.3 USD Python Library

```bash
pip install usd-core
```

## Step 5: Set Up Your IDE

VS Code use karo in extensions ke saath:

* **XML** - URDF/SDF files edit karne ke liye
* **Python** - Kinematics scripts ke liye
* **C/C++** - Dynamics libraries ke liye
* **Markdown** - Documentation ke liye

## Step 6: Test Your Setup

### 6.1 Test URDF Tools

**URDF file validate karo**:

```bash
check_urdf my_robot.urdf
```

**RViz me visualize karo**:

```bash
ros2 launch urdf_tutorial display.launch.py model:=my_robot.urdf
```

### 6.2 Test Gazebo

**Gazebo open karo**:

```bash
gazebo
```

Simulator window dikhegi. Tum:

* Models add kar sakte ho
* Physics edit kar sakte ho
* SDF files test kar sakte ho

### 6.3 Quick Test

**Simple URDF file create karo** (`simple_robot.urdf`):

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

**Check karo**:

```bash
check_urdf simple_robot.urdf
```

**View karo**:

```bash
ros2 launch urdf_tutorial display.launch.py model:=simple_robot.urdf
```

## Done!

Tumhara robot modeling environment ready hai! Ab tum:

* ✓ URDF files create kar sakte ho
* ✓ Gazebo (SDF) me simulate kar sakte ho
* ✓ Robots visualize kar sakte ho
* ✓ Kinematics aur dynamics test kar sakte ho
