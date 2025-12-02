# Chapter 8: Unified Robot Description Format (URDF)

## What is URDF?

**URDF** = Ek file format jo describe karta hai ke robot kaisa dikhta hai aur kaise move karta hai

Ye ROS ko batata hai:

* Robot ke parts kya hain (links)
* Kaise connect hote hain (joints)
* Weight kitna hai
* Kaise dikhta hai

## Why Use URDF?

**Benefits**:

* Visualization tools (RViz) ke saath kaam karta hai
* Motion planning (MoveIt) mein madad karta hai
* Simulation (Gazebo) enable karta hai
* Standard format jo sab samajhte hain

**Limitations**:

* Sirf ek robot describe karta hai
* Closed loops easily nahi ho sakte
* Sirf static description

## Basic XML Structure

URDF XML format mein likha jata hai (HTML jese)

**Basic tags**:

```xml
<robot name="my_robot">
  <link> ... </link>
  <joint> ... </joint>
</robot>
```

## Links (Robot Parts)

**Link** = Robot ka ek solid piece (arm segment, wheel, base)

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

| Shape        | Example                                         |
| ------------ | ----------------------------------------------- |
| **Box**      | `<box size="X Y Z"/>`                           |
| **Cylinder** | `<cylinder radius="R" length="L"/>`             |
| **Sphere**   | `<sphere radius="R"/>`                          |
| **Mesh**     | `<mesh filename="package://path/to/file.stl"/>` |

## Joints (Connections)

**Joint** = Do links ko connect karta hai aur movement allow karta hai

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

| Type           | What it does                       | Example           |
| -------------- | ---------------------------------- | ----------------- |
| **revolute**   | Limits ke saath rotate karta hai   | Elbow joint       |
| **continuous** | Limits ke baghair rotate karta hai | Wheel             |
| **prismatic**  | Slides in/out karta hai            | Drawer            |
| **fixed**      | Move nahi kar sakta                | Bolted part       |
| **floating**   | 6 directions mein move karta hai   | Mobile robot base |

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

✓ Links aur joints ke liye clear names use karo
✓ Parts explain karne ke liye comments add karo
✓ Collision geometry visual se simple rakho
✓ Position ke liye `xyz`, rotation ke liye `rpy` use karo
✓ Frequently test karo `check_urdf` ke saath

## What You'll Learn

* Basic URDF files likhna
* Robot parts (links) describe karna
* Connections (joints) define karna
* Physics properties set karna
* Robot models visualize karna
* URDF files validate karna
