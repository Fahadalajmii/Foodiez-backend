const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// const validator = require("validator");

const CategorySchema = new Schema({
  title: { type: String, unique: true, required: true },
  // image: { type: String, required: true },
  recipies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

module.exports = model("Category", CategorySchema);
