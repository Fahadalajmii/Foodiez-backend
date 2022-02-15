const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const RecipeSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  image: String,
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
});

module.exports = model("Recipe", RecipeSchema);
