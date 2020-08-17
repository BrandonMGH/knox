const express = require('express');
// const mongoose = require('mongoose');
const User = require('../MongoAtlas/User.js');
const route = express.Router();


route.post('/addUser', async (req, res) => {
    console.log(req.body.user);
    let newUser = {
        userName: req.body.userName,
        passWord: req.body.passWord
    };
    console.log("new user info:" + newUser);
    let userModel = new User(newUser);
    await userModel.save();
    res.json(userModel)
})

route.get('/getUser', async (req, res) => {

})

module.exports = route;