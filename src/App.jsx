import React from 'react'
import Navbar from './Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import BookList from './component/BookList'
import BookDetail from './component/BookDetail'
import UserProfile from './UserProfile'
import Admin from './component/Admin'
import { BookProvider } from './component/book'


function App() {
  return (
    <BookProvider>
    <div className='con'>
      <Navbar></Navbar>
      <div className='container'>
        <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/book' element={<BookList></BookList>}/>
        <Route path='/detail' element={<BookDetail></BookDetail>}/>
        <Route path='/profile' element={<UserProfile></UserProfile>}/>
        <Route path='/admin' element={<Admin></Admin>}/>
        </Routes>
      </div>
    </div>
    </BookProvider>
  )
}

export default App