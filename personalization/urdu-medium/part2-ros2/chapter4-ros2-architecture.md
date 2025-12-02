# Chapter 4: ROS 2 Architecture & Core Concepts

Yeh chapter explain karta hai ke ROS 2 asal mein kaise kaam karta hai aur nodes ek dusre se kaise baat karte hain.

## 4.1 ROS 1 se ROS 2 mein Kya Badla?

ROS 1 universities aur research ke liye acha tha, lekin real products ke liye kuch problems thi:

| ROS 1 ka Problem                | ROS 2 ka Solution                                    |
| ------------------------------- | ---------------------------------------------------- |
| Ek central “master” (roscore)   | No central master → koi single point of failure nahi |
| Poor real-time performance      | Real-time aur safety-critical systems ke liye built  |
| No security                     | Encryption & authentication built-in                 |
| Multiple robots chalana mushkil | Multi-robot fleets ke liye design kiya gaya          |
| Sirf Linux pe acha kaam karta   | Embedded devices aur Windows ka better support       |

ROS 2 industry standard **DDS** (Data Distribution Service) use karta hai communication ke liye. Yehi technology airplanes, cars, aur military systems mein use hoti hai — rock solid.

## 4.2 Nodes aur Computation Graph

* **Node** = ek running program jo ek kaam achhi tarah karta hai.
  Examples: camera read karna, path plan karna, wheels control karna, text bolna, etc.
* Saare nodes aur unke connections mil ke **computation graph** banate hain.
* ROS 2 mein ye graph **decentralized** hai — nodes DDS ke zariye automatically ek dusre ko dhund lete hain. Central boss ki zarurat nahi.

Nodes alag computers (laptop, robot brain, cloud server) pe run ho sakte hain aur phir bhi perfect communicate karte hain.

## 4.3 Topics — Data Stream Karne ka Main Tarika (Publish/Subscribe)

**Topics** = fire-and-forget streaming channels (many-to-many).

Perfect hain continuous data ke liye:

* Camera images
* LiDAR point clouds
* Robot velocity commands
* Odometry (robot apni position ka estimate)

Kaise kaam karta hai:

* Ek ya zyada nodes **publish** karte hain messages ek topic pe (e.g., `/camera/image_raw`)
* Ek ya zyada nodes **subscribe** karte hain aur har naya message lete hain
* Publishers aur subscribers ko ek dusre ke baare mein pata nahi hona chahiye

Messages ke fixed types hote hain `.msg` files mein (jaise C structs).

## 4.4 Services — Request/Response (Function Call jaise)

**Services** = synchronous one-to-one communication.

Use karo jab turant answer chahiye:

* “Abhi photo lo”
* “Battery level kya hai?”
* “Camera calibrate karo”

Defined hote hain `.srv` files mein (`---` se request aur response separate).

* **Server** service offer karta hai
* **Client** call karta hai aur reply ka wait karta hai (blocking)

## 4.5 Actions — Long-Running Tasks ke liye Feedback ke saath

**Actions** = services jo minutes le sakti hain + progress updates deti hain + cancel ho sakti hain.

Perfect hain:

* “Kitchen jao” (navigation)
* “Cup uthao” (manipulation)
* “Room scan karo” (mapping)

Action ke 3 message streams hain:

1. **Goal** – client kya chahta hai
2. **Feedback** – “40% complete, battery fine”
3. **Result** – “Done!”, “Cancelled” ya “Failed”

Client anytime goal cancel kar sakta hai.

## 4.6 Parameters — Settings Change Karna without Recompiling

Har node ke apne parameters ho sakte hain (knobs jo robot run karte waqt turn kiye ja sakte hain).

Examples:

* Max speed = 0.5 m/s
* Camera exposure = 100
* Debug mode = true/false

Change kar sakte hain:

* Terminal se (`ros2 param set`)
* Launch file (YAML) se
* Dusre node se
* `rqt_reconfigure` GUI se

Robot stop ya code rebuild karne ki zarurat nahi.

## Quick Summary Table: Topics vs Services vs Actions

| Feature                  | Topics                | Services              | Actions                            |
| ------------------------ | --------------------- | --------------------- | ---------------------------------- |
| Communication style      | One-way streaming     | Request → Response    | Goal → Feedback → Result           |
| Many-to-many             | Haan                  | Nahi (one-to-one)     | Nahi (one-to-one)                  |
| Long time?               | Problem nahi          | Usually short         | Long tasks ke liye design kiya     |
| Cancel kar sakte hain?   | Nahi                  | Nahi                  | Haan                               |
| Progress update chahiye? | Nahi                  | Nahi                  | Haan                               |
| Best for                 | Sensor data, commands | Quick queries/actions | Navigation, manipulation, scanning |

## Is Chapter ke Baad Aap Ye Kar Sakte Hain

* Explain kar sakte hain kyun ROS 2 ROS 1 se better hai real robots ke liye
* Describe kar sakte hain node kya hai aur computation graph master ke bina kaise kaam karta hai
* Right communication method choose karna (topic / service / action) kisi bhi task ke liye
* Samajhna publishers, subscribers, clients, servers, aur action clients/servers kaise kaam karte hain
* Parameters use karke robot tune karna without recompiling
