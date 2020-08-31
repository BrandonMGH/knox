const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require('./MongoAtlas/MongoAtlasConnection.js')
// const User = require('./MongoAtlas/User.js');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./API/APIRoutes'));
app.use(express.static('build'));

// app.post('/user', async (req, res) => {
//     console.log(req.body.firstName);
//     let user = {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName
//     };
//     console.log("new user info:" + user);
//     let userModel = new User(user);
//     await userModel.save();
//     res.json(userModel)
// })



app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`);
})