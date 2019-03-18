const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const textSchema = require('./routes/api/texts/text-model');
const text = require('./routes/api/texts/text-routes');

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://TypeImprove:Chicorea&11@ds033750.mlab.com:33750/my_first_database_mern', {useNewUrlParser: true})
  .then(() => console.log('Mongoose connected'))
  .catch((err) => console.log(err));


app.use('/api/text', text);

app.get('/', (req, res) => res.send('Hello World!'));


const PORT = 5000;
app.listen(PORT, () => console.log('TypeImprove server listening on port: ' + PORT));
