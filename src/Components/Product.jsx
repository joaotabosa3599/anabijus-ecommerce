import {
  faCartShopping,
  faEllipsisVertical,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

export default function Product({
  id,
  image,
  name,
  rating,
  price,
  description,
  stock,
  category,
  addProductsToCart,
}) {
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const handleBuyNow = () => {
    addProductsToCart(id);
    navigate("/Checkout");
  };

  return (
    <div className="product">
      <img className="photo-product" src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="rating">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
      <p className="price">
        <span>R$</span> {price}
      </p>
      <div className="buttons">
        <button onClick={handleBuyNow} className="btn-icon">
          <span>Comprar Agora</span>
          <FontAwesomeIcon icon={faMoneyBill} />
        </button>

        <button
          onClick={() => addProductsToCart(id)}
          className="btn-icon add-to-cart-btn"
        >
          <span>Adicionar ao carrinho</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>

        <div className="modal-product">
          <div className="modal-bottom">
            <p>estoque: {stock}</p>
            <button onClick={() => setOpenModal(true)}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
          <Modal
            isOpen={openModal}
            product={{
              name,
              category,
              image,
              id,
              price,
              rating,
              description,
              stock,
            }}
            onClose={() => setOpenModal(false)}
            addProductsToCart={addProductsToCart}
            handleBuyNow={handleBuyNow}
          />
        </div>
      </div>
    </div>
  );
}
