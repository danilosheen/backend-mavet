const remediosService = require('../services/remediosService');

async function createRemedio(req, res) {
  try {
    const remedio = await remediosService.createRemedio(req.body);
    res.status(201).json(remedio);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar remédio', detail: error.message });
  }
}

async function getAllRemedios(req, res) {
  try {
    const remedios = await remediosService.getAllRemedios();
    res.json(remedios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar remédios' });
  }
}

async function getRemedioById(req, res) {
  try {
    const remedio = await remediosService.getRemedioById(req.params.id);
    if (!remedio) return res.status(404).json({ error: 'Remédio não encontrado' });
    res.json(remedio);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar remédio' });
  }
}

async function updateRemedio(req, res) {
  try {
    const remedio = await remediosService.updateRemedio(req.params.id, req.body);
    res.json(remedio);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar remédio' });
  }
}

async function deleteRemedio(req, res) {
  try {
    await remediosService.deleteRemedio(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir remédio' });
  }
}

module.exports = {
  createRemedio,
  getAllRemedios,
  getRemedioById,
  updateRemedio,
  deleteRemedio,
};
