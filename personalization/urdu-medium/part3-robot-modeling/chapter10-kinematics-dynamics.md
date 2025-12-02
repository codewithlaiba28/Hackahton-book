# Chapter 10: Humanoid Kinematics aur Dynamics

## Forward Kinematics (FK)

**Goal**: Diye gaye sab joint angles → hand/foot position pata karna.

* Robot ke base se start karo
* Har joint ki rotation + translation sequentially apply karo
* Result = exact position aur orientation of end-effector

Matrix multiplication ka chain → bahut fast, unique solution.

**Use Cases**:

* Current pose RViz me dikhana
* Collision check karna
* Animation

---

## Inverse Kinematics (IK)

**Goal**: Main chahta hoon hand ko (x, y, z) me rakhna with given orientation → kaunse joint angles chahiye?

Reality:

* Multiple solutions (elbow up/down, wrist flipped, …)
* Kuch targets impossible hote hain (bahut door, singularities)
* Solvers (MoveIt, TRAC-IK, BioIK) ek feasible solution dhoond lete hain

**Use Cases**:

* Foot placement while walking
* Objects tak reach karna
* Whole-body poses (wave, dance, balance)

---

## Rigid Body Dynamics

**Goal**: Compute torques/forces for desired motion

Simplified equation:
**Torque = Inertia × angular acceleration + gravity + Coriolis**

Methods:

* **Newton-Euler** → recursive, fast, real-time control
* **Lagrangian** → clean math, planning ke liye acha

Libraries: Pinocchio, RBDL, RigidBodyDynamicsLibrary

**Why it matters**:

* Motor current predict karna
* Realistic walking/jumping simulate karna
* Feed-forward torque controllers me use karna

---

## Bipedal Walking – Upright rehna

Walking = do phases repeat karna:

1. **Single support** – sirf ek foot ground pe
2. **Double support** – dono feet ground pe (short)

### Zero Moment Point (ZMP)

* Ground pe woh point jahan net moment = 0
* ZMP ko support polygon ke andar rakho → tipping avoid karne ke liye
* Advanced humanoids (Boston Dynamics, ASIMO, Tesla Bot) hip/foot adjust karke ZMP safe rakhtay hain

### Center of Mass (CoM) Control

* Standing: CoM projection feet ke upar
* Walking: CoM smooth path follow kare aur ZMP safe rahe
* **Capture Point** → predict karta hai next step jahan robot girne se bach sake

---

## Joint Limits & Safety

| Limit type     | Meaning                | Typical value          |
| -------------- | ---------------------- | ---------------------- |
| Position limit | Hard/soft angle limits | Shoulder: -90° to +90° |
| Velocity limit | Max joint speed        | 2–5 rad/s              |
| Torque/Effort  | Max motor torque       | 50–300 Nm              |

**Other safety measures**:

* Self-collision avoidance (arms torso/head se na takrayen)
* Real-time reaction → emergency stop, zero torque if unexpected obstacle

---

## Simple 3-Link Arm Example

**Forward Kinematics**

* L1 = 0.5 m, θ1 = 30°
* L2 = 0.4 m, θ2 = 60°
* L3 = 0.2 m, θ3 = -30°
  → Hand position ≈ (0.92 m forward, 0.57 m up)

**Inverse Kinematics**

* Target = (0.9 m, 0.6 m)
* Solutions:

  * Elbow-down: θ1=25°, θ2=70°, θ3=-35°
  * Elbow-up: θ1=40°, θ2=-50°, θ3=45°

---

## Quick Reference

| Task                      | Method / Tool                                |
| ------------------------- | -------------------------------------------- |
| Current hand pose         | Forward Kinematics                           |
| Reach a point/orientation | Inverse Kinematics (MoveIt/BioIK)            |
| Smooth, strong motion     | Dynamics + torque feed-forward               |
| Walk without falling      | ZMP control + Linear Inverted Pendulum Model |
| Recover balance           | Capture Point + quick step                   |
| Safe operation            | Joint limits + collision avoidance           |
| Whole-body tasks          | Task-space QP control (IHMC, OpenSoT)        |

Ab aap samajh gaye ho kaise humanoids jaise Atlas run karte hain, backflip karte hain aur rarely girte hain — aur kaise apna khud ka humanoid design kar sakte ho.
