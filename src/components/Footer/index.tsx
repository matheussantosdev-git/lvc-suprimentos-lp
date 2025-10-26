function Footer() {
  return (
    <footer className="py-8 bg-black text-center text-gray-400 text-sm leading-relaxed">
      <div className="space-y-2">
        <p className="text-white font-semibold text-base">LVC SUPRIMENTOS - 48.673.277/0001-01</p>
        <p>
          Avenida Santa Tereza, 951, Jardim Santa Tereza, <br />
          Rio Grande da Serra - SP / 09450-000
        </p>
        <p className="text-gray-500 mt-2">
          © {new Date().getFullYear()} Lvc Suprimentos Industriais Ltda. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
