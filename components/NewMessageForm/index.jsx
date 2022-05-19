import styles from "./style.module.scss";

import { POST, UPDATE } from "./../../utils";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function NewMessageForm({
  method,
  reRender,
  title,
  GetDataOnChange,
  data = "",
}) {
  const [inputs, setInputs] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (method === "UPDATE") {
      GetDataOnChange(inputs);
    }
  }, [inputs]);

  const changeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((val) => ({ ...val, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();

    method === "POST" &&
      POST("messages", { ...inputs, date: new Date() }).then(() => {
        reRender((val) => !val);
        setInputs({});
      });

    method === "UPDATE" &&
      UPDATE(`messages/${id}`, { ...inputs, date: new Date() }).then(() => {
        reRender((val) => !val);
        setInputs({});
        router.push("/");
      });
  };

  return (
    <div className={styles.NewMessageForm}>
      <h3 className={styles.NewMessageForm__title}>{title}</h3>
      <form onSubmit={submit}>
        <div className={styles.NewMessageForm__mainForm}>
          <div className={styles.NewMessageForm__inputGroup}>
            <label htmlFor="sender">Nome</label>
            <input
              type="text"
              name="sender"
              id="sender"
              value={data.sender || inputs.sender || ""}
              onChange={changeValue}
            />
          </div>
          {/* <input type="hidden" name="date" value={new Date()} /> */}
          <div className={styles.NewMessageForm__inputGroup}>
            <label htmlFor="text">Messaggio</label>
            <textarea
              name="text"
              id="text"
              rows="3"
              value={data.text || inputs.text || ""}
              onChange={changeValue}
            ></textarea>
          </div>
        </div>
        <input
          className={styles.NewMessageForm__submitBtn}
          type="submit"
          onClick={submit}
        />
      </form>
    </div>
  );
}
