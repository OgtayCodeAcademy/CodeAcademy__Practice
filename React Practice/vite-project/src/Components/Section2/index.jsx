import React from 'react'
import products from '../Data/products'

export default function Section2() {
  return (
    <>
        <ul>{products.sort((a, b)=> b.price - a.price).map((product, index)=>{
            return(
                <li key={index}>{product.title}</li>
            )
        })}</ul>
    </>
  )
}
