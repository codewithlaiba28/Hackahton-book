# Chapter 8: Unified Robot Description Format (URDF)

## What is URDF?

**URDF** = A file format that describes what a robot looks like and how it moves

It tells ROS:
- What parts the robot has (links)
- How they connect (joints)
- What they weigh
- How they look

## Why Use URDF?

**Benefits**:
- Works with visualization tools (RViz)
- Helps motion planning (MoveIt)
- Enables simulation (Gazebo)
- Standard format everyone understands

**Limitations**:
- Only describes one robot
- Can't have closed loops easily
- Static description only

## Basic XML Structure

URDF is written in XML format (like HTML)

**Basic tags**:
```xml
<robot name="my_robot">
  <link> ... </link>
  <joint> ... </joint>
</robot>
```

## Links (Robot Parts)

A **link** is one solid piece of the robot (arm segment, wheel, base)

**Example link with all properties**:
```xml
<link name="base_link">
  <!-- How it looks -->
  <visual>
    <geometry>
      <box size="0.1 0.1 0.05"/>
    </geometry>
    <material name="red">
      <color rgba="1 0 0 1"/>
    </material>
  </visual>
  
  <!-- For collisions in simulation -->
  <collision>
    <geometry>
      <box size="0.1 0.1 0.05"/>
    </geometry>
  </collision>
  
  <!-- Weight and physics -->
  <inertial>
    <mass value="1.0"/>
    <inertia ixx="0.01" ixy="0" ixz="0" iyy="0.01" iyz="0" izz="0.01"/>
  </inertial>
</link>
```

## Link Geometry Shapes

| Shape | Example |
|-------|---------|
| **Box** | `<box size="X Y Z"/>` |
| **Cylinder** | `<cylinder radius="R" length="L"/>` |
| **Sphere** | `<sphere radius="R"/>` |
| **Mesh** | `<mesh filename="package://path/to/file.stl"/>` |

## Joints (Connections)

A **joint** connects two links and allows movement

**Example joint**:
```xml
<joint name="elbow_joint" type="revolute">
  <parent link="upper_arm"/>
  <child link="lower_arm"/>
  
  <!-- Where the joint is -->
  <origin xyz="0 0 0.3" rpy="0 0 0"/>
  
  <!-- Direction of rotation -->
  <axis xyz="0 1 0"/>
  
  <!-- Limits -->
  <limit lower="-1.57" upper="1.57" effort="10" velocity="1.0"/>
</joint>
```

## Joint Types

| Type | What it does | Example |
|------|-------------|---------|
| **revolute** | Rotates with limits | Elbow joint |
| **continuous** | Rotates without limits | Wheel |
| **prismatic** | Slides in/out | Drawer |
| **fixed** | Can't move | Bolted part |
| **floating** | Moves in 6 directions | Mobile robot base |

## Simple Robot Example

**Two-link arm**:
```xml
<robot name="simple_arm">
  <!-- Base -->
  <link name="base_link">
    <visual>
      <geometry><cylinder radius="0.1" length="0.05"/></geometry>
      <material name="gray"><color rgba="0.5 0.5 0.5 1"/></material>
    </visual>
  </link>

  <!-- Upper arm -->
  <link name="upper_arm">
    <visual>
      <geometry><box size="0.05 0.05 0.3"/></geometry>
      <material name="blue"><color rgba="0 0 1 1"/></material>
    </visual>
  </link>

  <!-- Connection: Base to upper arm -->
  <joint name="shoulder" type="revolute">
    <parent link="base_link"/>
    <child link="upper_arm"/>
    <origin xyz="0 0 0.025"/>
    <axis xyz="0 0 1"/>
    <limit lower="-3.14" upper="3.14" effort="10" velocity="1.0"/>
  </joint>
</robot>
```

## Testing Your URDF

**Check for errors**:
```bash
check_urdf my_robot.urdf
```

**View in RViz**:
```bash
ros2 launch urdf_tutorial display.launch.py model:=my_robot.urdf
```

## URDF Best Practices

✓ Use clear names for links and joints
✓ Add comments to explain parts
✓ Keep collision geometry simpler than visual
✓ Use `xyz` for position, `rpy` for rotation
✓ Test frequently with `check_urdf`

## What You'll Learn

- Write basic URDF files
- Describe robot parts (links)
- Define connections (joints)
- Set up physics properties
- Visualize robot models
- Validate URDF files