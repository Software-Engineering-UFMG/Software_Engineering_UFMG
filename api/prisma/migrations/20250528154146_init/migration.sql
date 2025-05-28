/*
  Warnings:

  - You are about to drop the `PreceptorPaciente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PreceptorPaciente";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Role";

-- DropEnum
DROP TYPE "Status";

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "medicalRecord" VARCHAR(50) NOT NULL,
    "hospitalbed" VARCHAR(20),
    "birthDate" TIMESTAMP(3) NOT NULL,
    "entranceDate" TIMESTAMP(3) NOT NULL,
    "dischargingDate" TIMESTAMP(3),
    "status" VARCHAR(20) NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preceptor" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Preceptor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Patient_medicalRecord_key" ON "Patient"("medicalRecord");
