var express = require('express');
var router = express.Router();

const Minne = require('./../models/minne');


/* GET home page. */
router.get('/', async (req, res) => {
  const minner = await Minne.find();
  res.render('minner/minner', { minner });
});

router.get('/add', (req, res) => {
  const title = "Dagbok";
  const head = "Skriv dine minner";
  res.render('minner/minnerform', {
    title,head
  });
});

router.post('/create', async (req, res) =>{
  const { tekst } = req.body;
  const minner = await Minne.create({
      tekst
  })
  res.redirect('/minner');
});


module.exports = router;
