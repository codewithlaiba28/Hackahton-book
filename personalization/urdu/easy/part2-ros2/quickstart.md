# Quickstart: Apna ROS 2 Development Environment Setup Karna

## Overview

Yeh quickstart guide aapko help karega ek basic development environment setup karne mein ROS 2 ke saath kaam karne ke liye, jo essential hai is textbook ke "Part 2: The Robotic Nervous System – ROS 2" examples aur exercises follow karne ke liye.

## Prerequisites

* Ek computer jo Ubuntu 22.04 (Jammy Jellyfish) ya 20.04 (Focal Fossa) run kar raha ho. Jab ke ROS 2 other operating systems support karta hai, Ubuntu recommended aur most widely supported hai.
* Linux command line ke saath basic familiarity.
* Internet connection packages download karne ke liye.

## Step 1: ROS 2 Install Karna

Official ROS 2 documentation follow karo apne specific Ubuntu version ke liye.
Ubuntu 22.04 (Jammy Jellyfish) aur ROS 2 Humble Hawksbill ke liye:

1. **Apne sources setup karo:**
    ```bash
    sudo apt update && sudo apt install locales
    sudo locale-gen en_US en_US.UTF-8
    sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
    export LANG=en_US.UTF-8

    sudo apt install software-properties-common
    sudo add-apt-repository universe
    ```

2. **ROS 2 GPG key add karo:**
    ```bash
    sudo apt update && sudo apt install curl -y
    sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
    ```

3. **Repository ko apne sources list mein add karo:**
    ```bash
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
    ```

4. **ROS 2 packages install karo:**
    ```bash
    sudo apt update
    sudo apt install ros-humble-desktop
    ```
    
    Yeh ROS 2 Humble Hawksbill desktop environment install karega.

## Step 2: Environment Setup

ROS 2 setup files ko source karo apne terminal mein ROS 2 commands available banana.

```bash
source /opt/ros/humble/setup.bash
```

Yeh permanently add karne ke liye apne shell mein, is command ko add karo apne `~/.bashrc` (Bash ke liye) ya `~/.zshrc` (Zsh ke liye) mein:

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## Step 3: `colcon` Install Karna (ROS 2 Build Tool)

`colcon` ROS 2 mein build tool use hota hai.

```bash
sudo apt install python3-colcon-common-extensions
```

## Step 4: VS Code aur Extensions Install Karna (Recommended IDE)

1. **VS Code Install karo**: Official VS Code website se instructions follow karo (code.visualstudio.com).

2. **Recommended Extensions**:
    * **ROS**: ROS 2 support provide karta hai, including launch file integration, debugging.
    * **C/C++**: C++ development ke liye.
    * **Python**: Python development ke liye.
    * **Python Black Formatter**: PEP 8 compliant Python code formatting ke liye.
    * **Clang-Format**: C++ code formatting ke liye.

## Step 5: Apna Installation Test Karna

Ek simple ROS 2 example run karo verify karne ke liye apne setup:

1. Two terminal windows open karo.

2. Pehle terminal mein, talker run karo:
    ```bash
    source /opt/ros/humble/setup.bash
    ros2 run demo_nodes_cpp talker
    ```

3. Doosre terminal mein, listener run karo:
    ```bash
    source /opt/ros/humble/setup.bash
    ros2 run demo_nodes_py listener
    ```
    
    Aapko messages exchange hote hue dikhne chahiye talker aur listener ke darmiyan.

Congratulations! Aapka ROS 2 development environment ab fully setup ho gaya hai.







































