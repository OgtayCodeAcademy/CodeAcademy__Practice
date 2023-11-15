import React from 'react'
import FirstInput from '../Firstinput'
import SecondInput from '../Secondinput'
import Minus from '../Minus'
import Multiple from '../Multiple'
import Plust from '../Plust'
import Division from '../Division'
import Result from '../Result'

export default function Calculator({count, setCounter}) {
  return (
    <>
        <FirstInput count={count} setCounter={setCounter}></FirstInput>
        <SecondInput count={count} setCounter={setCounter}></SecondInput>
        <Plust count={count} setCounter={setCounter}></Plust>
        <Minus count={count} setCounter={setCounter}></Minus>
        <Multiple count={count} setCounter={setCounter}></Multiple>
        <Division count={count} setCounter={setCounter}></Division>
        <Result count={count} setCounter={setCounter}></Result>
    </>
  )
}
