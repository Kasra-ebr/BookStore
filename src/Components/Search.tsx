import React, { useState } from 'react'
import Input from './UI/Input'
import Button from './UI/Button'
import { IoSearchSharp } from "react-icons/io5";
import "./../App.css"
import { useBookContext } from './Hooks/BookContextProvider';
function Search() {
    const {search,setSearch,searchHandler} = useBookContext()
  return (
    <div className='search__container'>
        <Input
        name='search'
        placeholder='   Search ... '
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        className='input'
        />
        <Button onClick={searchHandler} className="btn--sec">
            <IoSearchSharp size={"35px"}/>
        </Button>
    </div>
  )
}

export default Search