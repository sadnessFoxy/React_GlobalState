import { useState } from 'react'
import './App.css'
import componentA from './component/componentA'
import componentB from './component/componentB'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <componentA />
      <componentB />
    </>
  )
}

export default App
