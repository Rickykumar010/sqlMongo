// models/Order.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Order = sequelize.define('Order', {
    customerId: DataTypes.INTEGER,
    orderDate: DataTypes.DATE,
});

module.exports = Order;
