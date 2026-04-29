function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Logo / description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">
            I-Tech Services
          </h2>
          <p className="text-gray-400 mt-4">
            Solutions numériques modernes : sites web, applications et automatisation.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Liens</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-white">Accueil</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#about" className="hover:text-white">À propos</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">Email : isiakudiallo18@gmail.com</p>
          <p className="text-gray-400">Téléphone : +226 64 04 19 58</p>
        </div>

      </div>

      {/* Bas footer */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} eTech Services. Tous droits réservés.
      </div>

    </footer>
  );
}

export default Footer;