'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  author: String,
  author_id : Number,
  id: Number,
  title: String,
  details: String,
  quiz: [
   {
    genre: String,
    title: String,
    body: String,
    point: Number,
    answer: Number,
    choice: {},
    explanation: String,
    user_id: String,
    id: Number
    }
  ]

});

module.exports = mongoose.model('Book', BookSchema);