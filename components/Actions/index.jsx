import { useRouter } from "next/router";
import styles from "./style.module.scss";

import { BsFillGearFill } from "react-icons/bs";
import { AiFillDelete, AiFillHeart, AiOutlineRollback } from "react-icons/ai";

import { DELETE } from "../../utils";

export default function Actions({ data, reRender }) {
  const router = useRouter();
  const { id } = router.query;

  const deleteRecord = () => {
    DELETE(`messages/${id}`)
      .then(() => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeLikeStatus = () => {
    const likedMessage = localStorage.getItem("likedMessage") || [];
    const localLikedMessage = JSON.parse(likedMessage);
    if (
      localLikedMessage.filter(
        (obj) => obj.date === data.date && obj.id === data.id
      ).length
    ) {
      const newLikedMessages = localLikedMessage.filter(
        (obj) => obj.id !== data.id
      );
      localStorage.setItem("likedMessage", JSON.stringify(newLikedMessages));
    } else {
      localStorage.setItem(
        "likedMessage",
        JSON.stringify([...localLikedMessage, data])
      );
    }

    reRender();
    
  };

  return (
    <div className={styles.Actions}>
      <div
        onClick={() => router.push(`/update/${id}`)}
        className={styles.Actions__UpdateBtn}
      >
        <BsFillGearFill />
      </div>
      <div
        onClick={() => changeLikeStatus()}
        className={styles.Actions__LikeBtn}
      >
        <AiFillHeart />
      </div>
      <div onClick={deleteRecord} className={styles.Actions__DeleteBtn}>
        <AiFillDelete />
      </div>
      <div
        onClick={() => router.push("/")}
        className={styles.Actions__GoBackBtn}
      >
        <AiOutlineRollback />
      </div>
    </div>
  );
}
