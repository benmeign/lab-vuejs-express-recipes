var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


const IngredientSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    unity: String
  });


  module.exports = mongoose.model('Ingredient', IngredientSchema);