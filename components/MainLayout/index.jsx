import styles from "./style.module.scss";
import Navbar from "./../Navbar";
import Footer from "../Footer";

export default function MainLayout({ children }) {
  return (
    <div className={styles.MainLayout}>
      <Navbar />
      <>{children}</>
      <Footer />
    </div>
  );
}
