const express = require('express');
const router = express.Router();
const upload = require("../middleware/upload");
const bookingController = require('../controllers/bookingController');

// Crear reserva
router.post('/', bookingController.createBooking);

// Obtener todas las reservas
router.get('/', bookingController.getBookings);

// Obtener una reserva por ID
router.get('/:id', bookingController.getBookingById);

// Actualizar una reserva
router.put('/:id', bookingController.updateBooking);

// Eliminar una reserva
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;
