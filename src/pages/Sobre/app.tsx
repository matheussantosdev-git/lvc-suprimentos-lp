import { Award, Heart, Truck } from "lucide-react";
import Parceiros from "../../components/Parceiros";

export default function Sobre() {
  return (
    <div id="sobre" className="min-h-screen pt-40 pb-12">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Sobre nossa empresa</h1>
          <p className="text-xl text-gray-600">Conheça a história e os valores que nos definem</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Nossa Equipe"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa história</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Somos uma equipe apaixonada por transformar projetos em realidade. Nosso compromisso é
              entregar produtos com qualidade, pontualidade e responsabilidade. Cada detalhe é
              pensado com dedicação — transformamos cada necessidade em oportunidade, entregando
              produtos e serviços que fazem seu negócio crescer.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Trabalhamos lado a lado com nossos clientes, oferecendo transparência, confiança e
              soluções inteligentes para cada necessidade.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div order-2 md:order-1>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Relacionamentos</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Acreditamos em parcerias duradouras. Mais do que construir, nós conectamos pessoas,
              ideias e sonhos. Nosso foco está em compreender o cliente para entregar resultados
              acima das expectativas.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Experiência</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              São anos de experiência em{" "}
              <span className="text-primaryBlue">Sourcing corporativo</span>, sempre com uma equipe
              técnica qualificada e comprometida em oferecer excelência em cada processo.
            </p>
          </div>
          <div md:order-2>
            <img
              src="https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Missão"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>

        <Parceiros />

        <div className="bg-gradient-to-br from-treeBlue to-blue-100 rounded-2xl p-12 mb-20 mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nossos valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondBlue rounded-full mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Qualidade</h3>
              <p className="leading-relaxed">
                Comprometemos com a excelência em cada produto que oferecemos. Nosso controle de
                qualidade é rigoroso e contínuo.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondBlue rounded-full mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Atendimento Personalizado</h3>
              <p className="leading-relaxed">
                Nossa equipe está sempre pronta para atender suas necessidades com atenção e
                dedicação.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondBlue rounded-full mb-4">
                <Truck className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Entrega Rápida</h3>
              <p className="leading-relaxed">
                Garantimos entrega ágil e segura para todo o país, com rastreamento completo.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-blue-200 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Por que nos escolher?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-2">Produtos de qualidades</h3>
                <p>Sourcing com os melhores fornecedores.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-2">Atendimento rápido</h3>
                <p>Equipe disponível para tirar suas dúvidas a qualquer momento.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-2">Garantia estendida</h3>
                <p>Oferecemos garantia estendida em todos os produtos.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-2">Preços competitivos</h3>
                <p>Melhor relação custo-benefício do mercado.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-6 pb-20 text-cente mt-14">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Nossa localização</h2>
          <p className="text-black text-lg md:text-xl mb-8 text-center">
            Venha nos visitar ou entre em contato para saber mais sobre nossos produtos e serviços.
          </p>

          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-[#0077C8]/30">
            <iframe
              title="Localização LVC Suprimentos"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.9253299432553!2d-46.39637952569093!3d-23.49660195867199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce67a99b3c63f7%3A0x2a4c5325b59e8b1b!2sAv.%20Santa%20Tereza%2C%20951%20-%20Jardim%20Santa%20Tereza%2C%20Rio%20Grande%20da%20Serra%20-%20SP%2C%2009450-000!5e0!3m2!1spt-BR!2sbr!4v1730000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
