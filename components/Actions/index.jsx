import {useRouter} from "next/router";

import styles from "./style.module.scss";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillDelete, AiFillDislike, AiFillLike, AiOutlineRollback } from "react-icons/ai";
import {DELETE} from "../../utils";

export default function Actions() {
  const router = useRouter();

  const deleteRecord = () => {
    DELETE(`messages/${router.query.id}`).then(() => {
      router.push("/")
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className={styles.Actions}>
      <div className={styles.Actions__LikeBtn}>
        <AiFillLike />
      </div>
      <div className={styles.Actions__UpdateBtn}>
        <BsFillGearFill />
      </div>
      <div onClick={deleteRecord} className={styles.Actions__DeleteBtn}>
        <AiFillDelete />
      </div>
      <div onClick={()=>router.push("/")} className={styles.Actions__GoBackBtn}>
        <AiOutlineRollback />
      </div>
      <div className={styles.Actions__DislikeBtn}>
        <AiFillDislike />
      </div>
    </div>
  );
}
