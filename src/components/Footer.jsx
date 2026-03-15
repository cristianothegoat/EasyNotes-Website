import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 py-12 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">EasyNotes</h4>
          <p className="text-sm leading-relaxed text-gray-500">
            Streamlined access to academic resources and neatly organized study material for every student, anytime.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/subjects" className="hover:text-white transition">Subjects</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Download Notes</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Our Team</a></li>
            <li><a href="#" className="hover:text-white transition">Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
          <div className="flex space-x-5 mt-3">
            <a href="#" className="hover:scale-110 hover:text-white transition-all">🌐</a>
            <a href="#" className="hover:scale-110 hover:text-white transition-all">💬</a>
            <a href="#" className="hover:scale-110 hover:text-white transition-all">📧</a>
            <a href="#" className="hover:scale-110 hover:text-white transition-all">📘</a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-600 text-sm border-t border-gray-800 pt-6">
        <p>© {new Date().getFullYear()} EasyNotes | Knowledge Made Simplified 🎓</p>
      </div>
    </footer>
  );
};

