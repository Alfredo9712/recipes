import { FC } from "react";
import { RouterOutputs } from "~/utils/api";

type Recipe = RouterOutputs["recipes"]["getAll"][number];

export const RecipeCard: FC<Recipe> = (props) => {
  const { name } = props;
  return <h2>Recipe Card</h2>;
};
