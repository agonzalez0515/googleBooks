import React from 'react'
import { render } from '@testing-library/react'
import BookCard from './BookCard'


it('renders book information', () => {

  const details = {
    volumeInfo: {
      title: 'Book Title',
      subtitle: 'subtitle',
      authors: ['Angie Gonzalez'],
      publisher: 'Company name',
      imageLinks:{
        thumbnail: 'http://localhost:3000'
      }, 
      infoLink: 'http://localhost:9000'
    }
  }
  const { getByText } = render(<BookCard details={details} />)

  expect(getByText(/Book Title/)).toBeInTheDocument()
  expect(getByText(/Angie Gonzalez/)).toBeInTheDocument()
})

it('renders 2 author names', () => {

  const details = {
    volumeInfo: {
      title: 'Book Title',
      subtitle: 'subtitle',
      authors: ['Angie Gonzalez', 'Michelle Gomez'],
      publisher: 'Company name',
      imageLinks:{
        thumbnail: 'http://localhost:3000'
      }, 
      infoLink: 'http://localhost:9000'
    }
  }
  const { getByText } = render(<BookCard details={details} />)

  expect(getByText(/Angie Gonzalez and Michelle Gomez/)).toBeInTheDocument()
})

it('renders multiple author names', () => {

  const details = {
    volumeInfo: {
      title: 'Book Title',
      subtitle: 'subtitle',
      authors: ['Angie Gonzalez', 'Michelle Gomez', 'Jon Navales'],
      publisher: 'Company name',
      imageLinks:{
        thumbnail: 'http://localhost:3000'
      }, 
      infoLink: 'http://localhost:9000'
    }
  }
  const { getByText } = render(<BookCard details={details} />)

  expect(getByText(/Angie Gonzalez, Michelle Gomez and Jon Navales/)).toBeInTheDocument()
})

it('renders without a publisher', () => {

  const details = {
    volumeInfo: {
      title: 'Book Title',
      subtitle: 'subtitle',
      authors: ['Angie Gonzalez', 'Michelle Gomez'],
      imageLinks:{
        thumbnail: 'http://localhost:3000'
      }, 
      infoLink: 'http://localhost:9000'
    }
  }
  const { getByText } = render(<BookCard details={details} />)

  expect(getByText(/Book Title/)).toBeInTheDocument()
})