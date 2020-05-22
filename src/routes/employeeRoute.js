const express = require('express');
const router = express.Router();
const EmployeeController = require('../controller/customerController');

router.get('/test',EmployeeController.test);

router.get('/save',(req,res)=>{
    res.json({status:'Employeed Saved'});
});

router.get('testdata',EmployeeController.testData);
router.get('list', EmployeeController.list);


module.exports = router;