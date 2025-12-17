import { useEffect, useState } from 'react'
import './App.css'
import { addCourses, getCourses, deleteCourses, updateCourses } from './api/CourseApi'

function App() {
  
  const [courses,setCourses]=useState([])
  const [title,setTitle]=useState("")
  const [editId,setEditId]=useState("")
  const [duration,setDuration]=useState("")
  
  const fetchCourse=async()=>
  {
    const res=await getCourses();
    setCourses(res.data)
  }

 useEffect(() => {
  const loadCourses = async () => {
    await fetchCourse()
  }

  loadCourses()
}, [])

  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    await addCourses({title,duration})
    await fetchCourse()
    setTitle('')
    setDuration('');
  }

  const handleDelete=async(id)=>
  {
    await deleteCourses(id);
    fetchCourse();
    alert("Deletion successfully");
  }

  const handleEdit=(course)=>
  {
    setTitle(course.title);
    setDuration(course.duration);
    setEditId(course._id);
  }

  const update=async()=>
  {
    await updateCourses(editId,{title,duration})
    setTitle("")
    setDuration("")
    setEditId("")
    fetchCourse()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" value={duration} onChange={(e)=>setDuration(e.target.value)}/>

        <button type="submit">Add Course</button>
        <button onClick={update} type="button">Update Course</button>
        
      </form>
      {
        courses.map((course)=>{
          return <li key={course._id}>
            {course.title}  -  {course.duration}
            <br/>
            <button onClick={()=>handleEdit(course)}>Click Me</button>
            <button onClick={()=>handleDelete(course._id)}>Delete</button>
            
          </li>
        })
     }
          
    </>
  )
}

export default App