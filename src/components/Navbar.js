import { useState, useEffect } from "react";
import logo from "../assets/logo.png"; // ✅ correction ici

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: "Accueil" },
    { id: "services", label: "Services" },
    { id: "about", label: "À propos" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">

        {/* LOGO */}
        <div className="relative flex items-center">

          {/* cercle arrière logo */}
          <img
            src={logo}   // ✅ correction ici
            alt="logo"
            className="absolute w-12 h-12 rounded-full opacity-100"
          />

          {/* texte devant */}
          <h1 className="text-2xl font-bold text-blue-600 relative z-10 ml-14">
            
          </h1>

        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setActive(l.id)}
                className={`transition hover:text-blue-600 ${
                  active === l.id ? "text-blue-600" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white shadow-md ${
          open ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => {
                setActive(l.id);
                setOpen(false);
              }}
              className="text-gray-700 hover:text-blue-600"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

    </nav>
  );
}

export default Navbar;