const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports = {

    signIn : async (req, res) =>{

        const {email, password} = req.body;

        user = await User.findOne({email : email});

        if(!user){
            res.status(404).json({
                success : false ,
                message : "User not found"
            });
        }

        if(!user.validate(password)){
            res.status(401).json({
                success : false ,
                message : "Invalid password"
            });
        }

        var token = jwt.sign({ user: user.email }, process.env.SECRET || 'secret-token', {
            expiresIn: '2h' // expires in 2 hours
          });

        res.status(200).json({
            success : true,
            message : {
                m : "Valid user",
                token : token
            }
        });
    },

    signUp : async (req, res) =>{
        const {name, email, password} = req.body;
        const user = await  User.findOne({email : email});

        if(user){
            return res.status(400).json({
                success : false ,
                message : "User already exist"
            });
        }

        try{
            let user = new User({
                    name: name,
                    email: email,
                    password: password });
            await user.save();
        }catch(error){
            res.status(500).json({
                success : false ,
                message : "We have problems in server, return late"
            });
        }

        res.status(200).json({
            success: true,
            message : "User succesfully created,  Please Login"
        });
    }
}