// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
// Context
import CartContextProvider from "./context/CartContextProdived";
// Coustom Css
import "./styles/App.css";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <main className="container-fluid text-center py-5 mh-100vh">
          <Routes>
            <Route path="/"                         element={<Home /> } />
            <Route path="/categories/:categoryName" element={<Home /> } />
            <Route path="/item/:itemId"             element={<Detail /> } />
            <Route path="/cart/"                    element={<Cart /> } />
            <Route path="/search/:searchQuery"      element={<Search /> } />
            <Route path="*"                         element={<NotFound message="Página no encontrada" />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;