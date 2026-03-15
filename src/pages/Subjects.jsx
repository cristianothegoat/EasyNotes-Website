import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Subject Data with icons and subtle background gradients
const SUBJECT_DATA = [
  { name: "Computer Networks", icon: "🔗", gradient: "from-red-900/50 to-gray-900" },
  { name: "Database Systems", icon: "🗄️", gradient: "from-yellow-900/50 to-gray-900" },
  { name: "Operating Systems", icon: "💻", gradient: "from-green-900/50 to-gray-900" },
  { name: "Software Engineering", icon: "🛠️", gradient: "from-blue-900/50 to-gray-900" },
  { name: "Microcontroller Embedded System", icon: "🔌", gradient: "from-purple-900/50 to-gray-900" },
  { name: "Python Programming", icon: "🐍", gradient: "from-cyan-900/50 to-gray-900" },
];

const Subjects = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-gray-300">
      <Navbar />

      <main className="flex-grow px-6 py-16">
        {/* Header Section */}
        <h2 className="text-5xl font-extrabold text-white mb-4 text-center tracking-wide">
          Explore All Courses 🌐
        </h2>
        <p className="text-xl text-gray-400 mb-16 text-center max-w-3xl mx-auto">
          Select a subject to dive into organized notes, past papers, and comprehensive study resources.
        </p>

        {/* Subjects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUBJECT_DATA.map((subject, idx) => (
            <Link
              to="/units"
              state={{ subject: subject.name }}
              key={idx}
              className={`bg-gray-800 rounded-xl p-8 shadow-xl transition transform duration-300 border-t-4 border-b-4 border-transparent hover:border-blue-500 hover:shadow-2xl hover:scale-[1.03]
                          bg-gradient-to-br ${subject.gradient} text-white`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{subject.icon}</span>
                <h3 className="text-2xl font-bold tracking-tight">{subject.name}</h3>
              </div>
              <p className="text-gray-300 mt-2">
                Comprehensive notes and resources available now.
              </p>
              <span className="mt-4 inline-block text-blue-300 font-semibold hover:text-blue-200 transition">
                View Units &rarr;
              </span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Subjects;
