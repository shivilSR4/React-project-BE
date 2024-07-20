var express = require('express');
var router = express.Router();
const {doSignup,doLogin} = require('../controllers/authContoller')

/* GET home page. */
router.post('/doSignup', doSignup);

router.post('/doLogin', doLogin);

module.exports = router;
