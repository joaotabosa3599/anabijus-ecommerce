import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  faBars,
  faSearch,
  faShoppingCart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar({
  setShowSideBarCart,
  selectedProducts,
  searchTerm,
  setSearchTerm,
  currentUser,
  setCurrentUser,
}) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setShow(false);
  }, [location]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() !== "" && location.pathname !== "/Products") {
      navigate("/Products");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("activeUser");
    navigate("/");
  };

  return (
    <div className="Nav">
      <div className="inner-content">
        <div className="Logo">
          <img src="/Images/logo.png" alt="Logo" />
        </div>

        <nav className={`${show && "show"}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            {/* ALTERAÇÃO AQUI: Link inteligente para Produtos */}
            <li>
              <Link
                to={currentUser ? "/Products" : "/Login"}
                state={!currentUser ? { from: "navbar" } : null}
              >
                Produtos
              </Link>
            </li>

            <li>
              <Link to="/Contato">Contato</Link>
            </li>

            {!currentUser ? (
              <li>
                <Link to="/Login" className="btn-login-nav">
                  Login
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/Profile"
                    style={{ color: "#d81b60", fontWeight: "bold" }}
                  >
                    Olá, {currentUser.name.split(" ")[0]}
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="btn-logout">
                    <FontAwesomeIcon icon={faSignOutAlt} /> Sair
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>

        <div className="navs-icon-container">
          <div className="search-input-container">
            <input
              type="search"
              placeholder="Procurar"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>

          <button
            className="shopping-cart"
            onClick={() => setShowSideBarCart(true)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            {selectedProducts.length > 0 && (
              <div className="products-count">{selectedProducts.length}</div>
            )}
          </button>

          <button className="menu-button" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
}
