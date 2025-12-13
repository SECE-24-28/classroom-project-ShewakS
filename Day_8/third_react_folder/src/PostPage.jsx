import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostPage = () => {
  return (
    <div>
      <ol>
        <li><Link to="/postpage/1">Post1</Link></li>
        <li><Link to="/postpage/2">Post2</Link></li>
        <li><Link to="/postpage/newpost">NewPost</Link></li>
      </ol>

      <Outlet />
    </div>
  )
}

export default PostPage
