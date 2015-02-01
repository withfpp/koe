'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  genre: String,
  title: String,
  body: String,
  point: Number,
  answer: Number,
  choice: {},
  user_id: String,
  id: Number
});

module.exports = mongoose.model('Book', BookSchema);