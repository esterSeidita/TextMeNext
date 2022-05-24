import { useEffect, useState } from "react";
import { GET } from "./../../utils";
import SingleMessage from "../SingleMessage";
import styles from "./style.module.scss";

export default function MessageList({ render }) {
  const [FetchData, setFetchData] = useState([]);
  const [likeStatus, setLikeStatus] = useState([]);

  useEffect(() => {
    GET("messages").then((data) => setFetchData(data));
  }, [render]);

  return (
    <div className={styles.MessageList}>
      {FetchData &&
        FetchData.splice(0)
          .reverse()
          .map((data) => <SingleMessage key={data.id} data={data} liked={false}/>)}
    </div>
  );
}
