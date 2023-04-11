import type { PropsWithChildren } from "react";

import styles from "../styles/modules/Container.module.scss";

export const Container = (props: PropsWithChildren) => {
  return <div className={styles.container}>{props.children}</div>;
};
