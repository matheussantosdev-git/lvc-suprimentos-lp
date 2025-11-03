import { Link } from "react-router-dom";
import {
  Zap,
  Bot,
  Lightbulb,
  Cable,
  HardHat,
  Wrench,
  Settings,
  Refrigerator,
  ClipboardList,
} from "lucide-react";

export default function Produtos() {
  const categorias = [
    { nome: "Materiais Elétricos", slug: "materiais-eletricos", icon: <Zap size={40} /> },
    { nome: "Eletroeletrônicos", slug: "eletroeletronicos", icon: <Bot size={40} /> },
    { nome: "Iluminação", slug: "iluminacao", icon: <Lightbulb size={40} /> },
    { nome: "Rede e Wireless", slug: "rede-wireless", icon: <Cable size={40} /> },
    { nome: "Escritório", slug: "escritorio", icon: <ClipboardList size={40} /> },
    { nome: "EPIs e EPCs", slug: "epis-epcs", icon: <HardHat size={40} /> },
    { nome: "Ferramentas", slug: "ferramentas", icon: <Wrench size={40} /> },
    { nome: "Eletrodoméstico", slug: "eletrodomesticos", icon: <Refrigerator size={40} /> },
    { nome: "Automação", slug: "automacao", icon: <Settings size={40} /> },
  ];

  return (
    <section id="products" className="py-20 container mx-auto rounded-2xl">
      <h2 className="text-3xl font-bold text-black mb-10 text-center">
        Produtos que otimizam suas operações.
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-8">
        {categorias.map((cat, index) => (
          <Link
            key={index}
            to={`/produtos/${cat.slug}`}
            className="bg-primaryBlue hover:bg-secondBlue
      text-white rounded-2xl w-36 h-36 flex flex-col items-center justify-center 
      shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            {cat.icon}
            <p className="mt-3 text-sm font-medium text-center">{cat.nome}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
