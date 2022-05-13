import styles from "./style.module.scss";
import Logo from "./../Logo";
import Actions from "./../Actions";

export default function ActionsLayout({ children }) {
  return (
    <div className={styles.ActionsLayout}>

      <nav className={styles.ActionsLayout__Navbar}>
        <Logo/>
      </nav>
      <>{children}</>
    </div>
  );
}
