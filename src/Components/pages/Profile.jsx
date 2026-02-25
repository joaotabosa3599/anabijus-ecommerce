import React from "react";
import { Link } from "react-router-dom";

// Recebemos o orderHistory e o currentUser do App.jsx
export default function Profile({ orderHistory = [], currentUser }) {
  // Caso o usuário acesse a rota sem estar logado (segurança extra)
  if (!currentUser) {
    return (
      <div
        className="page-inner-content"
        style={{ textAlign: "center", padding: "100px 0" }}
      >
        <h2>Acesso Negado</h2>
        <p>Você precisa estar logado para ver seu perfil.</p>
        <Link
          to="/Login"
          className="see-more-btn"
          style={{ display: "inline-block", marginTop: "20px" }}
        >
          Ir para Login
        </Link>
      </div>
    );
  }

  return (
    <div className="profile-container page-inner-content">
      <header className="profile-header">
        <img
          className="profile-avatar"
          src="/Images/profilepic.jpg"
          alt={currentUser.name}
        />
        {/* Exibindo o nome real do usuário registrado */}
        <h1 className="profile-name">{currentUser.name}</h1>
        <p className="profile-bio">Membro desde 2026</p>
      </header>

      <div className="profile-grid">
        <div className="profile-card">
          <h2>Informações Pessoais</h2>
          <ul>
            <li>
              <strong>Email:</strong> {currentUser.email}
            </li>
            <li>
              <strong>Localização:</strong> Sobral - CE
            </li>
            <li>
              <strong>Status:</strong> Cliente Ouro
            </li>
          </ul>
        </div>

        <div className="profile-card">
          <h2>Meu Histórico de Compras</h2>
          {orderHistory.length > 0 ? (
            <div className="history-list">
              {orderHistory.map((order) => (
                <div key={order.id} className="history-item">
                  <div className="history-header">
                    <span>
                      <strong>Data:</strong> {order.date}
                    </span>
                    <span>
                      <strong>Total:</strong> R${" "}
                      {Number(order.total).toFixed(2)}
                    </span>
                  </div>
                  <ul className="history-items-detail">
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.quantity}x {item.name}
                      </li>
                    ))}
                  </ul>
                  <hr />
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-msg">Você ainda não realizou nenhuma compra.</p>
          )}
        </div>
      </div>
    </div>
  );
}
