const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    origin: {
      name: String,
      coordinates: [Number], // [lng, lat]
    },
    departureDate: { type: String, required: true },
    returnDate: { type: String },
    
    destination: {
      name: String,
      coordinates: [Number], // [lng, lat]
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
