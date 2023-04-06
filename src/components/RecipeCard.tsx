import type { FC } from "react";
import type { RouterOutputs } from "~/utils/api";

type Recipe = RouterOutputs["recipes"]["getAll"][number];

export const RecipeCard: FC<Recipe> = (props) => {
  const { name, rating, views } = props;
  console.log(name);
  return (
    <div>
      <h2>{name}</h2>
      <h3>Rating - {rating}</h3>
      <h4>Views - {views}</h4>
    </div>
  );
};
