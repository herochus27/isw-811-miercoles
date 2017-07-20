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

router.post('/', function(req, res, next) {
  var contador = models.contadores.create(req.body);
  res.format({
    json: function () {
      contador.then(contador => {
        res.json(contador);
      });
    },
    html: function () {
        contador.then(contador => {
          res.redirect('/');
      });
    }
  })
});

router.delete('/:id', function(req, res, next) {
  res.format({
    json: function() {
      models.contadores.destroy(criteria(req)).then(() => {
        res.json({status: 'ok'});
      });
    },
    html: function () {
      models.contadores.destroy(criteria(req)).then(() => {
        res.redirect('/api/v1/products');
      });
    }
  });
});

router.put('/:id', function(req, res, next) {
  res.format({
    json: function () {
      models.contadores.incrementar().then(contador => {
        res.json(contador);
      });
    },
    html: function () {
      models.contadores.incrementar().then(contador => {
        res.redirect('/');
      });
    }
  });
});


module.exports = router;
