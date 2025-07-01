const express = require('express');
const router = express.Router();
const doencasController = require('../controllers/doencasController');

// Criar uma nova doença
router.post('/doenca', doencasController.createDoenca);

// Buscar todas as doenças
router.get('/doencas', doencasController.getAllDoencas);

// Buscar doença por ID
router.get('doenca/:id', doencasController.getDoencaById);

// Atualizar doença
router.put('doenca/:id', doencasController.updateDoenca);

// Deletar doença
router.delete('doenca/:id', doencasController.deleteDoenca);

module.exports = router;
