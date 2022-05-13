import Link from "next/link";
import Logo from "../Logo";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";
import styles from "./style.module.scss";

export default function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const openNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className={styles.Navbar}>
      <Logo />
      <div onClick={openNavbar} className={styles.Navbar__toggleBtn}>
        <GoThreeBars />
      </div>
      {isNavbarOpen && (
        <ul className={styles.Navbar__extendedNavbar}>
          <Link href="/">
            <a>
              <li>Homepage</li>
            </a>
          </Link>
          <Link href="/contatti">
            <a disabled>
              <li>Contatti</li>
            </a>
          </Link>
        </ul>
      )}
    </nav>
  );
}
