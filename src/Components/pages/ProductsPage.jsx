import React from "react";
import ProductsList from "../ProductsList";

export default function ProductsPage({
  products,
  addProductsToCart,
  removeProductFromCart,
}) {
  return (
    <div className="page-inner-content">
      <div className="section-title">
        <h3>Confira nossos produtos!</h3>
        <div className="underLine"></div>
      </div>
      <div className="main-content">
        {products.length > 0 ? (
          <ProductsList
            removeProductFromCart={removeProductFromCart}
            addProductsToCart={addProductsToCart}
            products={products}
          />
        ) : (
          <div className="no-results-container">
            <p>Ops! Nenhum produto encontrado com esse nome ou categoria.</p>
          </div>
        )}

        <div id="modal-root"></div>
      </div>
    </div>
  );
}
