import Image from "next/image";
import styles from "../styles/modules/Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/recipes-logo.png"
          alt="logo for recipes"
          width={55}
          height={55}
        />
      </div>
    </div>
  );
};
