# Chapter 12: Physics Simulation in Gazebo

## Why Physics Matters

Physics simulation makes robots behave realistically:
- Objects fall due to gravity
- Robots don't pass through walls
- Robots feel friction
- Collisions happen correctly

Without physics, it's just animation. With physics, it's like the real world.

## Physics Engines in Gazebo

Gazebo can use different physics engines. Choose based on your needs:

| Engine | Best For | Speed |
|--------|----------|-------|
| **ODE** | General robots | Fast |
| **Bullet** | Many collisions | Medium |
| **Simbody** | Humanoids, complex systems | Slow |
| **DART** | Closed loops, contacts | Medium |

## Rigid Bodies

Every object in Gazebo has physics properties:

**Key properties**:
- **Mass** - How heavy it is (kg)
- **Inertia** - How hard to rotate
- **Gravity** - Falls down (9.81 m/s²)

**Example**:
- Light ball = small mass, easy to move
- Heavy box = large mass, hard to move

## Collision Detection

**Problem**: Objects shouldn't pass through each other

**Solution**: Collision detection

**How it works**:
1. Simple shapes approximate objects (box, sphere, cylinder)
2. Check if shapes overlap
3. If yes → Collision detected

**When collision occurs**:
- Push objects apart
- Apply friction force
- Energy may be lost (bouncing)

## Friction and Bouncing

### Friction
- **Static friction** - Stops object from sliding
- **Dynamic friction** - Slows sliding object
- Higher friction = more grip

### Restitution (Bounciness)
- 1.0 = Perfect bounce (bouncy ball)
- 0.5 = Some bounce (tennis ball)
- 0.0 = No bounce (clay)

## Joint Dynamics

Joints also have physics properties:

| Property | Effect |
|----------|--------|
| **Limits** | Min/max angle |
| **Damping** | Slows joint motion |
| **Friction** | Internal resistance |

**Example**: Joint damping prevents shaky motion

## Tuning for Realism

**Problem**: Simulation may look wrong or be unstable

**Solution**: Tune physics parameters

### Key parameters to adjust:

1. **Time Step** - How often to calculate physics
   - Smaller = More accurate, slower
   - Larger = Faster, less accurate

2. **Solver Iterations** - How many times to solve
   - More = More stable, slower
   - Less = Faster, less stable

3. **Contact Properties** (CFM/ERP)
   - Controls stiffness and damping
   - Prevents objects from jittering

### Tuning Process:
```
1. Run simulation
2. Check if realistic
3. Adjust parameters
4. Run again
5. Repeat until good
```

## Common Physics Problems

| Problem | Cause | Fix |
|---------|-------|-----|
| Objects pass through walls | Collision issue | Increase time step |
| Robot shaking | Unstable joints | Increase damping |
| Slow simulation | Too many calculations | Reduce iterations |
| Objects fly apart | Bad contact | Tune CFM/ERP |
| Unrealistic motion | Wrong friction | Adjust friction values |

## Physics in SDF File

**Example world configuration**:
```xml
<physics type="ode">
  <max_step_size>0.001</max_step_size>
  <real_time_factor>1.0</real_time_factor>
  <real_time_update_rate>1000</real_time_update_rate>
</physics>
```

## Real vs Simulated

**Goal**: Make simulation match real robot

**Steps**:
1. Measure real robot properties
2. Enter them in SDF
3. Run simulation
4. Compare to real robot
5. Tune until they match

## What You'll Learn

- How physics engines work
- Understand rigid body dynamics
- Collision detection and friction
- Joint dynamics and damping
- Tune physics for realism
- Fix common physics problems
- Create realistic digital twins