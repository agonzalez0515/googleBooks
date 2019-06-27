import React from 'react'
import { authorsNames } from '../../helpers'
import { ReactComponent as Link } from '../../assets/link.svg'
import noCover from '../../assets/noCover.svg'
import styles from './book-card.module.scss'

const BookCard = ({details}) => {
  const { volumeInfo: { title, subtitle, authors, publisher, imageLinks = {}, infoLink }} = details
  return (
    <div className={styles.card}>
      <div className={`${styles.cardImage} ${styles.grow}`} style={{backgroundImage: `url(${imageLinks.thumbnail || noCover })`}}></div>
      <h2 className={styles.cardTitle}>{title}</h2>
      {subtitle && <h3 className={styles.cardSubtitle}>{subtitle}</h3>}
      {authors && <p className={styles.authors}>by {authorsNames(authors)}</p>}
      {publisher && <p className={styles.cardPublisher}>{publisher}</p>}
      <p className={styles.link}><Link className={styles.linkIcon} /><a href={infoLink} target="_blank" rel="noopener noreferrer">More information</a></p>
    </div>
  )
}

export default BookCard
