const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  prep_time: { type: String, required: false },
  cook_time: { type: String, required: false},
  date: { type: Date, default: Date.now }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;