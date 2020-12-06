import styles from "./ShoppingLists.module.css"
import NewList from "../NewList/NewList"

export default function ShoppingLists() {

  return(
    <div className={styles.shoppingLists}>
      <NewList />
    </div>
  )

}