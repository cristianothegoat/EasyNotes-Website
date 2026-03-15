import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { Navbar } from "../components/Navbar"; // Assuming path is correct
import { Footer } from "../components/Footer"; // Assuming path is correct

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    age: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("Registering..."); // Provide immediate feedback

    try {
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                ...formData, 
                age: Number(formData.age)
            }),
        });

        const data = await res.json();
        if (res.ok) {
            setMsg("Registration successful! You can now log in.");
            // Optional: Clear form data after successful registration
            setFormData({
                username: "",
                password: "",
                name: "",
                email: "",
                phone: "",
                address: "",
                age: "",
            });
        } else {
            // Show the server message or a generic failure
            setMsg(data.message || "Registration failed.");
        }
    } catch (error) {
        setMsg("Network error. Could not connect to the server.");
    }
  };

  const inputFields = [
    {name:"username", type:"text", placeholder:"Username", required: true},
    {name:"password", type:"password", placeholder:"Password", required: true},
    {name:"name", type:"text", placeholder:"Full Name", required: true},
    {name:"email", type:"email", placeholder:"Email", required: true},
    {name:"phone", type:"text", placeholder:"Phone Number (Optional)", required: false},
    {name:"address", type:"text", placeholder:"Address (Optional)", required: false},
    {name:"age", type:"number", placeholder:"Age (Optional)", required: false}
  ];

  return (
    // Main container matching the Home component's background
    <div className="bg-gray-900 min-h-screen flex flex-col text-gray-300">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <form 
          onSubmit={handleSubmit} 
          className="bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl max-w-md w-full border border-gray-700 transition-all duration-300 transform hover:shadow-green-500/50"
        >
          <h2 className="text-4xl font-extrabold text-white mb-8 text-center tracking-tight">
            Create Account 📝
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {inputFields.map((field) => (
                <input
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder + (field.required ? ' *' : '')}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:bg-gray-600 border border-gray-700 transition"
                />
            ))}
          </div>

          <button 
            type="submit"
            className="w-full bg-green-700 hover:bg-green-600 text-white text-lg font-bold p-4 rounded-lg shadow-md transition-all transform hover:scale-[1.01] mt-6"
          >
            Register Now
          </button>
          
          {msg && <p className={`mt-5 text-center font-medium ${msg.includes("successful") ? 'text-green-400' : 'text-red-400'}`}>{msg}</p>}

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-400">
              Already have an account? 
              <Link to="/login" className="ml-2 text-blue-400 hover:text-blue-300 font-semibold transition">
                Login Here
              </Link>
            </p>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Register;