import React from "react";
import { api } from "~/utils/api";
import { RecipeCard } from "./RecipeCard";

const Recipes = () => {
  const { data: recipes, isLoading } = api.recipes.getAll.useQuery();

  if (isLoading) return <h1>loading</h1>;

  if (!recipes) return <h1>No Current Recipes, they are on the way!</h1>;
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} />
      ))}
    </div>
  );
};

export default Recipes;
