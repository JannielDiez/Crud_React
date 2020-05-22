const Sequelize = require ('sequelize');

const conn = require('./database');

let role = require('./role');

//const Sequelize = require('sequelize');

const nameTable = 'employee';

let Employee = conn.define(

);

let employee = conn.define(nameTable,{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING,
    roleId:{
        type: Sequelize.INTEGER,
        references:{
            model:role,
            key:'id'
        }
    }
},{
    timestamps:false,
});

employee.belongsTo(role);

module.exports = employee;