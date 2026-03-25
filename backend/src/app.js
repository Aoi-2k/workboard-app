const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// import routes
const userRoutes = require("./routes/user.routes");

// use routes
app.use("/api", userRoutes);

// health route
app.get("/api/health", (req, res) => {
    res.json({ message: "Backend is running" });
});

module.exports = app;