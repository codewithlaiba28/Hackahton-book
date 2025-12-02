# **Quickstart: Getting Started with NVIDIA Isaac Ecosystem**

This guide provides an overview of setting up and using the main components of the **NVIDIA Isaac ecosystem**: Isaac Sim, Isaac ROS, and Isaac Lab. These tools together allow developers to simulate, perceive, and train robots efficiently.

---

## **1. Setting up Isaac Sim**

### **Prerequisites**

* **NVIDIA RTX GPU:** Compatible GPU (e.g., RTX 30 Series, A100).
* **NVIDIA Drivers:** Latest Studio or Game Ready drivers installed.
* **Operating System:** Windows 10/11 or Ubuntu 20.04 LTS (or newer).
* **Internet Connection:** Needed for downloads.
* **Storage:** At least 100 GB free space recommended.

### **Installation Steps**

1. **Install NVIDIA Omniverse Launcher**

   * Download from the [NVIDIA Omniverse website](https://www.nvidia.com/omniverse/).
   * Run the installer and sign in with an NVIDIA account.

2. **Install Isaac Sim**

   * Open Omniverse Launcher → **Exchange** tab.
   * Search for “Isaac Sim” and click **Install**.
   * Launcher will download and install required components.

3. **Launch Isaac Sim**

   * Go to the **Library** tab → **Connectors & Apps** → locate Isaac Sim → click **Launch**.

### **First Simulation**

1. Open the **Content** window in Isaac Sim.
2. Navigate to `Isaac Examples → Robots → [Choose a Robot e.g., Franka Emika]` and drag it into the viewport.
3. Press the **Play** button to start simulation.
4. Observe the robot moving in a physics-enabled environment.

> **Reference:** [NVIDIA Isaac Sim Documentation](https://docs.omniverse.nvidia.com/isaacsim/latest/index.html)

---

## **2. Setting up Isaac ROS**

### **Prerequisites**

* NVIDIA Jetson or x86 system with NVIDIA GPU.
* Ubuntu Linux (20.04 LTS or newer).
* ROS 2 (Humble or Foxy recommended).
* Docker & NVIDIA Container Toolkit (optional, but recommended).

### **Installation Steps**

For full instructions, refer to the official guide: [Isaac ROS Getting Started](https://nvidia-isaac-ros.github.io/getting_started/getting_started.html)

Typical steps include:

1. Set up the development environment.
2. Install Isaac ROS packages.
3. Verify the installation.

### **First Perception Task (Conceptual)**

1. Launch a sample Isaac ROS perception graph (e.g., `isaac_ros_detectnet`).
2. Connect a camera stream (real or simulated).
3. Observe detected objects with bounding boxes.

---

## **3. Setting up Isaac Lab**

### **Prerequisites**

* Ubuntu Linux with NVIDIA GPU, CUDA, and cuDNN.
* Python 3.8+ and a package manager (pip or conda).
* Git for cloning repositories.
* Working Isaac Sim installation (recommended).

### **Installation Steps (Overview)**

1. Clone the Isaac Lab repository using Git.
2. Set up a Python virtual environment and install dependencies:

   ```bash
   pip install -r requirements.txt
   ```
3. Configure environment variables as needed.
4. Build any required C++/CUDA components.
5. Verify installation by running example scripts.

> **Reference:** NVIDIA Isaac Lab GitHub repository and developer forums.

---

## **4. Summary: NVIDIA Isaac Ecosystem Integration**

The Isaac ecosystem combines:

* **Isaac Sim:** High-fidelity simulation for robot testing and synthetic data generation.
* **Isaac ROS:** Hardware-accelerated perception and navigation for real robots.
* **Isaac Lab:** Reinforcement learning framework for training intelligent behaviors.

Using all three tools together allows developers to simulate, train, and deploy intelligent robotic systems efficiently.

