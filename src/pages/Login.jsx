import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("Attempting login...");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        setMsg("Login successful! Redirecting to home...");
        if (onLoginSuccess) onLoginSuccess();
        setTimeout(() => navigate("/"), 700); // redirect after message
      } else {
        setMsg(data.message || "Login failed. Check your credentials."); 
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
          className="bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl max-w-sm w-full border border-gray-700 transition-all duration-300 transform hover:shadow-blue-500/50"
        >
          <h2 className="text-4xl font-extrabold text-white mb-8 text-center tracking-tight">
            Sign In 🚀
          </h2>

          <input
            className="w-full p-4 mb-5 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:bg-gray-600 border border-gray-700 transition"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="w-full p-4 mb-6 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:bg-gray-600 border border-gray-700 transition"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-600 text-white text-lg font-bold p-4 rounded-lg shadow-md transition-all transform hover:scale-[1.01]"
          >
            Login
          </button>
          {msg && (
            <p className={`mt-5 text-center font-medium ${msg.includes("successful") ? 'text-green-400' : 'text-red-400'}`}>{msg}</p>
          )}
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-400">
              Don't have an account? 
              <Link to="/register" className="ml-2 text-yellow-400 hover:text-yellow-300 font-semibold transition">
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
