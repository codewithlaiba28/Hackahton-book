# Chapter 33: Bipedal Locomotion and Balance Control

## Introduction to Bipedal Locomotion

Bipedal locomotion, the ability to move using two legs, is a cornerstone of humanoid robotics. It allows robots to navigate human-centric environments designed for walking, offering advantages in terms of obstacle avoidance, reach, and energy efficiency compared to wheeled or multi-legged systems in certain scenarios. However, achieving stable and dynamic bipedal movement is a complex control challenge due requiring continuous balance maintenance.

## Principles of Balance Control

Maintaining balance is paramount for bipedal robots. Two fundamental concepts underpin balance control:

### Center of Mass (CoM)
The **Center of Mass (CoM)** is the unique point where the weighted relative position of the distributed mass sums to zero. For a humanoid robot, controlling the projection of its CoM onto the ground is critical. The robot remains stable as long as this projection stays within its **support polygon**, which is the convex hull of the ground contact points (e.g., the area encompassed by its feet when standing).

### Zero Moment Point (ZMP)
The **Zero Moment Point (ZMP)** is a concept derived from classical mechanics that defines the point on the ground about which the net moment of all forces (gravitational, inertial, and contact forces) is zero. In bipedal locomotion, the ZMP is often used as a control target. If the ZMP remains within the support polygon, the robot will not fall over. When the ZMP moves to the edge of the support polygon, it indicates that the robot is about to lose balance in that direction. Controllers often aim to keep the ZMP within a desired region inside the support polygon or to precisely control its trajectory to achieve dynamic movements.

## Dynamic Walking Controllers

Beyond static balance, humanoid robots employ dynamic walking controllers to achieve fluid and natural gaits. These controllers manage the complex interplay between leg movements, body posture, and CoM/ZMP trajectories.

### Model Predictive Control (MPC)
**Model Predictive Control (MPC)** is a popular approach where the robot's future motion is optimized over a short time horizon, taking into account dynamic constraints and desired ZMP trajectories. It allows for proactive adjustments to maintain stability and achieve desired gaits.

### Capture Point
The **Capture Point** is another critical concept, representing the point on the ground where the robot would need to step to instantaneously stop its fall. By controlling the capture point, a robot can dynamically react to disturbances and maintain balance even during highly dynamic motions.

## Navigating Uneven Terrain

Humanoid robots must adapt their locomotion strategies to handle varied and uneven terrain, which poses significant challenges to balance and foot placement.

### Terrain Adaptation
**Terrain adaptation** involves using sensor data (e.g., from lidar, depth cameras, force sensors) to perceive the ground surface and adjust foot placement, step height, and body posture accordingly. This allows the robot to step over obstacles, navigate slopes, and maintain stability on irregular surfaces.

### Compliance Control
**Compliance control** enables the robot's joints to yield to external forces, allowing its legs to conform to the terrain rather than rigidly resist it. This passive adaptation can improve stability and reduce impact forces on rough ground.

## Dynamic Actions (Running, Jumping)

Advanced bipedal locomotion extends to dynamic actions like running and jumping, which require precise control of impulses and momentum.

### Running Gaits
**Running gaits** involve phases where both feet are off the ground (aerial phase), demanding sophisticated control to manage momentum and prepare for landing. Controllers must ensure sufficient ground clearance and stable touchdown.

### Jumping
**Jumping** involves generating a large vertical impulse to propel the robot off the ground and then a controlled landing sequence to absorb impact and regain balance. This is one of the most challenging bipedal maneuvers.

Achieving robust bipedal locomotion and balance control is an ongoing research area, with continuous advancements pushing the capabilities of humanoid robots in dynamic and complex environments.