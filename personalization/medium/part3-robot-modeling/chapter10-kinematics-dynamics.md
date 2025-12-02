# Chapter 10: Humanoid Kinematics and Dynamics  

## Forward Kinematics (FK)  
**Goal**: Given all joint angles → where is the hand/foot?

- Start from the robot’s base  
- Apply each joint’s rotation + translation one by one  
- Final result = exact position and orientation of the end-effector  

It’s just a chain of matrix multiplications.  
Very fast, always one unique answer.

**Use**:  
- Show current pose in RViz  
- Check if the arm will hit something  
- Animation

## Inverse Kinematics (IK)  
**Goal**: I want the hand at (x, y, z) with this orientation → what joint angles do I need?

**Reality check**:  
- Usually 5–20 possible solutions (elbow up/down, wrist flipped, etc.)  
- Some targets are impossible (too far, singularity)  
- Numerical solvers (MoveIt, TRAC-IK, BioIK) find one good solution

**Real humanoid uses**:  
- Foot placement while walking  
- Reaching for a cup  
- Whole-body poses (wave, dance, balance)

## Rigid Body Dynamics  
**Goal**: Calculate the torques/forces needed to create a desired motion

Core equation (simplified):  
Torque = Inertia × angular acceleration + gravity + Coriolis terms

Two popular methods:  
- Newton-Euler → recursive, super fast (used in real-time control)  
- Lagrangian → cleaner math, good for planning

Libraries you’ll actually use: Pinocchio, RBDL, RigidBodyDynamicsLibrary

**Why you care**:  
- Predict how much current the motors need  
- Simulate realistic walking/jumping  
- Feed-forward torque in controllers

## Bipedal Walking – The Art of Not Falling

Walking = repeating two phases:  
1. **Single support** – only one foot on ground  
2. **Double support** – both feet on ground (very short)

### Zero Moment Point (ZMP) – the magic stability point  
- ZMP is the point on the ground where the net moment is zero  
- Rule of thumb: keep ZMP strictly inside the support polygon (area under the feet)  
- If ZMP goes outside → robot tips over

Real controllers (Boston Dynamics, Honda ASIMO, Tesla Bot) keep ZMP inside a safe box by moving hips and planning footsteps.

### Center of Mass (CoM) Control  
- For standing still: CoM projection must be above the feet  
- For walking: CoM moves in a smooth path while ZMP stays safe  
- Advanced trick: Capture Point – predicts where to step next to stop falling

## Joint Limits & Safety

| Limit type      | Meaning                              | Typical value           |
|------------------|--------------------------------------|-------------------------|
| Position limit   | Hard/soft angle limits               | Shoulder: -90° to +90°  |
| Velocity limit   | Max joint speed                      | 2–5 rad/s               |
| Torque/Effort    | Max motor torque                     | 50–300 Nm               |

**Self-collision avoidance**  
- Arm must never hit torso or head  
- MoveIt and most planners automatically check this

**Real-time reaction**  
- If something unexpected appears → emergency stop + zero torque (go limp)

## Simple 3-Link Arm Example (with numbers)

**Forward Kinematics**  
L1 = 0.5 m, θ1 = 30°  
L2 = 0.4 m, θ2 = 60°  
L3 = 0.2 m, θ3 = -30°  
→ Hand position = (0.92 m forward, 0.57 m up)

**Inverse Kinematics**  
Target = (0.9 m, 0.6 m)  
→ Two good solutions:  
   • Elbow-down: θ1=25°, θ2=70°, θ3=-35°  
   • Elbow-up:   θ1=40°, θ2=-50°, θ3=45°

## Quick Reference Table

| Task                     | Method / Tool you use               |
|--------------------------|-------------------------------------|
| Know current hand pose   | Forward Kinematics                  |
| Reach a point/orientation| Inverse Kinematics (MoveIt, BioIK)  |
| Smooth, strong motion    | Dynamics + torque feed-forward      |
| Walk without falling     | ZMP control + Linear Inverted Pendulum Model |
| Recover balance          | Capture Point + quick step          |
| Safe operation           | Joint limits + collision avoidance  |
| Whole-body tasks         | Task-space QP control (e.g., IHMC, OpenSoT) |

You now understand why Atlas can run, backflip, and (almost) never fall — and how you can make your own humanoid do the same.

