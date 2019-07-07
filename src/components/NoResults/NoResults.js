import React from 'react'
import noResults from '../../assets/noResults.svg'

const NoResults = () => {
  return (  
    <div>
      <img src={noResults} className='placeholderImg' alt='Empty clipboards' />
      <p style={{textAlign: 'center', fontSize: '1.3rem'}}>No books found. Try again!</p>
    </div>
  )
}
 
export default NoResults
