import styles from "./style.module.scss";

export default function LikesFilter({filterList}) {
  return (
    <div className={styles.LikesFilter}>
      <label htmlFor="likeOnly">Mostra solo con like</label>
      <input onClick={()=>filterList()} className={styles.LikesFilter__checkbox} type="checkbox" id="likeOnly" />
    </div>
  );
}
