function Footer() {
  return (
    <footer className="py-5 bg-[#4A4A4A] text-center text-white-400 text-sm leading-relaxed">
      <div className="space-y-2">
        <p className="text-white font-semibold text-base">LVC SUPRIMENTOS - 48.673.277/0001-01</p>
        <p>
          Avenida Santa Tereza, 951, Jardim Santa Tereza, <br />
          Rio Grande da Serra - SP / 09450-000
        </p>
        <p className="text-white-500 mt-2">
          © {new Date().getFullYear()} LVC Suprimentos Industriais LTDA. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
