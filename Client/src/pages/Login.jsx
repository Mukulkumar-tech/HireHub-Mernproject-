import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import {toast} from 'react-hot-toast'

const Login = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
   try {
     const res= await axios.post("http://localhost:3000/api/user/login", data)
    if(res.data.success){
      toast.success(res.data.message);
      navigate("/home");
    }
   } catch (error) {
     toast.error(error.response.data.message);
   }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 flex justify-center items-center px-5">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 text-white">
        <h2 className="text-4xl font-bold text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Login to continue
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email required",
              })}
              className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20"
            />

            {errors.email && (
              <p className="text-red-400 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type={
                showPassword ? "text" : "password"
              }
              placeholder="Password"
              {...register("password", {
                required: "Password required",
              })}
              className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-5 top-5"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold">
            Login
          </button>

          <p className="text-center text-gray-300">
            Don’t have an account?{" "}
            <Link
              to="/"
              className="text-cyan-400"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;