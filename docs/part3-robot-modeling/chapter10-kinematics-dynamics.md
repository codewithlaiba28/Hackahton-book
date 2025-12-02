# Chapter 10: Humanoid Kinematics and Dynamics

## 10.1 Forward Kinematics

**Kinematics** is the study of motion without considering the forces that cause it. In robotics, **forward kinematics** is the process of computing the position and orientation (pose) of a robot's end-effector (or any point of interest) in its operational space, given the joint angles (or displacements) of its kinematic chain.

### Introduction to Kinematics
For a robotic manipulator or a humanoid arm, forward kinematics allows us to answer questions like: "If the shoulder joint is at 30 degrees and the elbow at 90 degrees, where is the hand?"

### Computing End-Effector Positions and Orientations from Joint Angles
This is typically done using a series of transformations (rotations and translations) from one link's coordinate frame to the next, starting from the robot's base. Each joint contributes to the overall transformation.

### Denavit-Hartenberg (DH) Parameters for Kinematic Chains
The **Denavit-Hartenberg (DH) convention** is a widely used standardized notation for describing the geometry of robotic manipulators using a minimal set of four parameters per link. These parameters describe the relative position and orientation of adjacent link coordinate frames.

### Transformation Matrices
Each link-joint pair is associated with a 4x4 homogeneous transformation matrix ($\mathbf{T}$), which combines rotation and translation. The overall transformation from the base to the end-effector is the product of these individual transformation matrices along the kinematic chain.





## 10.2 Inverse Kinematics for Planning Humanoid Poses

**Inverse kinematics (IK)** is the inverse problem of forward kinematics: given a desired position and orientation of the end-effector, what are the corresponding joint angles that achieve this pose? For humanoid robots, IK is crucial for planning natural and complex poses for tasks like reaching, walking, or balancing.

### Introduction to Inverse Kinematics: Finding Joint Angles for Desired End-Effector Poses
IK allows us to answer questions like: "To place the robot's hand at position (X, Y, Z) with a specific orientation, what should each joint angle be?"

### Challenges: Multiple Solutions, Singularities, Redundancy
Unlike forward kinematics, which usually has a unique solution, inverse kinematics can be challenging due to:
*   **Multiple Solutions**: A desired end-effector pose might be achievable with several different sets of joint angles.
*   **Singularities**: Certain robot configurations where the end-effector loses one or more degrees of freedom, leading to infinite solutions or no solutions.
*   **Redundancy**: Robots with more degrees of freedom than necessary for a task (e.g., a 7-DOF arm for a 6-DOF task) have an infinite number of solutions.

### Numerical and Analytical IK Methods
*   **Analytical IK**: Provides closed-form solutions (equations) for joint angles. Possible for simpler manipulators but becomes very complex or impossible for robots with many DOFs or complex geometries.
*   **Numerical IK**: Uses iterative optimization algorithms to find approximate solutions. More general but computationally intensive and can get stuck in local minima.

### Application to Humanoid Body Posing
For humanoid robots, IK is essential for:
*   **Gait Generation**: Calculating joint angles for feet and leg movements during walking.
*   **Balancing**: Adjusting body posture to maintain balance.
*   **Whole-Body Control**: Coordinating multiple end-effectors (hands, feet, head) simultaneously.
*   **Interaction**: Posing the robot for human-robot collaboration.

## 10.3 Rigid-Body Dynamics and Equations of Motion

While kinematics describes robot motion, **dynamics** studies the relationship between motion and the forces and torques that cause it. Understanding dynamics is essential for controlling robots accurately, especially for tasks involving interaction with the environment or rapid movements.

### Introduction to Dynamics: Forces, Torques, and Motion
Dynamics allows us to answer questions like: "What torques are required at each joint to make the robot move from pose A to pose B in a specific time?" or "Given these joint torques, how will the robot accelerate?"

### Newton-Euler and Lagrange Formulations
Two primary methods for deriving the equations of motion for robotic systems are:
*   **Newton-Euler Formulation**: A recursive approach that applies Newton's second law and Euler's equation for rotational motion sequentially from link to link (either from base to end-effector or vice-versa). It's computationally efficient for forward dynamics (calculating acceleration from forces).
*   **Lagrange Formulation**: A more general, energy-based approach that uses kinetic and potential energy to derive the equations of motion. It provides a more compact representation, especially useful for inverse dynamics (calculating forces from desired motion).

### Equations of Motion for Multi-Body Systems
The general form of the equations of motion for an N-DOF robot is:
$$
\mathbf{M}(\mathbf{q})\ddot{\mathbf{q}} + \mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}} + \mathbf{g}(\mathbf{q}) = \boldsymbol{\tau}
$$
Where:
*   $\mathbf{q}$, $\dot{\mathbf{q}}$, $\ddot{\mathbf{q}}$ are the joint position, velocity, and acceleration vectors.
*   $\mathbf{M}(\mathbf{q})$ is the mass (or inertia) matrix.
*   $\mathbf{C}(\mathbf{q}, \dot{\mathbf{q}})\dot{\mathbf{q}}$ represents Coriolis and centrifugal forces.
*   $\mathbf{g}(\mathbf{q})$ represents gravitational forces.
*   $\boldsymbol{\tau}$ is the vector of joint torques.

## 10.4 Bipedal Walking Mechanics

**Bipedal walking** is one of the most complex and fascinating aspects of humanoid robotics. It involves dynamic balance, coordination of multiple joints, and continuous interaction with the ground.

### Understanding the Biomechanics of Bipedal Locomotion
Human walking is a "controlled fall," where the body's center of mass continuously falls and is then caught by placing the swinging foot forward. Key characteristics include:
*   **Single Support Phase**: Only one foot is on the ground.
*   **Double Support Phase**: Both feet are on the ground (briefly).
*   **Swing Phase**: One foot moves from back to front.

### Key Concepts: ZMP (Zero Moment Point), COP (Center of Pressure)
*   **Zero Moment Point (ZMP)**: A critical concept for stable bipedal walking. The ZMP is the point on the ground where the net moment of all forces (gravity, inertia, contact forces) acting on the robot is zero. For stable walking, the ZMP must remain within the robot's support polygon (the area defined by the contact points of the feet on the ground).
*   **Center of Pressure (COP)**: The point on the ground where the resultant ground reaction force acts. During static balance, COP is equal to ZMP.

### Walking Gaits and Trajectory Generation
Designing walking gaits involves generating trajectories for all joints over time, ensuring ZMP stability, ground clearance for the swinging foot, and smooth transitions between phases. Common approaches include:
*   **Pattern Generators**: Pre-defined joint trajectories.
*   **Optimization-based Methods**: Generating trajectories that minimize energy or maximize stability.

### Diagram: Zero Moment Point (ZMP) Concept
<!-- TODO: Add a diagram illustrating the Zero Moment Point (ZMP) and support polygon for bipedal walking. Refer to specs/001-robot-modeling/contracts/diagram-standards.md for guidelines. Example: ![Zero Moment Point Concept](../img/chapter10/zmp_concept.svg) -->
![Placeholder for ZMP Concept Diagram](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQImD2KNhCRi6zdnRgRUQN1qRNRBcfG7Gz4i7HsIygF_kGqqMOCXnp4KaPibGTM)



## 10.5 Center-of-Mass Analysis and Balance Control

Maintaining balance is paramount for humanoid robots, especially during dynamic tasks like walking, running, or interacting with objects. **Center-of-Mass (CoM)** analysis is a fundamental tool for understanding and controlling robot stability.

### Importance of Center of Mass (CoM) for Stability
*   The **CoM** is the unique point where the weighted relative position of the distributed mass of an object sums to zero.
*   For a robot to be statically stable, its projection of the CoM onto the ground must fall within its support polygon.
*   For dynamic stability (e.g., walking), CoM trajectory plays a critical role in ZMP control.

### Methods for Balance Control in Humanoid Robots
Balance control strategies often involve:
*   **Foot Placement Control**: Adjusting where the swinging foot lands.
*   **Ankle/Hip Strategies**: Using joint torques to shift the CoM projection.
*   **Whole-Body Control**: Coordinating all robot joints to achieve a desired CoM trajectory and maintain balance.

### Control Strategies: Whole-Body Control, Impedance Control
*   **Whole-Body Control (WBC)**: A comprehensive control framework that coordinates the motion of all joints to simultaneously achieve multiple tasks (e.g., maintain balance, reach for an object, avoid obstacles) while respecting joint limits and contact constraints.
*   **Impedance Control**: Focuses on controlling the robot's dynamic interaction with its environment, making it behave like a spring-damper system, which is useful for compliant and robust physical interactions.

### Diagram: Center of Mass (CoM) and Support Polygon
<!-- TODO: Add a diagram illustrating the Center of Mass (CoM) and its projection relative to the support polygon for robot balance. Refer to specs/001-robot-modeling/contracts/diagram-standards.md for guidelines. Example: ![CoM and Support Polygon](../img/chapter10/com_support_polygon.svg) -->
![Placeholder for CoM and Support Polygon Diagram](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjdWyjGhEqs7aVgNMNL-uD99z0w4QtJFvR-y_Boqzfno8i5G2xUAKGtSijsg6T)



## 10.6 Handling Joint Limits and Collision Avoidance

For safe and reliable robot operation, it is crucial to ensure that joint movements stay within their physical limits and that the robot avoids collisions with itself or its environment.

### Integrating Joint Limits into Motion Planning
*   **Hard Limits**: Physical stop limits imposed by the robot's mechanical design (e.g., maximum and minimum joint angles).
*   **Soft Limits**: Operational limits that are stricter than hard limits, used to prevent wear and tear or avoid undesirable configurations.
*   Motion planning algorithms must incorporate these limits to generate valid and executable trajectories.

### Collision Detection: Algorithms and Implementations
**Collision detection** is the process of determining if any parts of the robot (or objects in the environment) are intersecting.
*   **Algorithms**:
    *   **Bounding Volume Hierarchies (BVH)**: Using simple geometric shapes (spheres, axis-aligned bounding boxes) to approximate robot links and objects, checking for intersections recursively.
    *   **Distance Queries**: Calculating the minimum distance between robot parts and obstacles.
*   **Implementations**: Libraries like FCL (Flexible Collision Library) are commonly used in ROS and other robotics frameworks.

### Collision Avoidance Strategies in Planning and Control
*   **Path Planning**: Motion planners generate collision-free paths by considering the robot's geometry and known obstacles.
*   **Reactive Avoidance**: During execution, if an unexpected obstacle is detected, the robot can dynamically adjust its trajectory or stop to avoid a collision.
*   **Self-Collision Avoidance**: Preventing the robot from colliding with its own links.
*   **Environmental Collision Avoidance**: Preventing collisions with objects in the workspace.

