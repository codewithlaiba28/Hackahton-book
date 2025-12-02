# Chapter 35: Whole-Body Control

## Introduction to Whole-Body Control

**Whole-Body Control (WBC)** ek tareeqa hai jisme robot ke saare parts—legs, arms, torso, head—saath me coordinate karke move karte hain. Har limb ko alag control karne ki bajaye, WBC robot ko ek system ke taur pe treat karta hai. Ye humanoid robots ke liye important hai kyunki ye unko smoothly move karne, balance maintain karne, aur human environments me complex tasks karne me help karta hai.

## Inverse Kinematics and Inverse Dynamics

Ye basic tools hain jo WBC me use hote hain:

### Inverse Kinematics (IK)

**Inverse Kinematics (IK)** calculate karta hai ke robot ke joints ko kaise adjust karna hai taake hand, foot, ya koi aur part specific position aur direction me ho. WBC me IK multiple body parts ke positions ek saath calculate kar sakta hai, balance maintain karte hue aur joint limits avoid karte hue.

### Inverse Dynamics (ID)

**Inverse Dynamics (ID)** calculate karta hai ke har joint ko kitni force ya torque chahiye desired movement produce karne ke liye. WBC ID use karta hai taake robot ke movements physically possible aur stable rahein.

## Prioritized Task Execution

Robots aksar ek saath bohot kaam karte hain. Kuch tasks dusre se zyada important hote hain. **Prioritized task execution** isko solve karta hai tasks ko rank karke:

### Hierarchy of Tasks

1. **High-Priority Tasks**: Hamesha complete karna zaroori hai (e.g., balance maintain karna, kisi cheez ko hit na karna).
2. **Medium-Priority Tasks**: Possible ho to karna, without affecting higher-priority tasks (e.g., kisi object ko reach karna).
3. **Low-Priority Tasks**: Bachi hui movement ya energy use karna posture, efficiency, ya comfort improve karne ke liye.

Agar high-priority task kuch joints ya forces use karta hai, to lower-priority tasks ko uske around kaam karna padta hai.

## Balance and Compliance

### Maintaining Balance

WBC robots ko stable rehne me help karta hai. Ye actively **Center of Mass (CoM)** move kar sakta hai, **Zero Moment Point (ZMP)** control kar sakta hai, aur foot forces adjust kar sakta hai balance maintain karne ke liye jab robot stand, walk, ya push ko react karta hai. Arms aur torso bhi balance maintain karne me help karte hain.

### Compliance

**Compliance** ka matlab hai robot thoda “give” kar sakta hai jab push ho ya objects/humans ke sath interact kar raha ho. Ye movements ko safer aur smoother banata hai.

* **Joint-Level Compliance**: Joints springs ya dampers ki tarah act karte hain.
* **Task-Level Compliance**: Robot kuch directions me stiff aur kuch me flexible ho sakta hai, task ke mutabiq (e.g., horizontally gently push, vertically strong rahe).

## Reactive Responses to Disturbances

WBC robots ko quickly react karna allow karta hai agar koi unexpected cheez ho jaye, jaise push ya uneven ground.

* **Disturbance Estimation**: Sensors push ya unexpected movement detect karte hain.
* **Real-time Adaptation**: WBC joint positions aur forces recalculate karta hai balance regain karne ke liye. Robot step le sakta hai, arms move kar sakta hai, ya posture adjust kar sakta hai taake upright rahe aur tasks continue kare.

**Whole-Body Control** ek advanced approach hai jo humanoid robots ko dynamically move karne, stable rehne, aur humans ke sath safely interact karne allow karta hai complex environments me.
