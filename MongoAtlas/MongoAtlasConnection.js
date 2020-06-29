const mongoose = require('mongoose');
require('dotenv').config();

const userName = process.env.KNOX_DB_USER;
const userPassword = process.env.KNOX_DB_PASSWORD;
const URI = `mongodb+srv://${userName}:${userPassword}@knox-f7j78.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('Connected to MongoDB Atlas')
}

module.exports = connectDB;