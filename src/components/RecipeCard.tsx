import Image from "next/image";

import type { FC } from "react";
import type { RouterOutputs } from "~/utils/api";
import { toHoursAndMinutes } from "~/utils/clientHelpers";

import styles from "../styles/modules/RecipeCard.module.scss";

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
  const { name, img, id, duration } = props;

  return (
    <div
      className={styles.recipeCard}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={styles.cardContent}>
        <h2>{`${name}`}</h2>
        <div className={styles.recipeInfo}>
          <Duration seconds={duration} />
        </div>
      </div>
    </div>
  );
};
