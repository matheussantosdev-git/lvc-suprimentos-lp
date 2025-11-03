export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-around gap-12 md:gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4">LVC Suprimentos</h3>
            <p className="text-gray-400 leading-relaxed">
              Produtos de qualidade com <br />
              atendimento personalizado para você.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(55) 11 5530-0510</li>
              <li>victor@lvcsuprimentos.com.br</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horário</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Seg - Qui: 8h às 17:30</li>
              <li>Sex: 8h às 17h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} LVC Suprimentos Industriais Ltda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
