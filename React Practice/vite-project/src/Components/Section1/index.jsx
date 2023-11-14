import React from "react";
import products from "../Data/products";

export default function Section1() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tittle</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rate</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>{products.map((product, index)=>{
          return(
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.rating.rate}</td>
              <td>{product.rating.count}</td>
            </tr>
          )
        })}</tbody>
      </table>
    </>
  );
}
