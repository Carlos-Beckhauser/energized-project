import React from "react";

import "./Products.css";

const Products = ({ prods }) => {
  return (
    <main className="prod">
      {prods.map(({ id, image, name, price }) => (
        <div key={id}>
          <img src={image} width="200" alt="product" />
          <h1>{name}</h1>
          <p>CA$ {price},00</p>
        </div>
      ))}
    </main>
  );
};

export default Products;
