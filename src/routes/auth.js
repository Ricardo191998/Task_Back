const routes = require("express").Router();
const Auth  = require("../controllers/auth.controllers");


routes.post('/signin',Auth.signIn);

routes.post('/signup',Auth.signUp);

module.exports = routes