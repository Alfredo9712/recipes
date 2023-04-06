import { api } from "~/utils/api";

export const RecipeCard = () => {
  const { data, isLoading } = api.recipes.getAll.useQuery();

  return <h2>Recipe Card</h2>;
};
