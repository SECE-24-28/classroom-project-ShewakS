import { useState } from 'react'
import Header from './Header'
import Content from './Content'
import './App.css'

function App() {
  let frnds = ["Smith","Victor","Nelson","Rohit"]

  return (
    <>
      <Header title={"Friends List"}
      />
      <Content friends={frnds}/>
    </>
  )
}

export default App
