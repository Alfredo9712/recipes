import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const recipesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const recipes = await ctx.prisma.recipe.findMany({
      include: { ingredients: true, category: true },
    });
    if (!recipes) {
      throw new Error("Recipes not found");
    }
    const formattedRecipes = recipes.map((recipe) => {
      return {
        ...recipe,
        category: recipe.category.map((category) => category.type),
      };
    });
    return formattedRecipes;
  }),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.recipe.findUnique({
        where: { id: input.id },
        include: { ingredients: true, category: true },
      });
    }),
  favorite: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const recipe = await ctx.prisma.recipe.update({
        where: {
          id: input.id,
        },
        data: {
          favorites: {
            increment: 1,
          },
        },
      });
      if (!recipe) {
        throw new Error("Recipe not found");
      }
      return recipe;
    }),
});
