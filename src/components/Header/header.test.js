import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

it('renders', () => {
  const { asFragment }= render(<Header />)
  expect(asFragment()).toMatchSnapshot()
})
  
