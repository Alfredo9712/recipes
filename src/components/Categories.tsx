import classNames from "classnames";
import { CategoryType } from "@prisma/client";

import { Spacer } from "./Spacer";

import type { Dispatch, FC, SetStateAction } from "react";

import styles from "../styles/modules/Categories.module.scss";

interface CategoriesProps {
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
}

export const Categories: FC<CategoriesProps> = ({
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <div className={styles.categories}>
      <div
        className={classNames(styles.category, {
          [styles.selectedCategory as string]: selectedCategory === "all",
        })}
        onClick={() => setSelectedCategory("all")}
      >
        <p>All</p>
        <Spacer height={5} />
        <div className={styles.selectedBorder} />
      </div>
      {Object.keys(CategoryType).map((category) => {
        const isSelected = category === selectedCategory;
        return (
          <div
            key={category}
            className={classNames(styles.category, {
              [styles.selectedCategory as string]: isSelected,
            })}
            onClick={() => setSelectedCategory(category)}
          >
            <p>{`${category}`}</p>
            <Spacer height={5} />
            <div className={styles.selectedBorder} />
          </div>
        );
      })}
    </div>
  );
};
