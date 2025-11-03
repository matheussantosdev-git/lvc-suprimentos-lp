import imgFundo from "../../assets/Empresarial-Time.jpg";
import Parceiros from "../../components/Parceiros";

function Sobre() {
  return (
    <div className="flex flex-col min-h-screen bg-[#4A4A4A] text-[#FFFFFF] font-sans">
      <main className="flex-grow mt-20 px-10">
        <section className="max-w-7xl mx-auto py-12">
          <h2 className="text-sm uppercase tracking-wide text-white bg-[#0077C8] px-4 py-1 rounded-md inline-block font-semibold">
            Sobre
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFFFFF] mt-4">
            Felizes em construir
          </h1>
        </section>

        <section className="max-w-7xl mx-auto mb-12">
          <img
            src={imgFundo}
            alt="Equipe de construção"
            className="w-full h-[420px] object-cover rounded-lg shadow-md"
          />
        </section>

        <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 pb-20">
          <div>
            <h3 className="text-4xl font-bold text-[#0077C8] mb-3">
              LVC Suprimentos Industriais LTDA
            </h3>
            <p className="text-#FFFFFF leading-relaxed text-2xl">
              Somos uma equipe apaixonada por transformar projetos em realidade. Nosso compromisso é
              entregar produtos com qualidade, pontualidade e responsabilidade. Cada detalhe é
              pensado com dedicação — transformamos cada necessidade em oportunidade, entregando
              produtos e serviços que fazem seu negócio crescer.
              <br />
              <br />
              Trabalhamos lado a lado com nossos clientes, oferecendo transparência, confiança e
              soluções inteligentes para cada necessidade.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="text-3xl font-semibold text-[#0077C8] mb-2">Relacionamentos</h4>
              <p className="text-#FFFFFF leading-relaxed text-2xl">
                Acreditamos em parcerias duradouras. Mais do que construir, nós conectamos pessoas,
                ideias e sonhos. Nosso foco está em compreender o cliente para entregar resultados
                acima das expectativas.
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-semibold text-[#0077C8] mb-2">Experiência</h4>
              <p className="text-#111 leading-relaxed text-2xl">
                São anos de experiência em{" "}
                <span className="text-[#0077C8]">Sourcing corporativo</span>, sempre com uma equipe
                técnica qualificada e comprometida em oferecer excelência em cada processo.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-16 grid md:grid-cols-3 gap-10 text-[#FFFFFF]">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🔍</span>
            <div>
              <h4 className="text-xl font-bold mb-1">Pesquisa e Cotação</h4>
              <p className="text-#FFFFFF">
                Buscamos os melhores fornecedores para oferecer produtos de qualidade com o melhor
                custo-benefício.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-4xl">📦</span>
            <div>
              <h4 className="text-xl font-bold mb-1">Abastecimento Inteligente</h4>
              <p className="text-#FFFFFF">
                Organizamos o processo de compra e logística para que sua empresa receba tudo de
                forma rápida e eficiente.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-4xl">🚚</span>
            <div>
              <h4 className="text-xl font-bold mb-1">Entrega Garantida</h4>
              <p className="text-#111">
                Garantimos pontualidade e segurança na entrega, mantendo sua operação sempre
                abastecida.
              </p>
            </div>
          </div>
        </section>

        <Parceiros />

        <section className="max-w-7xl mx-auto px-6 pb-20 text-center">
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-[#0077C8]">Nossa Localização</h3>
          <p className="text-#111-300 text-lg md:text-xl mb-8">
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
      </main>
    </div>
  );
}

export default Sobre;
