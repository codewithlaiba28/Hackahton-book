# Chapter 19: Navigation with Nav2

## What is Nav2?

**Nav2** = Navigation stack for ROS 2

**What it does**: Plans paths and moves robots to goals

**Key ability**: Autonomous navigation in complex environments

## How Navigation Works

```
1. Goal: Go to position (X, Y)
        ↓
2. Plan path (avoid obstacles)
        ↓
3. Follow path
        ↓
4. Detect obstacle → Replan
        ↓
5. Reach goal!
```

## Nav2 Architecture

### Main Components

```
Goal request
    ↓
Behavior Tree Executive
  (controls navigation logic)
    ├─ Path Planner
    ├─ Controller
    ├─ Recovery Behaviors
    └─ Monitoring
    ↓
Robot reaches goal
```

### Behavior Trees

**What they are**: Decision trees for robots

**How they work**:
- Check conditions
- Execute actions
- Handle failures
- Recovery behaviors

**Advantage**: Easy to understand and modify

## Path Planning Algorithms

### A* (A-Star)

**What it does**: Find fastest path from start to goal

**How it works**:
1. Look at current position
2. Consider all nearby moves
3. Choose most promising direction
4. Repeat until goal reached

**Characteristics**:
- ✓ Finds shortest path
- ✓ Fast in most cases
- ✓ Works in 2D grids
- ✓ Commonly used

**Best for**: Known indoor environments

### Dijkstra's Algorithm

**What it does**: Find shortest path in graph

**How it works**:
1. Start from beginning
2. Explore all reachable nodes
3. Update best path to each node
4. Continue until goal found

**Characteristics**:
- ✓ Guaranteed optimal path
- ✓ Slower than A*
- ✓ Works for any graph
- ✓ Older algorithm

**Best for**: General path planning

### RRT (Rapidly-Exploring Random Tree)

**What it does**: Quickly explore spaces randomly

**How it works**:
1. Start with tree at beginning
2. Pick random point
3. Extend tree toward it
4. Repeat until near goal

**Characteristics**:
- ✓ Handles high dimensions
- ✓ Works in cluttered spaces
- ✓ Fast exploration
- ✗ Path not optimal

**Best for**: Complex, high-dimensional spaces

## Path Planning Comparison

| Algorithm | Speed | Optimal | Complex Spaces | Best For |
|-----------|-------|---------|-----------------|----------|
| **A*** | Fast | Yes | Limited | Grids |
| **Dijkstra** | Medium | Yes | Medium | Graphs |
| **RRT** | Fast | No | Excellent | Complex |

## Bipedal Humanoid Navigation

**Special challenges**:
- Must maintain balance
- Can't walk sideways
- Feet orientation matters
- Energy efficiency important

**How Nav2 handles it**:
1. Generate walking gait
2. Plan footstep positions
3. Consider stability
4. Avoid unstable poses

**Process**:
```
Goal location
    ↓
Plan safe footsteps
    ↓
Walk step by step
    ↓
Reach goal safely
```

## Obstacle Detection & Dynamic Replanning

### Static Obstacles
- Known obstacles (walls, furniture)
- In map beforehand
- Path planned around them

### Dynamic Obstacles
- Moving people
- Moving vehicles
- Unexpected objects

### Detection & Response

```
Sensor detects obstacle
    ↓
Check if blocking path
    ↓
Replan path
    ↓
Follow new path
    ↓
Reach goal
```

**Time to replan**: Milliseconds!

## Behavior Trees for Navigation

**Structure**:
```
Navigate to Goal
├─ Acquire Goal
├─ Plan Path
│  └─ If plan fails → Recovery
├─ Follow Path
│  └─ If stuck → Backup
└─ Check Goal Reached
```

**Behaviors**:
- **Sequences**: Do one, then next
- **Selectors**: Try one, if fails try next
- **Fallbacks**: Recover from failures

**Advantage**: Flexible, easy to modify

## Real-World Navigation Challenges

### Challenge 1: Localization Error
**Problem**: "Where am I?" not precise

**Solution**:
- Use multi-sensor fusion
- Continuous self-correction
- Safety margin around obstacles

### Challenge 2: Sensor Noise
**Problem**: Noisy sensor readings

**Solution**:
- Filter sensor data
- Average multiple readings
- Conservative obstacle detection

### Challenge 3: Dynamic Environments
**Problem**: People and objects move

**Solution**:
- Rapid replanning
- Fast reaction time
- Collision avoidance

### Challenge 4: Narrow Passages
**Problem**: Can't fit through tight spaces

**Solution**:
- Precise path planning
- Exact robot dimensions
- RRT algorithm works well

### Challenge 5: Long-Term Navigation
**Problem**: Drifts over time

**Solution**:
- Map update mechanisms
- Loop closure detection
- Periodic recalibration

## Typical Nav2 Pipeline

```
1. Localization
   (SLAM finds robot position)
        ↓
2. Perception
   (Detect obstacles)
        ↓
3. Planning
   (Path planner creates route)
        ↓
4. Control
   (Follow the path)
        ↓
5. Monitoring
   (Check for obstacles)
        ↓
6. Replanning
   (If blocked, find new path)
        ↓
7. Goal Reached!
```

## Nav2 vs Manual Navigation

| Aspect | Manual | Nav2 |
|--------|--------|------|
| **Speed** | Slow | Fast |
| **Obstacle avoidance** | Manual | Automatic |
| **Replanning** | Manual | Automatic |
| **Reliability** | Inconsistent | Consistent |
| **Scalability** | Limited | Excellent |

## Tips for Good Navigation

✓ **Accurate map** - Use V-SLAM to build good map
✓ **Good localization** - Know where you are
✓ **Sensor fusion** - Combine multiple sensors
✓ **Conservative planning** - Add safety margins
✓ **Regular updates** - Keep map current
✓ **Test in simulation** - Use Gazebo first
✓ **Tune parameters** - Adjust for your robot

## Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Robot gets stuck | Poor planning | Better costmap |
| Oscillates | Unstable controller | Tune PID gains |
| Misses goal | Localization error | Better SLAM |
| Hits obstacles | No replanning | Enable dynamic planning |
| Too slow | Suboptimal path | Change algorithm |

## What You'll Learn

- Nav2 architecture and components
- Path planning algorithms (A*, Dijkstra, RRT)
- Bipedal humanoid navigation
- Obstacle detection and replanning
- Behavior trees for control
- Real-world navigation challenges
- Localization and mapping
- Parameter tuning
- Debugging navigation
- Deployment and testing