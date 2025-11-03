import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sobre from "./pages/Sobre/app";
import Marcas from "./components/Marcas";
import Produtos from "./components/Produtos";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Marcas />
                  <Produtos />
                  <Contact />
                </>
              }
            />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos/:slug" element={<Products />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
