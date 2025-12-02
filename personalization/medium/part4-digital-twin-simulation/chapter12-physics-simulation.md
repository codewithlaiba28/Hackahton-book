---
sidebar_label: 'Chapter 12: Physics Simulation'
---

# Chapter 12: Physics Simulation in Gazebo (Medium Level)

Gazebo is not just a 3D visualizer — its real power comes from built-in **physics simulation**. This lets your robot models move, fall, push objects, and interact with the world in a realistic way. In this chapter, we'll explore the main ideas behind physics in Gazebo at a medium level of detail.

## Physics Engines in Gazebo

Gazebo doesn't calculate physics by itself. Instead, it uses external **physics engines** through plugins. The most commonly used engines are:

- **ODE** – the traditional default (fast and simple)
- **Bullet** – very popular, good performance
- **DART** – excellent for robots with many contacts and complex mechanisms
- **Simbody** – great for high-accuracy biomechanical simulations

You pick the engine in the `.world` file using the `<physics>` tag. Different engines behave slightly differently, so you can choose the one that works best for your robot.

## Rigid Bodies and Basic Properties

Every physical object in Gazebo (links of a robot, tables, boxes, etc.) is treated as a **rigid body**. A rigid body has:

- **Mass** – how heavy it is
- **Inertia tensor** – how the mass is distributed (affects spinning)
- **Center of mass** – where the mass is concentrated

The physics engine uses these values plus forces (gravity, motors, contacts) to decide how the object moves.

## Collisions and Contacts

For objects to “feel solid”, Gazebo needs two things:

1. **Collision geometry** – simple shapes (box, cylinder, sphere, mesh) attached to each link. These are usually simpler than the visual mesh to save computation.
2. **Contact physics** – when two collision shapes touch, the engine creates contact forces.

Important contact parameters:

- **Friction** (static and sliding)
- **Restitution** (bounciness) – 0 = no bounce, 1 = perfect bounce
- **Soft contacts** – a bit of “give” so objects don't explode on impact

## Joints and Their Physics

Robot joints are not perfect. In Gazebo you can add:

- Position/angle limits
- Velocity and effort limits
- **Damping** – slows the joint down (like viscous oil)
- **Friction** – constant resistance even at low speeds

These parameters are very important: without enough damping or friction, a robot arm can oscillate forever or become unstable.

## Why Tuning Is Necessary

Default physics settings rarely work perfectly for real robots. Common problems:

- Robot shakes or “explodes” on the ground
- Joints are too springy or too stiff
- Objects slide too much or not enough

You usually need to tune:

| Parameter            | What it does                              | Typical adjustment |
|----------------------|-------------------------------------------|--------------------|
| `real_time_update_rate` / `max_step_size` | Simulation time step               | Smaller = more stable, slower |
| `iters` (solver iterations) | How accurately constraints are solved   | Increase for stability |
| `erp` (Error Reduction Parameter) | How fast penetration is corrected      | 0.1–0.9 common |
| `cfm` (Constraint Force Mixing)   | Adds “softness” to contacts            | Small values (1e-5) help |
| Joint damping & friction           | Stops oscillations                     | Add realistic values |

Tuning is an iterative process: change one thing, test, observe, repeat.

## Summary

Gazebo's physics system turns a static 3D model into a dynamic digital twin. By understanding rigid bodies, collisions, joints, and the available physics engines, you can create simulations that behave very close to real hardware — but getting there almost always requires careful parameter tuning.