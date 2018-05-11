const express = require('express');
const router = express.Router();

const registroController = require('../controllers/registroController')

router.get('/', registroController.inicio);
router.post('/agregar', registroController.guardar);
router.get('/actualizar/:id', registroController.editar);
router.post('/actualizar/:id', registroController.actualizar);
router.get('/borrar/:id', registroController.borrar);

module.exports = router;