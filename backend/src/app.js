const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger.middleware");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// routes
app.use("/api", userRoutes);
app.use("/api/auth", authRoutes);

// health route
app.get("/api/health", (req, res) => {
  res.json({ message: "Backend is running" });
});

module.exports = app;