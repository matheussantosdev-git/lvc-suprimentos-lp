import { Award, Heart, Truck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Nós
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma empresa comprometida com excelência e satisfação dos nossos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Nossa Equipe"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nossa História
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Fundada com o propósito de oferecer produtos de alta qualidade,
              nossa empresa tem se dedicado a proporcionar a melhor experiência
              de compra para nossos clientes.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Com anos de experiência no mercado, construímos uma reputação sólida
              baseada em confiança, qualidade e comprometimento com a satisfação
              do cliente.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Trabalhamos com fornecedores selecionados para garantir que cada
              produto atenda aos mais altos padrões de qualidade.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Award className="text-emerald-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Qualidade Garantida
            </h4>
            <p className="text-gray-600">
              Todos os nossos produtos passam por rigoroso controle de qualidade
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Heart className="text-emerald-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Atendimento Personalizado
            </h4>
            <p className="text-gray-600">
              Nossa equipe está sempre pronta para atender suas necessidades
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Truck className="text-emerald-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Entrega Rápida
            </h4>
            <p className="text-gray-600">
              Garantimos entrega ágil e segura para todo o país
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
