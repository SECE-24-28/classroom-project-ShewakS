import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Gallery from './Gallery.jsx'
import PostPage from './PostPage.jsx'
import Post from './Post.jsx'
import NewPost from './NewPost.jsx'

function App() {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/postpage">PostPage</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/postpage" element={<PostPage />}>
          <Route path=":id" element={<Post />} />
          <Route path="newpost" element={<NewPost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
