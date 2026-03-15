import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Data matching the styling and emojis used in the Subjects page
const FEATURED_SUBJECTS = [
  { name: "Computer Networks", icon: "🔗", gradient: "from-red-900/50 to-gray-900", description: "Protocols, layers, and network architecture." },
  { name: "Database Systems", icon: "🗄️", gradient: "from-yellow-900/50 to-gray-900", description: "SQL, normalization, and transaction management." },
  { name: "Operating Systems", icon: "💻", gradient: "from-green-900/50 to-gray-900", description: "Kernel, processes, and memory management." },
];

// Data for the new Events & Hackathons Section
const EVENTS = [
    { name: "TECHNOGRAD 3.0 -Ultimate AI/ML Showdown!", date: "Nov 1", tags: ["Hackathon", "AIML"], emoji: "🏆", color: "border-red-500", link:"https://unstop.com/p/technograd-30-djs-nsdc-1575400" },
    { name: "Learn Python for Data Science", date: "Nov 5", tags: ["Workshop", "AI/ML"], emoji: "🐍", color: "border-green-500", link:"https://www.mygreatlearning.com/academy/learn-for-free/courses/data-science-with-python" },
    { name: "Pixel Paranoia 2025- UI/UX Hackathon", date: "Nov 1", tags: ["Hackathon", "UI/UX"], emoji: "🎯", color: "border-yellow-500", link:"https://pixel-paranoia.djcsi.co.in" },
    { name: "Xtract 4.0: The Conjuring Edition", date: "Nov 7", tags: ["Challenges", "Treasure Hunt"], emoji: "🧩", color: "border-purple-500", link:"https://xtract.djss4ds.in/"},
    { name: "Aryavarta 4.0! Indian Dynasty Quiz", date: "Oct 28 & 29", tags: ["Quiz", "Debate"], emoji: "🎯", color: "border-cyan-500", link:"https://forms.gle/7RyPhJZzHsfESToP7" },
    { name: "Intro to Cloud Computing", date: "Oct 30", tags: ["Workshop", "Cloud"], emoji: "☁️", color: "border-blue-500", link:"https://www.udemy.com/course/introduction-to-cloud-computing/?srsltid=AfmBOooVdHygYjq_FYZE6ridIpAhn-AiGOahgk42ErpezlDeVr8l_Sw9" },
];

const EventsSection = () => {
    return (
        <section className="py-20 bg-gray-900 border-t border-gray-800">
            {/* ... section heading code ... */}

            {/* Horizontal Scrolling Container with Scroll Snap */}
            <div 
                className="flex overflow-x-auto whitespace-nowrap scroll-smooth snap-x mandatory pb-4 pl-6"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
            >
                {EVENTS.map((event, index) => (
                    // The main div is ONLY for styling and layout, NOT for navigation.
                    <div
                        key={index}
                        className={`inline-block w-80 mr-6 mb-4 bg-gray-800 p-6 rounded-xl shadow-2xl border-t-4 ${event.color} 
                                    transition-all duration-300 transform hover:scale-[1.05] flex-shrink-0 snap-start`}
                    >
                        <span className="text-4xl mb-4 block">{event.emoji}</span>
                        <h4 className="text-2xl font-bold text-white mb-1 whitespace-normal">{event.name}</h4>
                        <p className="text-sm text-gray-400 mb-4">🗓️ {event.date}</p>
                        
                        <div className="mt-3 space-x-2 whitespace-normal">
                            {event.tags.map((tag, i) => (
                                <span key={i} className="text-xs font-semibold px-2 py-1 rounded bg-blue-700/30 text-blue-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        {/* THE FIX: Anchor tag handles external linking directly. */}
                        <a 
                            href={event.link} // <--- Dynamic link is used here
                            target="_blank" // Opens in a new tab
                            rel="noopener noreferrer" 
                            className="mt-4 inline-block text-yellow-400 font-semibold hover:text-yellow-300 transition cursor-pointer"
                        >
                            Explore Details &rarr;
                        </a>
                    </div>
                ))}
                
                <div className="w-6 flex-shrink-0"></div> 
            </div>
        </section>
    );
};


const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-gray-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex-grow flex items-center justify-center px-6 py-20 bg-gray-900 overflow-hidden text-white text-center border-b border-gray-800">
        
        {/* Subtle Background Effect */}
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541701494587-c1027110e470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
        
        <div className="max-w-4xl z-10 animate-fadeIn py-10">
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            EasyNotes: Knowledge, Simplified 🎓
          </h2>
          <p className="text-xl md:text-2xl mb-12 leading-normal mx-auto text-gray-300 font-light max-w-2xl">
            Your centralized hub for high-quality department notes, perfectly organized and ready for instant download.
          </p>
          <Link
            to="/subjects"
            className="inline-block bg-blue-700 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-xl transition-all transform hover:scale-105"
          >
            Start Learning Now →
          </Link>
          <div className="mt-10 opacity-70 text-sm font-mono tracking-wide text-gray-500">
            <p>Made with ❤️ by Students for Students</p>
          </div>
        </div>
      </section>

      {/* Featured Subjects Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-extrabold text-white mb-4 text-center tracking-wide">
            Featured Subjects
          </h3>
          <p className="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Get started immediately with some of our most popular and essential courses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_SUBJECTS.map((subject, idx) => (
              <Link
                to="/subjects"
                key={idx}
                className={`bg-gray-700 rounded-xl p-8 shadow-xl transition transform duration-300 border-t-4 border-b-4 border-transparent hover:border-blue-500 hover:shadow-2xl hover:scale-[1.03] 
                            bg-gradient-to-br ${subject.gradient} text-white`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl">{subject.icon}</span> 
                  <h4 className="text-3xl font-bold tracking-tight">{subject.name}</h4>
                </div>
                <p className="text-gray-300 mt-2 mb-4">
                    {subject.description}
                </p>
                <span className="mt-4 inline-block text-blue-300 font-semibold hover:text-blue-200 transition">
                    View Resources &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* 🚀 New Section: Events and Hackathons (Horizontal Scroll Snap) */}
      <EventsSection />

      <Footer />
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
          /* Custom CSS for hiding the scrollbar while keeping scrolling enabled */
          .overflow-x-auto::-webkit-scrollbar {
              display: none;
          }
        `}
      </style>
    </div>
  );
};

export default Home;    