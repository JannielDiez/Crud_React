const express = require('express');
const router = express.Router();
const EmployeeController = require('../controller/customerController');

router.get('/test',EmployeeController.test);

router.get('/save',(req,res)=>{
    res.json({status:'Employeed Saved'});
});



module.exports = router;