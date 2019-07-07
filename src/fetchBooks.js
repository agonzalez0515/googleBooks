export async function fetchBooks(searchTerm) {
  try {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.REACT_APP_BOOKS_KEY}`)
    const json = await res.json()
    return json
  }
  catch(err) {
    console.log(err)
  }
}