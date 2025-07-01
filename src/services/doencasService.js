const { PrismaClient } = require('../generated/prisma/client');
const prisma = new PrismaClient();

async function createDoenca({ nome, descricao, remediosIds }) {
  return await prisma.doencas.create({
    data: {
      nome,
      descricao,
      remedios: {
        connect: remediosIds.map(id => ({ id })),
      },
    },
    include: { remedios: true },
  });
}

async function getAllDoencas() {
  return await prisma.doencas.findMany({
    include: { remedios: true },
  });
}

async function getDoencaById(id) {
  return await prisma.doencas.findUnique({
    where: { id },
    include: { remedios: true },
  });
}

async function updateDoenca(id, { nome, descricao, remediosIds }) {
  return await prisma.doencas.update({
    where: { id },
    data: {
      nome,
      descricao,
      ...(remediosIds && {
        remedios: {
          set: remediosIds.map(id => ({ id })),
        },
      }),
    },
    include: { remedios: true },
  });
}

async function deleteDoenca(id) {
  return await prisma.doencas.delete({ where: { id } });
}

module.exports = {
  createDoenca,
  getAllDoencas,
  getDoencaById,
  updateDoenca,
  deleteDoenca,
};
