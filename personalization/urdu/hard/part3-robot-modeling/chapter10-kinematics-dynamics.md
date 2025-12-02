# Chapter 10: Humanoid Kinematics aur Dynamics

## 10.1 Forward Kinematics

**Kinematics** motion ka study hai without considering forces jo usse cause karte hain. Robotics mein, **forward kinematics** position aur orientation (pose) compute karne ki process hai robot ke end-effector (ya koi bhi point of interest) ka apne operational space mein, given joint angles (ya displacements) apne kinematic chain ke.

### Kinematics ka Taaruf

Ek robotic manipulator ya humanoid arm ke liye, forward kinematics hume questions answer karne deta hai jaise: "Agar shoulder joint 30 degrees par hai aur elbow 90 degrees par, toh hand kahan hai?"

### End-Effector Positions aur Orientations Compute Karna Joint Angles se

Yeh typically done hota hai series of transformations (rotations aur translations) use karte hue ek link ke coordinate frame se dusre tak, starting robot ke base se. Har joint overall transformation mein contribute karta hai.

### Denavit-Hartenberg (DH) Parameters Kinematic Chains ke liye

**Denavit-Hartenberg (DH) convention** ek widely used standardized notation hai describing robotic manipulators ki geometry ek minimal set use karte hue four parameters per link ke. Yeh parameters describe karte hain adjacent link coordinate frames ka relative position aur orientation.

### Transformation Matrices

Har link-joint pair ek 4x4 homogeneous transformation matrix ($\mathbf{T}$) se associated hota hai, jo rotation aur translation combine karta hai. Overall transformation base se end-effector tak inka product hai yeh individual transformation matrices ka along kinematic chain.

### Diagram: Kinematic Chain aur Coordinate Frames

<!-- TODO: Add a diagram illustrating a simple kinematic chain with defined coordinate frames (e.g., using DH parameters). Refer to specs/001-robot-modeling/contracts/diagram-standards.md for guidelines. Example: ![Kinematic Chain and Coordinate Frames](../img/chapter10/kinematic_chain.svg) -->

![Kinematic Chain aur Coordinate Frames ke liye Placeholder](https://via.placeholder.com/600x300?text=Kinematic+Chain+and+Coordinate+Frames+Diagram)

## 10.2 Humanoid Poses Plan Karne ke liye Inverse Kinematics

**Inverse kinematics (IK)** forward kinematics ka inverse problem hai: given ek desired position aur orientation end-effector ka, corresponding joint angles kaun se hain jo yeh pose achieve karte hain? Humanoid robots ke liye, IK crucial hai natural aur complex poses plan karne ke liye tasks jaise reaching, walking, ya balancing ke liye.

### Inverse Kinematics ka Taaruf: Joint Angles Find Karna Desired End-Effector Poses ke liye

IK hume questions answer karne deta hai jaise: "Robot ke hand ko position (X, Y, Z) par specific orientation ke saath place karne ke liye, har joint angle kya hona chahiye?"

### Challenges: Multiple Solutions, Singularities, Redundancy

Unlike forward kinematics, jo usually ek unique solution rakhta hai, inverse kinematics challenging ho sakta hai because of:

* **Multiple Solutions**: Ek desired end-effector pose several different sets joint angles se achievable ho sakta hai.
* **Singularities**: Certain robot configurations jahan end-effector ek ya more degrees of freedom lose karta hai, leading infinite solutions ya no solutions.
* **Redundancy**: Robots jo more degrees of freedom rakhte hain necessary se zyada ek task ke liye (jaise 7-DOF arm ek 6-DOF task ke liye) infinite number solutions rakhte hain.

### Numerical aur Analytical IK Methods

* **Analytical IK**: Closed-form solutions (equations) provide karta hai joint angles ke liye. Possible hai simpler manipulators ke liye lekin very complex ya impossible ban jata hai robots ke liye many DOFs ya complex geometries ke saath.
* **Numerical IK**: Iterative optimization algorithms use karta hai find karne ke liye approximate solutions. More general lekin computationally intensive aur local minima mein stuck ho sakta hai.

### Application Humanoid Body Posing ke liye

Humanoid robots ke liye, IK essential hai:

* **Gait Generation**: Calculate karna joint angles feet aur leg movements ke liye walking ke doran.
* **Balancing**: Body posture adjust karna maintain karne ke liye balance.
* **Whole-Body Control**: Coordinate karna multiple end-effectors (hands, feet, head) simultaneously.
* **Interaction**: Pose karna robot human-robot collaboration ke liye.

## 10.3 Rigid-Body Dynamics aur Equations of Motion

Jab ke kinematics robot motion describe karta hai, **dynamics** relationship study karta hai motion aur forces aur torques ke darmiyan jo usse cause karte hain. Understanding dynamics essential hai accurately robots control karne ke liye, especially tasks ke liye involving environment ke saath interaction ya rapid movements.

### Dynamics ka Taaruf: Forces, Torques, aur Motion

Dynamics hume questions answer karne deta hai jaise: "Har joint par kaun se torques zarorat hain robot ko pose A se pose B mein specific time mein move karne ke liye?" ya "Yeh joint torques diye jayein, toh robot kaise accelerate hoga?"

### Newton-Euler aur Lagrange Formulations

Dono primary methods robotic systems ke equations of motion derive karne ke liye hain:

* **Newton-Euler Formulation**: Ek recursive approach jo Newton ke second law aur Euler ke equation apply karta hai rotational motion ke liye sequentially link to link se (either base se end-effector ya vice-versa). Yeh computationally efficient hai forward dynamics ke liye (calculate karna acceleration forces se).
* $\mathbf{g}(\mathbf{q})$ gravitational forces represent karta hai.
* $\boldsymbol{\tau}$ joint torques ka vector hai.

## 10.4 Bipedal Walking Mechanics

**Bipedal walking** humanoid robotics ke most complex aur fascinating aspects mein se ek hai. Ismein dynamic balance, multiple joints ka coordination, aur continuous ground ke saath interaction shamil hai.

### Bipedal Locomotion ke Biomechanics Samajhna

Human walking ek "controlled fall" hai, jahan body ke center of mass continuously fall karta hai aur phir swinging foot ko forward place karte hue catch kiya jata hai. Key characteristics mein shamil hain:

* **Single Support Phase**: Sirf ek foot ground par hai.
* **Double Support Phase**: Dono feet ground par hain (briefly).
* **Swing Phase**: Ek foot back se front mein move karta hai.

### Key Concepts: ZMP (Zero Moment Point), COP (Center of Pressure)

* **Zero Moment Point (ZMP)**: Ek critical concept stable bipedal walking ke liye. ZMP woh point hai ground par jahan sab forces (gravity, inertia, contact forces) ka net moment jo robot par act karte hain zero hai. Stable walking ke liye, ZMP robot ke support polygon ke andar remain karna chahiye (woh area define kiye jayein contact points dwara feet ke ground par).
* **Center of Pressure (COP)**: Woh point ground par jahan resultant ground reaction force act karta hai. Static balance ke doran, COP ZMP ke equal hota hai.

### Walking Gaits aur Trajectory Generation

Walking gaits design karna involve karta hai generate karna trajectories sab joints ke liye over time, ensure karte hue ZMP stability, ground clearance swinging foot ke liye, aur smooth transitions phases ke darmiyan. Common approaches mein shamil hain:

* **Pattern Generators**: Pre-defined joint trajectories.
* **Optimization-based Methods**: Generate karna trajectories jo energy minimize ya stability maximize karte hain.

### Diagram: Zero Moment Point (ZMP) Concept

<!-- TODO: Add a diagram illustrating the Zero Moment Point (ZMP) and support polygon for bipedal walking. Refer to specs/001-robot-modeling/contracts/diagram-standards.md for guidelines. Example: ![Zero Moment Point Concept](../img/chapter10/zmp_concept.svg) -->

![ZMP Concept ke liye Placeholder Diagram](https://via.placeholder.com/600x300?text=ZMP+Concept+Diagram)

## 10.5 Center-of-Mass Analysis aur Balance Control

Balance maintain karna paramount hai humanoid robots ke liye, especially dynamic tasks ke doran jaise walking, running, ya objects interact karna. **Center-of-Mass (CoM)** analysis ek fundamental tool hai understanding aur controlling robot stability ke liye.

### Center of Mass (CoM) ka Importance Stability ke liye

* **CoM** woh unique point hai jahan distributed mass ka weighted relative position sums to zero hota hai.
* Ek robot statically stable hone ke liye, uska CoM ka projection ground par apne support polygon ke andar fall karna chahiye.
* Dynamic stability ke liye (jaise walking), CoM trajectory ek critical role play karta hai ZMP control mein.

### Humanoid Robots mein Balance Control ke liye Methods

Balance control strategies often involve karte hain:

* **Foot Placement Control**: Adjust karna jahan swinging foot land kare.
* **Ankle/Hip Strategies**: Use karna joint torques shift karne ke liye CoM projection.
* **Whole-Body Control**: Coordinate karna sab robot joints achieve karne ke liye desired CoM trajectory aur maintain karne ke liye balance.

### Control Strategies: Whole-Body Control, Impedance Control

* **Whole-Body Control (WBC)**: Ek comprehensive control framework jo coordinate karta hai sab joints ke motion ko simultaneously achieve karne ke liye multiple tasks (jaise maintain karna balance, reach karna ek object, avoid karna obstacles) while respect karte hue joint limits aur contact constraints.
* **Impedance Control**: Focus karta hai control karna robot ke dynamic interaction apne environment ke saath, making usse behave karna ek spring-damper system jaisa, jo useful hai compliant aur robust physical interactions ke liye.

### Diagram: Center of Mass (CoM) aur Support Polygon

<!-- TODO: Add a diagram illustrating the Center of Mass (CoM) and its projection relative to the support polygon for robot balance. Refer to specs/001-robot-modeling/contracts/diagram-standards.md for guidelines. Example: ![CoM and Support Polygon](../img/chapter10/com_support_polygon.svg) -->

![CoM aur Support Polygon ke liye Placeholder Diagram](https://via.placeholder.com/600x300?text=CoM+and+Support+Polygon+Diagram)

## 10.6 Joint Limits aur Collision Avoidance Handle Karna

Safe aur reliable robot operation ke liye, crucial hai ensure karna ke joint movements un ke physical limits ke andar stay karin aur robot apne saath ya apne environment ke saath collisions avoid kare.

### Motion Planning Mein Joint Limits Integrate Karna

* **Hard Limits**: Physical stop limits imposed robot ke mechanical design dwara (jaise maximum aur minimum joint angles).
* **Soft Limits**: Operational limits jo hard limits se stricter hote hain, use kiye jate hain prevent karne ke liye wear aur tear ya avoid karne undesirable configurations.
* Motion planning algorithms in limits ko incorporate karna chahiye generate karne ke liye valid aur executable trajectories.

### Collision Detection: Algorithms aur Implementations

**Collision detection** woh process hai determine karne ki agar robot ke koi parts (ya environment mein objects) intersecting hain.

* **Algorithms**:
    * **Bounding Volume Hierarchies (BVH)**: Use karna simple geometric shapes (spheres, axis-aligned bounding boxes) approximate karne ke liye robot links aur objects, check karna intersections recursively.
    * **Distance Queries**: Calculate karna minimum distance robot parts aur obstacles ke darmiyan.
* **Implementations**: Libraries jaise FCL (Flexible Collision Library) commonly use hote hain ROS aur other robotics frameworks mein.

### Planning aur Control Mein Collision Avoidance Strategies

* **Path Planning**: Motion planners generate karte hain collision-free paths by considering robot ka geometry aur known obstacles.
* **Reactive Avoidance**: Execution ke doran, agar unexpected obstacle detect ho, robot dynamically adjust kar sakta hai apna trajectory ya stop kar sakta hai avoid karne ke liye collision.
* **Self-Collision Avoidance**: Prevent karna robot apne saath collide karna apne own links se.
* **Environmental Collision Avoidance**: Prevent karna collisions workspace mein objects ke saath.




































