# Quickstart: Setting up Your ROS 2 Development Environment

## Overview
This quickstart guide will help you set up a basic development environment for working with ROS 2, which is essential for following the examples and exercises in "Part 2: The Robotic Nervous System – ROS 2" of this textbook.

## Prerequisites
-   A computer running Ubuntu 22.04 (Jammy Jellyfish) or 20.04 (Focal Fossa). While ROS 2 supports other operating systems, Ubuntu is the recommended and most widely supported.
-   Basic familiarity with the Linux command line.
-   Internet connection for downloading packages.

## Step 1: Install ROS 2
Follow the official ROS 2 documentation for your specific Ubuntu version.
For Ubuntu 22.04 (Jammy Jellyfish) and ROS 2 Humble Hawksbill:
1.  **Set up your sources:**
    ```bash
    sudo apt update && sudo apt install locales
    sudo locale-gen en_US en_US.UTF-8
    sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
    export LANG=en_US.UTF-8

    sudo apt install software-properties-common
    sudo add-apt-repository universe
    ```
2.  **Add the ROS 2 GPG key:**
    ```bash
    sudo apt update && sudo apt install curl -y
    sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
    ```
3.  **Add the repository to your sources list:**
    ```bash
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
    ```
4.  **Install ROS 2 packages:**
    ```bash
    sudo apt update
    sudo apt install ros-humble-desktop
    ```
    This will install ROS 2 Humble Hawksbill desktop environment.

## Step 2: Environment Setup
Source the ROS 2 setup files to make ROS 2 commands available in your terminal.
```bash
source /opt/ros/humble/setup.bash
```
To permanently add this to your shell, add it to your `~/.bashrc` (for Bash) or `~/.zshrc` (for Zsh):
```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## Step 3: Install `colcon` (ROS 2 Build Tool)
`colcon` is the build tool used in ROS 2.
```bash
sudo apt install python3-colcon-common-extensions
```

## Step 4: Install VS Code and Extensions (Recommended IDE)
1.  **Install VS Code**: Follow instructions from the official VS Code website (code.visualstudio.com).
2.  **Recommended Extensions**:
    *   **ROS**: Provides ROS 2 support, including launch file integration, debugging.
    *   **C/C++**: For C++ development.
    *   **Python**: For Python development.
    *   **Python Black Formatter**: For PEP 8 compliant Python code formatting.
    *   **Clang-Format**: For C++ code formatting.

## Step 5: Test Your Installation
Run a simple ROS 2 example to verify your setup:
1.  Open two terminal windows.
2.  In the first terminal, run the talker:
    ```bash
    source /opt/ros/humble/setup.bash
    ros2 run demo_nodes_cpp talker
    ```
3.  In the second terminal, run the listener:
    ```bash
    source /opt/ros/humble/setup.bash
    ros2 run demo_nodes_py listener
    ```
    You should see messages being exchanged between the talker and listener.

Congratulations! Your ROS 2 development environment is now set up.
