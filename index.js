const express = require('express');
const port = 8000;
const app = express();



app.listen(port,function(err){
    if(err){
        console.log(`Error in creating a server ${err}`);
        return err;
    }
    console.log(`Server created at ${port} port`);
})