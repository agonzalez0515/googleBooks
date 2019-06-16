import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>“Books are a uniquely portable magic.”<span>- Stephen King</span></h1>
    </header>
   )
}
 
export default Header
