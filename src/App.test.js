import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

// it('fetches books', () => {

//   const {getByText} = render(<App />)
//   const button = getByText('Submit')
//   fireEvent.click(button)

//   expect()
// })

// TODO: finish tests