import styles from "./style.module.scss";

export default function LikesFilter({filterList}) {
  return (
    <div className={styles.LikesFilter}>
      <label htmlFor="likeOnly">Mostra solo preferiti</label>
      <input onClick={()=>filterList()} className={styles.LikesFilter__checkbox} type="checkbox" id="likeOnly" />
      <br />
      <small>(Tips: clicca su una nota per editarla)</small>

    </div>
  );
}
