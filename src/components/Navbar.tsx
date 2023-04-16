import { SignInButton, SignOutButton, useAuth, useUser } from "@clerk/nextjs";

import styles from "../styles/modules/Navbar.module.scss";

export const Navbar = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  return (
    <div className={styles.navbar}>
      <div className={styles.auth}>
        {isSignedIn && !!user && <SignOutButton />}
        {!isSignedIn && !user?.id && <SignInButton />}
      </div>
    </div>
  );
};
