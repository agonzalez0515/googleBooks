import React from 'react'
import noResults from '../../assets/noResults.svg'
import BookCard from '../BookCard/BookCard'


const BookList = ({books}) => {
  console.log(books.totalItems)
  if(books.totalItems > 0) {
    return books.items.map(book => {
      return <BookCard 
        key={book.id} 
        details={book}
      />
    })
  }
  else {
    return (
      <div>
        <img src={noResults} className='sitting' alt='Empty clipboards' />
        <p style={{textAlign: 'center', fontSize: '1.3rem'}}>No books found. Try again!</p>
      </div>
    )
  }
}
 
export default BookList

// TODO: Refactor no search results into component