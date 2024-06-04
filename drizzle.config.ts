import "@/drizzle/envConfig";
import { defineConfig } from "drizzle-kit";

//new to drizzle-kit https://orm.drizzle.team/kit-docs/upgrade-21

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
