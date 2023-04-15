import { prisma } from "~/server/db";
import { TRPCError } from "@trpc/server";

import Head from "next/head";

import type { FC } from "react";
import type { GetStaticProps } from "next";

import { api } from "~/utils/api";
import { generateSSGHelper } from "~/server/helpers/sshHelper";

const Recipe: FC<{ recipeId: string }> = ({ recipeId }) => {
  const { data: recipe, isLoading } = api.recipes.getById.useQuery({
    id: recipeId,
  });

  const ctx = api.useContext();

  if (!recipe) return <p>Recipe not found</p>;

  const { mutate } = api.recipes.favorite.useMutation({
    onSuccess: () => {
      void ctx.recipes.getById.invalidate({ id: recipeId });
    },
  });

  if (isLoading) return <p>Loading...</p>;

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <>
      <Head>
        <title>{recipe.name}</title>
      </Head>
      <div>
        <p>favorites: {recipe.favorites} </p>
        <button onClick={() => mutate({ id: recipeId })}>Favorite</button>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const recipeId = context.params?.id;

  if (typeof recipeId !== "string")
    throw new TRPCError({ code: "BAD_REQUEST" });

  await ssg.recipes.getById.prefetch({ id: recipeId });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      recipeId,
    },
  };
};

export const getStaticPaths = async () => {
  const recipes = await prisma.recipe.findMany({ select: { id: true } });

  return {
    paths: recipes.map((post) => ({
      params: {
        id: post.id,
      },
    })),
    // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-blocking
    fallback: "blocking",
  };
};

export default Recipe;
