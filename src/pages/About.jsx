import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transition-all duration-300 hover:bg-gray-700 hover:scale-[1.02] border border-gray-700 hover:border-blue-500">
    <div className="text-blue-400 mb-4 text-3xl">{icon}</div> {/* Replaced Heroicon with text/emoji */}
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-gray-300">
      <Navbar />
      <main className="flex-grow pb-20">
        
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-6 border-b border-gray-800">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-6xl font-extrabold text-white mb-6 tracking-tight animate-fade-in-up">
                    Our Mission: Smarter Learning 💡
                </h1>
                <p className="text-xl leading-relaxed mb-8 text-gray-400">
                    EasyNotes is your academic accelerator, a collaborative hub built by students, for students, to **simplify access to essential study materials**.
                </p>
            </div>
        </section>

        {/* Core Values Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-extrabold text-white mb-12 text-center tracking-wide">
                Why EasyNotes?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard
                    icon="📂"
                    title="Organized"
                    description="Notes are meticulously categorized by subject and topic, ensuring you find what you need in seconds."
                />
                <FeatureCard
                    icon="✅"
                    title="Reliable"
                    description="Content is crowd-sourced and verified by peers, ensuring accuracy and relevance to your curriculum."
                />
                <FeatureCard
                    icon="⬇️"
                    title="Accessible"
                    description="Download materials directly and securely. Study offline, anytime, anywhere, on any device."
                />
                <FeatureCard
                    icon="🤝"
                    title="Community-Driven"
                    description="A platform where knowledge sharing is encouraged, fostering a collaborative learning environment."
                />
            </div>
        </section>

        {/* Vision Statement */}
        <section className="bg-gray-800 p-12 rounded-xl max-w-5xl mx-auto my-16 shadow-inner border border-blue-900/50">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-blue-400 mb-4">
                    The EasyNotes Vision
                </h2>
                <p className="text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
                    We envision a future where **no student is left behind** due to lack of resources. EasyNotes is more than a notes portal — it's a movement to make learning truly **collaborative and future-ready**.
                </p>
            </div>
        </section>

      </main>
      <Footer />
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default About;