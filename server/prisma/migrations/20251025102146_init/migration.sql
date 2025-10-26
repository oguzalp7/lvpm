/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Attachment` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Attachment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Attachment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `TaskAssignment` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `TaskAssignment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `TaskAssignment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ProjectTeam_projectId_teamId_key";

-- DropIndex
DROP INDEX "Team_teamName_key";

-- AlterTable
ALTER TABLE "Attachment" DROP COLUMN "createdAt",
DROP COLUMN "isActive",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "createdAt",
DROP COLUMN "isActive",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "createdAt",
DROP COLUMN "isActive",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "createdAt",
DROP COLUMN "isActive",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "TaskAssignment" DROP COLUMN "createdAt",
DROP COLUMN "isActive",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "createdAt",
DROP COLUMN "isActive",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "isActive",
DROP COLUMN "updatedAt";
