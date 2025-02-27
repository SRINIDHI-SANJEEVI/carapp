const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  fuelType: { type: String, required: true },
  mileage: { type: Number, required: true },
  transmission: { type: String, required: true },
  images: { type: [String], required: true }, 
  description: { type: String, required: true },
  isFeatured: { type: Boolean, default: false },
});

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;
