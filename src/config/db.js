
var mysql = require('mysql2');
const { Sequelize } = require('sequelize');


const conn = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    dialectOptions: {
        // Your mysql2 options here
    }
})

// const conn = mysql.createConnection({
//     host: process.env.DB_HOST,
//     // port: process.env.DB_PORT,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     efine: {
//         timestamps: false,
//     },
// })
// const conn = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     database: process.env.DB_NAME,
// });

module.exports = conn;