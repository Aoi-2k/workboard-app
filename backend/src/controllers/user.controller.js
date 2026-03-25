// GET user
const getUser = (req, res) => {
    res.json({
        name: "aoi",
        role: "SDE2",
    });
};

// POST data
const postData = (req, res) => {
    const body = req.body;

    res.json({
        message: "data received successfully",
        data: body,
    });
};

module.exports = {
    getUser,
    postData,
};