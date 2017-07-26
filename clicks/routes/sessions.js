var express = require('express');
var router = express.Router();


var criteria = function(req) {
	return { where: {id: req.params.id} };
}

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send(req.session.count);
});

router.post('/', function(req, res, next) {
	req.session.count = req.body.count;
	res.send(req.session.count);
});

module.exports = router;
