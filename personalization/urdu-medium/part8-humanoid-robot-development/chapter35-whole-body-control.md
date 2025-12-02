# **Chapter 35: Whole-Body Control**

Whole-Body Control (WBC) ka matlab hai humanoid robot ke **sab joints ko ek saath move karna**—arms, legs, torso, aur head—taake tasks smoothly perform ho, balance maintain rahe, aur environment ke sath safely interact ho sake. Har limb ko alag control karne ke bajaye, WBC robot ko **ek connected system** ki tarah treat karta hai.

---

## **Inverse Kinematics (IK) and Inverse Dynamics (ID)**

### **Inverse Kinematics (IK)**

* IK calculate karta hai **joint angles** jo end-effector (jaise hand ya foot) ko specific position par le ja sake.
* WBC IK use karta hai taake **multiple limbs ek saath** move karein, balance aur joint limits ko consider karte hue.

### **Inverse Dynamics (ID)**

* ID calculate karta hai **forces ya torques** jo har joint par apply karni hain taake desired motion achieve ho.
* Ye ensure karta hai ke robot **safely aur efficiently** move kare, environment ki forces ke sath react karte hue.

---

## **Prioritized Task Execution**

Robots aksar **multiple tasks simultaneously** perform karte hain, aur kuch tasks conflict kar sakte hain (jaise object reach karna aur balance maintain karna). WBC **priority levels** use karta hai:

1. **High-Priority Tasks:** Hamesha succeed karna chahiye (e.g., girna na, collisions avoid karna).
2. **Medium-Priority Tasks:** Agar possible ho bina higher-priority tasks interfere kiye (e.g., object reach karna).
3. **Low-Priority Tasks:** Bachi hui freedom se posture, energy, ya smoothness optimize karna.

> Sochiye jaise “to-do list” jahan important tasks pehle kiye jate hain, aur chhote tasks baaki gaps fill karte hain.

---

## **Balance and Compliance**

### **Maintaining Balance**

* WBC **Center of Mass (CoM)** move karta hai, foot forces adjust karta hai, aur arms aur torso use karta hai robot ko stable rakhne ke liye.
* Ye **standing, walking, ya push hone** ke doran kaam karta hai.

### **Compliance**

* Compliance ka matlab hai robot **forces ke samne thoda yield kar sakta hai**, jo safer aur smoother motion provide karta hai.
* Types:

  * **Joint-Level Compliance:** Joints spring ya dampers ki tarah behave karte hain.
  * **Task-Level Compliance:** Robot kuch directions mein soft aur kuch mein stiff ho sakta hai (jaise horizontally push ke liye soft, weight support ke liye stiff).

---

## **Reactive Responses to Disturbances**

* WBC robot ko **pushes, slips, ya uneven ground** par quickly react karne deta hai.
* Kaise kaam karta hai:

  * **Disturbance Estimation:** Sensors unexpected forces detect karte hain.
  * **Real-time Adaptation:** Robot joint angles aur forces recalculate karta hai taake balance regain ho aur tasks continue ho.
  * Strategies: **stepping, arms move karna for balance, ya posture adjust karna**.

---

Whole-Body Control humanoid robots ko **dynamically, safely, aur naturally** complex environments mein move karne ka sabse advanced tareeqa provide karta hai, khaas kar humans ke aas paas.
