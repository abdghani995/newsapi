var express = require('express');
var router = express.Router();
var path = require('path');

var rawChannelNewsCtrl = require(path.join(__dirname,'..','..','controller','rawChannelNewsCtrl'))
/* GET home page. */


router.get('/:source', rawChannelNewsCtrl.getChannelNews )
router.get('/:source/limit/:limit' , rawChannelNewsCtrl.getRawNewsLimit)
router.get('/:source/skip/:skip/limit/:limit' , rawChannelNewsCtrl.getRawNewsSkipLimit)
module.exports = router;
