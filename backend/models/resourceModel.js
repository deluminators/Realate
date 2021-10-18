const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  // title: {
  //   type: String,
  //   minlength: 8,
  //   required: [true, 'Provide a title'],
  // },
  // desc: {
  //   type: String,
  //   minlength: 15,
  //   required: [true, 'Provide a description'],
  // },
  // admin: {
  //   type: String,
  //   required: [true, 'Each resource should belong to an admin'],
  // },
  // video: {
  //   type: String,
  //   required: [true, 'Each resource should belong to a video'],
  // },
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
