import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'
import axios from 'axios'
const OTPModal = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate()
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  const handleVerify =async()=>{
    try {
      const otpvalue = otp.join("");
    if(!otpvalue || otpvalue.length !== 6){
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    const res= await axios.post("http://localhost:3000/api/user/verify-otp", {
      otp: otpvalue,
      email: localStorage.getItem("email"),
    });
    if(res.data.success){
      toast.success(res.data.message);
      localStorage.removeItem("email");
      navigate("/home");
    }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }



 

  return (
    <div>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-slate-900 border border-slate-700 rounded-3xl p-8 w-full max-w-md text-white relative"
        >
          <button
            onClick={() => navigate("/")}
            className="absolute top-5 right-5 text-gray-400 hover:text-white"
          >
            <FaTimes />
          </button>

          <h2 className="text-2xl font-bold text-center">
            Verify OTP
          </h2>

          <p className="text-gray-400 text-center mt-2">
            Enter the 6-digit OTP sent to your email
          </p>

          <div className="flex justify-center gap-3 mt-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) =>
                  (inputRefs.current[index] = el)
                }
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                onKeyDown={(e) =>
                  handleKeyDown(e, index)
                }
                className="w-12 h-12 text-center text-xl rounded-xl bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:outline-none"
              />
            ))}
          </div>

          <button
            onClick={handleVerify}
            className="w-full mt-8 bg-linear-to-r from-cyan-500 to-blue-600 py-3 rounded-xl font-semibold"
          >
            Verify OTP
          </button>

          <button
            className="w-full mt-3 text-cyan-400"
            onClick={() => console.log("Resend OTP")}
          >
            Resend OTP
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
 </div> );
};

export default OTPModal;