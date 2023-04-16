import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { RecipeCard } from "./RecipeCard";
import { RecipeCardSkeleton } from "./Skeletons/RecipeCardSkeleton";

import { api, RouterOutputs } from "~/utils/api";

import styles from "../styles/modules/Recipes.module.scss";
import { CategoryType } from "@prisma/client";

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
