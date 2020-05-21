const express = require('express');
const app = express();




//Settings

app.set('port',process.env.PORT || 3000);

//Middlewares

app.set(express.json());

//Importing route
const employeeRoute = require('./routes/employeeRoute');

//Route

app.use('/employee',employeeRoute);


app.use('/test',(req,res)=>{
    res.send('Test route');
});

app.use('/',(req,res)=>{
    res.send("Hello World");
});
app.listen(app.get('port'),()=>{
    console.log("Server iniciado en el puerto",app.get('port'));
});

