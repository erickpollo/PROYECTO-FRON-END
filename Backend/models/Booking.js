const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    origin: {
      name: { type: String, required: true },         // Nombre como string
      coordinates: { type: [Number], required: true } // [lng, lat]
    },
    destination: {
      name: { type: String, required: true },         // Nombre como string
      coordinates: { type: [Number], required: true } // [lng, lat]
    },
    departureDate: { type: String, required: true },
    returnDate: { type: String }
  },
  { timestamps: true }
);

// Índices para consultas geoespaciales
bookingSchema.index({ "origin.coordinates": "2dsphere" });
bookingSchema.index({ "destination.coordinates": "2dsphere" });

module.exports = mongoose.model('Booking', bookingSchema);
