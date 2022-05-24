import ActionsLayout from "../../components/ActionsLayout";
import SingleMessage from "../../components/SingleMessage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GET } from "../../utils";
import styles from "./style.module.scss";
import Actions from "../../components/Actions";

export default function MessageById() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [render, setRender] = useState(false);
  const { id } = router.query;

  const reRender = () => {
    setRender((prev) => !prev);
  };

  useEffect(() => {
    id && localStorage.setItem("currentID", id);
    const localID = localStorage.getItem("currentID");
    GET(`messages/${localID !== null ? localID : id}`).then((data) =>
      setData(data)
    );
  }, []);

  return (
    <ActionsLayout>
      <div className={styles.SingleMessagePage}>
        <SingleMessage data={data} />
        <Actions data={data} reRender={reRender} />
      </div>
    </ActionsLayout>
  );
}
