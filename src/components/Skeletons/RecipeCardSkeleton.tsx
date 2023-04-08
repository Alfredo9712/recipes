import styles from "../../styles/modules/RecipeCardSkeleton.module.scss";
import { Spacer } from "../Spacer";

export const RecipeCardSkeleton = () => {
  return (
    <div className={styles.recipeCardSkeleton}>
      <div className={styles.textWrapper}>
        <div className={styles.title} />
        <Spacer height={10} />
        <div className={styles.info}>
          <div className={styles.infoItem} />
          <div className={styles.infoItem} />
        </div>
      </div>
    </div>
  );
};
