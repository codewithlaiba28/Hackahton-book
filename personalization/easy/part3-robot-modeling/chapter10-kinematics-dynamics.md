# Chapter 10: Humanoid Kinematics and Dynamics

## Forward Kinematics (FK)

**What it is**: Calculate where the hand/end is, given all joint angles

**Example**:
- Shoulder angle = 30°
- Elbow angle = 90°
- Wrist angle = 45°
- **Question**: Where is the hand?

**How it works**:
- Start from the base
- Add rotation/position from each joint
- Final position = hand location

**Formula**: Multiply transformation matrices together

## Inverse Kinematics (IK)

**What it is**: Calculate what joint angles needed to reach a target position

**Example**:
- **Goal**: Hand at position (X, Y, Z) with specific direction
- **Question**: What should each joint angle be?

**Challenges**:
- Multiple solutions possible
- Some positions unreachable (singularities)
- Takes time to calculate (optimization)

**Methods**:
- **Analytical**: Math equations (fast, only for simple robots)
- **Numerical**: Trial and error optimization (slow, works for any robot)

**Use cases**:
- Grasping objects
- Walking (leg IK)
- Balancing
- Whole-body control

## Rigid-Body Dynamics

**What it is**: How forces and torques create motion

**Key equation**:
```
Mass × Acceleration + Friction + Gravity = Torques
```

**Two approaches**:
- **Newton-Euler**: Calculate forces step by step (fast)
- **Lagrange**: Use energy approach (simpler math)

**Why it matters**:
- Know what torques needed for motion
- Predict how robot accelerates
- Plan realistic movements

## Bipedal Walking (Two Legs)

**Key phases**:
1. **Single support** - One foot on ground
2. **Double support** - Both feet briefly on ground
3. **Swing** - Other foot moves forward

**Zero Moment Point (ZMP)**:
- Point on ground where no moment (turning force) exists
- Must stay inside the two feet for stability
- Like balancing a ruler on your finger

**Walking stability rule**:
```
If ZMP inside support polygon → Robot stable
If ZMP outside support polygon → Robot falls
```

## Center of Mass (CoM) and Balance

**What it is**: The center point of all robot weight

**Balance rule**:
- For static balance: CoM projection must be over support area
- For dynamic balance: Control CoM trajectory carefully

**Balance control methods**:
1. **Foot placement** - Place foot where needed
2. **Ankle/Hip control** - Adjust torques
3. **Whole-body control** - Move all joints together

**Impedance control**: Make robot behave like spring-damper (flexible, not rigid)

## Joint Limits and Safety

**Joint limits**:
- **Hard limits** - Physical stop (can't go further)
- **Soft limits** - Operational boundary (we choose)

**Collision detection**:
- Check if robot parts touch each other
- Check if robot touches obstacles

**Collision avoidance**:
- Plan paths that avoid obstacles
- React during execution if something unexpected appears
- Prevent self-collision (arm hitting body)

## Simple Example: 2-Link Arm

**Forward Kinematics**:
```
Link 1 length = 0.5m, angle = 30°
Link 2 length = 0.3m, angle = 60°
↓
Hand position = (0.58m, 0.65m)
```

**Inverse Kinematics**:
```
Target hand position = (0.7m, 0.5m)
↓
Link 1 angle = 15°
Link 2 angle = 45°
```

## Key Diagrams

**ZMP (Zero Moment Point)**:
```
  O ← Hand
  |
  |  CoM (center of mass)
  |
 /|\  ← Torso
 / \
/   \  ← Support polygon
----- ← Two feet on ground
  *   ← ZMP (must be between feet)
```

**Balance**:
```
UNSTABLE        STABLE         STABLE
    O              O              O
    |              |              |
    |              |              |
    *              *              |
   /\             /\              *
  /  \           /  \            /\
 -----          -----           -----
 ZMP out       ZMP in          ZMP in
 → Falls       → Balanced      → Balanced
```

## Control Strategies

| Strategy | Use | Example |
|----------|-----|---------|
| **FK** | Check current position | Where is arm now? |
| **IK** | Reach target | Grab the cup |
| **Dynamics** | Plan torques | Move arm smoothly |
| **ZMP** | Ensure walking stability | Don't fall forward |
| **CoM control** | Maintain balance | Stay upright |
| **Collision avoidance** | Safety | Don't hit obstacles |

## What You'll Learn

- Calculate positions with forward kinematics
- Find joint angles with inverse kinematics
- Understand forces and motion (dynamics)
- Know how humanoids walk safely
- Control balance and center of mass
- Avoid collisions and respect joint limits