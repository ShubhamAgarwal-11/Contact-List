const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const contact = require('./model/contacts');

app.use(express.urlencoded());
app.use(express.static('./assets'));
app.set('view engine','ejs');
app.set('views','views');

// for display all the contact (fatching from db).
app.get('/',function(req,res){
    contact.find({},function(err,allContact){
        if(err){
            console.log('error in fatching contact from db');
            return err;
        }
        return res.render('home',{
            title: 'Home Page',
            contact : allContact
        });
    })  
})

// create new contact
app.post('/create-contact',function(req,res){
    contact.create({
        name : req.body.name,
        phone : req.body.phone
    },
    function(err,newContact){
        if(err){
            console.log('Error in creating a contact');
            return err;
        }
        console.log('New Contact Created!!');
        return res.redirect('back');
    })
})

app.listen(port,function(err){
    if(err){
        console.log(`Error in creating a server ${err}`);
        return err;
    }
    console.log(`Server created at ${port} port`);
})