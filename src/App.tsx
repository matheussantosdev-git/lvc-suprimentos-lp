import React from "react";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0e0e0e] text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-black/70 fixed w-full z-50 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-yellow-500">King Supply</h1>
        <ul className="flex gap-6 text-gray-200">
          <li>
            <a href="#home" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="#servicos" className="hover:text-yellow-500">
              Serviços
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-yellow-500">
              Contato
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1573495628363-2b1db0b9d9f8?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Receba o melhor serviço de suprimento
          </h2>
          <p className="text-gray-300 mb-8">
            Oferecemos soluções de abastecimento personalizadas para sua empresa
          </p>
          <a
            href="#servicos"
            className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 transition"
          >
            Conheça Agora
          </a>
        </div>
      </header>

      {/* Ofertas Section */}
      <section id="servicos" className="py-20 bg-[#0e0e0e] text-center">
        <h3 className="text-3xl font-bold mb-4">Principais Ofertas</h3>
        <p className="text-gray-400 mb-12">
          Descubra nossa variedade de produtos e soluções personalizadas.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            "https://images.unsplash.com/photo-1590608897129-79da98d159e0",
            "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
            "https://images.unsplash.com/photo-1581090462901-91f7e39e7c45",
          ].map((img, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform bg-white text-black"
            >
              <img src={img} alt="" className="h-64 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Oferta {i + 1}</h4>
                <p className="text-gray-600">
                  Soluções específicas para seu negócio com qualidade e confiança.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-black text-center">
        <h3 className="text-3xl font-bold mb-4">Entre em Contato</h3>
        <p className="text-gray-400 mb-8">
          Fale conosco e descubra como podemos ajudar seu negócio.
        </p>
        <a
          href="mailto:contato@kingsupply.com"
          className="bg-yellow-500 text-black px-6 py-3 font-semibold rounded-md hover:bg-yellow-400 transition"
        >
          Enviar E-mail
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} King Supply. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
