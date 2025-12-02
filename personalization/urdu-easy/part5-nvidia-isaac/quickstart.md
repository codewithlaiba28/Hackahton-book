# Quickstart Guide: NVIDIA Isaac Ecosystem

This guide will get you up and running with the **complete NVIDIA Isaac ecosystem**: Isaac Sim, Isaac ROS, and Isaac Lab.

---

## ✅ What You Need

### Hardware

* **GPU:** NVIDIA RTX 30 series or better (RTX 4090 recommended)
* **RAM:** 32 GB minimum
* **Storage:** 100+ GB free space
* **Internet:** 50+ GB download

### Software

* **OS:** Windows 10/11 or Ubuntu 20.04+
* **NVIDIA Drivers:** Latest Studio drivers
* **Account:** NVIDIA account (free)

---

## Step 1: Install Omniverse Launcher

1. Visit [Omniverse](https://www.nvidia.com/omniverse/) → Click **Get Started**
2. Download and install the launcher
3. Sign in with NVIDIA account
4. Follow installer instructions

---

## Step 2: Install Isaac Sim

### Using Omniverse Launcher

1. Open launcher → **Exchange** tab
2. Search **Isaac Sim** → Click **Install**
3. Wait for installation

### Launch & Test

1. Go to **Library** → Launch **Isaac Sim**
2. Right-click viewport → **Add → Asset** → Select robot (e.g., Franka)
3. Press **Play** → Watch robot move

✅ Success: Isaac Sim running

---

## Step 3: Install Isaac ROS (For Real Robots)

### Prerequisites

* NVIDIA Jetson (Nano, Xavier, Orin) OR x86 PC with NVIDIA GPU
* Ubuntu 20.04+
* ROS 2 Humble installed
* Docker recommended

### Quick Install

```bash
docker pull nvcr.io/nvidia/isaac-ros/isaac-ros-base:latest
docker run -it nvcr.io/nvidia/isaac-ros/isaac-ros-base:latest
```

### Verify

```bash
ros2 launch isaac_ros_examples isaac_ros_examples.launch.py
```

✅ ROS nodes should run

---

## Step 4: Install Isaac Lab (For AI Training)

### Prerequisites

* Isaac Sim installed
* Python 3.8+
* Git
* Ubuntu 20.04+

### Install

```bash
git clone https://github.com/NVIDIA-Omniverse/IsaacLab.git
cd IsaacLab

python -m venv lab_env
source lab_env/bin/activate  # Linux/Mac
# lab_env\Scripts\activate  # Windows

pip install -e .
python -c "import isaaclab; print('Success!')"
```

✅ Isaac Lab installed

---

## Quick Workflow: Sim → Train → Real Robot

```
1. Design in Isaac Sim → Scenario, sensors, physics
2. Generate Data → 1000x runs, auto-labels
3. Train in Isaac Lab → GPU, parallel training
4. Deploy via Isaac ROS → Real-time perception
5. Real Robot Works → Fast, smooth, intelligent
```

---

## Common Issues & Fixes

| Problem           | Solution               |
| ----------------- | ---------------------- |
| GPU not detected  | Update NVIDIA drivers  |
| Slow startup      | Normal first-time load |
| Out of disk space | Free 100+ GB           |
| Permission error  | Run as admin/sudo      |
| Docker issues     | Reinstall Docker       |

---

## Quick Start Paths

**Simulation Only:** Isaac Sim → Load robot → Simulate (30 min)
**Sim → Training:** Isaac Sim + Isaac Lab → Train AI (few hours)
**Full Stack:** Isaac Sim + Lab + ROS → Deploy real robot (1–2 days setup)

---

## Tips & Tricks

* Beginners: Load example robots, observe physics, follow tutorials
* Advanced: Create custom robots, synthetic datasets, RL policies, deploy to hardware
* Performance: Close apps, disable desktop effects, use SSD, allocate VRAM, latest drivers

---

## Check Installations

```bash
nvidia-smi             # GPU status
ros2 topic list         # ROS 2 check
pip list | grep isaac   # Python packages
```

---

## Official Resources

* **Isaac Sim Docs:** [https://docs.omniverse.nvidia.com/isaacsim/](https://docs.omniverse.nvidia.com/isaacsim/)
* **Isaac ROS Docs:** [https://nvidia-isaac-ros.github.io/](https://nvidia-isaac-ros.github.io/)
* **Isaac Lab Docs:** [https://isaac-sim.github.io/IsaacLab/](https://isaac-sim.github.io/IsaacLab/)
* **NVIDIA Forums:** [https://forums.developer.nvidia.com/](https://forums.developer.nvidia.com/)

---

## ✅ What You’ve Achieved

* Installed Omniverse Launcher & Isaac Sim
* Ran first simulation
* Optional: Installed Isaac ROS & Lab
* Ready for robot AI development

---

**Next Step:** Start Isaac Sim tutorials to explore robot simulation and physics!

