# Chapter 13: Sensor Simulation

## Why Simulate Sensors?

**Real robots ko sensors ki zarurat hai taake wo world dekh aur feel kar saken**

Simulated sensors realistic hone chahiye taake:

* Code test karo bina real hardware ke
* Code simulation aur real world dono mein kaam kare
* Problems discover karo before real robot crash kare

## The Sim-to-Real Gap

**Problem**: Perfect simulation ≠ Real world

**Simulation mein**:

* Camera perfectly clear images dekhta hai
* Sensors exact values read karte hain
* Koi noise ya errors nahi

**Real world mein**:

* Cameras blur aur shadows hote hain
* Sensors random errors (noise) karte hain
* Environmental interference hota hai

**Result**: Code simulation mein kaam karta hai lekin real robot pe fail hota hai!

**Solution**: Simulation mein realistic noise add karo

## Common Simulated Sensors

### Camera (RGB)

**What it does**: Color images record karta hai

**Configuration**:

* Resolution (pixels)
* Frame rate (fps)
* Field of view (degrees)

**Output**: ROS 2 topic pe images

### Depth Camera

**What it does**: Objects tak distance record karta hai

**Configuration**:

* Range (min-max distance)
* Resolution
* Frame rate

**Output**: Depth images ya point clouds

### LiDAR

**What it does**: Laser se scan karta hai, distances measure karta hai

**Configuration**:

* Range (kitna door dekh sakta hai)
* Resolution (degrees between rays)
* Scan rate (Hz)

**Output**: Point cloud ya laser scan

### IMU (Inertial Measurement Unit)

**What it does**: Motion aur orientation measure karta hai

**Includes**:

* Accelerometer (linear acceleration)
* Gyroscope (rotation speed)

**Output**: Acceleration aur angular velocity

### Force/Torque Sensor

**What it does**: Forces aur torques measure karta hai

**Where**: Gripper ya joints pe

**Output**: ROS 2 topic pe force aur torque values

## Adding Noise (Realism)

**Perfect data unrealistic hai!**

### Gaussian Noise (Most Common)

Gaussian noise = bell curve distribution

**Parameters**:

* **Mean** - Noise ka center (usually 0)
* **Standard Deviation** - Noise kitna hai (bigger = more noise)

**Example**:

```
Real value = 10.0
Mean = 0.0
Std Dev = 0.5
Noisy values = 9.8, 10.1, 9.9, 10.3, 10.0, ...
```

### Why Gaussian Noise?

✓ Matches real sensor noise
✓ Easy configure karna
✓ Mathematically kaam karta hai
✓ Realistic results deta hai

## Configuring Sensors in SDF

**Example camera with noise**:

```xml
<sensor name="camera" type="camera">
  <camera>
    <horizontal_fov>1.047</horizontal_fov>
    <image>
      <width>640</width>
      <height>480</height>
    </image>
  </camera>
</sensor>
```

**Example IMU with noise**:

```xml
<sensor name="imu" type="imu">
  <imu>
    <noise>
      <type>gaussian</type>
      <mean>0.0</mean>
      <stddev>0.02</stddev>
    </noise>
  </imu>
</sensor>
```

## Tuning Noise for Your Robot

**Steps**:

1. Real sensor noise measure karo (kai readings lo)
2. Mean aur standard deviation calculate karo
3. SDF mein noise parameters set karo
4. Simulation run karo
5. Simulated data aur real data compare karo
6. Adjust karo jab tak match na kare

**Tool**: Real sensor data use karo simulation calibrate karne ke liye

## Sensor Simulation Checklist

| Sensor           | Add noise? | Priority |
| ---------------- | ---------- | -------- |
| **Camera**       | Yes        | High     |
| **Depth**        | Yes        | High     |
| **LiDAR**        | Yes        | High     |
| **IMU**          | Yes        | Medium   |
| **Force/Torque** | Yes        | Medium   |

## Tips for Realistic Simulation

✓ Noise mat bhoolo - important hai!
✓ Real sensor specs datasheets se use karo
✓ Noisy data ke saath test karo before deployment
✓ Simulation calibrate karo real sensors ke liye
✓ Check karo simulation real robot match karta hai

## Common Sensor Issues

| Problem                                 | Cause               | Fix                           |
| --------------------------------------- | ------------------- | ----------------------------- |
| Code sim mein kaam kare lekin real fail | Sim mein noise nahi | Realistic noise add karo      |
| Camera bohot door dekhta hai            | FOV bohot wide      | Field of view reduce karo     |
| Lidar walls ke through dekhta hai       | Ray-tracing bug     | Collision geometry check karo |
| IMU bohot jittery                       | Noise zyada         | Std dev reduce karo           |
| Data fake lag raha                      | Noise nahi          | Noise parameters add karo     |

## What You'll Learn

* Common robot sensors simulate karna
* Sensors mein realistic noise add karna
* Sensor parameters configure karna
* Simulation calibrate karna real sensors ke liye
* Sim-to-real gap bridge karna
* Robust algorithms test karna
* Perception code validate karna
