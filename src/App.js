import React, { useState } from 'react'
import SearchForm from './components/SearchForm/SearchForm'
import Header from './components/Header/Header';
import bookLover from './assets/bookLover.svg'
import BookList from './components/BookList/BookList';
import './assets/App.scss'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [booksRes, setBooksRes] = useState()

  const handleInput = (e) => setSearchTerm(e.target.value)
  
  const handleSubmit = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.REACT_APP_BOOKS_KEY}`)
    .then(res => res.json())
    .then(volumes => {
      setBooksRes(volumes.items)
    })
    .catch(err => console.log(err))
  }

  const onEnter = (e) => {
    if(e.keyCode === 13) {
      e.preventDefault()
      handleSubmit()
    }
 }

  return (
    <div className="app">
      <Header />
      <SearchForm handleInput={handleInput} handleSubmit={handleSubmit} searchTerm={searchTerm} keyPress={onEnter} />
      <div className='cards'>
        { booksRes ? <BookList books={booksRes} /> 
        : <img src={bookLover} alt="Girl reading and sitting on stack of books" /> 
        }
      </div>
    </div>
  );
}

export default App;

// [x] Type in a query and display a list of books matching that query. 
// [x] Each item in the list should include the book's author, title, and publishing company, as well as a picture of the book.
// From each list item, you should also be able to navigate to more information about the book, but this information does not necessarily need to appear on a page within your application. In other words, this could link out to an external site with more information about that particular book.

// [x] use enter button to submit search
// [x] responsive