const mongoose = require("mongoose");

// Definimos el esquema de reservas (Booking)
const bookingSchema = new mongoose.Schema({
  // Origen de la reserva
  origin: {
    name: { type: String, required: true }, // Nombre del lugar
    location: {
      type: {
        type: String,
        enum: ["Point"], // Solo tipo "Point"
        required: true,
      },
      coordinates: {
        type: [Number], // Formato: [longitud, latitud]
        required: true,
      },
    },
  },

  // Destino de la reserva
  destination: {
    name: { type: String, required: true },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number], // [lng, lat]
        required: true,
      },
    },
  },

  // Fechas de la reserva
  departureDate: { type: String, required: true },
  returnDate: { type: String },

});

// Índices espaciales para consultas geográficas
bookingSchema.index({ "origin.location": "2dsphere" });
bookingSchema.index({ "destination.location": "2dsphere" });

module.exports = mongoose.model("Booking", bookingSchema);

