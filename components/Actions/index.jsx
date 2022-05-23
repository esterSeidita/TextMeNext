import {useRouter} from "next/router";

import styles from "./style.module.scss";
import { BsFillGearFill } from "react-icons/bs";
import { AiFillDelete, AiFillHeart, AiOutlineRollback } from "react-icons/ai";
import {DELETE} from "../../utils";

export default function Actions() {
  const router = useRouter();
  const {id} = router.query;

  const deleteRecord = () => {
    DELETE(`messages/${id}`).then(() => {
      router.push("/")
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className={styles.Actions}>
      <div onClick={()=>router.push(`/update/${id}`)} className={styles.Actions__UpdateBtn}>
        <BsFillGearFill />
      </div>
      <div onClick={()=>{}} className={styles.Actions__LikeBtn}>
        <AiFillHeart />
      </div>
      <div onClick={deleteRecord} className={styles.Actions__DeleteBtn}>
        <AiFillDelete />
      </div>
      <div onClick={()=>router.push("/")} className={styles.Actions__GoBackBtn}>
        <AiOutlineRollback />
      </div>
    </div>
  );
}
