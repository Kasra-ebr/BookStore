import { useState } from 'react'

import './App.css'
import BookCardList from './Components/BookCardList'

import Layout from './Components/Layout'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import { BookContextProvider } from './Components/Hooks/BookContextProvider'


function App() {
 
  return (
    <>
    <BookContextProvider>
    <Layout>
     <Navbar/>
     <Search/>
     <BookCardList/>
     </Layout>
     </BookContextProvider> 
 </>
  )
  
}

export default App
