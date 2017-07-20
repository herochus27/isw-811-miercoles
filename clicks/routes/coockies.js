var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  console.log('==========>'+req.cookies.TEST);

	if(req.cookies.TEST ===undefined){
       
     res.cookie('TEST' , '0').send('Cookie is set');
       return;
		//console.log('');
	}
     var valor = (parseInt(req.cookies.TEST) +1);

     res.cookie('TEST' , valor).send('Cookie is set');
 
});

module.exports = router;
