import BgImage from "../../assets/image.png";
import { FaWhatsapp } from "react-icons/fa";
import Produtos from "../../components/Produtos";
import Marcas from "../../components/Marcas";
import imgEntrega from "../../assets/menino.png";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0e0e0e] text-white font-sans">
      <header
        id="home"
        className="h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4 mt-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Sua Central de Suprimentos Completa. <br />
            Simplifique suas compras, maximize seu tempo!
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl mb-8">
            Oferecemos soluções de abastecimento personalizadas para sua empresa
          </p>
          <a
            href="#marcas"
            className="bg-[#0077C8] text-white font-semibold px-12 py-4 rounded-lg text-lg md:text-xl hover:bg-[#00ABF9] transition"
          >
            Conheça agora
          </a>
        </div>
      </header>

      <Produtos />

      <div className="h-[50vh] flex flex-col md:flex-row items-center text-left bg-gradient-to-r justify-around from-[#0b1d4a] via-[#2d4a83] to-[#0e0d0d] text-white overflow-hidden p-8">
        <div className="max-w-xl space-y-4 md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Os melhores <span className="text-[#00ABF9]">produtos</span> e marcas para o seu <br />
            <span className="font-extrabold">negócio crescer</span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl mb-8">
            Qualidade, agilidade e confiança para o seu abastecimento.
          </p>
        </div>

        <div>
          <img src={imgEntrega} alt="Produtos ou logotipos" className="w-full h-full opacity-80" />
        </div>
      </div>

      <Marcas />

      <section id="contato" className="py-20 bg-black text-center text-white px-6">
        <h3 className="text-3xl md:text-5xl font-bold mb-10 text-[#0077C8]">Entre em contato</h3>
        <p className="text-gray-300 text-xl md:text-2xl mb-8">
          Fale conosco e descubra como podemos ajudar seu negócio.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
          <div className="bg-[#111] p-6 rounded-xl shadow-lg border border-[#00ABF9]/20">
            <h4 className="text-2xl font-semibold text-[#0077C8]  mb-3">Vendas</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:vendas@lvcsuprimentos.com.br"
                  className="hover:text-[#00ABF9] transition"
                >
                  vendas@lvcsuprimentos.com.br
                </a>
              </li>
              <li>
                <a
                  href="mailto:vendas1@lvcsuprimentos.com.br"
                  className="hover:text-[#00ABF9] transition"
                >
                  vendas1@lvcsuprimentos.com.br
                </a>
              </li>
              <li>
                <a
                  href="mailto:vendas2@lvcsuprimentos.com.br"
                  className="hover:text-[#00ABF9] transition"
                >
                  vendas2@lvcsuprimentos.com.br
                </a>
              </li>
              <li>
                <a
                  href="mailto:vendas3@lvcsuprimentos.com.br"
                  className="hover:text-[#00ABF9] transition"
                >
                  vendas3@lvcsuprimentos.com.br
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-[#111] p-6 rounded-xl shadow-lg border border-[#00ABF9]/20">
            <h4 className="text-2xl font-semibold text-[#0077C8] mb-3">Administrativo</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:adm@lvcsuprimentos.com.br"
                  className="hover:text-[#00ABF9] transition"
                >
                  adm@lvcsuprimentos.com.br
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-[#111] p-6 rounded-xl shadow-lg border border-[#00ABF9]/20">
            <h4 className="text-2xl font-semibold text-[#0077C8] mb-3">Telefone</h4>
            <p className="text-gray-300 leading-relaxed">
              (55) 11 5530-0510 <br />
              (55) 11 5530-0511
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-80 mx-auto">
          <a
            href="https://wa.me/5511976876527?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20LCV%20Suprimentos."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#00ABF9] text-black px-8 py-3 font-semibold rounded-md hover:bg-[#33c3ff] transition text-2xl"
          >
            <FaWhatsapp size={40} />
            Enviar mensagem
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
