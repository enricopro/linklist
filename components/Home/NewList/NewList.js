import styles from "./NewList.module.css"

export default function NewList() {

  return(
    <div className={styles.newList}>
      <div className={styles.button}>
        <h1 className={styles.buttonTitle}>Create a new shopping list</h1>
      </div>
    </div>
  )

}