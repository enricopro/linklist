import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/global/Header/Header'
import ShoppingLists from '../components/Home/ShoppingLists/ShoppingLists'

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <ShoppingLists />
    </div>
  )
}
