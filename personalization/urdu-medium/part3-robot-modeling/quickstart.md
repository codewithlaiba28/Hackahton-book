# Quickstart: Robot Modeling and Simulation Environment

## Kya Chahiye

* Ubuntu 22.04 ya 20.04 wali computer
* ROS 2 already installed (Part 2 quickstart se)
* Internet connection
* GPU recommended (simulation ke liye)

## Step 1: Ensure ROS 2 Installed

Agar pehle install nahi kiya, to Part 2 quickstart follow karein aur ROS 2 install karein.

## Step 2: Gazebo Install Karein

Gazebo = main simulator for SDF robots

```bash
sudo apt install gazebo
```

ROS 2 integration ke liye:

```bash
sudo apt install ros-humble-gazebo-ros-pkgs
```

## Step 3: URDF Tools Install Karein

URDF ke saath kaam karne ke tools:

```bash
sudo apt install ros-humble-urdf-tutorial ros-humble-xacro
```

**Kya milega**:

* `check_urdf` → URDF files validate karein
* `xacro` → URDF simplify karein macros se
* Sample robot files → seekhne ke liye

## Step 4: USD Tools (Optional)

USD advanced hai — sirf jab zarurat ho.

### 4.1 NVIDIA Drivers Update

Graphics drivers updated hoon.

### 4.2 Omniverse Install (Optional)

Professional simulation ke liye:

1. [https://www.nvidia.com/en-us/omniverse/](https://www.nvidia.com/en-us/omniverse/) pe jao
2. Omniverse Launcher download karo
3. Install Code Editor ya Connectors

### 4.3 USD Python Library

```bash
pip install usd-core
```

## Step 5: IDE Setup

VS Code use karein, extensions:

* **XML** → URDF/SDF edit
* **Python** → Kinematics scripts
* **C/C++** → Dynamics libraries
* **Markdown** → Documentation

## Step 6: Setup Test Karein

### 6.1 URDF Tools Test

**URDF validate karein**:

```bash
check_urdf my_robot.urdf
```

**RViz me visualize karein**:

```bash
ros2 launch urdf_tutorial display.launch.py model:=my_robot.urdf
```

### 6.2 Gazebo Test

**Gazebo open karein**:

```bash
gazebo
```

Simulator window aayega — aap:

* Models add kar sakte hain
* Physics edit kar sakte hain
* SDF files test kar sakte hain

### 6.3 Quick Test

**Simple URDF create karein** (`simple_robot.urdf`):

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

**Check karein**:

```bash
check_urdf simple_robot.urdf
```

**View karein**:

```bash
ros2 launch urdf_tutorial display.launch.py model:=simple_robot.urdf
```

## Done!

Ab aap:

* ✓ URDF files create kar sakte ho
* ✓ Gazebo me SDF simulation run kar sakte ho
* ✓ Robots visualize kar sakte ho
* ✓ Kinematics & dynamics test kar sakte ho
