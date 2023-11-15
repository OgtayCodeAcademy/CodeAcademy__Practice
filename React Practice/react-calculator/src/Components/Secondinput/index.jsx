import React from 'react'

export default function SecondInput({count, setCounter}) {
  function handleSecond(e){
    e.preventDefault()
    let first_input = count.filter((input)=>input.id != e.target.id)
    let second_input = count.find((input1)=> input1.id == e.target.id)
    second_input.value = Number(e.target.childNodes[0].value)
    setCounter([...first_input, second_input])
  }
  return (
    <>
        <form id='2' onSubmit={(e)=>{handleSecond(e)}} action="submit">
          <input type="number" />
        </form>
    </>
  )
}
