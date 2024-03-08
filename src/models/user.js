const { Sequelize, DataTypes } = require('sequelize');
const db = require('./../config/db');

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

}, {
    tableName: 'users',
});


module.exports = User;