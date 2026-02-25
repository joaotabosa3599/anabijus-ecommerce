import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="page-inner-content content">
        <div className="download-options">
          <p>Baixe o nosso App!</p>
          <p>Baixe o nosso App para Android e IOS!</p>
          <div>
            <img src="/Images/play-store.png" alt="Google Play download" />
            <img src="/Images/app-store.png" alt="App Store download" />
          </div>
        </div>
        <div className="logo-footer">
          <img src="/Images/logo.png" alt="logo" />
          <p>
            Estamos aqui para valorizar sua autoestima e realçar sua beleza com
            acessórios que expressem sua personalidade em cada momento.
          </p>
        </div>
        <div className="links">
          <h3>Links Úteis</h3>
          <ul>
            <li>
              <Link to="/">Cupons</Link>
            </li>
            <li>
              <Link to="/">Blogs</Link>
            </li>
            <li>
              <Link to="/">Políticas</Link>
            </li>
            <li>
              <Link to="/">Afilie-se</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-inner-content">
        <hr />
        <p className="copyright">
          {" "}
          &copy; Copyright 2030 - Ana Biju - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
