import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-black bg-opacity-90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-white tracking-wide cursor-default select-none">
          EasyNotes
        </h1>
        <nav>
          <ul className="flex space-x-8 text-gray-400 hover:text-white transition duration-300">
            <li><Link className="hover:text-white hover:scale-110 transition-transform" to="/">Home</Link></li>
            <li><Link className="hover:text-white hover:scale-110 transition-transform" to="/about">About</Link></li>
            <li><Link className="hover:text-white hover:scale-110 transition-transform" to="/subjects">Subjects</Link></li>
            <li><Link className="hover:text-white hover:scale-110 transition-transform" to="/support">Support & Share</Link></li>
            
            {!token ? (
              <>
                <li><Link className="hover:text-white hover:scale-110 transition-transform" to="/login">Login</Link></li>
                <li><Link className="hover:text-white hover:scale-110 transition-transform" to="/register">Register</Link></li>
              </>
            ) : (
              <>
                <li><Link className="hover:text-white hover:scale-110 transition-transform" to="/profile">Profile</Link></li>
                <li>
                  <span
                    className="hover:text-white hover:scale-110 transition-transform cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </span>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
