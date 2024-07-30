var express = require('express');
var router = express.Router();
const {doSignup,doLogin,verifyotp} = require('../controllers/authContoller')

/* GET home page. */
router.post('/doSignup', doSignup);

router.post('/doLogin', doLogin);

router.post('/verifyOtp',verifyotp)

module.exports = router;
