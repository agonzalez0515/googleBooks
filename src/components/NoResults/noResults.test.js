import React from 'react'
import { render } from '@testing-library/react'
import NoResults from './NoResults'

it('renders', () => {
  const { asFragment }= render(<NoResults />)
  expect(asFragment()).toMatchSnapshot()
})
  
