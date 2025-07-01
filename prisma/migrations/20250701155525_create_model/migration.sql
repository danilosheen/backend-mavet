-- CreateTable
CREATE TABLE "Doencas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Doencas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Remedios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "doseMinCao" DOUBLE PRECISION,
    "doseMaxCao" DOUBLE PRECISION,
    "doseMinGato" DOUBLE PRECISION,
    "doseMaxGato" DOUBLE PRECISION,
    "frequenciaDeUsoCao" TEXT,
    "frequenciaDeUsoGato" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Remedios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DoencasRemedios" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DoencasRemedios_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_DoencasRemedios_B_index" ON "_DoencasRemedios"("B");

-- AddForeignKey
ALTER TABLE "_DoencasRemedios" ADD CONSTRAINT "_DoencasRemedios_A_fkey" FOREIGN KEY ("A") REFERENCES "Doencas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DoencasRemedios" ADD CONSTRAINT "_DoencasRemedios_B_fkey" FOREIGN KEY ("B") REFERENCES "Remedios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
