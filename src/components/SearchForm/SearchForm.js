import React from 'react'
import styles from './search-form.module.scss'

const SearchForm = ({
  handleInput,
  handleSubmit,
  keyPress,
  searchTerm,
}) => {
  return ( 
    <div className={styles.container}>
      <form className={styles.form}>
        <label htmlFor='search-term'>Enter search term: </label>
        <div className={styles.containerInput}>
          <input className={styles.input} type='text' id='search-term' value={searchTerm} onChange={handleInput} onKeyDown={keyPress} />
          <button className={styles.submit} type='button' onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div> 
  )
}
 
export default SearchForm
