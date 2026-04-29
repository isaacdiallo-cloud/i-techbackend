import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
  if (password === "admin123") {
    localStorage.setItem("isAdmin", "true"); // 🔐 on sauvegarde
    navigate("/admin");
  } else {
    alert("Mot de passe incorrect");
  }
};
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 shadow-md rounded-lg w-80">
        
        <h2 className="text-xl font-bold mb-4 text-center">
          Connexion Admin
        </h2>

        <input
          type="password"
          placeholder="Mot de passe"
          className="border p-2 w-full mb-4 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700"
        >
          Se connecter
        </button>

      </div>

    </div>
  );
}

export default Login;