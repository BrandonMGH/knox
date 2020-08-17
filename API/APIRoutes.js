const express = require('express');
// const mongoose = require('mongoose');
const User = require('../MongoAtlas/User.js');
const route = express.Router();

route.post('/addUser', async (req, res) => {
    console.log(req.body.user);
    let user = {
        userName: req.body.user,
        passWord: req.body.password
    };
    console.log("new user info:" + user);
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel)
})

route.get('/getUser', async (req, res) => {

})

module.exports = route;