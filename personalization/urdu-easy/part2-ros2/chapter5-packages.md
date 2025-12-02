# Chapter 5: Building ROS 2 Packages and Applications

## What is a ROS 2 Package?

A **package** ek folder hai jo contain karta hai:

* Source code (Python ya C++)
* Configuration files
* Messages aur definitions
* Launch files
* Tests

Isay socho jaise ek complete project folder jo robot function run karne ke liye sab kuch rakhta hai.

## Workspace Structure

```
my_workspace/
├── src/          ← Apne packages yahan rakho
├── build/        ← Compiled files (auto-created)
├── install/      ← Ready-to-run files (auto-created)
└── log/          ← Log files (auto-created)
```

## Creating a Python Package

**Command**:

```bash
ros2 pkg create --build-type ament_python my_python_package
```

**Files created**:

* `package.xml` - Package information
* `setup.py` - Build instructions

**Key files in the package**:

* `my_python_package/` - Apka Python code
* `launch/` - Multiple nodes ek saath start karne ke liye
* `config/` - Settings files

## Creating a C++ Package

**Command**:

```bash
ros2 pkg create --build-type ament_cmake my_cpp_package --dependencies rclcpp std_msgs
```

**Files created**:

* `package.xml` - Package information
* `CMakeLists.txt` - Build instructions

**Key files in the package**:

* `src/` - Apka C++ code
* `include/` - Header files
* `launch/` - Multiple nodes ek saath start karne ke liye
* `config/` - Settings files

## Python vs C++

| Feature           | Python                | C++               |
| ----------------- | --------------------- | ----------------- |
| **Speed**         | Medium                | Fast              |
| **Easy to learn** | Yes                   | No                |
| **Best for**      | Testing, simple tasks | Real-time control |

## Launch Files

**Kya karte hain**: Multiple nodes ek saath start karte hain aur unki settings set karte hain

**File**: `my_launch_file.launch.py`

**Use**: `ros2 launch my_package my_launch_file.launch.py`

**Benefits**:

* Ek command se bohot saare nodes start karo
* Parameters automatically set karo
* Complex systems organize karo

## Parameter Files

**Kya hain**: Settings jo YAML files me store hoti hain

**Example file** (`config/params.yaml`):

```yaml
my_node:
  ros__parameters:
    speed: 10
    mode: "fast"
```

**Use**: Node start karte waqt ye settings load karo

## Building Your Package

**Commands**:

| Command                                     | Kya karta hai             |
| ------------------------------------------- | ------------------------- |
| `colcon build`                              | Sab packages compile karo |
| `colcon build --packages-select my_package` | Ek package compile karo   |
| `colcon test`                               | Tests run karo            |
| `colcon clean`                              | Build files delete karo   |

**After building**:

```bash
source install/setup.bash
```

Isse apka package use karne ke liye ready ho jata hai.

## Running Your Code

**Ek node run karo**:

```bash
ros2 run my_package my_node_name
```

**Multiple nodes launch file se run karo**:

```bash
ros2 launch my_package my_launch_file.launch.py
```

## Debugging Tools

**Check karo nodes run ho rahe hain ya nahi**:

```bash
ros2 node list
```

**Dekho sab active topics**:

```bash
ros2 topic list
```

**Topic par messages dekho**:

```bash
ros2 topic echo /topic_name
```

**Graph dekho** (visual view):

```bash
rqt_graph
```

**Log messages dekho**:

```bash
rqt_console
```

## Quick Workflow

1. Package create karo: `ros2 pkg create --build-type ament_python my_package`
2. Code likho `my_package/` folder me
3. Build karo: `colcon build`
4. Source karo: `source install/setup.bash`
5. Run karo: `ros2 run my_package my_node`
6. Debug karo tools se jaise `rqt_graph` aur `ros2 topic echo`

## What You'll Learn

* Python aur C++ packages create karna
* Launch files use karna multiple nodes manage karne ke liye
* Nodes configure karna parameters ke saath
* Packages build aur run karna colcon se
* ROS 2 applications debug karna
