const express = require("express");
const cors = require("cors");

const app = express();


//middleware function that runs before route
app.use(cors());
app.use(express.json());

//routes
app.get("/api/health", (req, res) => {
    res.json({ message: "Backend is running" });
});




//new route day 2 



