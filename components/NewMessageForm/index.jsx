import styles from "./style.module.scss";

import { POST } from "./../../utils";

import { useState } from "react";

export default function NewMessageForm({ reRender }) {
  const [inputs, setInputs] = useState({});

  const changeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log([name])

    setInputs((val) => ({ ...val, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    POST("messages", inputs).then(() => {
      reRender();
      setInputs({});
    });
  };

  return (
    <div className={styles.NewMessageForm}>
      <h3>Manda un messaggio!</h3>
      <form onSubmit={submit}>
        <div className={styles.NewMessageForm__mainForm}>
          <div className={styles.NewMessageForm__inputGroup}>
            <label htmlFor="sender">Nome</label>
            <input
              type="text"
              name="sender"
              id="sender"
              value={inputs.sender || ""}
              onChange={changeValue}
            />
          </div>
          <div className={styles.NewMessageForm__inputGroup}>
            <label htmlFor="text">Messaggio</label>
            <textarea
              name="text"
              id="text"
              rows="3"
              value={inputs.text || ""}
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
