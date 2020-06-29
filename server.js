const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const connectDB = require('./MongoAtlas/MongoAtlasConnection.js')
const User = require('./MongoAtlas/User.js');

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

app.post('/user', async (req, res) => {
    const {firstName, lastName} = req.body;
    console.log(req.body.firstName)
    let user = {};
    user.firstName = firstName; 
    user.lastName = lastName;
    console.log("new user info:" + user);
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel)
})

+
app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`);
})