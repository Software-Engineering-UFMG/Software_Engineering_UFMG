-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "medicalRecord" VARCHAR(50) NOT NULL UNIQUE,
    "hospitalbed" VARCHAR(20),

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Patient_medicalRecord_key" ON "Patient"("medicalRecord");
