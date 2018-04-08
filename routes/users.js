const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    res.send('REGISTER');
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});


module.exports = router;
