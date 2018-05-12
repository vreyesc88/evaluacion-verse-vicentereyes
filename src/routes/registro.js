const express = require('express');
const router = express.Router();

const registroController = require('../controllers/registroController')

// rutas
router.get('/', registroController.inicio);
router.get('/actualizar/:id', registroController.editar);
router.get('/borrar/:id', registroController.borrar);
router.post('/agregar', registroController.guardar);
router.post('/actualizar/:id', registroController.actualizar);

module.exports = router;