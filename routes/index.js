const express = require('express');
const router = express.Router();
var loggedIn = false
router.get('/', (req, res, next) => {
    res.render('index')
})
module.exports = router;