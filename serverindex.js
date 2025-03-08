

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Backend is running!');
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
// const express = require("express");
// const app = express();
// const port = 5000; // Server port

// // Middleware (frontend ke request handle karne ke liye)
// app.use(express.json());

// // Simple API Route
// app.get("/api", (req, res) => {
//     res.json({ message: "Backend is working!" });
// });

// app.listen(port, () => {
//     console.log(`Backend is running on http://localhost:${port}`);
// });
// const express = require("express");
// const app = express();
// const port = 5000; // Server port

// // Middleware (JSON handle karne ke liye)
// app.use(express.json());  

// // Default route (for fixing Cannot GET /)
// app.get("/", (req, res) => {
//     res.send("Welcome to the Backend!");
// });

// // Simple API Route
// app.get("/api", (req, res) => {
//     res.json({ message: "Backend is working!" });
// });

// app.listen(port, () => {
//     console.log(`Backend is running on http://localhost:${port}`);
// });

const express = require("express");
const cors = require("cors"); // CORS allow karne ke liye
const app = express();
const port = 5000; // Server port
const mongoose = require("mongoose"); // to connect mongoose connection to the server right 

// Middleware (JSON handle karne ke liye)
app.use(express.json());
app.use(cors()); // Frontend aur Backend connect karne ke liye

// Default route (for fixing Cannot GET /)
app.get("/", (req, res) => {
    res.send("Welcome to the Backend!");
});

// Simple API Route

app.get("/api", (req, res) => {
    res.json({ message: "Backend is working!" }); 
});

 

// Server start
app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
});

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/mydatabase", {
   
})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err))

const User = require("./models/user"); // User model import karo

// User ka data save karne ka API
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.json({ message: "User Registered Successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error saving user" });
    }
});
