var express = require('express');
var router = express.Router();
var models = require('../models');


var criteria = function(req) {
  return { where: {id: req.params.id} };
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.format({
    json: function () {
      models.contadores.findAll().then(contadores => {
        res.json({contadores: contadores});
      });
    },
    html: function () {
      models.contadores.findAll().then(contadores => {
        res.render('index', { contadores: contadores });
      });
    }
  });
});

router.put('/:id', function(req, res, next) {

  if(req.body.valor){
    models.contadores.update(req.body, criteria(req)).then(contador => {
      res.redirect('/');
    });
  }else{
    var nuevo={valor:1};
    models.contadores.create(nuevo).then(contador => {
      res.redirect('/');
    });  
  } 

});


module.exports = router;
