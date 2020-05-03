const routes = require("express").Router();
const {auth} = require("../helpers/auth");
const UserController = require("../controllers/user.controllers");
const FriendController = require("../controllers/friend.controllers");

//Home Page 
routes.get('/', auth ,UserController.home);

//CRUD TASK
routes.post('/createTask', auth , UserController.createTask);
routes.get('/getAllTask',auth, UserController.getAllTask);
routes.get('/getTask/:id ', auth, UserController.getTask);
routes.get('/deteleTask/:id', auth , UserController.deleteTask);
routes.post('/updateTask/:id', auth , UserController.updateTask);

//Friends 
routes.get('/addFriend/:id', auth , FriendController.addFriend);
routes.get('/deleteFriend/:id', auth , FriendController.deleteFriend);
routes.post('/changePrivileges/:id', auth , FriendController.changePrivileges);

module.exports = routes;