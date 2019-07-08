
import { fetchBooks } from './fetchBooks'
 
describe('testing api call', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
 
  it('calls google books and returns data to me', () => {
    fetch.mockResponseOnce(JSON.stringify({items: []}))
 
    fetchBooks('harry potter').then(res => {
      expect(res.items).toEqual([])
    })
  
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual(`https://www.googleapis.com/books/v1/volumes?q=harry potter&key=${process.env.REACT_APP_BOOKS_KEY}`)
  })
})