import React, { createContext } from 'react'
import booksData from "./../assets/book.json";



export const Book=createContext()
export const BookProvider=({children})=>{
    const five=booksData.slice(0,8);





 return(
    <Book.Provider value={five}>
        {children}
    </Book.Provider>)
}