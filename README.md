https://leafy-eclair-360741.netlify.app/

# 🚀 Artify

A full-stack web application built with React, Node.js, Express, and MongoDB.  
Users can explore arts, add new arts, and manage their listings securely.

---

## 📌 Live Demo

🔗 **Live Site:** https://leafy-eclair-360741.netlify.app/
🔗 **Server Repository:** https://github.com/Pritom099/Artify-server.git
🔗 **Client Repository:** https://github.com/Pritom099/Artify-client.git

---

## ✨ Features

- 🔐 User Authentication (Firebase / JWT)  
- 🛍 Add, Update & Delete Models  
- 🔎 Browse & Search Models  
- 🔒 Private Route Protection  
- 📱 Fully Responsive Design  
- 🌐 RESTful API Integration  

---

## 🛠 Tech Stack

### Frontend
- React  
- React Router  
- Tailwind CSS  
- Axios  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- JWT Authentication  

### Tools
- Firebase  
- Git & GitHub  
- VS Code  

---

## 📂 Project Folder Structure

```
ARTIFY-CLIENT/
│
├── dist/
├── node_modules/
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── Auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── components/
│   │   ├── ArtCard.jsx
│   │   ├── ArtistCard.jsx
│   │   ├── Banner.jsx
│   │   ├── Bannerlast.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   ├── authContext.jsx
│   │   └── AuthProvider.jsx
│   │
│   ├── firebase/
│   │   └── firebase.config.js
│   │
│   ├── layout/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── Addart/
│   │   │   └── Addart.jsx
│   │   │
│   │   ├── Allart/
│   │   │   └── Allart.jsx
│   │   │
│   │   ├── ArtDetails/
│   │   │   └── ArtDetails.jsx
│   │   │
│   │   ├── ErrorPage/
│   │   │   └── ErrorPage.jsx
│   │   │
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── MyFavourites/
│   │   │   └── MyFavourites.jsx
│   │   │
│   │   ├── MyGallery/
│   │   │   └── MyGallery.jsx
│   │   │
│   │   └── UpdateArt/
│   │       └── UpdateArt.jsx
│   │
│   ├── routes/
│   │   ├── PrivateRoute.jsx
│   │   └── routes.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## ⚙ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Pritom099/Artify-client.git
```

---

### 2️⃣ Setup Environment Variables

Create a `.env` file in the **server folder** and add:

```
DB_USER=your_database_user
DB_PASS=your_database_password
JWT_SECRET=your_secret_key
```

---

### 3️⃣ Run the Project

#### Client
```bash
npm run dev
```

#### Server
```bash
nodemon index.js
```

---

## 👨‍💻 Author

**Pritom**  
GitHub: https://github.com/Pritom099
