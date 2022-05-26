import { useState } from "react";
import MessageList from "./../components/MessageList";
import NewMessageForm from "./../components/NewMessageForm";

import MainLayout from "./../components/MainLayout";
import styles from "./style.module.scss";
import LikesFilter from "../components/LikesFilter/LikesFilter";

export default function Home() {
  const [render, setRender] = useState(false);
  const [showOnlyLiked, setSwowOnlyLiked] = useState(false);

  const filterList = () => {
    setSwowOnlyLiked((prev) => !prev)
  }

  return (
    <MainLayout>
      <div className={styles.Home}>
      <div className={styles.Home__columnWrapper}>
        <NewMessageForm
          method="POST"
          title="Scrivi una nota..."
          reRender={setRender}
        />
        <LikesFilter filterList={filterList}/>
      </div>
        <MessageList render={render} showOnlyLiked={showOnlyLiked} />
      </div>
    </MainLayout>
  );
}