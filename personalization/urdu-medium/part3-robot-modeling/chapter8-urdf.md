# Chapter 8: Unified Robot Description Format (URDF)

## 8.1 What Is URDF and Why Do You Need It?

**URDF** = ek XML file jo aapke robot ka complete “blueprint” ka kaam karti hai.

Ye software ko batata hai:

* Kitne rigid parts (links) robot ke hain
* Ye parts kaise connected hain (joints)
* Har part ka shape, color, aur weight
* Collision checking ke liye simple shapes

Har ROS tool (RViz, Gazebo, MoveIt, Nav2) is file ko read karta hai.
Proper URDF ke bina aapka robot sirf motors ka pile hai — koi software nahi jaanta ke arms, legs, ya sensors kahan hain!

**Advantages**

* Ek file se visualization + simulation + motion planning possible
* Free, open standard
* Hazaron ready examples available

**Limitations**

* Sirf ek robot describe karta hai (poore world nahi)
* Closed kinematic loops mushkil (ya impossible)
* Complex robots ke liye pure XML bohot bada ho jata hai → isliye **xacro** use karte hain (next chapter)

## 8.2 Basic Structure of a URDF File

Har URDF kuch is tarah start hota hai:

```xml
<?xml version="1.0"?>
<robot name="my_awesome_robot">
    <!-- links and joints go here -->
</robot>
```

Do important tags:

* `<link>` → solid, rigid part (chassis, arm segment, wheel)
* `<joint>` → kaise do links connected hain

## 8.3 How to Define a Link

Link me usually teen sections hote hain:

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
      <box size="0.6 0.4 0.2"/>      <!-- visual se same ya simple -->
    </geometry>
  </collision>

  <inertial>
    <mass value="15"/>             <!-- 15 kg -->
    <inertia ixx="0.5" ixy="0" ixz="0" iyy="0.5" iyz="0" izz="0.5"/>
  </inertial>
</link>
```

**Quick tips**

* **visual** → sirf looks ke liye (detailed meshes use kar sakte ho)
* **collision** → physics/collision detection ke liye → simple rakho (CPU save hota hai)
* **inertial** → Gazebo me realistic simulation ke liye required

## 8.4 How to Define a Joint

Joint do links ko connect karta hai:

```xml
<joint name="wheel_left_joint" type="continuous">
  <parent link="base_link"/>
  <child  link="wheel_left"/>
  <origin xyz="0.2 0.2 -0.1" rpy="0 0 0"/>
  <axis xyz="0 1 0"/>               <!-- Y axis ke around rotate -->
</joint>
```

**Most Common Joint Types**

| Type       | Kya karta hai                    | Typical use               |
| ---------- | -------------------------------- | ------------------------- |
| fixed      | Bilkul movement nahi             | Camera on chassis         |
| continuous | Unlimited rotation (limits nahi) | Wheels                    |
| revolute   | Limited rotation (jaise elbow)   | Arm joints                |
| prismatic  | Linear sliding                   | Linear actuators, drawers |

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
      <origin rpy="1.57 0 0"/>      <!-- cylinder sideways -->
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

  <!-- Right wheel aur caster wheel – same idea, just mirrored -->

</robot>
```

## 8.6 How to Verify Your URDF Is Correct

```bash
# Syntax check
check_urdf ~/my_robot/urdf/my_bot.urdf

# Best check – RViz me dekho
ros2 launch urdf_tutorial display.launch.py model:=my_bot.urdf
```

Agar robot RViz me sahi appear aur move kare → all set!

## 8.7 Best Practices (Never Forget These)

1. **Hamesha xacro use karo** real robots ke liye (next chapter me covered)
2. Link/joint names short aur meaningful rakho (`fl_wheel`, `arm_joint3`)
3. ROS coordinate convention follow karo: X forward, Z up
4. Mesh paths ke liye `package://your_package/meshes/part.stl` use karo
5. Collision geometry simple rakho (boxes/cylinders) – visual detailed ho sakta hai

## What You Can Do Right Now

* Simple wheeled robot ka complete URDF create karo
* RViz me visualize karo
* Gazebo simulation ke liye prepare karo
* `check_urdf` se mistakes catch karo
