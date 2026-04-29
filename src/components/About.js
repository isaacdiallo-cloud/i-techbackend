function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          À propos de eTech Services
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          eTech Services est une entreprise spécialisée dans le développement
          de solutions numériques modernes. Nous créons des sites web,
          des applications et des systèmes d’automatisation.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">

          <div>
            <h3 className="text-blue-600 font-bold text-xl">🚀 Mission</h3>
            <p className="text-gray-600 mt-2">
              Apporter des solutions digitales innovantes.
            </p>
          </div>

          <div>
            <h3 className="text-blue-600 font-bold text-xl">🎯 Vision</h3>
            <p className="text-gray-600 mt-2">
              Ameliorer nos services par le digitales.
            </p>
          </div>

          <div>
            <h3 className="text-blue-600 font-bold text-xl">⚙️ Valeurs</h3>
            <p className="text-gray-600 mt-2">
              Innovation, qualité, simplicité.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;