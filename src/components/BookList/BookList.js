import React from 'react'
import BookCard from '../BookCard/BookCard'
import NoResults from '../NoResults/NoResults';


const BookList = ({books}) => {
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
      <NoResults />
    )
  }
}
 
export default BookList
