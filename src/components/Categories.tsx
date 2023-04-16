import { api } from "~/utils/api";

import type { FC } from "react";

import styles from "../styles/modules/Categories.module.scss";

interface CategoriesProps {
  setCategory: (category: string) => void;
}

export const Categories: FC<CategoriesProps> = ({ setCategory }) => {
  const { data: categories, isLoading } = api.categories.getAll.useQuery();

  if (isLoading) return <p>loading...</p>;
  if (!categories) return <p>something went wrong</p>;

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <div
          key={category.id}
          className={styles.category}
          onClick={() => setCategory(category.type)}
        >
          {`${category.type}`}
        </div>
      ))}
    </div>
  );
};
