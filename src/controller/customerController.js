const controller = {};
const Employee = require('../model/employee');
const role = require('../model/role');
const sequelize = require('../model/database');



controller.test = (req,res)=>{
    const data = {
        name:'Janniel Diez',
        age:23,
        city: 'Las Palmas'
    }

    console.log("Send data from controller employee");
    res.json(data);
};

controller.testData = async(req,res)=>{
    const response = await sequelize.sync().then(function(){
        const data = Employee.findAll();
        return data;
    })
    .catch(err=>{
        return err;
    });
    
    res.json(response);
}

controller.list = async(req,res)=>{
    const data = await Employee.findAll();
    res.json(data);
}

//Create Role
role.create({
    role:'Admin'
});


//Create employee
Employee.create({
    name:'Janniel Diez',
    email:'test@test.com',
    roleId:1
});

module.exports = controller;