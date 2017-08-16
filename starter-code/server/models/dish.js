var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const DishSchema = new Schema({
    name: {
      type: String,
      required: [true, 'name is required']
    },
    description: {
      type: String,
      required: [true, 'description is required']
    },
    image: String,
    ingredients: [
      {
        ingredient: {
          type: Schema.Types.ObjectId,
          ref: 'Ingredient'
        },
        quantity: Number,
        _id: false
      }
    ]
  });


  module.exports = mongoose.model('Dish', DishSchema);