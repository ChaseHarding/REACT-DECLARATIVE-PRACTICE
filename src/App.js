import React from 'react'
import { useState } from 'react'

function App() {
  let [ counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter
  return (
    <div>
      <h1>{counter}</h1>
      <h3>{counter}</h3>
    </div>
  )
}

export default App
