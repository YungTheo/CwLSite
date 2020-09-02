const express = require('express');
const router = express.Router();
const sendMailService = require('./email.service');

// routes
router.post('/sendMail', sendMail);

module.exports = router;


function sendMail(req, res, next) {
    sendMailService.sendMail(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}