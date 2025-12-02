# Chapter 33: Bipedal Locomotion and Balance Control

## Introduction to Bipedal Locomotion

**Bipedal locomotion** means walking on two legs. It is very important for humanoid robots because it helps them move in environments made for humans. Walking on two legs helps robots:

* Avoid obstacles
* Reach places
* Use energy efficiently

However, walking on two legs is difficult because the robot must constantly keep its balance.

## Principles of Balance Control

Keeping balance is the most important part of bipedal walking. Two main ideas help control balance:

### Center of Mass (CoM)

The **Center of Mass (CoM)** is the point where the robot’s weight is balanced.

* The robot stays stable as long as the projection of its CoM falls inside its **support polygon** (the area covered by its feet when standing).

### Zero Moment Point (ZMP)

The **Zero Moment Point (ZMP)** is a point on the ground where all forces (gravity, movement, and contact) balance out.

* If the ZMP stays inside the support polygon, the robot will not fall.
* If the ZMP moves to the edge, the robot may lose balance.
* Controllers aim to keep the ZMP inside the support area or control its movement for smooth walking.

## Dynamic Walking Controllers

For natural walking, robots use **dynamic walking controllers**. These control leg movements, body posture, and CoM/ZMP together.

### Model Predictive Control (MPC)

**MPC** predicts the robot’s future motion over a short time and optimizes it to stay stable.

* It adjusts movements in advance to keep balance and achieve smooth walking.

### Capture Point

The **Capture Point** is where the robot would need to step to stop from falling.

* Controlling this point helps the robot recover from pushes or disturbances.

## Navigating Uneven Terrain

Humanoid robots must handle different surfaces like slopes or rocky ground.

### Terrain Adaptation

**Terrain adaptation** uses sensors (lidar, depth cameras, force sensors) to detect the ground and adjust steps, step height, and posture.

* This helps robots walk over obstacles and stay stable on uneven surfaces.

### Compliance Control

**Compliance control** allows joints to flex slightly under force.

* This lets the legs adapt to the ground instead of resisting it, improving balance and reducing impact.

## Dynamic Actions (Running, Jumping)

Advanced walking includes running and jumping, which are more challenging.

### Running Gaits

**Running** has phases where both feet are off the ground (aerial phase).

* Controllers manage momentum, clearances, and safe landings.

### Jumping

**Jumping** requires a strong push off the ground and careful landing to keep balance.

* It is one of the hardest bipedal movements.

Humanoid bipedal locomotion is still an active research area, with new advances making robots walk, run, and jump more like humans.
