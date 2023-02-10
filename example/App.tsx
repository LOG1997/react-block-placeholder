import React, { useState } from 'react'
import './App.css';
// import { Button, PlaceholderBlock } from 'react-block-placeholder'
// import { Button, PlaceholderBlock } from '../packages'
import { Button, PlaceholderBlock } from '../lib/myapp'

// import 'react-block-placeholder/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button></Button>
      <PlaceholderBlock></PlaceholderBlock>
    </div>
  )
}

export default App
