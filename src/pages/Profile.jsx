import React, { useEffect, useState } from "react";
// Assuming these paths are correct relative to your project structure
import { Navbar } from "../components/Navbar"; 
import { Footer } from "../components/Footer"; 
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // userInfo state will hold all fields from your registration (username, name, email, etc.)
  const [userInfo, setUserInfo] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added state for specific error messages
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        // Redirect to login if no token is found
        navigate("/login");
        return;
      }

      try {
        const res = await fetch("/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // 1. Handle Invalid/Expired Tokens (401/403)
        if (res.status === 401 || res.status === 403) {
            localStorage.removeItem("token");
            navigate("/login");
            return;
        }

        // 2. Handle other API errors (e.g., 404, 500)
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Failed to fetch user data.");
        }

        // 3. Success: Set user data
        const data = await res.json();
        setUserInfo(data);

      } catch (e) {
        console.error("Error fetching user data:", e);
        setError(e.message || "Could not load profile. Please try again.");
        setUserInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  // Helper component for consistent styling of each detail item
  const ProfileItem = ({ label, value, icon }) => (
    <div className="flex items-center p-4 bg-gray-700 rounded-lg border-l-4 border-blue-500 hover:bg-gray-600 transition duration-200">
      <span className="text-xl mr-3">{icon}</span>
      <div>
        <span className="font-medium text-gray-400 block text-sm">{label}</span>
        {/* Ensure the value handles null or undefined safely */}
        <span className="text-white font-semibold text-lg">{value || 'N/A'}</span>
      </div>
    </div>
  );

  // --- Loading State ---
  if (loading) {
    return (
      <div className="bg-gray-900 min-h-screen text-gray-300 flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent border-solid rounded-full animate-spin"></div>
            <p className="text-white text-lg">Loading profile data...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // --- Error State (e.g., failed fetch, no user) ---
  if (!userInfo) {
    return (
      <div className="bg-gray-900 min-h-screen text-gray-300 flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-red-400 text-lg">
            {error || "You must be logged in to view this page."}
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  // --- Success State: Display Profile ---
  return (
    <div className="bg-gray-900 min-h-screen text-gray-300 flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-3xl w-full mx-auto p-6 md:p-8">
        <h1 className="text-5xl font-extrabold mb-2 mt-4 text-white tracking-tight">
          Hello, {userInfo.name}! 🌟
        </h1>
        <p className="text-gray-400 mb-10 text-xl">Your current account details are listed below.</p>
        
        {/* Profile Details Grid: Mapping the backend data to the frontend display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProfileItem label="Username" value={userInfo.username} icon="🆔" />
          <ProfileItem label="Full Name" value={userInfo.name} icon="🧑‍💻" />
          <ProfileItem label="Email Address" value={userInfo.email} icon="✉️" />
          <ProfileItem label="Age" value={userInfo.age} icon="🎂" />
          <ProfileItem label="Phone Number" value={userInfo.phone} icon="📞" />
          <ProfileItem label="Registered Address" value={userInfo.address} icon="📍" />
          {/* Note: The MongoDB '_id' field is also returned by default, but we don't display it here. */}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;