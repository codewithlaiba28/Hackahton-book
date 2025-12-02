# Chapter 5: Building ROS 2 Packages and Applications

Ye chapter aapko sikhata hai ke kaise asal ROS 2 code create, build, aur run karte hain — Python aur C++ dono me.

## 5.1 ROS 2 Workspace and Package Structure

ROS 2 me sab kuch **workspace** se start hota hai.
Standard layout (aap ye roz use karenge):

```
my_robot_ws/          ← aapka workspace folder
├── src/              ← sab packages yahan rakho
│   ├── my_python_pkg/
│   └── my_cpp_pkg/
├── build/            ← automatically create hota hai (touch mat karo)
├── install/          ← important: binaries yahan jati hain
└── log/              ← build logs
```

Roz type karne wale commands:

```bash
cd ~/my_robot_ws
colcon build                  # sab build karo
source install/setup.bash     # nodes visible karo
```

## 5.2 Creating Your First Python Package

`src` folder ke andar:

```bash
ros2 pkg create --build-type ament_python my_talker_pkg
```

Ye ready-to-use Python package create karta hai.

### Important Files Created

* `package.xml` → name, version, dependencies
* `setup.py` → colcon ko batata hai kaunse nodes install karne hain

### Simple Talker (Publisher) Likho

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

`setup.py` me add karo (entry_points section):

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

Aap dekhenge “Hello ROS 2!” har 0.5 seconds print hoga.

## 5.3 Creating Your First C++ Package

```bash
ros2 pkg create --build-type ament_cmake my_cpp_pkg --dependencies rclcpp std_msgs
```

### Simple C++ Talker Likho

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

`CMakeLists.txt` update karo:

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

## 5.4 Launch Files — Multiple Nodes Ek Sath Start Karna

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
            executable='listener',   # listener bhi isi tarah create kar sakte ho
            name='my_listener'
        ),
    ])
```

Run:

```bash
ros2 launch my_talker_pkg talker_listener_launch.py
```

## 5.5 Parameters — Recompile Ke Baghair Settings Change Karna

Create: `my_talker_pkg/config/params.yaml`

```yaml
talker:
  ros__parameters:
    publish_rate: 2.0      # 2 Hz = har 0.5s publish
    greeting: "Namaste ROS 2!"
```

Launch file me use karo:

```python
parameters=[params_file]    # Node() me add karo
```

Ab node `self.declare_parameter()` aur `self.get_parameter()` se values read kar sakta hai.

## 5.6 Building & Useful colcon Commands

| Command                                               | Kya karta hai                           |
| ----------------------------------------------------- | --------------------------------------- |
| `colcon build`                                        | Sab packages build karta hai            |
| `colcon build --packages-select my_pkg`               | Sirf ek package build karta hai         |
| `colcon build --symlink-install`                      | Python changes fast apply karne ke liye |
| `source install/setup.bash`                           | Nodes visible kar deta hai              |
| `~/.bashrc` me add karo → dobara source type na karna |                                         |

## 5.7 Debugging Toolkit (Roz Use Karoge)

| Tool             | Command                    | Kya dekhte ho                    |
| ---------------- | -------------------------- | -------------------------------- |
| List nodes       | `ros2 node list`           | Sab running nodes                |
| List topics      | `ros2 topic list`          | Sab active topics                |
| See topic data   | `ros2 topic echo /chatter` | Live messages                    |
| See connections  | `rqt_graph` (GUI)          | Full system diagram              |
| See logs         | `rqt_console` (GUI)        | Sab log messages filters ke sath |
| Check parameters | `ros2 param list /talker`  | Current parameter values         |

## Learning Outcomes

Is chapter ke baad aap ye kar sakenge:

* Python ya C++ me naya ROS 2 package create karna
* Publisher/subscriber node write, build, aur run karna
* Ek launch file se multiple nodes start karna
* YAML files se parameters set karna
* Workspace build aur source karna (`colcon`)
* Basic debugging ROS2 commands aur `rqt` se karna

Ab aap real robot applications build karne ke liye ready ho!
