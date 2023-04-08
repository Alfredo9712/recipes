import Image from "next/image";

import type { FC } from "react";
import type { RouterOutputs } from "~/utils/api";
import { convertSecondsToMins } from "~/utils/clientHelpers";

import styles from "../styles/modules/RecipeCard.module.scss";

type Recipe = RouterOutputs["recipes"]["getAll"][number];

export const RecipeCard: FC<Recipe> = (props) => {
  const { name, img, id, duration } = props;
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
        <div className={styles.recipeInfo}>
          <p>{convertSecondsToMins(Number(duration))}</p>
        </div>
      </div>
    </div>
  );
};
