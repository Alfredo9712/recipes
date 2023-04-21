import React from "react";

import { TRPCError } from "@trpc/server";

import Head from "next/head";

import type { FC } from "react";
import type { GetStaticProps } from "next";

import { api } from "~/utils/api";
import { generateSSGHelper } from "~/server/helpers/sshHelper";

import styles from "../../styles/modules/RecipePage.module.scss";
import Image from "next/image";

const RecipeId: FC<{ recipeId: string }> = ({ recipeId }) => {
  const { data: recipe, isLoading } = api.recipes.getById.useQuery({
    id: recipeId,
  });

  const ctx = api.useContext();

  if (!recipe) return <p>Recipe not found</p>;

  const { mutate, isLoading: isFavoriting } = api.recipes.favorite.useMutation({
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
      <div className={styles.recipePage}>
        <div className={styles.imgContainer}>
          <Image
            src={recipe.img}
            alt={`Recipe image for ${recipe.name}`}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.recipeInfo}>
          <h1>{recipe.name}</h1>
          <div className={styles.ingredients}>
            <ul>
              {recipe.ingredients.map((ingredient) => {
                return (
                  <li key={ingredient.id}>{`${ingredient.ingredient}`}</li>
                );
              })}
            </ul>
          </div>
        </div>
        <p>page</p>
        {/* <p>favorites: {recipe.favorites} </p> */}
        {/* <button
          onClick={() => mutate({ id: recipeId })}
          disabled={isFavoriting}
        >
          Favorite
        </button> */}
      </div>
    </>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const ssg = generateSSGHelper();

//   const recipeId = context.params?.recipeId;

//   if (typeof recipeId !== "string")
//     throw new TRPCError({ code: "BAD_REQUEST" });

//   await ssg.recipes.getById.prefetch({ id: recipeId });

//   return {
//     props: {
//       trpcState: ssg.dehydrate(),
//       recipeId,
//     },
//   };
// };

// export const getStaticPaths = () => {
//   return { paths: [], fallback: "blocking" };
// };

export default RecipeId;
