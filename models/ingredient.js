const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const IngredientSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  image: { type: String }, //required: true },
  recipies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

module.exports = model("Ingredient", IngredientSchema);
