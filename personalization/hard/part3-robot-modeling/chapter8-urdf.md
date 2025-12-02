# Chapter 8: Unified Robot Description Format (URDF)

## 8.1 Basics of URDF

The **Unified Robot Description Format (URDF)** is an XML-based file format used in ROS (Robot Operating System) to describe all aspects of a robot. It serves as a declarative way to represent the physical and visual properties of a robot, making it possible for various ROS tools and algorithms to understand and interact with the robot model.

### Introduction to URDF: Purpose, Advantages, and Limitations
**Purpose**: URDF's primary purpose is to define a robot's kinematic and dynamic properties. This includes the robot's physical structure (links), how these parts are connected (joints), and properties like mass, inertia, visual appearance, and collision geometry.

**Advantages**:
*   **Standardization**: Provides a common format understood by a wide range of ROS tools (e.g., `rviz` for visualization, `moveit` for motion planning, Gazebo for simulation).
*   **Modularity**: Allows for easy modification and extension of robot models.
*   **Visualization**: Simplifies the process of visualizing robot models in 3D.
*   **Physics Integration**: Provides necessary parameters for physics engines in simulators.

**Limitations**:
*   **Single Robot Description**: Designed to describe a single robot, not entire environments or multiple robots in a scene.
*   **Tree Structure**: URDF assumes a single rigid body connected by joints forming a tree-like structure (no closed loops without additional mechanisms).
*   **Static Description**: Primarily describes the static properties of a robot. Dynamic properties like friction, elasticity, or more complex sensor descriptions are limited or require extensions.

### URDF as an XML format
URDF files are structured using XML (Extensible Markup Language). This means they consist of a hierarchical tree of elements (tags) and attributes, making them human-readable and machine-parsable. The XML structure provides a clear, standardized way to represent complex robot information.

## 8.2 XML Structure and Syntax

All URDF files begin with a root `<robot>` tag. Within this tag, you define the robot's links and joints, which are the two most fundamental components of any robot description.

### `robot` tag as the root element
The `<robot>` tag encapsulates the entire robot description. It typically includes a `name` attribute to identify the robot.

```xml
<robot name="my_robot">
  <!-- Links and Joints go here -->
</robot>
```

### Commonly used tags and their attributes
Inside the `<robot>` tag, the main elements are `<link>` and `<joint>`. Each of these can contain nested tags that define their specific properties.

**General XML Syntax**:
*   **Elements (Tags)**: Start with `<tag_name>` and end with `</tag_name>`.
*   **Attributes**: Key-value pairs within the opening tag of an element (e.g., `<link name="base_link">`).
*   **Hierarchy**: Elements are nested to represent relationships.

Understanding this basic XML structure is key to reading, writing, and debugging URDF files. The following sections will delve into the specific properties defined within `<link>` and `<joint>` tags.

## 8.3 Defining Links

A **link** in URDF represents a rigid body part of the robot. This could be anything from a robot's base, a wheel, a manipulator arm segment, or a camera housing. Links have physical properties such as mass, inertia, and geometric shape, and they can also have visual and collision characteristics.

### `link` tag: physical properties of robot segments
The `<link>` tag is the container for all properties related to a single link. It requires a `name` attribute, which must be unique.

```xml
<link name="base_link">
  <!-- Visual, Collision, and Inertial properties go here -->
</link>
```

### `visual` tag: appearance (geometry, materials)
The `<visual>` tag defines how the link appears in visualization tools like `rviz`. It typically includes:
*   **`<geometry>`**: Specifies the shape of the link (e.g., `box`, `cylinder`, `sphere`, or `mesh`).
    *   `box`: requires `size="X Y Z"`.
    *   `cylinder`: requires `radius="R" length="L"`.
    *   `sphere`: requires `radius="R"`.
    *   `mesh`: requires `filename="package://your_package/meshes/your_mesh.stl"`.
*   **`<material>`**: Defines the color and texture of the link.
    *   `name`: (optional) A name for the material.
    *   `<color>`: requires `rgba="R G B A"` values (0-1).
    *   `<texture>`: requires `filename="package://your_package/textures/your_texture.png"`.

### `collision` tag: collision geometry
The `<collision>` tag defines the shape of the link for collision detection purposes in simulation environments. It has a similar structure to the `<visual>` tag, specifying `<geometry>`. It's crucial to define collision geometry accurately but often simpler than visual geometry for computational efficiency.

### `inertial` tag: mass, inertia tensor
The `<inertial>` tag specifies the mass and inertia properties of the link, which are critical for accurate physics simulation.
*   **`<mass>`**: requires `value="M"` (mass in kg).
*   **`<inertia>`**: specifies the 3x3 rotational inertia matrix (tensor) around the link's center of mass. Requires `ixx, ixy, ixz, iyy, iyz, izz` attributes.
*   **`<origin>`**: (optional) Specifies the center of mass (CoM) relative to the link's origin, and the orientation of the inertia tensor.



## 8.4 Defining Joints

**Joints** connect two links together, defining their relative motion and degrees of freedom. Each joint connects a `parent` link to a `child` link. URDF supports several types of joints.

### `joint` tag: connections between links, degrees of freedom
The `<joint>` tag defines a connection. It requires a unique `name` attribute and a `type` attribute. Common joint types include:
*   **`revolute`**: A single rotational degree of freedom around a specified axis. Requires `limit` tags.
*   **`continuous`**: A single rotational degree of freedom, but without limits (e.g., a spinning wheel).
*   **`prismatic`**: A single translational degree of freedom along a specified axis. Requires `limit` tags.
*   **`fixed`**: No degrees of freedom; rigidly connects two links.
*   **`floating`**: A 6-DOF joint for a base link relative to the world, often used for mobile robots.
*   **`planar`**: A 3-DOF joint (X, Y, Yaw) for planar motion.

### `parent` and `child` links
Inside the `<joint>` tag, `<parent link="parent_link_name"/>` and `<child link="child_link_name"/>` tags specify which links the joint connects.

### `origin` tag: joint position and orientation
The `<origin>` tag within a joint defines the joint's position and orientation relative to its parent link's origin. It takes `xyz="X Y Z"` for translation and `rpy="R P Y"` for rotation (Roll, Pitch, Yaw in radians).

### `axis` tag: rotation axis for revolute/prismatic joints
For `revolute` and `prismatic` joints, the `<axis>` tag specifies the direction of the joint's movement. It requires an `xyz="X Y Z"` vector.

### `limit` tag: joint limits (effort, velocity, lower, upper)
For `revolute` and `prismatic` joints, the `<limit>` tag defines the joint's mechanical properties:
*   `effort`: Maximum effort (torque/force) the joint can withstand.
*   `velocity`: Maximum velocity the joint can achieve.
*   `lower`: Lower joint limit (angle in radians or position in meters).
*   `upper`: Upper joint limit (angle in radians or position in meters).

### `mimic` tag: mimicking another joint's movement
The `<mimic>` tag allows a joint to mimic the movement of another joint, useful for parallel linkages or grippers. It specifies the `joint` to mimic and optional `multiplier` and `offset` attributes.




## 8.5 Complete URDF Representation

Building a complete URDF model involves combining links and joints to describe the robot's full kinematic chain. It's an iterative process of defining physical components and their connections.

### Putting it all together: building a simple robot URDF from scratch
A typical workflow involves:
1.  **Define the base link**: Often a `fixed` joint to a "world" link, or a `floating` joint if mobile.
2.  **Add subsequent links and joints**: Connecting them in a parent-child hierarchy.
3.  **Specify visual, collision, and inertial properties** for each link.
4.  **Define joint limits and axes**.
5.  **Utilize `xacro`**: For complex robots, `xacro` (XML Macros for ROS) is invaluable for creating modular, readable, and parameterized URDF files. `xacro` allows defining reusable components and using mathematical expressions.

### URDF best practices for clarity and maintainability
*   **Modularization**: Break down complex robots into smaller `xacro` components.
*   **Readability**: Use clear naming conventions for links and joints. Add comments.
*   **Coordinate Frames**: Maintain consistent coordinate frames (e.g., Z-axis up, X-axis forward).
*   **Mesh Paths**: Use `package://` URI for meshes to ensure portability.
*   **Collision vs. Visual**: Often use simpler collision geometry for performance.

### Checking URDF validity (e.g., using `check_urdf`)
It's critical to validate your URDF files. ROS provides tools like `check_urdf` (a command-line utility) to parse your URDF and report any syntax errors or inconsistencies. Visualization tools like `rviz` are also excellent for visually inspecting the generated robot model.
```
