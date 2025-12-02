# **Chapter 32: Humanoid Robot Anatomy**

Humanoid robots humans ki tarah design kiye jate hain. Unki anatomy samajhna humein **design, control, aur program karne** mein madad deta hai taake woh human environments mein move, interact, aur work kar saken.

---

## **Upper Body**

Upper body mein **torso, head, aur arms** shamil hain.

### **Torso**

* Upper aur lower body ko connect karne ka central hub hai.
* Main processors, power, aur communication systems rakhta hai.
* **Balance, reach, aur expressiveness** ke liye bend ya rotate kar sakta hai.

### **Head**

* Dekhne, sunne, aur interact karne ke liye important hai.
* **Sensors:** Cameras, depth sensors, microphones (kabhi kabhi smell sensors).
* **Actuators:** Head ko move karte hain (pitch, yaw, roll) aur kabhi kabhi facial features.

### **Arms**

* Human arms ki tarah design kiye gaye hain reach aur manipulation ke liye.
* **Shoulder:** Multiple directions mein move karta hai.
* **Elbow:** Bend aur straighten karta hai (pitch).
* **Wrist:** Rotate aur tilt karta hai (pitch, yaw, roll).
* **Hand:** End-effector objects ko grasp aur manipulate karne ke liye (detailed Chapter 34 mein).

---

## **Lower Body**

Lower body **mobility aur balance** provide karta hai, jismay **pelvis, legs, aur feet** shamil hain.

### **Pelvis**

* Torso ko legs se connect karta hai.
* Walking aur balance ke liye robot ka **center of mass** shift karne mein madad karta hai.

### **Legs**

* Walking, standing, aur impact absorb karne ke liye design kiye gaye.
* **Hip:** Legs ko multiple directions mein move karta hai.
* **Knee:** Bend aur straighten karta hai.
* **Ankle:** Foot angle adjust karta hai balance ke liye.

### **Feet**

* Ground ke contact points.
* Often **force sensors** hotay hain jo balance aur weight distribution detect karne mein madad karte hain.

---

## **Joints and Degrees of Freedom (DoF)**

* **DoF:** Kitne independent movements aik robot joint kar sakta hai.
* Zyada DoF = zyada human-like motion, lekin control mushkil.
* Humanoids aksar **30–60 DoF** rakhte hain realistic movement ke liye.

---

## **Hardware Integration**

### **Lightweight Materials**

* Aluminum, carbon fiber, ya composites weight reduce karte hain.
* Lighter robots ko **kam energy** chahiye aur faster move karte hain.

### **Motors and Actuators**

* **Servo ya BLDC motors** precise aur efficient motion ke liye.
* Gear reductions torque increase karte hain.
* **Series elastic actuators (SEAs)** muscles mimic karte hain safety aur flexibility ke liye.

### **Sensors**

* **Proprioceptive Sensors:** Joint encoders, force/torque sensors, IMUs balance aur motion ke liye.
* **Exteroceptive Sensors:** Cameras, lidar, aur ultrasonic sensors environment ko dekhne aur samajhne ke liye.

---

Humanoid robot ka design, joints, motors, aur sensors mil kar **human-like motion aur intelligent behaviors** enable karte hain.
