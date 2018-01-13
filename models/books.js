"use strict"

var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number
});

var Books = mongoose.model('Books', bookSchema);
module.exports = Books;
