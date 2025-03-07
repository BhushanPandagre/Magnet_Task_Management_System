# 🌟 MERN Simple Task Management System

## 📌 Overview
The **MERN Task Management System** is a web-based application developed using the **MERN stack** (**MongoDB, Express.js, React.js, Node.js**) designed to **streamline task management** in organizations. It features **two role-based panels**:
- 🛠 **Admin Panel** – Manage users and tasks efficiently.
- 👨‍💻 **Employee Panel** – View and update assigned tasks with ease.

---

## 🚀 Features

### 🎯 **Admin Panel**
The **Admin Panel** empowers administrators with full control over user and task management:
✅ **Employee Management** – Add, edit, and remove employees with complete details.
✅ **Task Assignment** – Assign tasks with deadlines and detailed descriptions.
✅ **Task Monitoring** – Track task status and progress in real-time.
✅ **User Authentication** – Secure admin login to prevent unauthorized access.
✅ **Logout** – Secure session termination to safeguard sensitive data.

### 🗋l **Employee Panel**
The **Employee Panel** allows employees to manage their tasks seamlessly:
✅ **Task Dashboard** – View a list of assigned tasks with priority indicators.
✅ **Task Updates** – Mark tasks as **Pending**, **In Progress**, or **Completed** in real-time.

### 🌟 **General Features**
🎨 **Priority Management** – Tasks are categorized using color codes:
   - 🔴 **High Priority** – Red
   - 🟡 **Medium Priority** – Yellow
   - 🟢 **Low Priority** – Green

🔐 **Role-Based Access Control** – Separate UI and permissions for Admins & Employees.
📊 **Pagination** – Efficient navigation through large datasets.
⚡ **Real-Time Updates** – Get instant feedback on task actions.

---

## 🏧 Technology Stack

| Component      | Technology              |
|---------------|------------------------|
| 🎨 Frontend   | React.js, CSS          |
| ⚙️ Backend    | Node.js, Express.js    |
| 🟢 Database   | MongoDB                |
| 🔒 Auth       | JWT (JSON Web Tokens)  |
| 🎨 Styling    | CSS                    |

---

## ⚙️ Installation & Setup

### 👅 Clone the Repository
```bash
git clone https://github.com/BhushanPandagre/Magnet_Task_Management_System.git
cd Magnet_Task_Management_System
```

### 🛆 Install Dependencies
Run the following command to install all required dependencies:
```bash
npm install
```

### 🛠 Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URL=<your-database-url>
JWT_SECRET=<your-secret-key>
```

### 🚀 Start the Application

#### 🔥 Start the Frontend Server:
```bash
cd client
npm run dev
```

#### 🚀 Start the Backend Server:
```bash
cd server
nodemon server.js
```

---

## 🎮 Usage Instructions

### 👑 **Admin Functions**
🔹 Log in using **admin credentials**.
🔹 Add employees and assign tasks via the **Admin Panel**.
🔹 Monitor progress and update task statuses.

### 👨‍💻 **Employee Functions**
🔹 Log in using **employee credentials**.
🔹 View assigned tasks in the **Employee Panel**.
🔹 Update task status as **Pending, In Progress, Completed**.

---

## 💪 First-Time Admin Creation
Before logging in as an admin, you need to **create the first admin user manually using Postman**. Follow these steps:

1. Open **Postman**.
2. Create a new **POST** request to:
   ```
   http://localhost:5000/api/user/register
   ```
3. Set the request type to **raw JSON**.
4. Add the following payload:
   ```json
   {
     "name": "Bhushan Pandagre",
     "email": "bhushan@gmail.com",
     "title": "MERN Stack Developer",
     "password": "123456",
     "isAdmin": true,
     "tasks": []
   }
   ```
5. Click **Send** to create the admin user.

Here is an example screenshot of the request in Postman:

![Admin Creation in Postman](![Screenshot (170)](https://github.com/user-attachments/assets/ff56cc46-4c00-4a3d-a792-bc09e1dbf656)
)

---

## 👨‍💻 Developed By

**🚀 Bhushan Pandagre**  
💡 **Developer | Programmer | Innovator**  

💎 **Contact**: [pandagrebhushan3@gmail.com](mailto:pandagrebhushan3@gmail.com)  
🌐 **Portfolio**: [Portfolio Website](https://portfolio-bhushan-ra9f.vercel.app/)  
🌟 **LinkedIn**: [Bhushan Pandagre](https://www.linkedin.com/in/bhushan-pandagre)  

---

### 🌟 Show Some Love!  
If you found this project helpful, please ⭐ **star** the repository and feel free to contribute! 🚀

