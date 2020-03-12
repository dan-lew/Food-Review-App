const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  foods: [],
  ratings: [ReviewSchema]
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
