import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

// Componentes Fixos
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SideBarCart from "./Components/SideBarCart";

// Páginas
import HomePage from "./Components/pages/HomePage";
import ProductsPage from "./Components/pages/ProductsPage";
import Contato from "./Components/pages/Contato";
import Profile from "./Components/pages/Profile";
import Checkout from "./Components/pages/Checkout";
import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";

export default function App() {
  // --- 1. ESTADOS DE DADOS ---
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSideBarCart, setShowSideBarCart] = useState(false);

  // --- 2. ESTADOS DE PERSISTÊNCIA (LocalStorage) ---

  // Usuário Ativo
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("activeUser");
    return saved ? JSON.parse(saved) : null;
  });

  // Carrinho de Compras
  const [selectedProducts, setSelectedProducts] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  // Histórico de Pedidos
  const [orderHistory, setOrderHistory] = useState(() => {
    const saved = localStorage.getItem("orderHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // --- 3. EFEITOS (Persistência e Busca) ---

  // Buscar produtos do JSON
  useEffect(() => {
    fetch("/Products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar banco de dados.");
        return res.json();
      })
      .then((data) => setProducts(Array.isArray(data) ? data : []))
      .catch((err) => console.error(err));
  }, []);

  // Sincronizar Usuário
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("activeUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("activeUser");
    }
  }, [currentUser]);

  // Sincronizar Carrinho
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  // Sincronizar Histórico
  useEffect(() => {
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
  }, [orderHistory]);

  // --- 4. LÓGICA DE NEGÓCIO ---

  const cartTotal = selectedProducts.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  const filteredProducts = products.filter((p) => {
    const term = searchTerm.toLowerCase();
    return (
      p.name?.toLowerCase().includes(term) ||
      p.category?.toLowerCase().includes(term)
    );
  });

  const addProductsToCart = (id) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;
    setSelectedProducts((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeProductFromCart = (id) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const updateProductQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setSelectedProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity } : p))
    );
  };

  const completePurchase = () => {
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString("pt-BR"),
      items: [...selectedProducts],
      total: cartTotal,
    };
    setOrderHistory((prev) => [newOrder, ...prev]);
    setSelectedProducts([]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          setShowSideBarCart={setShowSideBarCart}
          selectedProducts={selectedProducts}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />

        <SideBarCart
          selectedProducts={selectedProducts}
          setShowSideBarCart={setShowSideBarCart}
          showSideBarCart={showSideBarCart}
          cartTotal={cartTotal}
          removeProductFromCart={removeProductFromCart}
          updateProductQuantity={updateProductQuantity}
        />

        <main>
          <Routes>
            {/* Rota Pública */}
            <Route path="/" element={<HomePage currentUser={currentUser} />} />
            <Route path="/Contato" element={<Contato />} />
            <Route
              path="/Login"
              element={<Login setCurrentUser={setCurrentUser} />}
            />
            <Route path="/Register" element={<Register />} />

            {/* Rotas Protegidas (Só acessa se estiver logado) */}
            <Route
              path="/Products"
              element={
                currentUser ? (
                  <ProductsPage
                    products={filteredProducts}
                    addProductsToCart={addProductsToCart}
                  />
                ) : (
                  <Navigate to="/Login" state={{ from: "navbar" }} />
                )
              }
            />

            <Route
              path="/Profile"
              element={
                currentUser ? (
                  <Profile
                    orderHistory={orderHistory}
                    currentUser={currentUser}
                  />
                ) : (
                  <Navigate to="/Login" />
                )
              }
            />

            <Route
              path="/Checkout"
              element={
                currentUser ? (
                  <Checkout
                    selectedProducts={selectedProducts}
                    cartTotal={cartTotal}
                    removeProductFromCart={removeProductFromCart}
                    completePurchase={completePurchase}
                  />
                ) : (
                  <Navigate to="/Login" />
                )
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
