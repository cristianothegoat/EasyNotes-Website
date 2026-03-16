import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLocation } from "react-router-dom";

const ALL_SUBJECTS_UNITS = {
  "Operating Systems": [
    { 
      name: "Unit 1: Introduction", 
      description: "Overview of OS structure, types, and services. Kernel concepts.",
      file: "https://drive.google.com/file/d/12A_Y0eVGGR5w0bCSRnj5umFAgrwoOXBQ/view?usp=drive_link",
      icon: "🚀", 
      gradient: "from-blue-900/50 to-gray-900"
    },
    { 
      name: "Unit 2: Process Management", 
      description: "Processes, threads, CPU scheduling, and inter-process communication.",
      file: "https://drive.google.com/file/d/1GYlUjn4ReUazg76y2Dc_MUageAJD0-O2/view?usp=drive_link",
      icon: "⚙️", 
      gradient: "from-red-900/50 to-gray-900"
    },
    { 
      name: "Unit 3: Process Synchronization", 
      description: "Critical section problem, semaphores, and classic synchronization problems.",
      file: "https://drive.google.com/file/d/14QKR-0euPJRTD_tuwwGcKb6eDnl5CHfO/view?usp=drive_link",
      icon: "🤝", 
      gradient: "from-green-900/50 to-gray-900"
    },
    { 
      name: "Unit 4: Deadlocks", 
      description: "Deadlock characterization, prevention, avoidance, and recovery.",
      file: "https://drive.google.com/file/d/1ub40BcHshAlV0ZiUHMguRH776jHo3ode/view?usp=drive_link",
      icon: "🚧", 
      gradient: "from-yellow-900/50 to-gray-900"
    },
    { 
      name: "Unit 5: Memory Management", 
      description: "Swapping, paging, segmentation, and virtual memory concepts.",
      file: "https://drive.google.com/file/d/1h1SwW-HM4t4SgRM2VAM5C52GBvWE1iwN/view?usp=drive_link",
      icon: "🧠", 
      gradient: "from-purple-900/50 to-gray-900"
    },
    { 
      name: "Unit 6: File Systems", 
      description: "File concept, access methods, directory structure, and disk management.",
      file: "https://drive.google.com/file/d/108Egkpz8JUmlD73GXqwX4Nhw46vzB6Xw/view?usp=drive_link",
      icon: "🗄️", 
      gradient: "from-cyan-900/50 to-gray-900"
    },
  ],
  "Computer Networks": [
    {
    name: "Unit 1: Basics of Computer Network",
    description: "Introduction to networking: definitions, goals, evolution, network types, applications, protocols, and layered architecture (OSI & TCP/IP).",
    file: "https://drive.google.com/file/d/1i16ykKuThStDspu3GrVtdKOepQ3B9U9P/view?usp=drive_link",
    icon: "🌐",
    gradient: "from-blue-900/50 to-gray-900"
    },
    {
    name: "Unit 2: Transmission Media and Switching",
    description: "Overview of transmission media: twisted pair, coaxial, fiber optics, wireless. Basics of circuit, packet, and message switching techniques.",
    file: "https://drive.google.com/file/d/1uY5UkdeGEp50QJymYU9N54DXTfkgIrhR/view?usp=sharing",
    icon: "🔌",
    gradient: "from-yellow-900/50 to-gray-900"
    },
    {
    name: "Unit 3: Network Topologies and Devices",
    description: "Study of network topologies (star, bus, ring, mesh, hybrid) and network devices such as hubs, switches, routers, bridges, and gateways.",
    file: "https://drive.google.com/file/d/1cSlz6fQ4Jq09icyLElSfo2jtfxLlOJbE/view?usp=drive_link",
    icon: "🖧",
    gradient: "from-green-900/50 to-gray-900"
    },
    {
    name: "Unit 4: Network Reference Models",
    description: "Detailed coverage of OSI and TCP/IP models: layers, functionality, encapsulation, addressing, and comparison between both models.",
    file: "https://drive.google.com/file/d/1b2d0qqLYhPeIwqJ6XxBDRu_sDnDfsxae/view?usp=drive_link",
    icon: "📑",
    gradient: "from-red-900/50 to-gray-900"
    },
    {
    name: "Unit 5: TCP/IP Protocols",
    description: "In-depth study of TCP/IP protocol stack, including IP addressing, subnetting, ARP, ICMP, TCP, UDP, routing protocols, and NAT.",
    file: "https://drive.google.com/file/d/1LRmokVHHQw4x9ppdkSWcrWTIwGNpGuN1/view?usp=drive_link",
    icon: "📶",
    gradient: "from-purple-900/50 to-gray-900"
    },
    {
    name: "Unit 6: Wired and Wireless LAN",
    description: "LAN concepts, Ethernet (IEEE 802.3), Wireless LAN technologies (Wi-Fi, Bluetooth), standards, architectures, and security basics.",
    file: "https://drive.google.com/file/d/165z7Ks2RRdNdzyDPG5ClJCEZ6gem58fh/view?usp=drive_link",
    icon: "📡",
    gradient: "from-cyan-900/50 to-gray-900"
    }
  ],
    "Software Engineering": [
    { 
        name: "Unit 1: Overview", 
        description: "Introduction to software engineering principles, history, and importance of software development.",
        file: "https://drive.google.com/file/d/1UrHaomK-707Vh6qZcWxUONmJYr_D9GaN/view?usp=drive_link",
        icon: "📘", 
        gradient: "from-blue-700/50 to-gray-900"
    },
    { 
        name: "Unit 2: Process Models", 
        description: "Different software process models: Waterfall, Prototype, Spiral, V-model, and their suitability.",
        file: "https://drive.google.com/file/d/1rRLjJE0wbgiOvRRgU8lrGZ_J9E0yMnJh/view?usp=drive_link",
        icon: "🔄", 
        gradient: "from-red-700/50 to-gray-900"
    },
    { 
        name: "Unit 3: Agile Methodology", 
        description: "Principles of agile development, Scrum framework, Kanban, and benefits over traditional methods.",
        file: "https://drive.google.com/file/d/1aPPkIsyTOXhmpvsAHdKfUNsfjly8kBvj/view?usp=drive_link",
        icon: "⚡", 
        gradient: "from-green-700/50 to-gray-900"
    },
    { 
        name: "Unit 4: Requirements of SE", 
        description: "Types of software requirements, requirements elicitation, analysis, specification, and validation.",
        file: "https://drive.google.com/file/d/1Fw_pt1rTCp_NDRoIgBIUO8huxiAcwBrl/view?usp=drive_link",
        icon: "📋", 
        gradient: "from-yellow-700/50 to-gray-900"
    },
    { 
        name: "Unit 5: Software Modelling and Design", 
        description: "UML diagrams, design patterns, architectural styles, and software design principles.",
        file: "https://drive.google.com/file/d/1QJxIwE5FFejiuZ3TZeTC59URwAn6Ty5w/view?usp=drive_link",
        icon: "🛠️", 
        gradient: "from-purple-700/50 to-gray-900"
    },
    { 
        name: "Unit 6: Software Process Management", 
        description: "Project planning, estimation, scheduling, risk management, and quality assurance.",
        file: "https://drive.google.com/file/d/1-XIRQPgAV0vjkwWn5t8ZiGo-CnQgY8Nr/view?usp=drive_link",
        icon: "📈", 
        gradient: "from-cyan-700/50 to-gray-900"
    }
    ],
        "Python Programming": [
    { 
        name: "Unit 1: Introduction", 
        description: "Basics of Python programming, syntax, variables, data types, and simple input/output.",
        file: "https://drive.google.com/file/d/1Zn400lgWoHwWAU4m56ahwGdDN6zHxg46/view?usp=drive_link",
        icon: "🐍", 
        gradient: "from-yellow-700/50 to-gray-900"
    },
    { 
        name: "Unit 2: Decision Making & Functions", 
        description: "Control flow statements (if, else, elif), loops, and function definitions.",
        file: "https://drive.google.com/file/d/1ddWy6cSqtJh1AVIRM7UDH6v5DyVplqWq/view?usp=drive_link",
        icon: "🔀", 
        gradient: "from-pink-700/50 to-gray-900"
    },
    { 
        name: "Unit 3: Object-Oriented Programming in Python", 
        description: "Concepts of classes, objects, inheritance, polymorphism, and encapsulation.",
        file: "https://drive.google.com/file/d/1byoGrhT6WFAvgRNCHiAsI2UQBzIKKWyr/view?usp=drive_link",
        icon: "🏷️", 
        gradient: "from-green-700/50 to-gray-900"
    },
    { 
        name: "Unit 4: File Handling", 
        description: "Reading, writing files, file modes, and handling exceptions.",
        file: "https://drive.google.com/file/d/1R4vpfNfw_DZvyPaQ2SyUBrHYH72guRwg/view?usp=drive_link",
        icon: "📂", 
        gradient: "from-blue-700/50 to-gray-900"
    },
    { 
        name: "Unit 5: Regular Expressions", 
        description: "Pattern matching, searching, splitting, and substitution using regex.",
        file: "https://drive.google.com/file/d/1gN6PF7viI0VlSBjFzmKguR5ZCOqgBabW/view?usp=drive_link",
        icon: "✨", 
        gradient: "from-purple-700/50 to-gray-900"
    },
    { 
        name: "Unit 6: GUI Programming and Databases", 
        description: "Basics of Tkinter for GUI, and working with databases using SQLite.",
        file: "https://drive.google.com/file/d/10mIjZ-3WMCw_fKHy6psbhoOiTufnWE9y/view?usp=drive_link",
        icon: "🖥️", 
        gradient: "from-cyan-700/50 to-gray-900"
    }
    ],
        "Microcontroller Embedded System": [
    { 
        name: "Unit 1: Basics of 8051 Microcontroller", 
        description: "Introduction to 8051 microcontroller architecture, features, and applications.",
        file: "https://drive.google.com/file/d/1YZ-t9_l1--T1xthmupyqoFwjzooSsCvF/view?usp=drive_link",
        icon: "🧮", 
        gradient: "from-blue-800/50 to-gray-900"
    },
    { 
        name: "Unit 2: Instruction Set and Programming of 8051", 
        description: "Detailed study of 8051 instruction set and assembly programming basics.",
        file: "https://drive.google.com/file/d/11kvdR3OPUqGzq8Z7UMPVIcUzyBw0umSz/view?usp=drive_link",
        icon: "💻", 
        gradient: "from-red-800/50 to-gray-900"
    },
    { 
        name: "Unit 3: Timer, Interrupt, Serial & Parallel Communication", 
        description: "Understanding timers, interrupts, UART serial communication, and parallel data transfer.",
        file: "https://drive.google.com/file/d/1WWsvNYhJ0Gm94Gc8spNqU927aibSGu4o/view?usp=drive_link",
        icon: "⏲️", 
        gradient: "from-green-800/50 to-gray-900"
    },
    { 
        name: "Unit 4: Memory & I/O Interfacing", 
        description: "Techniques for memory interfacing, input/output interfacing, and peripheral connections.",
        file: "https://drive.google.com/file/d/1kv6Tishgt1KcRutFEMK_7qCVG43MEyrV/view?usp=drive_link",
        icon: "🔌", 
        gradient: "from-yellow-800/50 to-gray-900"
    },
    { 
        name: "Unit 5: Introduction to Embedded System", 
        description: "Basics of embedded systems, their architecture, and real-time applications.",
        file: "https://drive.google.com/file/d/1IM_OVw1RhlyjPdXKWxiH4StLcgcrR80x/view?usp=drive_link",
        icon: "📟", 
        gradient: "from-purple-800/50 to-gray-900"
    },
    { 
        name: "Unit 6: Arduino Open Source Embedded Development Board", 
        description: "Overview of Arduino boards, programming, and embedded project development.",
        file: "https://drive.google.com/file/d/11mhwU7oOw35r13u89xrxHu_IZRTUkCpa/view?usp=drive_link",
        icon: "🔧", 
        gradient: "from-cyan-800/50 to-gray-900"
    }
    ],
      "Database Systems": [
      { 
          "name": "Unit 1: Introduction to Database Systems", 
          "description": "Fundamentals of DBMS, database environment, and data abstraction concepts.",
          "file": "https://drive.google.com/file/d/1uyPSZ0OvrBGJr6cBCd415M8U96cwR2sz/view?usp=drive_link",
          "icon": "📘", 
          "gradient": "from-blue-800/50 to-gray-900"
      },
      { 
          "name": "Unit 2: Relational Data Model", 
          "description": "Understanding relational algebra, keys, constraints, and schema representation.",
          "file": "https://drive.google.com/file/d/1QXwzPanMT4uo7uoxw_qnnQVnAisEndYx/view?usp=drive_link",
          "icon": "🧩", 
          "gradient": "from-red-800/50 to-gray-900"
      },
      { 
          "name": "Unit 3: Entity-Relationship (ER) Model", 
          "description": "Study of ER diagrams, relationships, and conversion to relational models.",
          "file": "https://drive.google.com/file/d/1wiXmtsnmzBKDWuP4f-BCgOAk3rlvXtOo/view?usp=drive_link",
          "icon": "📊", 
          "gradient": "from-green-800/50 to-gray-900"
      },
      { 
          "name": "Unit 4: Transaction Processing", 
          "description": "Concepts of ACID properties, concurrency control, and recovery techniques.",
          "file": "https://drive.google.com/file/d/1_ohcbJLBWLYh3SJFsSSg0_lxSniP0-rP/view?usp=drive_link",
          "icon": "🔄", 
          "gradient": "from-yellow-800/50 to-gray-900"
      },
      { 
          "name": "Unit 5: PL/SQL Programming", 
          "description": "Procedural extensions for SQL including cursors, triggers, and stored procedures.",
          "file": "https://drive.google.com/file/d/1iTTLthaxWVNHLSHcXtyA-4axoxNTZOyH/view?usp=drive_link",
          "icon": "💻", 
          "gradient": "from-purple-800/50 to-gray-900"
      }
  ]
};

const UnitNotes = () => {
  const location = useLocation();
  const subject = location.state?.subject || "Operating Systems";
  const UNITS_DATA = ALL_SUBJECTS_UNITS[subject] || [];

  const token = localStorage.getItem("token");

  const handleClick = (e, unitName) => {
    if (!token) {
      e.preventDefault();
      console.warn("Access denied: Please register or login to view and download notes.");
      alert("You need to register or login first to access notes.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-gray-300">
      <Navbar />
      <main className="flex-grow px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-white mb-2 tracking-wide">{subject} Notes 💻</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Select a unit to view and download the comprehensive study notes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {UNITS_DATA.map((unit, idx) => (
            <a
              key={idx}
              href={unit.file}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleClick(e, unit.name)}
              className={`bg-gray-800 rounded-xl p-8 shadow-xl transition transform duration-300 border-t-4 border-b-4 border-transparent hover:border-blue-500 hover:shadow-2xl hover:scale-[1.03] bg-gradient-to-br ${unit.gradient} text-white`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl">{unit.icon}</span>
                <h3 className="text-2xl font-bold tracking-tight">{unit.name}</h3>
              </div>
              <p className="text-gray-300 mt-2 mb-4">{unit.description}</p>
              <span className="mt-4 inline-block text-blue-300 font-semibold hover:text-blue-200 transition">
                Download PDF &rarr;
              </span>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UnitNotes;
