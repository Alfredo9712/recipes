import { api } from "~/utils/api";
import styles from "../styles/modules/Categories.module.scss";

export const Categories = () => {
  const { data: categories, isLoading } = api.categories.getAll.useQuery();

  if (isLoading) return <p>loading...</p>;
  if (!categories) return <p>something went wrong</p>;

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id} className={styles.category}>
          {`${category.type}`}
        </div>
      ))}
    </div>
  );
};
