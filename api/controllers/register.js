const express = require('express');
const router = express.Router();
const register_page = require('../models/register');


router.get('/register', (req, res, next) => {
    return register_page.register(req, res, next);
});

module.exports= router;