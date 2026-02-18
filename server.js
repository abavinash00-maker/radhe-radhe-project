require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

/* ===== MongoDB Connect ===== */

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log("Mongo Error:", err));

/* ===== User Schema ===== */

const userSchema = new mongoose.Schema({
    username: String,
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

/* ===== API Route ===== */

app.post("/api/submit", async (req, res) => {
    try {
        const { username } = req.body;
        await User.create({ username });
        res.json({ message: "Username saved in database" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
});

/* ===== Start Server ===== */

app.listen(5000, () => {
    console.log("Server running on port 5000");
});