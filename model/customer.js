// models/Customer.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
});

module.exports = Customer;
