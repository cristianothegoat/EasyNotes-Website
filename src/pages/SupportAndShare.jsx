import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Data for the Top Sharer Cards
const TOP_SHARERS = [
    { 
        name: "Shreya Yeole",
        contribution: "Shared Complete Notes",
        subject: "Basic C# Programming",
        emoji: "🔗",
        details: "Well-organized introductory notes covering C# syntax, data types, control structures, OOP concepts, and simple code examples to build programming fundamentals.",
        pdfLink: "/pdfs/C-Hash-Notes.pdf" 
    },
    {
        name: "Diksha Shelar",
        contribution: "Important Concept Notes",
        subject: "Exception Handling & Multithreading in Java",
        emoji: "💻",
        details: "Comprehensive notes covering exception types, try-catch-finally mechanisms, thread life cycle, synchronization, and inter-thread communication in Java.",
        pdfLink: "/pdfs/Java-Unit-4.pdf" 
    },
    {
        name: "Krish Shinde",
        contribution : "Shared Concept Notes",
        subject : "Advanced Java - Design Patterns",
        emoji : "🧠",
        details : "Comprehensive study material covering key Java design patterns such as Singleton, Factory, Observer, and Strategy, with real-world implementation examples.",
        pdfLink: "/pdfs/AJava Mind Luster- Design patterns.pdf" 
    },
];

const SharerCard = ({ name, contribution, subject, emoji, details, pdfLink }) => (
    // Card background is now bg-gray-900, contrasting with the section's bg-gray-800
    <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700 transition-all duration-300 hover:bg-gray-950 hover:shadow-3xl hover:scale-[1.03]">
        <div className="flex items-center space-x-4 mb-4">
            <span className="text-4xl p-2 bg-blue-700/20 rounded-lg">{emoji}</span>
            <div>
                <h4 className="text-2xl font-bold text-white">{name}</h4>
                <p className="text-md text-blue-400 font-semibold">{contribution}</p>
            </div>
        </div>
        <p className="text-gray-400 text-base mt-3 mb-5 italic border-l-4 border-gray-700 pl-3">
            "{details}"
        </p>
        <div className="text-sm text-gray-500 mb-4">
            Subject: <span className="text-gray-300 font-medium">{subject}</span>
        </div>
        <a
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block text-center bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg text-base shadow-lg transition"
        >
            View Contributed Material
        </a>
    </div>
);


const SupportAndShare = () => {
    const SUBMISSION_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSe5y62aSz3J1xe62MPKDv616LBTce5aueNUvVP-NMMCiTb3eg/viewform?usp=dialog"; 

    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We'll get back to you soon.");
    };

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col text-gray-300">
            <Navbar />
            
            <main className="flex-grow px-0 py-16"> {/* Removed px-6 from main container */}
                
                {/* Main Heading & Subtitle - Placed outside the section containers */}
                <div className="max-w-6xl mx-auto px-6 mb-12">
                    <h2 className="text-5xl font-extrabold text-white mb-4 text-center tracking-wide">
                        Support & Share 🤝
                    </h2>
                    <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
                        Connect with us, report an issue, or contribute to the community!
                    </p>
                </div>


                {/* Section 1: Forms (Darker background section - bg-gray-900) */}
                <div className="bg-gray-900 py-10"> {/* Full width dark background */}
                    <div className="max-w-6xl mx-auto px-6"> {/* Content max-width and padding */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Contribution Section Card (Lighter card inside dark section) */}
                            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border-l-4 border-green-500">
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Share Your Notes 📤
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Have amazing, organized notes you want to share? We rely on community contributions to keep EasyNotes current.
                                </p>
                                <p className="text-sm text-yellow-400 mb-6">
                                    **Important:** File submissions are handled securely through an external service.
                                </p>
                                <a
                                    href={SUBMISSION_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-[1.02]"
                                >
                                    Submit Files Here
                                </a>
                            </div>
                            
                            {/* Contact Form Section Card (Lighter card inside dark section) */}
                            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border-l-4 border-blue-500">
                                <h3 className="text-3xl font-bold text-white mb-6">
                                    Send a Message 📧
                                </h3>
                                <form className="space-y-5" onSubmit={handleContactSubmit}>
                                    <div>
                                        <label className="block mb-2 font-semibold" htmlFor="name">Name</label>
                                        <input id="name" type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                                    </div>
                                    <div>
                                        <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
                                        <input id="email" type="email" placeholder="name@example.com" className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                                    </div>
                                    <div>
                                        <label className="block mb-2 font-semibold" htmlFor="message">Message</label>
                                        <textarea id="message" rows="4" placeholder="Report a broken link, ask a question, or give feedback." className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none" required />
                                    </div>
                                    <button type="submit" className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* --- Section 2: Top Sharers (Lighter background section - bg-gray-800) --- */}
                <section className="bg-gray-800 py-20 mt-16 border-t border-gray-700"> {/* Full width lighter background */}
                    <div className="max-w-6xl mx-auto px-6"> {/* Content max-width and padding */}
                        <h3 className="text-4xl font-extrabold text-white mb-4 text-center tracking-wide">
                            Top Community Sharers ✨
                        </h3>
                        <p className="text-lg text-gray-400 mb-12 text-center max-w-xl mx-auto">
                            Huge thanks to the students who make EasyNotes possible by sharing their best study materials.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {TOP_SHARERS.map((sharer, idx) => (
                                <SharerCard key={idx} {...sharer} />
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default SupportAndShare;