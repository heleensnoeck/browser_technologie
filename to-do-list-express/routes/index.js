var express = require('express');
var router = express.Router();

var items = ['kaas', 'worst'];
var doing = [];
var done = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', items: items, doing: doing, done: done});
});

router.post('/add', function(req, res, next) {
  items.push(req.body.item);
  res.redirect('/');
});

router.post('/doing', function(req, res, next) {
  // pak uit de items array doing of done. 	
  // items.push(req.body.item);
  doing.push(items[req.body.id]); //pak de items daarvan het id en push dit in doing
  items.splice(req.body.id,1); // pak de items daarvan het id en de array(1) en remove dit item
  res.redirect('/');
});

router.post('/done', function(req, res, next) {
  // pak uit de items array doing of done. 	
  // items.push(req.body.item);

  if (req.body.source == 'items') {
  	done.push(items[req.body.id]);
  	items.splice(req.body.id,1);
  } else { // 'doing'
    done.push(doing[req.body.id]);
    doing.splice(req.body.id,1);
  }

  res.redirect('/');
});

module.exports = router;

// pak de value van een item
// verwijder hem van een item lijst
// met push je hem in een andere array	


// doing