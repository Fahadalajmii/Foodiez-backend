const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CategorySchema = new Schema({
  title: String, // String is shorthand for {type: String}
  recipies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

module.exports = model("Category", CategorySchema);
