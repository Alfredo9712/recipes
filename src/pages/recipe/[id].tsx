import { useRouter } from "next/router";

import { api } from "~/utils/api";

const Recipe = () => {
  const router = useRouter();
  const { id = "" } = router.query as { id: string };

  const ctx = api.useContext();

  const { data: recipe, isLoading } = api.recipes.getById.useQuery({
    id: id,
  });

  const { mutate, isLoading: isFavoriting } = api.recipes.favorite.useMutation({
    onSuccess: () => {
      void ctx.recipes.getById.invalidate({ id: id });
    },
  });

  if (isLoading) return <p>Loading...</p>;

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <p>favorites: {recipe.favorites} </p>
      <button onClick={() => mutate({ id })}>Favorite</button>
    </div>
  );
};

export default Recipe;
