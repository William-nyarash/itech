// import the requires modules
const express = require("express");
const { getUsers, createUsers, updateUsers, deleteUsers, loginUser } = require("../controllers/user.controllers");
const UserRouter = express.Router();

UserRouter.route('/user').get(getUsers);
UserRouter.route('/user').post(createUsers);
UserRouter.route("/user/login").post(loginUser);
UserRouter.route('/user/:id')
    .put(updateUsers)
    .delete(deleteUsers);

module.exports = UserRouter;