import styles from "./style.module.scss";
import { useRouter } from "next/router";

export default function SingleMessage({ data }) {
  const router = useRouter();
  const { text, sender, date } = data;
  const d = new Date();
  const getDateFromISO = (date) => {
    const options = {
      dateStyle: "full",
    };

    const objDate = new Date(date);
    return objDate.toLocaleDateString("it-IT", options);
  };
  
  return (
    <div
      onClick={() => router.push(`/message/${data.id}`)}
      className={styles.SingleMessage}
    >
      <div className={styles.SingleMessage__Header}>
        <h3>{sender}</h3>
        <small>{getDateFromISO(date)}</small>
      </div>
      <p className={styles.SingleMessage__Message}>{text}</p>
    </div>
  );
}
