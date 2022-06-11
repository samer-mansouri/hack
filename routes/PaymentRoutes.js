const express = require('express');
const router = express.Router();

const {
    createPayment,
} = require('../controllers/PayementController');


router.post('/payment', createPayment);


module.exports = { router };