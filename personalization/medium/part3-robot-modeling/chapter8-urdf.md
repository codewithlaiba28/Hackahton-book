# Chapter 8: Unified Robot Description Format (URDF)  

## 8.1 What Is URDF and Why Do You Need It?

**URDF** = one XML file that acts as the complete “blueprint” of your robot.

It tells the software:
- How many rigid parts (links) the robot has
- How those parts are connected (joints)
- Shape, color, and weight of each part
- Simple shapes to use for collision checking

Every ROS tool (RViz, Gazebo, MoveIt, Nav2) reads this file.  
Without a proper URDF, your robot is just a pile of motors — no software knows where the arms, legs, or sensors are!

**Advantages**  
- One file powers visualization + simulation + motion planning  
- Free, open standard  
- Thousands of ready examples available  

**Limitations**  
- Describes only one robot (not the whole world)  
- Closed kinematic loops are painful (or impossible)  
- For complex robots, pure XML becomes huge → that’s why we use **xacro** (next chapter)

## 8.2 Basic Structure of a URDF File

Every URDF starts like this:

```xml
<?xml version="1.0"?>
<robot name="my_awesome_robot">
    <!-- links and joints go here -->
</robot>
```

The two most important tags:  
- `<link>` → a solid, rigid part (chassis, arm segment, wheel)  
- `<joint>` → how two links are connected

## 8.3 How to Define a Link

A link usually has three sections:

```xml
<link name="base_link">
  <visual>
    <geometry>
      <box size="0.6 0.4 0.2"/>      <!-- 60 cm × 40 cm × 20 cm -->
    </geometry>
    <material name="blue">
      <color rgba="0 0 1 1"/>
    </material>
  </visual>

  <collision>
    <geometry>
      <box size="0.6 0.4 0.2"/>      <!-- same or simpler than visual -->
    </geometry>
  </collision>

  <inertial>
    <mass value="15"/>             <!-- 15 kg -->
    <inertia ixx="0.5" ixy="0" ixz="0" iyy="0.5" iyz="0" izz="0.5"/>
  </inertial>
</link>
```

**Quick tips**  
- **visual** → only for looks (you can use detailed meshes)  
- **collision** → for physics/collision detection → keep it simple (saves CPU)  
- **inertial** → required for realistic simulation in Gazebo

## 8.4 How to Define a Joint

A joint connects two links:

```xml
<joint name="wheel_left_joint" type="continuous">
  <parent link="base_link"/>
  <child  link="wheel_left"/>
  <origin xyz="0.2 0.2 -0.1" rpy="0 0 0"/>
  <axis xyz="0 1 0"/>               <!-- rotates around Y axis -->
</joint>
```

**Most Common Joint Types**

| Type       | What it does                         | Typical use                |
|------------|--------------------------------------|----------------------------|
| fixed      | No movement at all                   | Camera on chassis          |
| continuous | Unlimited rotation (no limits)       | Wheels                     |
| revolute   | Limited rotation (like an elbow)     | Arm joints                 |
| prismatic  | Linear sliding                       | Linear actuators, drawers  |

**Revolute joint with limits**

```xml
<joint name="arm_joint1" type="revolute">
  <parent link="base_link"/>
  <child  link="upper_arm"/>
  <origin xyz="0 0 0.3" rpy="0 0 0"/>
  <axis xyz="0 0 1"/>
  <limit lower="-1.57" upper="1.57" effort="50" velocity="2"/>
</joint>
```

## 8.5 Complete Simple Mobile Robot URDF (Copy-Paste Ready)

```xml
<?xml version="1.0"?>
<robot name="my_bot">

  <link name="base_link">
    <visual>
      <geometry><box size="0.5 0.3 0.1"/></geometry>
      <material name="gray"><color rgba="0.5 0.5 0.5 1"/></material>
    </visual>
    <collision><geometry><box size="0.5 0.3 0.1"/></geometry></collision>
    <inertial>
      <mass value="10"/>
      <inertia ixx="0.2" ixy="0" ixz="0" iyy="0.2" iyz="0" izz="0.3"/>
    </inertial>
  </link>

  <link name="left_wheel">
    <visual>
      <geometry><cylinder radius="0.05" length="0.02"/></geometry>
      <origin rpy="1.57 0 0"/>      <!-- turn cylinder sideways -->
    </visual>
    <collision><geometry><cylinder radius="0.05" length="0.02"/></geometry></collision>
    <inertial><mass value="1"/><inertia ixx="0.01" ixy="0" ixz="0" iyy="0.01" iyz="0" izz="0.01"/></inertial>
  </link>

  <joint name="left_wheel_joint" type="continuous">
    <parent link="base_link"/>
    <child  link="left_wheel"/>
    <origin xyz="0.15 0.2 -0.05"/>
    <axis xyz="0 1 0"/>
  </joint>

  <!-- Right wheel and caster wheel – same idea, just mirrored -->

</robot>
```

## 8.6 How to Verify Your URDF Is Correct

```bash
# Syntax check
check_urdf ~/my_robot/urdf/my_bot.urdf

# Best check – see it in RViz
ros2 launch urdf_tutorial display.launch.py model:=my_bot.urdf
```

If the robot appears and moves correctly in RViz → you’re good!

## 8.7 Best Practices (Never Forget These)

1. **Always switch to xacro** for real robots (covered in next chapter)  
2. Keep link/joint names short and meaningful (`fl_wheel`, `arm_joint3`)  
3. Follow ROS coordinate convention: X forward, Z up  
4. Use `package://your_package/meshes/part.stl` for mesh paths  
5. Keep collision geometry simple (boxes/cylinders) – visual can be detailed  

## What You Can Do Right Now

- Create a complete URDF for a simple wheeled robot  
- Visualize it in RViz  
- Prepare it for Gazebo simulation  
- Catch mistakes with `check_urdf`
