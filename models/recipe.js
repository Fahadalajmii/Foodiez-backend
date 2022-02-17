const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const RecipeSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  image: { type: String }, //required: true
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  ingredients: [String],
});

module.exports = model("Recipe", RecipeSchema);
