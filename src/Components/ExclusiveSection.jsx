import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function ExclusiveSection({ currentUser }) {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>Produto Especial</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              recusandae quod obcaecati repellendus impedit doloribus dolores
              minima, nesciunt, autem voluptas dolor suscipit.
            </p>

            {/* Lógica Condicional similar ao Header */}
            <Link
              to={currentUser ? "/Products" : "/Login"}
              state={!currentUser ? { from: "promotion" } : null}
              className="see-more-btn"
            >
              <span>Ver Agora</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className="right-side">
            <img src="/Images/TriploBrincos5.jpg" alt="Produto exclusivo" />
          </div>
        </div>
      </div>
    </div>
  );
}
