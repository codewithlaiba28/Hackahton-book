# Chapter 9: Advanced Modeling with SDF and USD

## SDF (Simulation Description Format)

**What it is**: Like URDF but more powerful - describes entire worlds, not just robots

**Can describe**:
- Multiple robots in one file
- The environment (walls, tables, terrain)
- Lights and cameras
- Physics properties (friction, damping)

**Advantages over URDF**:
- Can have closed loops
- Better for complex environments
- More sensor details
- Gazebo uses this format

**Example SDF element**:
```xml
<sdf version="1.7">
  <model name="table">
    <link name="top">
      <visual>
        <geometry><box><size>1 0.5 0.03</size></box></geometry>
      </visual>
      <collision>
        <geometry><box><size>1 0.5 0.03</size></box></geometry>
      </collision>
    </link>
  </model>
</sdf>
```

## USD (Universal Scene Description)

**What it is**: Advanced 3D format from Pixar - used for high-quality simulations and digital twins

**Can handle**:
- Millions of polygons efficiently
- Realistic materials and lighting
- Complex animations
- Multiple robots and environments

**Best for**:
- High-fidelity simulation
- Digital twins (virtual copies of real robots)
- Professional visualization
- Large-scale scenes

**Advantages**:
- Scalable (handles huge scenes)
- Rich materials and rendering
- Composable (layer different scenes)
- Used in professional simulation

## Comparison

| Feature | URDF | SDF | USD |
|---------|------|-----|-----|
| **Single robot** | ✓ | ✓ | ✓ |
| **Multiple robots** | ✗ | ✓ | ✓ |
| **Environment** | ✗ | ✓ | ✓ |
| **Closed loops** | Hard | ✓ | ✓ |
| **Complex materials** | ✗ | ✓ | ✓ |
| **Large scenes** | Slow | OK | ✓ |

## Converting Between Formats

### URDF → SDF
- Built-in Gazebo conversion
- Mostly automatic
- Usually works well

### SDF → URDF
- Manual or complex
- May lose information
- Not recommended

### URDF/SDF → USD
- Special conversion tools
- Preserves geometry and physics
- Used for high-fidelity sim

### USD → URDF/SDF
- Extract physics info only
- Loses rich details
- Limited use

## Humanoid Robot Modeling

**Special challenges**:
- Complex kinematics (many joints)
- Balance control (needs accurate weight distribution)
- Contact points (feet, hands touching ground/objects)
- Many sensors (cameras, force sensors)
- Closed loops during double support

**Solution**:
- Accurate mass and inertia
- Detailed link and joint definitions
- Multiple contact sensors
- Physics simulation

## CAD to Simulation Workflow

**Steps**:
1. Export CAD model as mesh (`.stl`, `.dae`, `.obj`)
2. Simplify mesh for simulation
3. Create URDF/SDF/USD file
4. Reference mesh files
5. Test in simulator

**Optimization**:
- Reduce polygon count
- Separate collision from visual meshes
- Reuse identical parts
- Remove hidden details

## Best Practices

✓ **Keep it simple** - only include necessary details
✓ **Separate meshes** - use low-poly collision, detailed visual
✓ **Consistent coordinates** - follow standard frame conventions
✓ **Use modularity** - reuse components with xacro
✓ **Validate always** - test in simulator before deployment

## Tools

| Tool | Purpose |
|------|---------|
| `check_urdf` | Validate URDF files |
| Gazebo | Test SDF in simulator |
| Omniverse | Work with USD |
| Meshlab | Simplify meshes |
| CAD software | Create meshes |

## What You'll Learn

- Difference between URDF, SDF, and USD
- When to use each format
- Convert models between formats
- Model humanoid robots properly
- Import CAD models into simulation
- Optimize robot descriptions