-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_completo` VARCHAR(50) NOT NULL,
    `login` VARCHAR(50) NOT NULL,
    `tipo` VARCHAR(20) NOT NULL,
    `especialidade` VARCHAR(30) NULL,
    `status` VARCHAR(10) NOT NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `Usuario_login_key`(`login`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `preceptor_paciente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `preceptorId` INTEGER NOT NULL,
    `medicalRecord` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `red2green` VARCHAR(191) NOT NULL,
    `scheduledDeactivationAt` TIMESTAMP(6) NULL,
    `scheduledDeletionAt` TIMESTAMP(6) NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` TIMESTAMP(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Questionnaire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `preceptorPacienteId` INTEGER NOT NULL,
    `dischargeDate` TIMESTAMP(6) NOT NULL,
    `clinicalCriteria` VARCHAR(191) NOT NULL,
    `characteristics` VARCHAR(191) NOT NULL,
    `needsAdmission` VARCHAR(191) NOT NULL,
    `outpatient` VARCHAR(191) NOT NULL,
    `waitingType` VARCHAR(191) NOT NULL,
    `examDetails` VARCHAR(191) NOT NULL,
    `dischargeConfirmed` BOOLEAN NOT NULL,
    `red2green` VARCHAR(20) NOT NULL,
    `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Questionnaire` ADD CONSTRAINT `Questionnaire_preceptorPacienteId_fkey` FOREIGN KEY (`preceptorPacienteId`) REFERENCES `preceptor_paciente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
