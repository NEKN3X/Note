# Migration `20200913072559`

This migration has been generated at 9/13/2020, 7:25:59 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Note" DROP CONSTRAINT "Note_pkey",
DROP COLUMN "id",
ADD COLUMN "id" SERIAL,
ADD PRIMARY KEY ("id")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200913072223..20200913072559
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -14,9 +14,9 @@
   notes     Note[]
 }
 model Note {
-  id        String   @default(cuid()) @id
+  id        Int      @id @default(autoincrement())
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
   title     String
   author    User     @relation(fields: [authorId], references: [id])
```


