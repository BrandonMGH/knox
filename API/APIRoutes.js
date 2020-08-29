const express = require('express');
// const mongoose = require('mongoose');
const User = require('../MongoAtlas/User.js');
const route = express.Router();


route.post('/addUser', async (req, res) => {
    console.log(req.body.userInfo);
    let newUser = {
        userName: req.body.user,
        passWord: req.body.password
    };
    console.log("new user:" + newUser['userName'], "new password:" + newUser['passWord']);
    let userModel = new User(newUser);
    await userModel.save();
    res.json(userModel)
})


module.exports = route;