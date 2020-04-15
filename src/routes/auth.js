const routes = require("express").Router();

routes.post('signin',(req, res) =>{
    res.status(200).json({
        message : "Home"
    });
});

routes.post('signup',(req, res) =>{
    res.status(200).json({
        message : "Home"
    });
});

module.exports = routes