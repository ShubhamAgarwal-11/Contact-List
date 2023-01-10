const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const contact = require('./model/contacts');

app.get('/',function(req,res){
    res.send('Hello Shubham');    
})

app.listen(port,function(err){
    if(err){
        console.log(`Error in creating a server ${err}`);
        return err;
    }
    console.log(`Server created at ${port} port`);
})