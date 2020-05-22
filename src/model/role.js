const Sequelize = require('sequelize');

const conn = require('./database');

const nameTable = 'role';


let Role = conn.define(nameTable, {
    role: Sequelize.STRING
  },
  {
       timestamps: false,
  });

module.exports = Role;