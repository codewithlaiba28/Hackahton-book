# Quickstart: Setting up ROS 2 Development Environment

## What You Need

* Computer with Ubuntu 22.04 ya 20.04
* Internet connection
* Basic Linux command line knowledge

## Step 1: Install ROS 2

**For Ubuntu 22.04 with ROS 2 Humble**:

### 1.1 Set up language and repositories

```bash
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

sudo apt install software-properties-common
sudo add-apt-repository universe
```

### 1.2 Add ROS 2 key

```bash
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
```

### 1.3 Add ROS 2 repository

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

### 1.4 Install ROS 2

```bash
sudo apt update
sudo apt install ros-humble-desktop
```

## Step 2: Set Up Environment

**Make ROS 2 available in terminal**:

```bash
source /opt/ros/humble/setup.bash
```

**Make it permanent** (add to ~/.bashrc):

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## Step 3: Install Build Tool (colcon)

```bash
sudo apt install python3-colcon-common-extensions
```

## Step 4: Install VS Code (Recommended)

1. Download from: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Install these extensions:

   * **ROS** - ROS 2 support
   * **C/C++** - C++ coding ke liye
   * **Python** - Python coding ke liye
   * **Python Black Formatter** - Python auto-format
   * **Clang-Format** - C++ auto-format

## Step 5: Test Installation

**Terminal 1** - Run talker (sender):

```bash
source /opt/ros/humble/setup.bash
ros2 run demo_nodes_cpp talker
```

**Terminal 2** - Run listener (receiver):

```bash
source /opt/ros/humble/setup.bash
ros2 run demo_nodes_py listener
```

**Expected result**: Messages talker se listener tak flow kar rahi hain ✓

## Done!

Aapka ROS 2 environment use karne ke liye ready hai!
