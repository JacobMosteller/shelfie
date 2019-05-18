const express = require('express');
const axios = require('axios');
const controller = require('./controller');
require('dotenv').config();
const massive = require('massive');

const app = express();

massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('database is connected')
    })
    .catch((err)=>{
        console.log(`damn its broken error: ${err}`)
    })

app.get('/api/inventory', (req,res,next)=>{
    const db = req.app.get('db');
    db.GET_INVENTORY()
        .then((product)=>{
        res.send(product)
    })
})

app.post('/api/product', (req,res,next)=>{})

const port = process.env.PORT || 8070;

app.listen(port,()=>{
    console.log(`running on port ${port}`);
})

app.get('/api/inventory', ()=>{
    
    
})