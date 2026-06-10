import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaBriefcase } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import OTPModal from "../components/OTPModal";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("employee");
  const [openOTPModal, setOpenOTPModal] = useState(false);
  const navigate =useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      role,
    };

    console.log(payload);

    // TODO: API CALL
    // await axios.post("/api/send-otp", payload)

    setOpenOTPModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
      <div className="flex items-center justify-center px-5 py-10 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-2xl p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">
              Welcome to <span className="text-cyan-400">HireHub</span>
            </h1>

            <p className="text-gray-300 mt-3">
              Build your career or hire top talent
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* NAME */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter full name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:border-cyan-400"
              />

              {errors.name && (
                <p className="text-red-400 mt-1 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email required",
                })}
                className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:border-cyan-400"
              />

              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Phone
              </label>

              <input
                type="tel"
                placeholder="Enter phone number"
                {...register("phone", {
                  required: "Phone number required",
                })}
                className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:border-cyan-400"
              />

              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  {...register("password", {
                    required: "Password required",
                    minLength: {
                      value: 6,
                      message:
                        "Password must be minimum 6 characters",
                    },
                  })}
                  className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:border-cyan-400"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute top-5 right-5 text-gray-300"
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* ROLE */}
            <div>
              <label className="block mb-3 text-gray-300">
                Select Role
              </label>

              <div className="grid md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole("employee")}
                  className={`p-5 rounded-3xl border transition-all duration-300 ${
                    role === "employee"
                      ? "bg-cyan-500 border-cyan-500"
                      : "bg-white/10 border-white/10"
                  }`}
                >
                  <HiUserGroup className="text-3xl mx-auto mb-2" />
                  <p className="font-semibold">Employee</p>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("employer")}
                  className={`p-5 rounded-3xl border transition-all duration-300 ${
                    role === "employer"
                      ? "bg-cyan-500 border-cyan-500"
                      : "bg-white/10 border-white/10"
                  }`}
                >
                  <FaBriefcase className="text-3xl mx-auto mb-2" />
                  <p className="font-semibold">Employer</p>
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full mt-3 bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition"
            >
              Send OTP
            </button>

            <p className="text-center text-gray-300 pt-3">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-cyan-400 font-semibold"
              >
                Login
              </Link>
            </p>
          </form>
        </motion.div>
      </div>

      <OTPModal
        isOpen={openOTPModal}
        onClose={() => setOpenOTPModal(false)}
      />
    </div>
  );
};

export default Register;