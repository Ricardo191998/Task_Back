const routes = require("express").Router();
const {auth} = require("../helpers/auth");


routes.get('/', auth ,function(req, res){
    res.status(200).json({
        message : "Home"
    });
});

module.exports = routes;