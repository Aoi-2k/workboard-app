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

app.get("/api/user", (req, res) => {
    res.json({
        name : "aoi",
        role: "SDE2",
    });

});


//post request

app.post("/api/data", (req, res) => {
    const body = req.body;

    res.json({
        message : "data received sucessfully",
        data :body,
    });
});

module.exports =app;



//NOTE  app.js is responsible for configuring the Express application, while server.js is responsible for starting the server and handling environment configuration.