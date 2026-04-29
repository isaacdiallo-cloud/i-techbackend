import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://i-techbackend.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }

      setTimeout(() => setStatus(null), 3000);

    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">

      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">Contactez-nous</h2>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">

        {status === "success" && (
          <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-center">
            ✅ Message envoyé avec succès !
          </div>
        )}

        {status === "error" && (
          <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-center">
            ❌ Une erreur est survenue. Réessayez.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Votre nom"
            className="w-full border p-3 rounded-lg focus:outline-none focus:border-blue-600"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Votre email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:border-blue-600"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Votre message"
            className="w-full border p-3 rounded-lg focus:outline-none focus:border-blue-600"
            required
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Envoyer
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;