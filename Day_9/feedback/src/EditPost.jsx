import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import  DataContext  from './DataContext'


const EditPost=()=>{
    const{posts,handleDelete,handleEdit}=useContext(DataContext)
    const{id}=useParams()
    const post=posts.find((p)=>p.id==id)
    const [editTitle,setEditTitle]=useState('')
    const [editBody,setEditBody]=useState('')

   useEffect(() => {
    const demo = () => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    };

    demo();
}, [post]);

if (!post) {
    return (
        <div>
            <h1>There is no data</h1>
        </div>
    );
}

    const handleSave=()=>{
        const updatedPost={...post,title:editTitle,body:editBody}
        handleEdit(post.id,updatedPost)
    }

    return(
        <div>
            <h1>Edit post</h1>
            <hr />
            <input type="text" value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}/><br />
            <textarea value={editBody} onChange={(e)=>setEditBody(e.target.value)}></textarea><br />
            <button onClick={handleSave}>Save</button>
            <button onClick={()=>handleDelete(post.id)}>Delete</button>
        </div>
    )
}



export default EditPost
