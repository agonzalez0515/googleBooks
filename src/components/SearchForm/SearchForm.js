import React from 'react'
import styles from './search-form.module.css'

const SearchForm = ({
  handleSubmit,
  searchTerm,
  handleInput
}) => {
  return ( 
    <div className={styles.containerSearch}>
      <form className={styles.formSearch}>
        <label htmlFor='search-term'>Enter search term: </label>
        <div className={styles.containerInput}>
          <input className={styles.formInput} type='text' id='search-term' value={searchTerm} onChange={handleInput}/>
          <button className={styles.formSubmit} type='button' onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div> 
  )
}
 
export default SearchForm
