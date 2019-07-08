import React from 'react'
import { authorsNames } from '../../helpers'
import noCover from '../../assets/noCover.svg'
import styles from './book-card.module.scss'

const BookCard = ({details}) => {
  const { volumeInfo: { title, subtitle, authors, publisher, imageLinks = {}, infoLink }} = details
  return (
    <div className={styles.card}>
      <a href={infoLink} target="_blank" rel="noopener noreferrer">
        <div className={`${styles.cardImage} ${styles.grow}`} style={{backgroundImage: `url(${imageLinks.thumbnail || noCover })`}}>
          <span className={styles.link} >Click for more information</span>
        </div>
      </a>
      <div className={styles.cardInfo}>
        <div className={styles.cardTitles}>
          <h2 className={styles.cardTitle}>{title}</h2>
          {subtitle && <h3 className={styles.cardSubtitle}>{subtitle}</h3>}
          {authors && <p className={styles.authors}>by {authorsNames(authors)}</p>}
        </div>
        <div>
          {publisher && <p className={styles.cardPublisher}>{publisher}</p>}
        </div>
      </div>
    </div>
  )
}

export default BookCard
