# Chapter 13: Sensor Simulation

## Why Simulate Sensors?

**Real robots need sensors to see and feel the world**

Simulated sensors must be realistic so:
- Test code without real hardware
- Code works in simulation AND real world
- Discover problems before real robot crashes

## The Sim-to-Real Gap

**Problem**: Perfect simulation ≠ Real world

**In simulation**:
- Camera sees perfectly clear images
- Sensors read exact values
- No noise or errors

**In real world**:
- Cameras have blur and shadows
- Sensors have random errors (noise)
- Environmental interference

**Result**: Code works in sim but fails on real robot!

**Solution**: Add realistic noise to simulation

## Common Simulated Sensors

### Camera (RGB)
**What it does**: Records color images

**Configuration**:
- Resolution (pixels)
- Frame rate (fps)
- Field of view (degrees)

**Output**: Images on ROS 2 topic

### Depth Camera
**What it does**: Records distance to objects

**Configuration**:
- Range (min-max distance)
- Resolution
- Frame rate

**Output**: Depth images or point clouds

### LiDAR
**What it does**: Scans with laser, measures distances

**Configuration**:
- Range (how far it sees)
- Resolution (degrees between rays)
- Scan rate (Hz)

**Output**: Point cloud or laser scan

### IMU (Inertial Measurement Unit)
**What it does**: Measures motion and orientation

**Includes**:
- Accelerometer (linear acceleration)
- Gyroscope (rotation speed)

**Output**: Acceleration and angular velocity

### Force/Torque Sensor
**What it does**: Measures forces and torques

**Where**: On gripper or joints

**Output**: Force and torque values on ROS 2 topic

## Adding Noise (Realism)

**Perfect data is unrealistic!**

### Gaussian Noise (Most Common)

Gaussian noise = bell curve distribution

**Parameters**:
- **Mean** - Center of noise (usually 0)
- **Standard Deviation** - How much noise (larger = more noise)

**Example**:
```
Real value = 10.0
Mean = 0.0
Std Dev = 0.5
Noisy values = 9.8, 10.1, 9.9, 10.3, 10.0, ...
```

### Why Gaussian Noise?

✓ Matches real sensor noise
✓ Easy to configure
✓ Works mathematically
✓ Realistic results

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
1. Measure real sensor noise (take many readings)
2. Calculate mean and standard deviation
3. Set noise parameters in SDF
4. Run simulation
5. Compare simulated data to real data
6. Adjust until they match

**Tool**: Use data from real sensor to calibrate sim

## Sensor Simulation Checklist

| Sensor | Add noise? | Priority |
|--------|-----------|----------|
| **Camera** | Yes | High |
| **Depth** | Yes | High |
| **LiDAR** | Yes | High |
| **IMU** | Yes | Medium |
| **Force/Torque** | Yes | Medium |

## Tips for Realistic Simulation

✓ Don't forget noise - it's important!
✓ Use real sensor specs from datasheets
✓ Test with noisy data before deployment
✓ Calibrate simulation to real sensors
✓ Check sim matches real robot

## Common Sensor Issues

| Problem | Cause | Fix |
|---------|-------|-----|
| Code works in sim but fails real | No noise in sim | Add realistic noise |
| Camera sees too far | FOV too wide | Reduce field of view |
| Lidar sees through walls | Ray-tracing bug | Check collision geometry |
| IMU too jittery | Noise too high | Reduce std dev |
| Data looks fake | No noise | Add noise parameters |

## What You'll Learn

- Simulate common robot sensors
- Add realistic noise to sensors
- Configure sensor parameters
- Calibrate simulation to real sensors
- Bridge the sim-to-real gap
- Test robust algorithms
- Validate perception code