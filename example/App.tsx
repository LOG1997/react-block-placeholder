import React, { useState } from 'react'
import './App.css';
import { Button } from '../packages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button></Button>
    </div>
  )
}

export default App
