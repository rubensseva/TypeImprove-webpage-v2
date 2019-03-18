const mongoose = require('mongoose');


const textSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  fromWhere: {
    type: String
  },
  text: {
    type: String, 
    required: true
  },
});


module.exports = mongoose.model('Texts', textSchema);

