import React from "react";
import Product from "./Product";

export default function ProductsList({ products, addProductsToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          addProductsToCart={addProductsToCart}
        />
      ))}
    </div>
  );
}
