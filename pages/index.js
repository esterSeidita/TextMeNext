import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

import MessageList from "./../components/MessageList";
import NewMessageForm from "./../components/NewMessageForm";

import MainLayout from "./../components/MainLayout";
import styles from "./style.module.scss";

export default function Home() {
  const [render, setRender] = useState(false);
  // const store = useSelector((state) => state);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(store);
  // }, []);

  return (
    <MainLayout>
      {/* <button
        onClick={() => {
          dispatch({ type: "INCREMENT", payload: 1 });
          console.log(store);
        }}
      >
        Add
      </button> */}

      <div className={styles.Home}>
        {/* <HeroFullViewport/> */}
        <NewMessageForm
          method="POST"
          title="Manda un messaggio!"
          reRender={setRender}
        />
        <MessageList render={render} />
      </div>
    </MainLayout>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <MainLayout>{page}</MainLayout>;
// };
