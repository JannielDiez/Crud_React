const Sequelize = require('sequelize');

const conn = new Sequelize(
    'node',
    'root',
    '',
    {
        host:'localhost',
        port:3309,
        dialect:'mysql'
    }
);


module.exports = conn;