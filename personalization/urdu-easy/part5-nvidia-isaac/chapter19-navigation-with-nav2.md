# Chapter 19: Navigation with Nav2

## What is Nav2?

**Nav2** = Navigation stack for ROS 2

**Purpose**: Plan paths and move robots autonomously to goals in complex environments

## How Navigation Works

```
1. Set goal position (X, Y)
        ↓
2. Plan path avoiding obstacles
        ↓
3. Follow planned path
        ↓
4. Detect obstacles → Replan
        ↓
5. Reach goal safely
```

## Nav2 Architecture

### Main Components

```
Goal request
    ↓
Behavior Tree Executive
  ├─ Path Planner
  ├─ Controller
  ├─ Recovery Behaviors
  └─ Monitoring
    ↓
Robot reaches goal
```

### Behavior Trees

* **Decision-making structure** for robots
* Check conditions, execute actions, handle failures
* **Advantage**: Easy to understand, flexible, modular

## Path Planning Algorithms

### A* (A-Star)

* Finds shortest path in grid
* Fast, optimal in most cases
* Best for indoor environments

### Dijkstra's Algorithm

* Explores all nodes in graph
* Guarantees optimal path
* Slower than A*
* Best for general graph-based planning

### RRT (Rapidly-Exploring Random Tree)

* Explores space randomly
* Handles high-dimensional, cluttered spaces
* Fast, but path not always optimal

### Comparison

| Algorithm    | Speed  | Optimal | Complex Spaces | Best For                 |
| ------------ | ------ | ------- | -------------- | ------------------------ |
| **A***       | Fast   | Yes     | Limited        | 2D grids                 |
| **Dijkstra** | Medium | Yes     | Medium         | Graphs                   |
| **RRT**      | Fast   | No      | Excellent      | Complex, high-dimensions |

## Bipedal Humanoid Navigation

**Challenges**:

* Maintain balance
* Feet orientation matters
* Energy efficiency important

**Nav2 Approach**:

```
Goal → Plan footsteps → Walk step by step → Reach goal
```

## Obstacle Detection & Dynamic Replanning

* **Static obstacles**: Known in map → path planned around
* **Dynamic obstacles**: Moving objects → replan path in milliseconds
* Sensor detects obstacle → Check → Replan → Follow new path → Goal reached

## Behavior Trees for Navigation

**Structure**:

```
Navigate to Goal
├─ Acquire Goal
├─ Plan Path
│  └─ Recovery if failed
├─ Follow Path
│  └─ Backup if stuck
└─ Check Goal Reached
```

**Types**:

* Sequences: Step-by-step actions
* Selectors: Try alternatives if fail
* Fallbacks: Recover from failures

## Real-World Navigation Challenges

| Challenge            | Problem                  | Solution                                                       |
| -------------------- | ------------------------ | -------------------------------------------------------------- |
| Localization error   | "Where am I?" inaccurate | Multi-sensor fusion, self-correction, safety margin            |
| Sensor noise         | Noisy readings           | Filter data, average readings, conservative obstacle detection |
| Dynamic environments | Moving people/objects    | Rapid replanning, fast reactions                               |
| Narrow passages      | Tight spaces             | Precise planning, RRT algorithm, exact dimensions              |
| Long-term navigation | Drift over time          | Map updates, loop closure, periodic recalibration              |

## Typical Nav2 Pipeline

```
1. Localization (SLAM)
        ↓
2. Perception (detect obstacles)
        ↓
3. Planning (path planner)
        ↓
4. Control (follow path)
        ↓
5. Monitoring (check obstacles)
        ↓
6. Replanning if blocked
        ↓
7. Goal reached
```

## Nav2 vs Manual Navigation

| Aspect             | Manual       | Nav2       |
| ------------------ | ------------ | ---------- |
| Speed              | Slow         | Fast       |
| Obstacle avoidance | Manual       | Automatic  |
| Replanning         | Manual       | Automatic  |
| Reliability        | Inconsistent | Consistent |
| Scalability        | Limited      | Excellent  |

## Tips for Effective Navigation

* Accurate maps (V-SLAM)
* Good localization
* Sensor fusion
* Conservative planning (safety margins)
* Regular map updates
* Test in simulation first
* Tune parameters for robot

## Common Issues & Fixes

| Issue            | Cause                 | Solution                |
| ---------------- | --------------------- | ----------------------- |
| Robot gets stuck | Poor planning         | Better costmap          |
| Oscillates       | Unstable controller   | Tune PID gains          |
| Misses goal      | Localization error    | Improve SLAM            |
| Hits obstacles   | No dynamic replanning | Enable dynamic planning |
| Slow movement    | Suboptimal path       | Change algorithm        |

## What You'll Learn

* Nav2 architecture and components
* Path planning (A*, Dijkstra, RRT)
* Humanoid footstep planning
* Obstacle detection & dynamic replanning
* Behavior tree control
* Real-world navigation challenges
* Localization and mapping
* Parameter tuning & debugging
* Deployment and testing
