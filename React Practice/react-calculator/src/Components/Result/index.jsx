import React from 'react'

export default function Result({count}) {
  return (
    <>
        <input value={count[2] && count[2].result} type="text" />
    </>
  )
}
