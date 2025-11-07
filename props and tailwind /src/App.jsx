import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card.jsx'

function App() {
 
  

  return (
    <>
    <Card userName='krishna' details= 'Hello Everyone' />
    <Card userName='rahul' details='love you all' />
    </>
  )
}

export default App
