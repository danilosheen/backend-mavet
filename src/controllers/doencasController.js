const doencasService = require('../services/doencasService');

async function createDoenca(req, res) {
  try {
    const { nome, descricao, remediosIds } = req.body;
    const doenca = await doencasService.createDoenca({ nome, descricao, remediosIds });
    res.status(201).json(doenca);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar doença', detail: error.message });
  }
}

async function getAllDoencas(req, res) {
  try {
    const doencas = await doencasService.getAllDoencas();
    res.json(doencas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar doenças' });
  }
}

async function getDoencaById(req, res) {
  try {
    const doenca = await doencasService.getDoencaById(req.params.id);
    if (!doenca) return res.status(404).json({ error: 'Doença não encontrada' });
    res.json(doenca);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar doença' });
  }
}

async function updateDoenca(req, res) {
  try {
    const { nome, descricao, remediosIds } = req.body;
    const doenca = await doencasService.updateDoenca(req.params.id, { nome, descricao, remediosIds });
    res.json(doenca);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar doença' });
  }
}

async function deleteDoenca(req, res) {
  try {
    await doencasService.deleteDoenca(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir doença' });
  }
}

module.exports = {
  createDoenca,
  getAllDoencas,
  getDoencaById,
  updateDoenca,
  deleteDoenca,
};
