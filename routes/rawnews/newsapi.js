var express = require('express');
var router = express.Router();
var path = require('path');

var rawNewsCtrl = require(path.join(__dirname,'..','..','controller','rawNewsCtrl'))
/* GET home page. */

router.get('/', rawNewsCtrl.getRawNews);
router.get('/limit/:limit' , rawNewsCtrl.getRawNewsLimit)
router.get('/skip/:skip/limit/:limit' , rawNewsCtrl.getRawNewsSkipLimit)
module.exports = router;
