import React, { useState } from 'react'
import './App.css';
import { Button, PlaceholderBlock } from '../packages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button></Button>
      <PlaceholderBlock w={100}></PlaceholderBlock>
    </div>
  )
}

export default App
