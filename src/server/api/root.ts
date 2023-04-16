import { createTRPCRouter } from "~/server/api/trpc";
import { categoriesRouter } from "./routers/categories";
import { recipesRouter } from "./routers/recipes";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  recipes: recipesRouter,
  categories: categoriesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
