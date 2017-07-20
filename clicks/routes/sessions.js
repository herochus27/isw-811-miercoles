var express = require('express');
var router = express.Router();


var criteria = function(req) {
  return { where: {id: req.params.id} };
}

/* GET users listing. */
router.get('/', function(req, res, next) {
res.json({count: 1 });
});

module.exports = router;
