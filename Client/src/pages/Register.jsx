import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaBriefcase } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import OTPModal from "../components/OTPModal";
import {toast} from 'react-hot-toast'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("employee");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  try {
    const payload = { ...data, role };
 
    const response = await toast.promise(axios.post(
      "http://localhost:3000/api/user/register",
      payload
    ), {
      loading: "Sending OTP...",
    });
    localStorage.setItem("email", payload.email);
    toast.success(response.data.message);
    if(response.data.success){
      navigate("/otp");
    }
  } catch (error) {
    return toast.error(error.response.data.message)
  }
  
};
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-cyan-950 text-white flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-md bg-white/[0.07] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-7"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome to <span className="text-cyan-400">HireHub</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1.5">
            Build your career or hire top talent
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* FULL NAME */}
          <div>
            <label className="block mb-1.5 text-[11px] text-gray-400 uppercase tracking-widest">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              {...register("username", { required: "Name is required" })}
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.07] border border-white/15 focus:outline-none focus:border-cyan-400 focus:bg-cyan-400/5 text-sm placeholder-white/25 transition-colors duration-200"
            />
            {errors.username && (
              <p className="text-red-400 mt-1 text-xs">{errors.username.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-1.5 text-[11px] text-gray-400 uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              placeholder="jane@example.com"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.07] border border-white/15 focus:outline-none focus:border-cyan-400 focus:bg-cyan-400/5 text-sm placeholder-white/25 transition-colors duration-200"
            />
            {errors.email && (
              <p className="text-red-400 mt-1 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <label className="block mb-1.5 text-[11px] text-gray-400 uppercase tracking-widest">
              Phone
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full px-4 py-2.5 rounded-xl bg-white/[0.07] border border-white/15 focus:outline-none focus:border-cyan-400 focus:bg-cyan-400/5 text-sm placeholder-white/25 transition-colors duration-200"
            />
            {errors.phone && (
              <p className="text-red-400 mt-1 text-xs">{errors.phone.message}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-1.5 text-[11px] text-gray-400 uppercase tracking-widest">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Min. 6 characters"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-2.5 pr-10 rounded-xl bg-white/[0.07] border border-white/15 focus:outline-none focus:border-cyan-400 focus:bg-cyan-400/5 text-sm placeholder-white/25 transition-colors duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-3.5 text-white/30 hover:text-white/70 transition-colors"
              >
                {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 mt-1 text-xs">{errors.password.message}</p>
            )}
          </div>

          {/* ROLE */}
          <div>
            <label className="block mb-2 text-[11px] text-gray-400 uppercase tracking-widest">
              I am a…
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("employee")}
                className={`flex flex-col items-center gap-1.5 py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                  role === "employee"
                    ? "bg-cyan-500/15 border-cyan-400 text-cyan-400"
                    : "bg-white/5 border-white/10 text-gray-400 hover:border-white/25 hover:text-white"
                }`}
              >
                <HiUserGroup className="text-xl" />
                <span>Employee</span>
              </button>

              <button
                type="button"
                onClick={() => setRole("employer")}
                className={`flex flex-col items-center gap-1.5 py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                  role === "employer"
                    ? "bg-cyan-500/15 border-cyan-400 text-cyan-400"
                    : "bg-white/5 border-white/10 text-gray-400 hover:border-white/25 hover:text-white"
                }`}
              >
                <FaBriefcase className="text-xl" />
                <span>Employer</span>
              </button>
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full mt-1 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold py-2.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99]"
          >
            Send OTP →
          </button>

          <p className="text-center text-gray-400 text-sm pt-1">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
              Login
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;