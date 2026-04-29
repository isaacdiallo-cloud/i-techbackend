import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="text-center max-w-3xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl font-bold leading-tight"
        >
          Des solutions numériques <br />
          <span className="text-blue-600">modernes et puissantes</span>
        </motion.h2>

        <p className="mt-6 text-gray-600 text-base md:text-lg">
          eTech Services développe des applications, sites web et systèmes
          d’automatisation modernes.
        </p>

        {/* Buttons responsive */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

  <a
    href="#services"
    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full md:w-auto text-center"
  >
    Nos services
  </a>

  <a
    href="#contact"
    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition w-full md:w-auto text-center"
  >
    Contact
  </a>

</div>

      </div>
    </section>
  );
}

export default Hero;