import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET } from "../../utils";

import SingleMessage from "./../../components/SingleMessage";
import NewMessageForm from "./../../components/NewMessageForm";

import styles from "./style.module.scss";

export default function Update() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  const [render, setRender] = useState(false);

  useEffect(() => {
    GET(`messages/${id}`)
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  }, []);

  const GetDataOnChange = (inputs) => {
    console.log(inputs);
    setData((data) => ({ ...data, sender: inputs.sender, text: inputs.text }));
  };

  return (
    <div className={styles.Update}>
      <SingleMessage data={data} />
      <NewMessageForm
        method="UPDATE"
        title="Aggiorna il messaggio"
        reRender={setRender}
        GetDataOnChange={GetDataOnChange}
        data={data}
      />
    </div>
  );
}
