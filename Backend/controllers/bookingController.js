const Booking = require("../models/Booking");

// 📌 Crear una nueva reserva (C)
const createBooking = async (req, res) => {
  try {
    const { origin, destination, departureDate, returnDate } = req.body;

    if (!origin || !destination || !departureDate) {
      return res.status(400).json({ message: "Faltan datos obligatorios" });
    }

    const booking = new Booking({ origin, destination, departureDate, returnDate });
    const savedBooking = await booking.save();

    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la reserva", error: error.message });
  }
};

// 📌 Obtener todas las reservas (R)
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener reservas", error: error.message });
  }
};

// 📌 Obtener una reserva por ID (R)
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) return res.status(404).json({ message: "Reserva no encontrada" });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener reserva", error: error.message });
  }
};

// 📌 Actualizar una reserva (U)
const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!booking) return res.status(404).json({ message: "Reserva no encontrada" });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar reserva", error: error.message });
  }
};

// 📌 Eliminar una reserva (D)
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) return res.status(404).json({ message: "Reserva no encontrada" });

    res.json({ message: "Reserva eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar reserva", error: error.message });
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};
