const bycrypt = require("bcryptjs");
const users = require("../model/user.model");


//register
const register = async (req, res) =>{
    const {name, email, password } = req.body;


    //hashing password

    const hashedPassword = await bycrypt.hash(password,10);

    const newUser ={
        name, 
        email,
        password : hashedPassword,
    };

    users.push(newUser);

    res.json({
        message : "user registerd successfully",
        user : newUser,
    });
};
    

//login

const login = async (req, res)=>{
    const {email, password}= req.body;

    const user = users.find(u => u.email==email);

    if(!user){
        return res.status(404).json ({ message: "user not found"});
    }
    const isMatch = await bycrypt.compare(password, user.password);

    if(!isMatch){
        return res.status(400).json({message: "invalid password"});
        }
            
    res.json({
        message: "LOgin successful",
    });
};
module.exports={
    register, 
    login, 
};
