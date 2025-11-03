import { CgDatabase } from "react-icons/cg";
import {
  FaBolt,
  FaRobot,
  FaLightbulb,
  FaNetworkWired,
  FaTools,
  FaHardHat,
  FaCog,
  FaCogs,
  FaLeaf,
} from "react-icons/fa";

export default function Produtos() {
  const categorias = [
    { nome: "Materiais Elétricos", icon: <FaBolt size={40} /> },
    { nome: "Eletroeletrônicos", icon: <FaRobot size={40} /> },
    { nome: "Iluminação", icon: <FaLightbulb size={40} /> },
    { nome: "Fios e Cabos", icon: <FaNetworkWired size={40} /> },
    { nome: "Datacom", icon: <CgDatabase size={40} /> },
    { nome: "EPIs e EPCs", icon: <FaHardHat size={40} /> },
    { nome: "Ferramentas", icon: <FaTools size={40} /> },
    { nome: "Pneumáticos", icon: <FaCogs size={40} /> },
    { nome: "Automção", icon: <FaCog size={40} /> },
    
  ];

  return (
    <section className="py-20 bg-[#4A4A4A] text-center text-white">
      <h3 className="text-3xl md:text-5xl font-bold mb-10 text-[#fff]">
        Produtos que otimizam suas operações.
      </h3>

      <div className="flex flex-wrap justify-center gap-6 px-8">
        {categorias.map((cat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#111] to-[#111] hover:from-[#00ABF9] hover:to-[#00ABF9] 
                 text-white rounded-2xl w-36 h-36 flex flex-col items-center justify-center 
                 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            {cat.icon}
            <p className="mt-3 text-sm font-medium text-center">{cat.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
