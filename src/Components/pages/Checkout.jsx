import React from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout({ selectedProducts = [], completePurchase }) {
  const navigate = useNavigate();

  const subtotal = selectedProducts.reduce((acc, product) => {
    return acc + product.price * (product.quantity || 1);
  }, 0);

  const shipping = subtotal > 0 && subtotal < 200 ? 15.0 : 0;
  const totalFinal = subtotal + shipping;

  const handleFinish = () => {
    if (selectedProducts.length === 0) return;

    completePurchase();
    alert("Pagamento processado com sucesso!");
    navigate("/Profile");
  };

  return (
    <div className="checkout-container page-inner-content">
      <main className="checkout-main">
        <section className="checkout-section">
          <h2>Informações de Entrega</h2>
          <form className="checkout-form">
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" placeholder="seu@email.com" required />
            </div>
            <div className="form-group">
              <label>Endereço Completo</label>
              <input type="text" placeholder="Rua, número e bairro" required />
            </div>
          </form>
        </section>

        <section className="checkout-section">
          <h2>Pagamento</h2>
          <div className="payment-options">
            <div className="form-group">
              <label>Número do Cartão</label>
              <input type="text" placeholder="0000 0000 0000 0000" required />
            </div>
          </div>
        </section>
      </main>

      <aside className="checkout-summary">
        <div className="summary-card">
          <h3>Resumo da Compra</h3>
          <div className="summary-products-list">
            {selectedProducts.map((product) => (
              <div key={product.id} className="summary-item">
                <span>
                  {product.name} (x{product.quantity})
                </span>
                <span>R$ {(product.price * product.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="summary-details">
            <div className="summary-item">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Frete</span>
              <span>R$ {shipping.toFixed(2)}</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>R$ {totalFinal.toFixed(2)}</span>
            </div>
          </div>

          <button
            className="btn-finish-order"
            disabled={selectedProducts.length === 0}
            onClick={handleFinish}
          >
            Finalizar Pedido
          </button>
        </div>
      </aside>
    </div>
  );
}
