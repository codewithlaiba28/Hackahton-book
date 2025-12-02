# Quickstart: Setting up Your Robot Modeling and Simulation Environment

## Overview
This quickstart guide will help you set up a basic environment for working with robot description formats (URDF, SDF, USD) and simulation tools. This setup is essential for following the examples and exercises in "Part 3: Robot Description and Modeling" of this textbook.

## Prerequisites
-   A computer running Ubuntu 22.04 (Jammy Jellyfish) or 20.04 (Focal Fossa) is recommended for ROS-related tools.
-   Basic familiarity with the Linux command line.
-   Internet connection for downloading packages.
-   A modern graphics card (GPU) is highly recommended for efficient simulation and visualization.

## Step 1: Install ROS 2 (for URDF tools and Gazebo integration)
If you haven't already, install ROS 2. Follow the official ROS 2 documentation for your specific Ubuntu version. For example, for Ubuntu 22.04 (Jammy Jellyfish) and ROS 2 Humble Hawksbill, refer to the previous Part 2 quickstart guide or the official ROS 2 installation instructions.

## Step 2: Install Gazebo (for SDF support)
Gazebo is a powerful 3D robot simulator. It uses SDF as its primary description format.
```bash
sudo apt install gazebo
```
This typically installs the latest Gazebo version available for your Ubuntu distribution. If you need a specific version or integration with ROS 2, you might need to install `ros-<distro>-gazebo-ros-pkgs`.

## Step 3: Install URDF Tools
ROS 2 provides various tools for working with URDF.
```bash
sudo apt install ros-humble-urdf-tutorial ros-humble-xacro
```
*   **`urdf_tutorial`**: Contains examples and parsing tools.
*   **`xacro`**: An XML macro language used to simplify URDF files.

## Step 4: Install USD Tools (Optional, for advanced users)
Working with USD often involves NVIDIA Omniverse tools. Installation can be more complex.
1.  **NVIDIA Graphics Drivers**: Ensure you have up-to-date NVIDIA drivers.
2.  **Omniverse Launcher**: Install the Omniverse Launcher from NVIDIA's website.
3.  **Code Editor**: Install Visual Studio Code or similar.
4.  **USD for Python**: Install the USD Python bindings.
    ```bash
    pip install usd-core
    ```
    (Note: This might require specific Python versions and build dependencies.)

## Step 5: Recommended IDE and Extensions
-   **Visual Studio Code**:
    *   **XML**: For URDF/SDF editing.
    *   **Python**: For Python scripts related to kinematics/dynamics.
    *   **C/C++**: For C++ kinematics/dynamics libraries.
    *   **Markdown All in One**: For Docusaurus content creation.
    *   **LaTeX Workshop**: For mathematical notation if you write it directly in LaTeX.

## Step 6: Test Your URDF/SDF Setup
1.  **Test URDF**: Use `check_urdf` to validate a sample URDF file.
    ```bash
    check_urdf <path_to_your_urdf_file.urdf>
    ```
    You can also visualize it in `rviz2`.
    ```bash
    ros2 launch urdf_tutorial display.launch.py model:=<path_to_your_urdf_file.urdf>
    ```
2.  **Test Gazebo with SDF**: Launch Gazebo.
    ```bash
    gazebo
    ```
    You should see the Gazebo simulation environment open. You can then try loading sample SDF models.

Congratulations! Your robot modeling and simulation environment is now set up.
