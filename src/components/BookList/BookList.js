import React from 'react';
import BookCard from '../BookCard/BookCard'


const BookList = ({books}) => {
    return books.map(book => {
      return <BookCard 
        key={book.id} 
        details={book}
      />
    })
}
 
export default BookList;
