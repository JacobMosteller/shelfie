const express = require('express');
const axios = require('axios');
const controller = require('./controller');

const app = express();

const port = process.env.PORT || 8070;

app.listen(port,()=>{
    console.log(`running on port ${port}`);
    
})