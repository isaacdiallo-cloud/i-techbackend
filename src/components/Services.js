import { motion } from "framer-motion";

function Services() {
  const cards = [
    { title: "💻 Web", text: "Sites modernes et rapides" },
    { title: "📱 Apps", text: "Applications mobiles & desktop" },
    { title: "⚙️ Auto", text: "Automatisation intelligente" },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">

      <h2 className="text-center text-3xl font-bold mb-12">
        Nos Services
      </h2>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">

        {cards.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-blue-600 font-bold text-xl mb-2">
              {c.title}
            </h3>
            <p className="text-gray-600">{c.text}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Services;