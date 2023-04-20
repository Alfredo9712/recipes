import React, { useEffect, useState } from "react";

import { RecipeCard } from "./RecipeCard";
import { RecipeCardSkeleton } from "./Skeletons/RecipeCardSkeleton";

import type { FC } from "react";
import type { RouterOutputs } from "~/utils/api";
import type { CategoryType } from "@prisma/client";
import { api } from "~/utils/api";

import styles from "../styles/modules/Recipes.module.scss";

interface RecipesProps {
  category: {
    selected: CategoryType;
  };
}

export const Recipes: FC<RecipesProps> = ({ category }) => {
  const { data, isLoading } = api.recipes.getAll.useQuery();
  const [recipes, setRecipes] = useState<RouterOutputs["recipes"]["getAll"]>(
    data ?? []
  );
  console.log(data);

  useEffect(() => {
    if (!isLoading && data) {
      if (category["selected"] === "ALL") {
        setRecipes(data);
      } else {
        const filteredRecipes = data.filter((recipe) =>
          recipe.category.includes(category["selected"])
        );
        setRecipes(filteredRecipes);
      }
    }
  }, [isLoading, category]);

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
