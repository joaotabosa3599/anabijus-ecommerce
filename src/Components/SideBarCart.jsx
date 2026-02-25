import { faMoneyBill, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SidebarProduct from "./SidebarProduct";
import { useNavigate } from "react-router-dom";

export default function SideBarCart({
  showSideBarCart,
  setShowSideBarCart,
  selectedProducts,
  cartTotal,
  removeProductFromCart,
  updateProductQuantity,
}) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (selectedProducts.length === 0) {
      alert("Seu carrinho está vazio. Adicione produtos para prosseguir!");
      return;
    }

    setShowSideBarCart(false);
    navigate("/Checkout");
  };

  return (
    <aside className={`sidebar-cart ${showSideBarCart ? "show" : ""}`}>
      <div className="top">
        <h3>Seu Carrinho</h3>
        <button onClick={() => setShowSideBarCart(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div className="sidebar-products-list">
        {selectedProducts?.length > 0 ? (
          selectedProducts.map((product) => (
            <SidebarProduct
              key={product.id}
              {...product}
              removeProductFromCart={removeProductFromCart}
              updateProductQuantity={updateProductQuantity}
            />
          ))
        ) : (
          <p className="empty-cart-text">Seu carrinho está vazio</p>
        )}
      </div>

      <div className="total-container">
        <b>Total: </b> R$ {cartTotal.toFixed(2)}
      </div>

      <button onClick={handleCheckout} className="btn-icon">
        <span>Pagar Agora</span>
        <FontAwesomeIcon icon={faMoneyBill} />
      </button>
    </aside>
  );
}
