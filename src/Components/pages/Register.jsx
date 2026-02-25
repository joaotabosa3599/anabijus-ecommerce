import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // 1. Recupera a lista de usuários já cadastrados ou cria uma vazia
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // 2. Verifica se o e-mail já está em uso
    const userExists = savedUsers.find((u) => u.email === email);

    if (userExists) {
      setError("Este e-mail já está cadastrado.");
      return;
    }

    // 3. Cria o novo objeto de usuário
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    // 4. Salva na lista e atualiza o LocalStorage
    savedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(savedUsers));

    // 5. Feedback e Redirecionamento
    alert("Cadastro realizado com sucesso! Agora faça seu login.");
    navigate("/Login");
  };

  return (
    <div className="auth-container page-inner-content">
      <div className="auth-card">
        <h2>Criar Conta</h2>
        <p>Junte-se a nós e aproveite nossas coleções exclusivas.</p>

        <form onSubmit={handleRegister} className="auth-form">
          {error && (
            <p className="error-msg" style={{ color: "#d81b60" }}>
              {error}
            </p>
          )}

          <div className="form-group">
            <label>Nome Completo</label>
            <input
              type="text"
              placeholder="Como deseja ser chamado?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              placeholder="Crie uma senha segura"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-auth">
            Cadastrar
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Já possui uma conta? <Link to="/Login">Entre aqui</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
