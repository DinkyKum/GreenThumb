const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  numRatings: { type: Number, required: true },
  images: [String],
  light: String,
  WaterReq: String,
  suitableTemperature: [Number],
  sowingSeason: String,
  deliveryDate: String,
  description: String,
  benefits: [String],
  healthBenefits: String,
  sowingAndRepotting: String,
  humidityAndLight: String,
  watering: String,
  temperature: String,
  offers: [String],
  lastWatered: String,
  wateringInterval: Number,
  seedingDate: String,
  growthTime: Number,
  fertilizerDue: String,
});

const Plant = mongoose.model("Plant", plantSchema);
module.exports = Plant;
