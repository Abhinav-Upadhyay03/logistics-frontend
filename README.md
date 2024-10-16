# **PackNGo - Scalable Logistics Platform**

### **Table of Contents**

- [Features](#features)
  - [User Features](#user-features)
  - [Driver Features](#driver-features)
  - [Admin Features](#admin-features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

---

### **Features**

#### **User Features:**

- **Booking Service**:  
  Users can book a vehicle for transporting goods, specifying details like:
  - Pickup location
  - Drop-off location
  - Type of vehicle
  - Estimated cost based on distance and vehicle type.

- **Real-Time Tracking**:  
  After booking, users can track their assigned driver’s location in real time.

- **Price Estimation**:  
  Users receive an upfront price estimation based on various factors like distance, vehicle type, and demand at the time.

#### **Driver Features:**

- **Job Assignment**:  
  Drivers receive booking requests and can accept jobs. Upon acceptance, they receive:
  - Pickup and drop-off locations
  - Details for starting the journey.

- **Job Status Updates**:  
  Drivers can update job statuses as:
  - En route to pickup
  - Goods collected
  - Delivered.

#### **Admin Features:**

- **Fleet Management**:  
  Admins can:
  - Monitor available vehicles and driver activities.
  - Analyze booking and trip data in real time.

- **Data Analytics**:  
  The platform provides basic analytics like:
  - Number of trips completed
  - Average trip time
  - Driver performance metrics.

---

### **Tech Stack**

- **Frontend**: React Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **APIs**: Custom REST APIs for booking, user creating, updating the status of delivery.

---

### **Installation**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/PackNGo.git
   cd PackNGo
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the application:**
   ```bash
   npm run dev
   ```
### **Usage**

1. **Booking a Ride**:  
   Users can input their pickup and drop-off locations, select a vehicle type, and get a price estimate.

2. **Tracking a Driver**:  
   Once a vehicle is booked, the user's dashboard will show real-time tracking of the assigned driver.

3. **Driver Job Management**:  
   Drivers can manage their jobs, update their status, and receive notifications for new booking requests.

4. **Admin Control**:  
   Admins can access fleet management tools, view live driver locations, and generate analytics reports for business insights.

---


### **Contributing**

We welcome contributions! To get started:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Submit a pull request.


