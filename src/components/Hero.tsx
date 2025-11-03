import { ArrowRight } from "lucide-react";
import BgImage from "../assets/Business-Intelligence.jpg";

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Produtos de qualidade para você
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Oferecemos os melhores produtos com atendimento personalizado e entrega rápida. Sua
              satisfação é nossa prioridade.
            </p>
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center gap-2 bg-primaryBlue text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondBlue transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver produtos
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
              <img
                src={BgImage}
                alt="Produtos"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
