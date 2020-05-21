const express = require('express');
const app = express();

//Settings

app.set('port',process.env.PORT || 3000);

//Middlewares

app.set(express.json());

app.use('/',(req,res)=>{
    res.send("Hello World");
});

app.listen(app.get('port'),()=>{

    console.log("Server iniciado en el puerto",app.get('port'));
});