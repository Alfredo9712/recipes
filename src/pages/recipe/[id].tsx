import { TRPCError } from "@trpc/server";

import type { GetStaticProps } from "next";
import type { FC } from "react";

import { generateSSGHelper } from "~/server/helpers/sshHelper";
import { api } from "~/utils/api";

const Recipe: FC<{ recipeId: string }> = ({ recipeId }) => {
  const ctx = api.useContext();

  const { data: recipe, isLoading } = api.recipes.getById.useQuery({
    id: recipeId,
  });

  const { mutate, isLoading: isFavoriting } = api.recipes.favorite.useMutation({
    onSuccess: () => {
      void ctx.recipes.getById.invalidate({ id: recipeId });
    },
  });

  if (isLoading) return <p>Loading...</p>;

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <p>favorites: {recipe.favorites} </p>
      <button onClick={() => mutate({ id: recipeId })}>Favorite</button>
    </div>
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

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default Recipe;
