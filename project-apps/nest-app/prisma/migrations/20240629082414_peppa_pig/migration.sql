-- CreateTable
CREATE TABLE "PeppaPig" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "Chinese" TEXT NOT NULL,
    "English" TEXT NOT NULL,

    CONSTRAINT "PeppaPig_pkey" PRIMARY KEY ("id")
);
