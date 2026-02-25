import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Login({ setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Captura a origem (promotion ou navbar)
  const from = location.state?.from;

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userFound = savedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (userFound) {
      setCurrentUser(userFound);

      // ALTERAÇÃO AQUI: Lógica de Redirecionamento unificada
      if (from === "promotion" || from === "navbar") {
        navigate("/Products");
      } else {
        navigate("/");
      }
    } else {
      setError("E-mail ou senha incorretos.");
    }
  };

  return (
    <div className="auth-container page-inner-content">
      <div className="auth-card">
        <h2>Acesse sua Conta</h2>
        <form onSubmit={handleLogin} className="auth-form">
          {error && (
            <p
              className="error-msg"
              style={{ color: "#d81b60", marginBottom: "10px" }}
            >
              {error}
            </p>
          )}

          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-auth">
            Entrar
          </button>
        </form>
        <div className="auth-footer">
          <p>
            Não tem uma conta? <Link to="/Register">Cadastre-se aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
