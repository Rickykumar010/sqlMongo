const mongoose = require('mongoose');
const mysql = require('mysql2');

const connectMongodb = async (url) => {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        throw error;
    }
};

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nem104_b37'
});

const connectMysql = () => {
    database.connect((err) => {
        if (err) {
            console.log('Error connecting to MySQL:', err);
        } else {
            console.log('Successfully connected to MySQL');
        }
    });
};

module.exports = { connectMongodb, connectMysql, database };
