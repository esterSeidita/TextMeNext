import styles from "./style.module.scss";
import { useRouter } from "next/router";

export default function SingleMessage({ data }) {
  const router = useRouter();
  const { text, sender, date } = data;
  return (
    <div
      onClick={() => router.push(`/message/${data.id}`)}
      className={styles.SingleMessage}
    >
      <div className={styles.SingleMessage__Header}>
        <h3>{sender}</h3>
        <small>{date}</small>
      </div>
      <p>{text}</p>
    </div>
  );
}
