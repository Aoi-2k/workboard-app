

//Get user details 

app.get("/api/user", (req, res) => {
    res.json({
        name : "aoi",
        role: "SDE2",
    });

});


//post req data 

//post request

app.post("/api/data", (req, res) => {
    const body = req.body;

    res.json({
        message : "data received sucessfully",
        data :body,
    });
});

module.exports = {
    getUser,
    postData
};



//NOTE  app.js is responsible for configuring the Express application, while server.js is responsible for starting the server and handling environment configuration.
