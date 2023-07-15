-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
