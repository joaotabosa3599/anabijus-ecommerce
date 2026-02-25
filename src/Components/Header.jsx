import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header({ currentUser }) {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>Os melhores acessórios você encontra aqui!</h2>
          <p>
            Realce sua beleza com nossa coleção exclusiva. Do clássico ao
            moderno, encontre a peça perfeita para transformar seu look e
            expressar sua personalidade em cada detalhe!
          </p>

          {/* Lógica Condicional: Se deslogado, envia para Login com 'state' de origem */}
          <Link
            to={currentUser ? "/Products" : "/Login"}
            state={!currentUser ? { from: "promotion" } : null}
            className="see-more-btn"
          >
            <span>Ver coleção</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="right-side">
          <img src="./Images/istockphoto-1427466115-612x612.png" alt="Banner" />
        </div>
      </div>
    </header>
  );
}
