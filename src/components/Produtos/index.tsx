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
    { nome: "Automação", icon: <FaRobot size={40} /> },
    { nome: "Iluminação", icon: <FaLightbulb size={40} /> },
    { nome: "Fios e Cabos", icon: <FaNetworkWired size={40} /> },
    { nome: "Datacom", icon: <CgDatabase size={40} /> },
    { nome: "EPIs e EPCs", icon: <FaHardHat size={40} /> },
    { nome: "Ferramentas", icon: <FaTools size={40} /> },
    { nome: "Pneumáticos", icon: <FaCogs size={40} /> },
    { nome: "Rolamentos", icon: <FaCog size={40} /> },
    { nome: "Portfólio Verde", icon: <FaLeaf size={40} /> },
  ];

  return (
    <section className="py-20 bg-[#0e0e0e] text-center text-white">
      <h3 className="text-3xl md:text-5xl font-bold mb-10 text-[#0077C8]">
        Produtos que otimizam suas operações.
      </h3>

      <div className="flex flex-wrap justify-center gap-6 px-8">
        {categorias.map((cat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#0077C8] to-[#003366] hover:from-[#009AF9] hover:to-[#0055A4] 
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
