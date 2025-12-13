import './App.css'

import Home from './Home.jsx'
import Search from './Search.jsx'
import AddPost from './AddPost.jsx'
import { DataProvider } from './DataContext.jsx'
import { Route, Routes, Link } from 'react-router-dom'
import EditPost from './EditPost.jsx'

function App() {  
  return (
    <>
    <div className="main-wrapper">
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/newpost">NewPost</Link></li>
    </ul>

       <DataProvider>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/newpost" element={<AddPost/>}></Route>
          <Route path="/editpost/:id" element={<EditPost />}></Route>
        </Routes>
          
       </DataProvider>

    </div>
    
       
    </>
  )
}

export default App
