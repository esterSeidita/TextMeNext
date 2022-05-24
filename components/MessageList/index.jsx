import { useEffect, useState } from "react";

import SingleMessage from "../SingleMessage";

import { GET } from "./../../utils";

import styles from "./style.module.scss";

export default function MessageList({ render, showOnlyLiked }) {
  const [FetchData, setFetchData] = useState([]);

  const getLikedMessage = () => {
    return localStorage.getItem("likedMessage") !== null
      ? JSON.parse(localStorage.getItem("likedMessage"))
      : [];
  };

  useEffect(() => {
    GET("messages").then((data) => setFetchData(data));
  }, [render, showOnlyLiked]);

  return (
    <div className={styles.MessageList}>
      {showOnlyLiked
        ? getLikedMessage().map((data) => (
            <SingleMessage key={data.id} data={data} />
          ))
        : FetchData &&
          FetchData.splice(0)
            .reverse()
            .map((data) => <SingleMessage key={data.id} data={data} />)}
    </div>
  );
}
