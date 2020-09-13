# Migration `20200913052325`

This migration has been generated at 9/13/2020, 5:23:25 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN')

CREATE TABLE "public"."User" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"name" text   NOT NULL ,
"role" "Role"  NOT NULL DEFAULT E'USER',
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Note" (
"id" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   NOT NULL ,
"title" text   NOT NULL ,
"authorId" integer   NOT NULL ,
"content" text   NOT NULL ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."Note" ADD FOREIGN KEY ("authorId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200913052325
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,31 @@
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  name      String
+  role      Role     @default(USER)
+  notes     Note[]
+}
+
+model Note {
+  id        String   @default(cuid()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  title     String
+  author    User     @relation(fields: [authorId], references: [id])
+  authorId  Int
+  content   String
+}
+
+enum Role {
+  USER
+  ADMIN
+}
```


