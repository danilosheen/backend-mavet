const express = require('express');
const router = express.Router();
const remediosController = require('../controllers/remediosController');

// Criar um novo remédio
router.post('/remedio', remediosController.createRemedio);

// Buscar todos os remédios
router.get('/remedios', remediosController.getAllRemedios);

// Buscar remédio por ID
router.get('remedio/:id', remediosController.getRemedioById);

// Atualizar remédio
router.put('remedio/:id', remediosController.updateRemedio);

// Deletar remédio
router.delete('remedio/:id', remediosController.deleteRemedio);

module.exports = router;
