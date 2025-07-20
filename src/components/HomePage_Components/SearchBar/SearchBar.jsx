import React from 'react'
import "./SearchBar.css"
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className='searchBar' > 
      <input 
      type="text"
      placeholder='Search for products...'
      className='searchBar-input'
      />
      <IoSearchSharp className='searchIcon'/>
    </div>
  )
}

export default SearchBar