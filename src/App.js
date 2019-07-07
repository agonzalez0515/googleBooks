import React, { useState } from 'react'
import SearchForm from './components/SearchForm/SearchForm'
import Header from './components/Header/Header'
import bookLover from './assets/bookLover.svg'
import BookList from './components/BookList/BookList'
import { fetchBooks } from './fetchBooks'
import './assets/App.scss'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [booksRes, setBooksRes] = useState()

  const handleInput = (e) => setSearchTerm(e.target.value)
  
  const handleSubmit = () => {
    fetchBooks(searchTerm)
    .then(volumes => setBooksRes(volumes))
  }

  const onEnter = (e) => {
    if (e.keyCode === 13) {
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
