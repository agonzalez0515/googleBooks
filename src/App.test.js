import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import App from './App'
import { mockResponse } from './helpers'
import { fetchBooks } from './fetchBooks'

jest.mock('./fetchBooks.js')

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('fetches books when button is clicked', async () => {
  fetchBooks.mockImplementationOnce(() => Promise.resolve(mockResponse))
  const { getByText } = render(<App />)
  fireEvent.click(getByText('Submit'))
  const resolvedBookTitle = await waitForElement(()=> getByText('test') )

  expect(fetchBooks).toHaveBeenCalled()
  expect(resolvedBookTitle).toBeInTheDocument()
})  

it('fetches books when enter key is pressed', async () => {
  fetchBooks.mockImplementationOnce(() => Promise.resolve(mockResponse))
  const { getByText, container } = render(<App />)
  fireEvent.keyDown(container.getElementsByTagName('input')[0], {
    key: 'Enter',
    keyCode: 13
  })
  const resolvedBookTitle = await waitForElement(()=> getByText('test') )

  expect(fetchBooks).toHaveBeenCalled()
  expect(resolvedBookTitle).toBeInTheDocument()
})

it('does not fetch books when other keys are pressed', async () => {
  fetchBooks.mockImplementationOnce(() => Promise.resolve(mockResponse))
  const { getByAltText, container } = render(<App />)
  fireEvent.keyDown(container.getElementsByTagName('input')[0], {
    key: 'Shift',
    keyCode: 16
  })
  
  expect(getByAltText('Girl reading and sitting on stack of books')).toBeInTheDocument()
})
