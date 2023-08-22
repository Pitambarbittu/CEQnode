const express = require('express');
const { getUsers, createUser, getUser, updateUser  } = require('../controllers/userController');
const { createUser1, getUsers1, deleteUser1, getUser1, updateUser1 } = require('../controllers/usercontrollerdb');

const router = express.Router();

router.route("/users").get(getUsers).post(createUser)
router.route("/users/:id").get(getUser).post(updateUser)

router.route("/usersfromdb").get(getUsers1).post(createUser1)
router.route("/usersfromdb/:id").get(getUser1).post(updateUser1).delete(deleteUser1)



module.exports =router;


//MVC (module view controller)