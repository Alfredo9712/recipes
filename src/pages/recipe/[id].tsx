import { useRouter } from "next/router";

import { api } from "~/utils/api";

const Recipe = () => {
  const router = useRouter();
  const { id = "" } = router.query as { id: string };

  const { data: recipe, isLoading } = api.recipes.getRecipe.useQuery({
    id: id,
  });
  const views = recipe?.views;

  if (isLoading) return <p>Loading...</p>;

  if (!recipe) return <p>Recipe not found</p>;

  return <p>View: {views} </p>;
};

export default Recipe;
