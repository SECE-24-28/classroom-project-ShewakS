import React from 'react'
import { useState, useEffect } from 'react'
import api from './api/Post.jsx'
import {createContext} from "react"
import {useNavigate} from "react-router-dom"

const DataContext = createContext();
export const DataProvider=({children})=>{
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const navigate=useNavigate();

  useEffect(()=>{
    const fetchPosts=async()=>{
      try{
        const res= await api.get("/feedback");
        console.log(res.data);
        setPosts(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchPosts();
  },[])
  
  useEffect(() => {
  const demo = () => {
    const filtered = posts.filter(post =>
      post.title?.toLowerCase().includes(search.toLowerCase())
    )
    setSearchResults(filtered.reverse())
  }

  demo()  
}, [posts, search])

  const handleSubmit=async(e)=>{
      e.preventDefault();
      const id=(posts.length)?String((Number(posts[posts.length-1].id)+1)):("1")
      const datetime=new Date().toLocaleString()

      const newObj={id,title,datetime,body}
      try{
        await api.post("/feedback",newObj)
        const newList=[...posts,newObj]
        setPosts(newList)
        setTitle('')
        setBody('')
        alert("Data is added")
        navigate("/")
      }
      catch(err){
        console.log(err)
      }
  }

  const handleDelete=async(id)=>{
    try{
      await api.delete(`/feedback/${id}`)
      alert("Deletion Successful")
      const newList=posts.filter((post)=>post.id!==id)
      setPosts(newList)
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
  }

  const handleEdit=async(id,updatedPost)=>{
    try{
      await api.put(`/feedback/${id}`,updatedPost)
      const updatedPosts=posts.map(post=>post.id===id?updatedPost:post)
      setPosts(updatedPosts)
      alert("Post updated successfully")
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
  }

    return(
        <DataContext.Provider value={{
            posts,
            search,
            searchResults,
            setSearch,
            title,
            body,
            setTitle,
            setBody,
            handleSubmit,
            handleDelete,
            handleEdit
        }}>
            {children}
        </DataContext.Provider> 
    )
}


export default DataContext;
