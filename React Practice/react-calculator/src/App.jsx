import './App.css'
import { useState } from 'react'
import Calculator from './Components/Calculator'

function App() {
  let [count, setCounter] = useState([{id: 1, value: 1}, {id: 2, value: 2}])
  return (
    <>
      <Calculator count={count} setCounter={setCounter}></Calculator>
    </>
  )
}

export default App
