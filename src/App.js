import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Subjects from "./pages/Subjects";
import SupportAndShare from "./pages/SupportAndShare";
import UnitNotes from "./pages/UnitNotes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/support" element={<SupportAndShare />} />
        <Route path="/units" element={<UnitNotes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
