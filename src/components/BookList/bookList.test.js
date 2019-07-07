import React from 'react'
import { render } from '@testing-library/react'
import BookList from './BookList'
import { mockResponse } from '../../helpers'


it('renders a list of books when there are totalItems', () => {
  const { getByText } = render(<BookList books={mockResponse} />)

  expect(getByText('test')).toBeInTheDocument()
})

it('renders a no results image when there are no total items', () => {
  const res = {totalItems: 0}
  const { getByAltText } = render(<BookList books={res} />)

  expect(getByAltText('Empty clipboards')).toBeInTheDocument()
})