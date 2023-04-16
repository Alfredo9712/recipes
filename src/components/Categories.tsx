import classNames from "classnames";
import { CategoryType } from "@prisma/client";

import { Spacer } from "./Spacer";

import type { Dispatch, FC, SetStateAction } from "react";

import styles from "../styles/modules/Categories.module.scss";

interface CategoriesProps {
  setCategory: Dispatch<
    SetStateAction<{
      selected: CategoryType;
    }>
  >;
  category: {
    selected: CategoryType;
  };
}

export const Categories: FC<CategoriesProps> = ({ category, setCategory }) => {
  return (
    <div className={styles.categories}>
      {Object.values(CategoryType).map((c) => {
        const isSelected = c === category["selected"];
        return (
          <div
            key={c}
            className={classNames(styles.category, {
              [styles.selectedCategory as string]: isSelected,
            })}
            onClick={() => setCategory({ selected: c })}
          >
            <p>{`${c}`}</p>
            <Spacer height={5} />
            <div className={styles.selectedBorder} />
          </div>
        );
      })}
    </div>
  );
};
