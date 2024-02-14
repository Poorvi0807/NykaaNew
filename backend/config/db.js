const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB is connected');
    } catch (error) {
        console.log('Connection Failed MongoDB');
    }
}
// Poorvi
module.exports = connection