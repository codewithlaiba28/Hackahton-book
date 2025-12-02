# Chapter 5: Building ROS 2 Packages and Applications

This chapter teaches you how to actually create, build, and run real ROS 2 code — in both Python and C++.

## 5.1 ROS 2 Workspace and Package Structure

Everything in ROS 2 starts with a **workspace**.  
Standard layout (you’ll use this every day):

```
my_robot_ws/          ← your workspace folder
├── src/              ← put all your packages here
│   ├── my_python_pkg/
│   └── my_cpp_pkg/
├── build/            ← automatically created (don’t touch)
├── install/          ← important: binaries go here
└── log/              ← build logs
```

Commands you’ll type all the time:
```bash
cd ~/my_robot_ws
colcon build                  # build everything
source install/setup.bash     # make nodes visible
```

## 5.2 Creating Your First Python Package

From inside the `src` folder:
```bash
ros2 pkg create --build-type ament_python my_talker_pkg
```

This creates a ready-to-use Python package.

### Important Files Created
- `package.xml` → name, version, dependencies
- `setup.py` → tells colcon what nodes to install

### Write a Simple Talker (Publisher)

File: `my_talker_pkg/my_talker_pkg/talker_node.py`

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class Talker(Node):
    def __init__(self):
        super().__init__('talker')
        self.pub = self.create_publisher(String, 'chatter', 10)
        self.timer = self.create_timer(0.5, self.callback)
        self.counter = 0

    def callback(self):
        msg = String()
        msg.data = f"Hello ROS 2! #{self.counter}"
        self.pub.publish(msg)
        self.get_logger().info(msg.data)
        self.counter += 1

def main():
    rclpy.init()
    node = Talker()
    rclpy.spin(node)
    node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

Add it to `setup.py` (entry_points section):
```python
entry_points={
    'console_scripts': [
        'talker = my_talker_pkg.talker_node:main',
    ],
},
```

Build & run:
```bash
colcon build --packages-select my_talker_pkg
source install/setup.bash
ros2 run my_talker_pkg talker
```

You’ll see “Hello ROS 2!” printed every 0.5 seconds.

## 5.3 Creating Your First C++ Package

```bash
ros2 pkg create --build-type ament_cmake my_cpp_pkg --dependencies rclcpp std_msgs
```

### Write a Simple C++ Talker

File: `my_cpp_pkg/src/talker.cpp`

```cpp
#include "rclcpp/rclcpp.hpp"
#include "std_msgs/msg/string.hpp"
using namespace std::chrono_literals;

class Talker : public rclcpp::Node
{
public:
  Talker() : Node("cpp_talker"), count_(0)
  {
    pub_ = create_publisher<std_msgs::msg::String>("chatter", 10);
    timer_ = create_wall_timer(500ms, std::bind(&Talker::callback, this));
  }

private:
  void callback()
  {
    auto msg = std_msgs::msg::String();
    msg.data = "Hello from C++! " + std::to_string(count_++);
    RCLCPP_INFO(this->get_logger(), "%s", msg.data.c_str());
    pub_->publish(msg);
  }
  rclcpp::Publisher<std_msgs::msg::String>::SharedPtr pub_;
  rclcpp::TimerBase::SharedPtr timer_;
  size_t count_;
};

int main(int argc, char** argv)
{
  rclcpp::init(argc, argv);
  rclcpp::spin(std::make_shared<Talker>());
  rclcpp::shutdown();
  return 0;
}
```

Update `CMakeLists.txt` to compile it:
```cmake
add_executable(talker src/talker.cpp)
ament_target_dependencies(talker rclcpp std_msgs)

install(TARGETS
  talker
  DESTINATION lib/${PROJECT_NAME})
```

Build & run:
```bash
colcon build --packages-select my_cpp_pkg
source install/setup.bash
ros2 run my_cpp_pkg talker
```

## 5.4 Launch Files — Start Many Nodes at Once

Create: `my_talker_pkg/launch/talker_listener_launch.py`

```python
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='my_talker_pkg',
            executable='talker',
            name='my_talker'
        ),
        Node(
            package='my_talker_pkg',
            executable='listener',   # you can make a listener the same way
            name='my_listener'
        ),
    ])
```

Run it:
```bash
ros2 launch my_talker_pkg talker_listener_launch.py
```

## 5.5 Parameters — Change Settings Without Recompiling

Create: `my_talker_pkg/config/params.yaml`
```yaml
talker:
  ros__parameters:
    publish_rate: 2.0      # publish every 0.5s → now every 0.5s wait, no: 2 Hz = every 0.5s
    greeting: "Namaste ROS 2!"
```

Use in launch file:
```python
parameters=[params_file]    # add this to the Node() above
```

Now your node can read these values with `self.declare_parameter()` and `self.get_parameter()`.

## 5.6 Building & Useful colcon Commands

| Command                                    | What it does                                 |
|--------------------------------------------|----------------------------------------------|
| `colcon build`                             | Build all packages                           |
| `colcon build --packages-select my_pkg`    | Build only one package                       |
| `colcon build --symlink-install`           | Faster Python changes (no rebuild needed)    |
| `source install/setup.bash`                | Make your nodes visible                      |
| Add to `~/.bashrc` → never type source again! |

## 5.7 Debugging Toolkit (You’ll Use These Daily)

| Tool                | Command                            | What you see                             |
|---------------------|------------------------------------|------------------------------------------|
| List nodes          | `ros2 node list`                   | All running nodes                        |
| List topics         | `ros2 topic list`                  | All active topics                        |
| See topic data      | `ros2 topic echo /chatter`         | Live messages                            |
| See connections     | `rqt_graph` (GUI)                  | Full system diagram                      |
| See logs            | `rqt_console` (GUI)                | All log messages with filters            |
| Check parameters    | `ros2 param list /talker`          | Current parameter values                 |

## Learning Outcomes

After this chapter you should be able to:

- Create a new ROS 2 package in Python or C++
- Write, build, and run a publisher/subscriber node
- Start multiple nodes with a single launch file
- Use YAML files to set parameters
- Build a workspace with `colcon` and source it
- Debug basic problems using `ros2` command-line tools and `rqt`

You are now ready to build real robot applications!  
