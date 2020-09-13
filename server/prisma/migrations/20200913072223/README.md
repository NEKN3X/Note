# Migration `20200913072223`

This migration has been generated at 9/13/2020, 7:22:23 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" DROP COLUMN "role"

DROP TYPE "Role"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200913052325..20200913072223
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
@@ -10,9 +10,8 @@
 model User {
   id        Int      @id @default(autoincrement())
   createdAt DateTime @default(now())
   name      String
-  role      Role     @default(USER)
   notes     Note[]
 }
 model Note {
@@ -23,9 +22,4 @@
   author    User     @relation(fields: [authorId], references: [id])
   authorId  Int
   content   String
 }
-
-enum Role {
-  USER
-  ADMIN
-}
```


