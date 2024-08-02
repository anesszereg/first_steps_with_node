
//? import express

const express = require('express');
const { createUser } = require('../Controllers/User.Contoller');
const  router = express.Router();


 //? import les function 




//? routes  for user

router.post('/user', createUser);


module.exports = router;

