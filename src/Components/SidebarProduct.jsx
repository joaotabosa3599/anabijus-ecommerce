import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SidebarProduct({
  id,
  image,
  name,
  price,
  quantity,
  removeProductFromCart,
  updateProductQuantity,
}) {
  const priceSum = price * quantity;

  return (
    <div className="sidebar-product">
      <div className="left-side">
        <button
          onClick={() => removeProductFromCart(id)}
          className="remove-product-btn"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="details">
          <h4>{name}</h4>
          <p>R$ {price.toFixed(2)}</p>

          <div className="quantity-control">
            <span>Qtd: </span>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => {
                const val = Number(e.target.value);
                updateProductQuantity(id, val);
              }}
            />
          </div>

          {quantity > 1 && (
            <p className="price-sum">
              <b>Soma:</b> R$ {priceSum.toFixed(2)}
            </p>
          )}
        </div>
      </div>

      <div className="right-side">
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
