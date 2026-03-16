import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

const API_URL = "https://easynotes-backend-btcw.onrender.com";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await fetch(`${API_URL}/api/auth/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // if token expired
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }

        const contentType = res.headers.get("content-type");

        // check if response is JSON
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Server returned invalid response");
        }

        const data = await res.json();
        setUserInfo(data);

      } catch (err) {
        console.error("Profile error:", err);
        setError("Could not load profile. Please login again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const ProfileItem = ({ label, value, icon }) => (
    <div className="flex items-center p-4 bg-gray-700 rounded-lg border-l-4 border-blue-500">
      <span className="text-xl mr-3">{icon}</span>
      <div>
        <span className="text-gray-400 text-sm block">{label}</span>
        <span className="text-white text-lg font-semibold">
          {value || "N/A"}
        </span>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="bg-gray-900 min-h-screen flex flex-col text-gray-300">
        <Navbar />
        <main className="flex-grow flex justify-center items-center">
          <p className="text-white">Loading profile...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!userInfo) {
    return (
      <div className="bg-gray-900 min-h-screen flex flex-col text-gray-300">
        <Navbar />
        <main className="flex-grow flex justify-center items-center">
          <p className="text-red-400">
            {error || "You must login to view this page"}
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-gray-300">
      <Navbar />

      <main className="flex-grow max-w-3xl mx-auto p-8">
        <h1 className="text-5xl font-bold text-white mb-3">
          Hello, {userInfo.name}! 🌟
        </h1>

        <p className="text-gray-400 mb-10 text-lg">
          Your account details are listed below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProfileItem label="Username" value={userInfo.username} icon="🆔" />
          <ProfileItem label="Full Name" value={userInfo.name} icon="🧑‍💻" />
          <ProfileItem label="Email" value={userInfo.email} icon="✉️" />
          <ProfileItem label="Age" value={userInfo.age} icon="🎂" />
          <ProfileItem label="Phone" value={userInfo.phone} icon="📞" />
          <ProfileItem label="Address" value={userInfo.address} icon="📍" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;