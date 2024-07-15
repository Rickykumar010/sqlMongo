require('dotenv').config();
const express = require('express');
const { connectMongodb, connectMysql } = require('./configs/db');

const app = express()
app.use(express.json());

const port = process.env.PORT || 8080;
const mongo_url = process.env.MONGO_URL;

app.listen(port, async () => {
    try {
        await connectMongodb(mongo_url);
        connectMysql();
        console.log(`Server is listening on port ${port}`);
    } catch (err) {
        console.error('Error starting server:', err);
    }
});
