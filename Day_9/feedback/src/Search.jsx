import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'

const Search = () => {
   const {search,setSearch}=useContext(DataContext)
    return (
    <>
        <input 
        type="text" 
        placeholder="Search posts..." 
        value={search} 
        onChange={(e)=>setSearch(e.target.value)} 
      />
    </>
  )
}

export default Search
