const jwt = require("jsonwebtoken");

module.exports = {

    auth : async (req, res, next)=>{
        var token = req.body.token || req.headers.authorization.split(' ')[1];       

        console.log(token);
        if(!token){

            return res.status(400).json({
                success : false,
                message : "No token providen"
            });

        }

        let validate = await jwt.verify(token , 'secret-token');

        if(validate){
            return next();
        }

        return res.status(401).json({
            success : false,
            message : "No valid token"
        });

    
    }


}