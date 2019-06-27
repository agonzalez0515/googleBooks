import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchForm from './SearchForm'

it('renders an input field',() => {
  const { getByLabelText } = render(<SearchForm />)
  const input = getByLabelText('Enter search term:')
  expect(input).toHaveAttribute('type', 'text')
})

it('calls handler when enter key is pressed', () => {
  const handleKeyDown = jest.fn()
  const { getByLabelText } = render(<SearchForm keyPress={handleKeyDown} />)
  const input = getByLabelText('Enter search term:')

  fireEvent.keyDown(input, { key: "Enter", code: 13 })
  expect(handleKeyDown).toBeCalled()
})

it('calls handler when submit button is clicked', () => {
  const submitFunction = jest.fn()
  const { getByText } = render(<SearchForm handleSubmit={submitFunction} />)
  const button = getByText('Submit')

  fireEvent.click(button)
  expect(submitFunction).toBeCalledTimes(1)
})