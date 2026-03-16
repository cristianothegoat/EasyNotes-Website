import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const API_BASE = "https://easynotes-backend-btcw.onrender.com";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("Attempting login...");

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        setMsg("Login successful! Redirecting...");
        if (onLoginSuccess) onLoginSuccess();

        setTimeout(() => navigate("/"), 700);
      } else {
        setMsg(data.message || "Login failed. Check credentials.");
      }
    } catch (error) {
      setMsg("Network error. Could not connect to the server.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-gray-300">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl max-w-sm w-full border border-gray-700"
        >
          <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
            Sign In 🚀
          </h2>

          <input
            className="w-full p-4 mb-5 rounded-lg bg-gray-700 text-white"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            className="w-full p-4 mb-6 rounded-lg bg-gray-700 text-white"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-600 text-white text-lg font-bold p-4 rounded-lg"
          >
            Login
          </button>

          {msg && (
            <p
              className={`mt-5 text-center ${
                msg.includes("successful") ? "text-green-400" : "text-red-400"
              }`}
            >
              {msg}
            </p>
          )}

          <div className="mt-6 text-center text-sm">
            <p>
              Don't have an account?
              <Link
                to="/register"
                className="ml-2 text-yellow-400 hover:text-yellow-300"
              >
                Register Here
              </Link>
            </p>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Login;