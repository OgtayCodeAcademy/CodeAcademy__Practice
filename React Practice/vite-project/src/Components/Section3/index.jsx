import React from "react";
import products from "../Data/products";

export default function Section3() {
    return (
    <>
      <div className="col-4">
        <h1>{products.sort((a, b)=> a.rating.rate - b.rating.rate)[products.length - 1].category}</h1>
        <h3>{products.sort((a, b)=> a.rating.rate - b.rating.rate)[products.length - 1].title}</h3>
        <p>{products.sort((a, b)=> a.rating.rate - b.rating.rate)[products.length - 1].price}</p>
      </div>
    </>
  );
}
