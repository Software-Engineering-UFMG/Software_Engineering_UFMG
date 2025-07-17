/*
  Warnings:

  - You are about to drop the `Patient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Preceptor` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('NIR', 'Assistencial', 'Admin');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Active', 'Inactive');

-- DropTable
DROP TABLE "Patient";

-- DropTable
DROP TABLE "Preceptor";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "phone" VARCHAR(20),
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL,
    "specialty" VARCHAR(100),
    "status" "Status" NOT NULL DEFAULT 'Active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreceptorPaciente" (
    "id" SERIAL NOT NULL,
    "preceptorId" INTEGER NOT NULL,
    "medicalRecord" TEXT NOT NULL,
    "status" VARCHAR(20) NOT NULL,
    "red2green" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "scheduledDeactivationAt" TIMESTAMP(3),

    CONSTRAINT "PreceptorPaciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questionnaire" (
    "id" SERIAL NOT NULL,
    "preceptorPacienteId" INTEGER NOT NULL,
    "dischargeDate" TIMESTAMP(3) NOT NULL,
    "clinicalCriteria" TEXT NOT NULL,
    "characteristics" TEXT[],
    "needsAdmission" TEXT NOT NULL,
    "outpatient" TEXT NOT NULL,
    "hospitalDischarge" TEXT NOT NULL,
    "waiting" TEXT NOT NULL,
    "waitingType" TEXT[],
    "examDetails" TEXT[],
    "dischargeConfirmed" BOOLEAN NOT NULL,
    "red2green" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Questionnaire_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Questionnaire" ADD CONSTRAINT "Questionnaire_preceptorPacienteId_fkey" FOREIGN KEY ("preceptorPacienteId") REFERENCES "PreceptorPaciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
