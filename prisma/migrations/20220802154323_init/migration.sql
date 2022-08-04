-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "body" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);
