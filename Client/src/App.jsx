import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import OTPModal from "./components/OTPModal";
import {Toaster}from "react-hot-toast"

const App = () => {
  return (
    <div>
      <Toaster position="top-right" duration={3000} />
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/otp" element={<OTPModal />} />
      </Routes>
    </div>
  );
};

export default App;