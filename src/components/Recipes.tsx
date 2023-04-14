import React from "react";

import { RecipeCard } from "./RecipeCard";
import { RecipeCardSkeleton } from "./Skeletons/RecipeCardSkeleton";

import { api } from "~/utils/api";

import styles from "../styles/modules/Recipes.module.scss";

export const Recipes = () => {
  const { data: recipes, isLoading } = api.recipes.getAll.useQuery();

  if (isLoading)
    return (
      <div className={styles.recipes}>
        {[1, 2, 3].map((e) => (
          <RecipeCardSkeleton key={e} />
        ))}
      </div>
    );

  if (!recipes) return <h1>No Current Recipes, they are on the way!</h1>;

  return (
    <div className={styles.recipes}>
      {[...recipes].map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};
