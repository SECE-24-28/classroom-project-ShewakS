import { useState,useEffect } from 'react'
import api from './api/Stu_api.jsx'
import './App.css'

function App() {
  const [SList, setSList] = useState([])

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res = await api.get("/student");
        console.log("Response:",res.data);
        setSList(res.data);
      }
      catch(err){
        console.log("API Error:", err.message);
        
      }
    }
    fetchData()
  },[]);

  return (
    <>
      <h1>Student List</h1>
      {
        SList.map((stu)=>(
          <p key={stu.sid}>{stu.sid}-{stu.sname}-{stu.smark}</p>
        )) 
      }
    </>
  )
}

export default App
