const express = require('express');
// const mongoose = require('mongoose');
const User = require('../MongoAtlas/User.js');
const route = express.Router();

route.post('/user', async (req, res) => {
    console.log(req.body.firstName);
    let user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };
    console.log("new user info:" + user);
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel)
})

module.exports = route;