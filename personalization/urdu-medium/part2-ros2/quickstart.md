# Quickstart: ROS 2 Development Environment Setup

## Aapko Kya Chahiye

* Ubuntu 22.04 ya 20.04 wala computer
* Internet connection
* Basic Linux command line knowledge

## Step 1: ROS 2 Install Karna

**Ubuntu 22.04 ke liye ROS 2 Humble**:

### 1.1 Language aur Repositories Setup

```bash
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

sudo apt install software-properties-common
sudo add-apt-repository universe
```

### 1.2 ROS 2 Key Add Karein

```bash
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
```

### 1.3 ROS 2 Repository Add Karein

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

### 1.4 ROS 2 Install Karein

```bash
sudo apt update
sudo apt install ros-humble-desktop
```

## Step 2: Environment Setup

**Terminal me ROS 2 available karein**:

```bash
source /opt/ros/humble/setup.bash
```

**Permanent setup ke liye** (add to ~/.bashrc):

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## Step 3: Build Tool (colcon) Install Karein

```bash
sudo apt install python3-colcon-common-extensions
```

## Step 4: VS Code Install (Recommended)

1. Download: [VS Code](https://code.visualstudio.com/)
2. Extensions install karein:

   * **ROS** - ROS 2 support
   * **C/C++** - C++ coding ke liye
   * **Python** - Python coding ke liye
   * **Python Black Formatter** - Python auto-format
   * **Clang-Format** - C++ auto-format

## Step 5: Installation Test Karein

**Terminal 1** - Talker run karein (sender):

```bash
source /opt/ros/humble/setup.bash
ros2 run demo_nodes_cpp talker
```

**Terminal 2** - Listener run karein (receiver):

```bash
source /opt/ros/humble/setup.bash
ros2 run demo_nodes_py listener
```

**Expected result**: Talker se listener tak messages flow ho rahe hain ✓

## Done!

Aapka ROS 2 development environment ready hai.
