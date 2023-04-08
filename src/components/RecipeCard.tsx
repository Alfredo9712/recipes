import Image from "next/image";

import type { FC } from "react";
import type { RouterOutputs } from "~/utils/api";
import { toHoursAndMinutes } from "~/utils/clientHelpers";

import styles from "../styles/modules/RecipeCard.module.scss";
import { Spacer } from "./Spacer";

type DurationType = RouterOutputs["recipes"]["getAll"][number]["duration"];

interface DurationProps {
  seconds: DurationType;
}

const Duration: FC<DurationProps> = (props) => {
  const { h, m } = toHoursAndMinutes(props.seconds);

  if (h) return <p>{`${h}`} hrs</p>;

  return <p>{`${m}`} mins</p>;
};

type RecipeProps = RouterOutputs["recipes"]["getAll"][number];

export const RecipeCard: FC<RecipeProps> = (props) => {
  const { name, img, duration, ingredients } = props;

  return (
    <div className={styles.recipeCard}>
      <div
        className={styles.cardContent}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <h2>{`${name}`}</h2>
        <Spacer height={5} />
        <div className={styles.recipeInfo}>
          <p>{`${ingredients.length}`} Ingredients</p>
          <div className={styles.border} />
          <Duration seconds={duration} />
        </div>
      </div>
    </div>
  );
};
