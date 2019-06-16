import React from 'react'
import styles from './book-card.module.css'

const BookCard = ({details}) => {
  const { id, volumeInfo: {title, subtitle, authors,publisher, imageLinks,publishedDate} } = details
  return (
    <div key={id} className={styles.card}>
      <div className={`${styles.cardImage} ${styles.grow}`} style={{backgroundImage: `url(${imageLinks.thumbnail})`}}></div>
      <h2 className={styles.cardTitle}>{title}</h2>
      {subtitle && <h3 className={styles.carSubtitle}>{subtitle}</h3>}
      <p>by {authors}</p>
      {publisher && <p className={styles.cardPublisher}>{publisher}</p>}
    </div>
  )
}

export default BookCard
