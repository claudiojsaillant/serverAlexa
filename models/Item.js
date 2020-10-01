var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  // `title` is required and of type String
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Item = mongoose.model("Item", ItemSchema);

// Export the Article model
module.exports = Item;
