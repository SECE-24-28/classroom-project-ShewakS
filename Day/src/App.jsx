import { useState } from 'react'
import './App.css'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Add from './Add';
import Search from './Search'

function App() {
  
  const [list,setlist]=useState([
        {id:1,name:"sara",fee:true},
        {id:2,name:"peru",fee:false},
        {id:3,name:"msp",fee:true}
      ]);

  const [name,setName]=useState("");
  const [search,setSearch]=useState("");

  const handleDelete=(id)=>{
    const newList=list.filter((ls)=>ls.id!==id);
    setlist(newList);
  }

  const handleCheck=(id)=>{
    const newList=list.map((ls)=>(ls.id===id)?({...ls,fee:!ls.fee}):(ls));
    setlist(newList);
  }

  const handleAdd=()=>{
    if(!name.trim()) return;
    let newItem={id:list.length+1, name:name, fee:false};
    setlist([...list, newItem]);//...list means creating a duplicate instead of doing it in the previous list.
    setName("");
  }

  const filtered=list.filter((ls)=>ls.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
       {/* <h2>Student List</h2> */}
       <Header title={"Student List"} dep={"CSE"}/>
       {/* <hr /> */}
       {/* <ul> */}
        {/* {
          list.map((ls)=>
            <li key={ls.id}>
              <input type="checkbox" checked={ls.fee} onChange={()=>handleCheck(ls.id)}/>
              <label>ls.name</label>
              <button onClick={()=>handleDelete(ls.id)}>Delete</button>
            </li>
            
          )
        } */}
        <Body list={filtered} handleCheck={handleCheck} handleDelete={handleDelete} />

       {/* </ul> */}

       <Footer len={list.length} />
       <Add name={name} setName={setName} handleAdd={handleAdd} />
       <Search search={search} setSearch={setSearch} />

    </>
  )
}

export default App