/*
  Warnings:

  - You are about to drop the `Patient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Preceptor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Patient";

-- DropTable
DROP TABLE "Preceptor";

-- CreateTable
CREATE TABLE "PreceptorPaciente" (
    "id" SERIAL NOT NULL,
    "preceptorId" INTEGER NOT NULL,
    "medicalRecord" TEXT NOT NULL,
    "status" VARCHAR(20) NOT NULL,
    "red2green" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PreceptorPaciente_pkey" PRIMARY KEY ("id")
);
