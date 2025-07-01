const { PrismaClient } = require('../generated/prisma/client');
const prisma = new PrismaClient();

async function createRemedio(data) {
  return await prisma.remedios.create({ data });
}

async function getAllRemedios() {
  return await prisma.remedios.findMany({
    orderBy: {nome}
  });
}

async function getRemedioById(id) {
  return await prisma.remedios.findUnique({
    where: { id },
    include: { doencas: true },
  });
}

async function updateRemedio(id, data) {
  return await prisma.remedios.update({
    where: { id },
    data,
  });
}

async function deleteRemedio(id) {
  return await prisma.remedios.delete({ where: { id } });
}

module.exports = {
  createRemedio,
  getAllRemedios,
  getRemedioById,
  updateRemedio,
  deleteRemedio,
};
