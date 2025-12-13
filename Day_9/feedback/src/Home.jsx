import React from 'react'
import { useContext } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import DataContext from './DataContext'

const Home = () => {
  const {searchResults} = useContext(DataContext)
  return (
    <div className='homecontainer'>
       <Search />
         {
        searchResults.map((post)=>(
          <div key={post.id} className="post">
            <Link to={`/editpost/${post.id}`}>
             <h3>{post.title}</h3> 
              <p className="post-date">{post.datetime}</p>
              <p>{post.body}</p>
            </Link>
            
          </div>
        ))
      }
    </div>
   
  )
}

export default Home
