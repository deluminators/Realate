const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  link: {
    type: String,
    required: [true, 'resource should hav a link'],
  },
  plato:{
    type:String,
  },
  selectedFile:{
    type:String
  }
});

const resourceModel = mongoose.model('Resource', resourceSchema);
module.exports = resourceModel;
