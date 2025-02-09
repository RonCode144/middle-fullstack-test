# 📦 Backend - Inventory Management System

This is the backend of the inventory management system, built with **NestJS** using **DDD, Hexagonal Architecture, and Vertical Slicing**.

## 🚀 Requirements
- **Node.js** v18+
- **Docker** and **Docker Compose**
- **MySQL** (Runs with Docker)

## 🔧 Installation and Setup

### 1️⃣ Clone the Repository
```sh
git clone <REPO_URL>
cd backend
```

### 2️⃣ Start the Database with Docker
```sh
docker-compose up -d
```

📌 This will start a MySQL container using the credentials set in .env.

### 3️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Configure Environment Variables
Create a .env file in the backend root and add:
# Server Configuration
PORT=3000

# Database
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root123
DB_NAME=inventory_db

# Event Configuration
EVENT_EMITTER=true

### 7️⃣ Start the Server
```sh
npm run start
```

The backend will be available at:
```sh
http://localhost:3000
```

## 🔥 Main Endpoints
### 📌 Products

- **GET /products → Get all products**
- **POST /products → Create a product**
- **GET /products/:id → Get a product by ID**
- **PUT /products/:id → Update a product**
- **DELETE /products/:id → Delete a product**

### 📌 Inventory Movements

- **POST /inventory-movements → Register stock entry/exit**
- **GET /inventory-movements → Get all movements**

### 📌 Notifications

- **GET /notifications → Get low-stock alerts**

## 🛠 Additional Commands
### 📌 Run in Development Mode (with Hot Reload)

```sh
npm run start:dev
```

### 📌 Stop Docker Containers
```sh
docker-compose down
```

## 📄 Project Architecture
📂 src/
├── products/ → Product module
├── inventory-movements/ → Inventory movements module
├── shared/ → Global configurations (database, events, etc.)
├── main.ts → Application entry point

**THANK YOU!**