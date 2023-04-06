import Image from "next/image";

import type { FC } from "react";
import type { RouterOutputs } from "~/utils/api";

import styles from "../styles/modules/RecipeCard.module.scss";

type Recipe = RouterOutputs["recipes"]["getAll"][number];

export const RecipeCard: FC<Recipe> = (props) => {
  const { name, rating, views, img } = props;

  return (
    <div className={styles.recipeCard}>
      <div className={styles.cardImgWrapper}>
        <Image
          src={String(img)}
          fill
          alt={`recipe image for ${String(name)}`}
          className={styles.img}
        />
      </div>
      <h2>{name}</h2>
      <h3>Rating - {rating}</h3>
      <h4>Views - {views}</h4>
    </div>
  );
};
