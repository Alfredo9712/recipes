import "./drizzle/envConfig";
import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({
  path: ".env.development.local",
});

//new to drizzle-kit https://orm.drizzle.team/kit-docs/upgrade-21

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
