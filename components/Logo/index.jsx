import Link from "next/link";
import styles from "./style.module.scss";
import { AiFillMessage } from "react-icons/ai";

export default function Logo() {

  return (
    <>
      <Link href={"/"}>
        <a>
          <h1 className={styles.Logo}>
            <i className="fa-solid fa-user"></i>
            Text Me! <AiFillMessage />
          </h1>
        </a>
      </Link>
    </>
  );
}
