import "./scss/app.scss";
import "./scss/inicio.scss";
import "./scss/footer.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailcontainer from "./containers/ItemDetailContainer";
import ItemListcontainer from "./containers/ItemListContainer";
import NavBar from "./components/NavBar";
import CartProvider from "./context/CartContext";
import Copyright from "./components/Copyright";
import FooterLinks from "./components/FooterLinks";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Bio from "./components/Bio";
import FormOc from "./components/FormOc";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <CartProvider>
          <header className="sticky-top">
            <NavBar />
          </header>
          <main className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/categoria/:categoriaId"
                element={<ItemListcontainer />}
              />
              <Route
                path="/detalle/:detalleId"
                element={<ItemDetailcontainer />}
              />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/checkout" element={<FormOc />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/sobre-mi" element={<Bio />} />
            </Routes>
          </main>
        </CartProvider>
        <footer className="footer">
          <FooterLinks />
        </footer>
        <Copyright />
      </BrowserRouter>
    </div>
  );
}

export default App;