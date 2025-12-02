# Quickstart: Getting Started with NVIDIA Isaac Ecosystem

## What You Need

### Hardware Requirements
- **NVIDIA RTX GPU** - RTX 30 series or better (RTX 4090 recommended)
- **RAM** - 32 GB minimum
- **Storage** - 100+ GB free space
- **Internet** - For downloading (50+ GB)

### Software Requirements
- **Windows 10/11 OR Ubuntu 20.04+**
- **NVIDIA Drivers** - Latest Studio drivers
- **NVIDIA Account** - Free registration

## Step 1: Install NVIDIA Omniverse Launcher

### Download
1. Go to: https://www.nvidia.com/omniverse/
2. Click "Get Started"
3. Download Omniverse Launcher

### Install
1. Run the installer
2. Sign in with NVIDIA account (create free)
3. Follow on-screen instructions
4. Wait for installation to complete

## Step 2: Install Isaac Sim

### Using Omniverse Launcher
1. Open Omniverse Launcher
2. Click "Exchange" tab
3. Search for "Isaac Sim"
4. Click "Install"
5. Wait for download and installation (takes time)

### Launch Isaac Sim
1. Go to "Library" tab
2. Find "Isaac Sim"
3. Click "Launch"
4. Wait for startup (first time is slow)

### First Test
1. Isaac Sim opens with blank world
2. Right-click in viewport
3. Add → Asset → Select a robot (e.g., Franka)
4. Press Play (triangle button)
5. Watch robot in simulation!

**Success**: You have Isaac Sim running!

## Step 3: Install Isaac ROS (For Real Robots)

### Prerequisites
- **NVIDIA Jetson** (Nano, Xavier, or Orin) OR
- **x86 PC with NVIDIA GPU**
- **Ubuntu 20.04+**
- **ROS 2 Humble** installed
- **Docker** (recommended)

### Quick Installation
1. Follow official guide:
   https://nvidia-isaac-ros.github.io/
2. Use Docker for easiest setup:
   ```bash
   docker pull nvcr.io/nvidia/isaac-ros/isaac-ros-base:latest
   ```
3. Run Isaac ROS container

### Verify Installation
```bash
ros2 launch isaac_ros_examples isaac_ros_examples.launch.py
```

You should see ROS nodes running!

## Step 4: Install Isaac Lab (For AI Training)

### Prerequisites
- **Isaac Sim already installed**
- **Python 3.8+**
- **Git**
- **Ubuntu 20.04+**

### Installation (Basic)
```bash
# 1. Clone repository
git clone https://github.com/NVIDIA-Omniverse/IsaacLab.git
cd IsaacLab

# 2. Create Python environment
python -m venv lab_env
source lab_env/bin/activate  # Linux/Mac
# or: lab_env\Scripts\activate  # Windows

# 3. Install
pip install -e .

# 4. Test
python -c "import isaaclab; print('Success!')"
```

**Success**: Isaac Lab installed!

## Quick Workflow: Isaac Sim → Training → Real Robot

```
Step 1: Design in Isaac Sim
  - Create scenario
  - Set up sensors
  - Configure physics

Step 2: Generate Data (Isaac Sim)
  - Run scenarios 1000x
  - Auto-generate labels
  - Create dataset

Step 3: Train (Isaac Lab)
  - Use GPU acceleration
  - Parallel training
  - 1000s robots training

Step 4: Deploy (Isaac ROS)
  - Optimize for Jetson
  - Real-time perception
  - Run on robot

Step 5: Real Robot Works!
  - Perception fast
  - Navigation smooth
  - AI behaves well
```

## Common Issues & Quick Fixes

| Problem | Solution |
|---------|----------|
| GPU not detected | Update NVIDIA drivers |
| Slow startup | First launch is slow, normal |
| Out of disk space | Need 100+ GB free |
| Permission error | Run as admin/sudo |
| Docker issues | Reinstall Docker |

## Isaac Ecosystem Quick Start Paths

### Path 1: Simulation Only (Quickest)
1. Install Isaac Sim
2. Load a robot
3. Start simulating
4. **Time: 30 minutes**

### Path 2: Sim → Training
1. Install Isaac Sim
2. Install Isaac Lab
3. Generate synthetic data
4. Train AI model
5. **Time: A few hours**

### Path 3: Full Stack (Complete)
1. Install all three
2. Sim in Isaac Sim
3. Train with Isaac Lab
4. Deploy with Isaac ROS
5. Run on real robot
6. **Time: 1-2 days setup**

## Next Steps After Installation

### Beginners
1. Load example robots in Isaac Sim
2. Watch simulation physics
3. Read official tutorials
4. Start with simple scenarios

### Advanced Users
1. Create custom robots
2. Generate synthetic datasets
3. Train RL policies
4. Deploy to real hardware

## Official Resources

**Isaac Sim Docs**:
https://docs.omniverse.nvidia.com/isaacsim/

**Isaac ROS Docs**:
https://nvidia-isaac-ros.github.io/

**Isaac Lab Docs**:
https://isaac-sim.github.io/IsaacLab/

**NVIDIA Forums**:
https://forums.developer.nvidia.com/

## Troubleshooting Commands

**Check GPU**:
```bash
nvidia-smi
```

**Check ROS 2**:
```bash
ros2 topic list
```

**Check Python packages**:
```bash
pip list | grep isaac
```

## Memory & Performance Tips

✓ Close other apps (browser, IDEs)
✓ Disable desktop effects (Linux)
✓ Use latest GPU drivers
✓ Allocate enough VRAM
✓ Use SSD (not HDD)

## What You've Done

✅ Installed Omniverse Launcher
✅ Installed Isaac Sim
✅ Ran first simulation
✅ Installed Isaac ROS (optional)
✅ Installed Isaac Lab (optional)
✅ Ready to build robots!

## Ready to Begin?

**Congratulations!** You now have the complete NVIDIA Isaac ecosystem installed. You can:
- 🎮 Simulate robots in Isaac Sim
- 🤖 Deploy to real robots with Isaac ROS
- 🧠 Train AI with Isaac Lab
- 🚀 Build professional robotics applications

**Start with Isaac Sim tutorials to learn the basics!**