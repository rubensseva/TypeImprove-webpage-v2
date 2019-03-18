const express = require('express');
const router = express.Router();

const textSchema = require('./text-model');


router.use((req, res, next) => {
  console.log('in text route');
  console.log(req.method, req.url);
  next();
});

router.get('/', (req, res) => {
  console.log('text routes reached');
  res.send('text router works');
})


router.get('/getRandomText', (req, res) => {
  textSchema.count().exec(function (err, count) {
    var random = Math.floor(Math.random() * count);
    textSchema.findOne().skip(random).exec(
      function (err, result) {
        res.json(result);
      }
    );
  })
});


router.post('/insertNewText', (req, res) => {
  newText = new textSchema();
  const { name, author, fromWhere, text } = req.body;
  newText = new textSchema({ name, author, fromWhere, text });
  newText.save(function (err, updatedText) {
    if (err) res.json(err);
    res.send(updatedText);
  });
});



module.exports = router;
