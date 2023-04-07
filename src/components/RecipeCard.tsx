import Image from "next/image";

import type { FC } from "react";
import type { RouterOutputs } from "~/utils/api";

import styles from "../styles/modules/RecipeCard.module.scss";

type Recipe = RouterOutputs["recipes"]["getAll"][number];

export const RecipeCard: FC<Recipe> = (props) => {
  const { name, img, id } = props;
  console.log(img);
  return (
    <div
      className={styles.recipeCard}
      style={{
        backgroundImage: `url(${String(img)})`,
      }}
    >
      <div className={styles.cardContent}>
        <h2>{`${String(name)}`}</h2>
      </div>
    </div>
  );
};
