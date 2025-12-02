# **Chapter 33: Bipedal Locomotion and Balance Control**

Humanoid robots **do pairon par chal sakte hain**, bilkul humans ki tarah. Is se yeh human-friendly spaces mein move kar sakte hain aur obstacles handle kar sakte hain. Do pairon par chalna **mushkil** hai kyunke robots ko constantly apna balance maintain karna padta hai.

---

## **Key Concepts of Balance**

### **Center of Mass (CoM)**

* **CoM** woh point hai jahan robot ka weight balanced hota hai.
* Stable rehne ke liye robot ko apna **CoM projection** apne **support polygon** (pairon ke neeche area) ke andar rakhna hota hai.
* Agar CoM support polygon ke bahar jaye, to robot girne ka risk hota hai.

### **Zero Moment Point (ZMP)**

* **ZMP** woh point hai zameen par jahan robot ki forces balanced hoti hain.
* Agar ZMP support polygon ke andar rahe, to robot **nahin girega**.
* ZMP controllers balance maintain karne ke liye walking aur dynamic movements mein use hota hai.

---

## **Dynamic Walking Controllers**

Robots sirf stand nahi karte—they **dynamic walking** karte hain. Controllers help karte hain naturally move karne mein aur balance maintain karne mein.

### **Model Predictive Control (MPC)**

* MPC robot ke **future motion** predict karta hai aur steps adjust karta hai taake balance maintain ho.
* Forces, CoM, aur ZMP ko consider karke safe walking plan karta hai.

### **Capture Point**

* **Capture point** woh jagah hai jahan robot step kare taake girne se bache.
* Capture point control karke robots **disturbances se recover** kar sakte hain walking ke doran.

---

## **Walking on Uneven Terrain**

Robots ko uneven ground par adapt karna padta hai.

### **Terrain Adaptation**

* Sensors jaise **lidar, depth cameras, aur force sensors** ground detect karte hain.
* Robots **step height, foot placement, aur posture** adjust karte hain slopes ya obstacles navigate karne ke liye.

### **Compliance Control**

* Joints thoda **give kar sakte hain**, rigid nahi hote.
* Is se stability improve hoti hai aur uneven surfaces par stress kam hota hai.

---

## **Dynamic Actions: Running and Jumping**

Advanced robots challenging movements perform kar sakte hain.

### **Running**

* Includes **aerial phases** jahan dono pair zameen se upar hote hain.
* Controllers momentum aur safe landing manage karte hain.

### **Jumping**

* Strong vertical push aur controlled landing required.
* Yeh bipedal robots ke liye sabse difficult actions mein se ek hai.

---

Walking, running, ya jumping ke doran balance maintain karna **complex** hai, lekin ongoing research humanoid robots ko real environments mein naturally aur safely move karne mein madad kar rahi hai.
