var express = require('express');
var router = express.Router();

const Melding = require('./../models/melding');
const Elev = require('./../models/elev');



router.get('/add', (req, res) => {
  res.render('pupils/eleverform');
});


router.post('/create', async (req, res) =>{
  const { navn, klasse } = req.body;
  const elever = await Elev.create({
      navn,
      klasse
  })
  res.redirect('/pupils');
});

/* GET users listing. */
router.get('/', async (req, res) => {
  const elever = await Elev.find();
  res.render('pupils/elever', {elever});
});

/* GET users listing. */
router.get('/meldinger', async (req, res) => {
  const meldinger = await Melding.find();
  res.render('pupils/meldinger', {meldinger});
});

router.get('/formpost/:id', async(req,res) => {
  const title="Add posts";
  const elever = await Elev.find();
  const id = req.params.id;
  console.log(req.params.id);
  res.render('pupils/postsform', 
  {
    title,id,elever
  });
  
})

  router.post('/post/create/:id', async (req, res) => {

  console.log(req.params);
  elev = req.params;
  id = elev.id;
  const { kommentar} = req.body;
  const melding = await Melding.create({
      kommentar,
      elev:id
  });
  await melding.save();

  const elevById = await Elev.findById(id);

  elevById.meldinger.push(melding);
  await elevById.save();

  //return res.send(userById);
console.log(elevById);
  res.redirect('/pupils');
}); 

router.get('/find/post/:id', async (req, res) => {
  const { id } = req.params;
  const elev = await Elev.findById(id).populate('meldinger');

   //res.send(user.posts);
   res.render('pupils/eleverposts', {elev})
});

module.exports = router;
