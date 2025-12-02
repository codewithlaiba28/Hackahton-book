# Chapter 9: Advanced Modeling with SDF and USD  

## 9.1 SDF (Simulation Description Format) – The Real Language of Gazebo

**URDF** = only describes the robot  
**SDF** = describes the entire world → robots + tables + walls + lights + full physics

### URDF vs SDF at a Glance

| Feature                     | URDF                          | SDF                                      |
|-----------------------------|-------------------------------|------------------------------------------|
| Full environment            | No                            | Yes (floors, furniture, sky, lighting)  |
| Multiple robots             | No                            | Yes                                      |
| Closed loops (legs, parallel mechanisms) | Very hard             | Native support                           |
| Sensors (camera, LiDAR)     | Basic                         | Full control (noise, update rate, etc.)  |
| Plugins                     | Limited                       | Extremely powerful (custom C++ code)     |
| Load directly in Gazebo     | Yes (auto-converted)          | Yes (native format)                      |

### Simple SDF World Example (Copy-Paste & Run)

```xml
<sdf version="1.9">
  <world name="cafe_world">
    <light type="sun"/>

    <!-- Ground plane -->
    <include><uri>model://ground_plane</uri></include>

    <!-- A cafe table -->
    <include>
      <uri>model://cafe_table</uri>
      <pose>2 1 0 0 0 0</pose>
    </include>

    <!-- Your humanoid robot -->
    <include>
      <uri>model://my_humanoid</uri>
      <pose>0 0 0 0 0 0</pose>
    </include>
  </world>
</sdf>
```

Run it:
```bash
gz sim cafe_world.sdf
```

## 9.2 USD (Universal Scene Description) – Pixar’s Superpower Now in Robotics

The same format that powers Hollywood movies (Toy Story, Avatar) has entered robotics!

### Why USD Is So Powerful

| Feature                     | Traditional (URDF/SDF)       | USD                                      |
|-----------------------------|------------------------------|------------------------------------------|
| Scene size                  | 1k–10k polygons              | Millions of polygons                     |
| Materials                   | Flat colors                  | Physically-based (metal, glass, fabric)  |
| Animation                   | Basic                        | Full skeletal + facial animation        |
| Layering (non-destructive)  | No                           | Yes (like Photoshop layers)              |
| Digital Twin                | Hard                         | Built for it                             |

### NVIDIA Omniverse = USD for Robotics
- Real-time ray tracing
- Physics (PhysX + OmniPhysics)
- Full ROS 2 bridge
- Drag-and-drop factory builder

## 9.3 Real-World Format Conversions (2025 Workflow)

| From → To       | Tool / Command                               | Notes                                      |
|-----------------|----------------------------------------------|--------------------------------------------|
| URDF → SDF      | Gazebo converts automatically on launch     | Easiest and most common                    |
| SDF → URDF      | `gz sdf -c model.sdf` → manual cleanup       | You lose world info                        |
| URDF → USD      | `usd_from_urdf` in Isaac Sim                 | Perfect for Omniverse                      |
| USD → SDF       | Isaac Sim → Export → SDF                     | Works very well                            |

**Best practice today**:
CAD design → export meshes → URDF/xacro for ROS 2 → Isaac Sim automatically turns it into USD for beautiful, high-fidelity simulation.

## 9.4 Modeling Tips Specifically for Humanoid Robots

Humanoids are the hardest things to model correctly.

| Problem                     | Practical Solution                                      |
|-----------------------------|----------------------------------------------------------|
| 40+ degrees of freedom      | Split into 10+ xacro files (arms, legs, torso, head)    |
| Closed loops (double support) | Use SDF or add virtual springs in URDF                |
| Accurate foot contact       | Small collision boxes on heel + ball + toes             |
| Correct Center of Mass      | Measure inertial values carefully for every link        |
| Complex hands (20+ DOF)     | Simplify to 1–3 DOF parallel gripper in simulation      |

## 9.5 How to Bring Real CAD Models into Simulation (2025 Standard Workflow)

1. Design in **SolidWorks / Fusion 360 / Onshape**
2. Export parts as **.stl** or **.obj**
3. Clean up in **Blender** or **MeshLab**:
   - Scale: 1 unit = 1 meter
   - Decimate (remove 90%+ polygons)
   - Convex decomposition for collision
4. Save:
   - Visual mesh → high-poly .dae/.gltf
   - Collision mesh → low-poly convex .stl
5. Use in xacro:

```xml
<link name="forearm">
  <visual>
    <geometry>
      <mesh filename="package://my_bot/meshes/forearm_visual.dae" scale="0.001 0.001 0.001"/>
    </geometry>
  </visual>
  <collision>
    <geometry>
      <mesh filename="package://my_bot/meshes/forearm_collision.stl"/>
    </geometry>
  </collision>
</link>
```

## 9.6 Golden Rules – Follow These and Your Sim Will Run 100× Faster

| Rule                            | Why it matters                                   |
|---------------------------------|--------------------------------------------------|
| Collision meshes = ultra simple | 100k+ polygon collision = simulator crashes     |
| Visual meshes = as beautiful as you want | Only for looks                                   |
| Inertial values correct         | Wrong CoM = robot flies or falls instantly      |
| Units = meters                  | 1 mm = 1 m → your robot becomes an ant           |
| Z up, X forward                 | ROS standard                                     |
| Always use xacro                | 1000-line URDF = maintenance nightmare           |
| Test with check_urdf + gz sim   | Catch mistakes early                             |

## Final Scorecard – What to Use in 2025

| Purpose                         | Best Format          |
|---------------------------------|----------------------|
| ROS 2 + RViz + MoveIt           | URDF + xacro         |
| Full physics simulation         | SDF (Gazebo)         |
| Beautiful visuals + digital twin| USD (Isaac Sim / Omniverse) |
| Quick prototype                 | URDF                 |
| Serious humanoid / complex robot| xacro → SDF or USD   |

You can now build industry-grade robot models that look stunning and simulate realistically.

