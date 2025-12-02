# Data Model: Digital Twin Simulation Concepts

**Purpose**: To define the key conceptual entities and their relationships within the "Digital Twin Simulation" domain. This is not a software data model, but a conceptual one for the purpose of documentation.

## Entity: Robot Model

- **Description**: Represents the physical robot. It defines the robot's structure, appearance, and physical properties.
- **Attributes**:
    - **Links**: The rigid bodies that make up the robot.
    - **Joints**: The connections between links, defining how they can move relative to each other.
    - **Visuals**: The 3D meshes used to render the robot.
    - **Collisions**: The 3D geometries used for physics-based collision detection.
    - **Inertia**: The mass and rotational inertia of each link.
- **Formats**: URDF, SDF, Xacro

## Entity: Simulation World

- **Description**: Represents the environment in which the robot is simulated.
- **Attributes**:
    - **Static Objects**: Scenery, furniture, and other non-moving parts of the environment.
    - **Lights**: Light sources that illuminate the scene.
    - **Physics Properties**: Global physics parameters like gravity.
- **Formats**: SDF

## Entity: Sensor

- **Description**: A device attached to the robot that collects data from the simulated world.
- **Attributes**:
    - **Type**: The kind of sensor (e.g., Camera, LiDAR, IMU).
    - **Update Rate**: How often the sensor publishes new data.
    - **Configuration**: Sensor-specific parameters (e.g., resolution for a camera, range for a LiDAR).
    - **Noise Model**: Parameters that define the type and amount of noise to add to the sensor data.
- **Relationships**: Attached to a **Robot Model**'s link.

## Entity: Physics Engine

- **Description**: The software component that calculates the motion of objects in the simulation.
- **Attributes**:
    - **Name**: The name of the engine (e.g., ODE, Bullet, Simbody, DART).
    - **Parameters**: Global physics parameters like the simulation time step.
- **Relationships**: Integrated into the **Simulation World** (managed by Gazebo).

## Entity: Digital Twin

- **Description**: The holistic virtual replica of the robot and its environment.
- **Composition**: It is a composite entity made up of:
    - 1 **Robot Model**
    - 1 **Simulation World**
    - 1 or more **Sensors**
    - 1 **Physics Engine**
- **Purpose**: To provide a platform for development, testing, and validation that behaves as closely as possible to the real-world system.
