import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [booksRes, setBooksRes] = useState([])

  const handleInput = (e) => setSearchTerm(e.target.value)
  const handleSubmit = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
    .then(res => res.json())
    .then(volumes => {
      console.log(volumes)
      setBooksRes(volumes.items)
      setSearchTerm('')
    })
    .catch(err => console.log(err))
  }
  
  return (
    <div className="App">
      <main>
        <form>
          <label htmlFor='search-term'>Search Books: </label>
          <input type='text' id='search-term' value={searchTerm} onChange={handleInput}/>
          <button type='button' onClick={handleSubmit}>Submit</button>
        </form>
        <h1>
          {searchTerm}
        </h1>
        <ul>
          { booksRes.map((volume) => {
              return (
                <div key={volume.id}>
                <li>{volume.volumeInfo.title} - {volume.volumeInfo.authors} - {volume.volumeInfo.publisher}</li>
                <img src={volume.volumeInfo.imageLinks.thumbnail} />
                </div>
              )
            }) 
          }
        </ul>
      </main>
    </div>
  );
}

export default App;

// Type in a query and display a list of books matching that query.
// Each item in the list should include the book's author, title, and publishing company, as well as a picture of the book.
// From each list item, you should also be able to navigate to more information about the book, but this information does not necessarily need to appear on a page within your application. In other words, this could link out to an external site with more information about that particular book.

// use enter button to submit search
// add more info link 
// responsive!