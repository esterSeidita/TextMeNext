import { useState } from "react";
import MessageList from "./../components/MessageList";
import NewMessageForm from "./../components/NewMessageForm";

import MainLayout from "./../components/MainLayout";
import styles from "./style.module.scss";
export default function Home() {
  const [render, setRender] = useState(false);

  const reRender = () => {
    setRender(!render);
  };

  return (
    <MainLayout>
      <div className={styles.Home}>
        <NewMessageForm reRender={reRender} />
        <MessageList render={render} />
      </div>
    </MainLayout>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <MainLayout>{page}</MainLayout>;
// };
