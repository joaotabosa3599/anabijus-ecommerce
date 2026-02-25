import React from "react";

export default function Contato() {
  return (
    <div className="contato-container">
      <header className="contato-header">
        <h1>Marque um cafezinho com a gente!</h1>
        <p>
          Adoramos conversar com nosso público. Siga-nos nas redes sociais ou
          envie uma mensagem.
        </p>
      </header>

      <section className="contato-socials">
        <h2>Nossas Redes Sociais</h2>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/seuecommerce"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/loja.anabiju_"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/seuecommerce"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/seuecommerce"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>

      <section className="contato-info">
        <h2>Entre em Contato</h2>
        <p>
          Email:{" "}
          <a href="mailto:contato@seuecommerce.com">anabijus33@gmail.com</a>
        </p>
        <p>
          Telefone: <a href="tel:+5511999999999">+55 88 99999-9999</a>
        </p>
      </section>
    </div>
  );
}
