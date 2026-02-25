import {
  faCartShopping,
  faMoneyBill,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { createPortal } from "react-dom";

export default function Modal({
  isOpen,
  product,
  onClose,
  addProductsToCart,
  handleBuyNow,
}) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <div className="modal-header">
          <div className="title-modal">
            <h2>{product.name}</h2>
            <button onClick={onClose}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="price-category">
            <p>R$ {product.price}</p>
            <p>Categoria: {product.category}</p>
          </div>
          <hr />
        </div>
        <img src={product.image} alt={product.name}></img>
        <div className="description">
          <hr />
          <p>{product.description}</p>
        </div>
        <div className="modal-buttons-buy">
          <button onClick={handleBuyNow} className="btn-icon">
            <span>Comprar Agora</span>
            <FontAwesomeIcon icon={faMoneyBill} />
          </button>
          <button
            onClick={() => addProductsToCart(product.id)}
            className="btn-icon add-to-cart-btn"
          >
            <span>Adicionar ao carrinho</span>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
