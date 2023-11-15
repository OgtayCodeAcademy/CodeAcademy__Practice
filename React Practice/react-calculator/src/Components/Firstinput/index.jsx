import React from 'react'

export default function FirstInput({count, setCounter}) {
  function handleFirst(e){
    e.preventDefault()
    let second_input = count.filter((input)=>input.id != e.target.id)
    let first_input = count.find((input1)=> input1.id == e.target.id)
    first_input.value = Number(e.target.childNodes[0].value)
    setCounter([...second_input, first_input])
  }
  return (
    <>
        <form id='1' onSubmit={(e)=>{handleFirst(e)}} action="submit">
          <input type="number" />
        </form>
    </>
  )
}
