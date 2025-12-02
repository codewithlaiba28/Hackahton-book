# Chapter 5: Building ROS 2 Packages and Applications

## What is a ROS 2 Package?

A **package** is a folder that contains:
- Source code (Python or C++)
- Configuration files
- Messages and definitions
- Launch files
- Tests

Think of it like a complete project folder with everything needed to run a robot function.

## Workspace Structure

```
my_workspace/
├── src/          ← Put your packages here
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
- `package.xml` - Package information
- `setup.py` - Build instructions

**Key files in the package**:
- `my_python_package/` - Your Python code
- `launch/` - Start multiple nodes at once
- `config/` - Settings files

## Creating a C++ Package

**Command**:
```bash
ros2 pkg create --build-type ament_cmake my_cpp_package --dependencies rclcpp std_msgs
```

**Files created**:
- `package.xml` - Package information
- `CMakeLists.txt` - Build instructions

**Key files in the package**:
- `src/` - Your C++ code
- `include/` - Header files
- `launch/` - Start multiple nodes at once
- `config/` - Settings files

## Python vs C++

| Feature | Python | C++ |
|---------|--------|-----|
| **Speed** | Medium | Fast |
| **Easy to learn** | Yes | No |
| **Best for** | Testing, simple tasks | Real-time control |

## Launch Files

**What they do**: Start multiple nodes at the same time and set their settings

**File**: `my_launch_file.launch.py`

**Use**: `ros2 launch my_package my_launch_file.launch.py`

**Benefits**:
- Start many nodes with one command
- Set parameters automatically
- Organize complex systems

## Parameter Files

**What they are**: Settings stored in YAML files

**Example file** (`config/params.yaml`):
```yaml
my_node:
  ros__parameters:
    speed: 10
    mode: "fast"
```

**Use**: Load these settings when starting a node

## Building Your Package

**Commands**:

| Command | What it does |
|---------|-------------|
| `colcon build` | Compile all packages |
| `colcon build --packages-select my_package` | Compile one package |
| `colcon test` | Run tests |
| `colcon clean` | Delete build files |

**After building**:
```bash
source install/setup.bash
```

This makes your package ready to use.

## Running Your Code

**Run a single node**:
```bash
ros2 run my_package my_node_name
```

**Run multiple nodes with launch file**:
```bash
ros2 launch my_package my_launch_file.launch.py
```

## Debugging Tools

**Check if nodes are running**:
```bash
ros2 node list
```

**See all active topics**:
```bash
ros2 topic list
```

**Watch messages on a topic**:
```bash
ros2 topic echo /topic_name
```

**See the graph** (visual view):
```bash
rqt_graph
```

**See log messages**:
```bash
rqt_console
```

## Quick Workflow

1. Create package: `ros2 pkg create --build-type ament_python my_package`
2. Write code in `my_package/` folder
3. Build: `colcon build`
4. Source: `source install/setup.bash`
5. Run: `ros2 run my_package my_node`
6. Debug with tools like `rqt_graph` and `ros2 topic echo`

## What You'll Learn

- Create Python and C++ packages
- Use launch files to manage multiple nodes
- Configure nodes with parameters
- Build and run packages with colcon
- Debug ROS 2 applications