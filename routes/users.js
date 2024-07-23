var express = require('express');
const { userAuth } = require('../middleware/autharization');
const {getAllCourtData,getSingleCourtData} = require('../controllers/userController')
var router = express.Router();



router.get('/getallcourtdata',userAuth,getAllCourtData);
router.get('/getsinglecourtdata',userAuth,getSingleCourtData)


module.exports = router;
