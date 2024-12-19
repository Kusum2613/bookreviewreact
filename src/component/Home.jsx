import React, { useContext} from 'react'
import { Book } from './Book'
import Trending from './Trending'
import Review from '../review'

function Home() {
  const books=useContext(Book)
  return (
    <div className='main'>
      <Trending/>
      <div className='trendimg'>
        
        { books.map((e)=>(
          <div key={e.id} className='card'>
            <img src={e.image}   style={{ width: '150px', height: '200px' }}/>
            <h3 style={{backgroundColor:'lightpink',padding:"10px"}} >{e.author}</h3>
            </div>
        ))}
        
      </div>
      <Review/>
    </div>
  )
}

export default Home