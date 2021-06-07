const express = require('express');
const router = express.Router();
const form = require('../models/register');


router.post('/form', (req,res, next)=>{
    return form.register(req,res, next);
});


module.exports= router;
