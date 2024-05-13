import React from 'react'
import { useGlobalContext } from '../context'


const SearchForm = () => {

  const {setSearchTerm} = useGlobalContext()
  // console.log(setSearchTerm);

  const handleSubmit = (e) => {
    e.preventDefault()

    const searchValue = e.target.elements.search.value
    // console.log(searchValue);

    if (!searchValue) return
    setSearchTerm(searchValue)
  }


  return (
    <section className='title'>
      <h1>Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" name='search' placeholder='cat' className='form-input search-input'/>
        <button className="btn" type='submit'>Search</button>
      </form>
    </section>
  )
}

export default SearchForm