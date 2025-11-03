import { useParams } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import produtosPorCategoria from "../data/produtos.json";

const categoriaNomesCorrigidos: Record<string, string> = {
  "materiais-eletricos": "Materiais Elétricos",
  eletroeletronicos: "Eletroeletrônicos",
  eletrodomesticos: "Eletrodomésticos",
  "rede-wireless": "Rede Wireless",
  "rede-wireles": "Rede Wireless",
  "rede-e-wireless": "Rede e Wireless",
  automacao: "Automação",
  iluminacao: "Iluminação",
  ferramentas: "Ferramentas",
  escritorio: "Escritório",
  "epis-epcs": "EPIs e EPCs",
};

export default function Products() {
  const { slug } = useParams();
  const normalizedSlug = (slug ?? "").toLowerCase();
  const produtos = produtosPorCategoria[normalizedSlug as keyof typeof produtosPorCategoria];

  const formatSlug = (slug: string) => {
    return (
      categoriaNomesCorrigidos[slug] ??
      slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };

  const sendToWhatsApp = (productName: string) => {
    const categoryFormatted = formatSlug(normalizedSlug);

    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto: *${productName}* da categoria *${categoryFormatted}*.
Poderia me enviar mais informações?`,
    );

    window.open(`https://wa.me/5511976876527?text=${message}`, "_blank");
  };

  return (
    <section className="bg-gray-50 py-24 pt-40">
      {!produtos ? (
        <div className="container mx-auto py-24 pt-7 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Categoria não encontrada</h1>
          <p className="text-gray-600 mt-2">Verifique o link acessado.</p>
        </div>
      ) : (
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-14 text-center">
            {formatSlug(normalizedSlug)}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {produtos.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64 bg-gray-100">
                  <img
                    src={product.image || "/no-image.png"}
                    alt={product.name}
                    className="w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between h-56">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                  <button
                    onClick={() => sendToWhatsApp(product.name)}
                    className="w-full flex items-center justify-center gap-3 bg-primaryBlue text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondBlue transition-colors"
                  >
                    <ShoppingBag size={20} />
                    Solicitar informações
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
