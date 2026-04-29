import { useEffect, useState } from "react";

function Admin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://i-techbackend.onrender.com/messages")
      .then(res => res.json())
      .then(data => {
        setMessages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        Dashboard Admin
      </h1>

      {/* Déconnexion */}
      <button
        onClick={() => {
          localStorage.removeItem("isAdmin");
          window.location.href = "/login";
        }}
        className="mb-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Déconnexion
      </button>

      {/* Loading */}
      {loading ? (
        <p className="text-gray-600">Chargement des messages...</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">

          <table className="w-full text-left">

            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3">Nom</th>
                <th className="p-3">Email</th>
                <th className="p-3">Message</th>
              </tr>
            </thead>

            <tbody>
              {messages.length === 0 ? (
                <tr>
                  <td colSpan="3" className="p-4 text-center text-gray-500">
                    Aucun message
                  </td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr key={msg.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{msg.name}</td>
                    <td className="p-3">{msg.email}</td>
                    <td className="p-3">{msg.message}</td>
                  </tr>
                ))
              )}
            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}

export default Admin;