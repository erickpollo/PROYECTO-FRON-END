const bookingSchema = mongoose.Schema(
  {
    origin: {
      name: String,
      coordinates: [Number], // [lng, lat]
    },
    destination: {
      name: String,
      coordinates: [Number], // [lng, lat]
    },
    departureDate: { type: String, required: true },
    returnDate: { type: String },
  },
  { timestamps: true }
);
