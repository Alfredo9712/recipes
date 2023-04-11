import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const recipesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.recipe.findMany({
      include: { ingredients: true },
    });
  }),
  getRecipe: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.recipe.findUnique({
        where: { id: input.id },
        include: { ingredients: true },
      });
    }),
  updateViewCount: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const recipe = await ctx.prisma.recipe.update({
        where: {
          id: input.id,
        },
        data: {
          views: {
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
