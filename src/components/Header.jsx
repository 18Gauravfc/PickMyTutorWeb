"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from 'lucide-react';
import  BASE_URL from "@/utils/api";


function LoginModal({ onClose, onSwitchToRegister, onLoginSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Login successful!");
        setFormData({email: "", password: "" });
        onLoginSuccess(data.user);
      } else if (data.message) {
        setMessage(`❌ ${data.message}`);
      } else {
        setMessage("❌ Login failed! Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("⚠️ Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
    

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition-all ${
              loading
                ? "bg-cyan-400 cursor-not-allowed"
                : "bg-cyan-600 hover:bg-cyan-700"
            }`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("✅")
                ? "text-green-600"
                : message.includes("⚠️")
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => {
              onClose();
              onSwitchToRegister();
            }}
            className="text-cyan-600 hover:text-cyan-700 font-semibold cursor-pointer"
          >
            Create one
          </span>
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 🟢 Registration Modal                                                      */
/* -------------------------------------------------------------------------- */
function RegisterModal({ onClose, onSwitchToLogin, onRegisterSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const baseUrl = "https://test.pearl-developer.com/pickmytutor/public/api";

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(`${baseUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Registration successful!");
        setFormData({ name: "", email: "", password: "" });
        onRegisterSuccess(data.user);
      } else if (data.errors?.email?.[0]) {
        setMessage(`⚠️ ${data.errors.email[0]}`);
      } else if (data.message) {
        setMessage(`❌ ${data.message}`);
      } else {
        setMessage("❌ Registration failed! Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("⚠️ Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition-all ${
              loading
                ? "bg-cyan-400 cursor-not-allowed"
                : "bg-cyan-600 hover:bg-cyan-700"
            }`}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("✅")
                ? "text-green-600"
                : message.includes("⚠️")
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => {
              onClose();
              onSwitchToLogin();
            }}
            className="text-cyan-600 hover:text-cyan-700 font-semibold cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 🟣 Tutor Role Prompt + Form                                                */
/* -------------------------------------------------------------------------- */
function TutorRolePrompt({ onClose, onYes, onNo }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-full max-w-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Are you a Tutor?
        </h3>
        <div className="flex justify-center gap-4">
          <Button onClick={onYes} className="bg-cyan-600 text-white">
            Yes
          </Button>
          <Button onClick={onNo} variant="outline">
            No
          </Button>
        </div>
      </div>
    </div>
  );
}

function TutorForm({ onClose }) {
  const [form, setForm] = useState({
    subject: "",
    experience: "",
    qualification: "",
    mode: "",
    availability: "",
    hourly_rate: "",
    city: "",
    language: "",
    about: "",
    education_level: "",
    board: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] px-4 overflow-y-auto py-10">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Tutor Information
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <select name="subject" onChange={handleChange} className="border p-2 rounded-lg">
            <option value="">Select Subject</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>English</option>
            <option>Computer</option>
            <option>History</option>
          </select>

          <select name="experience" onChange={handleChange} className="border p-2 rounded-lg">
            <option value="">Years of Experience</option>
            <option>0-1 Years</option>
            <option>2-5 Years</option>
            <option>5-10 Years</option>
            <option>10+ Years</option>
          </select>

          <input
            name="qualification"
            placeholder="Highest Qualification"
            onChange={handleChange}
            className="border p-2 rounded-lg"
          />

          <select name="mode" onChange={handleChange} className="border p-2 rounded-lg">
            <option value="">Teaching Mode</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Both</option>
          </select>

          <input
            name="availability"
            placeholder="Available Days / Hours"
            onChange={handleChange}
            className="border p-2 rounded-lg"
          />

          <input
            name="hourly_rate"
            placeholder="Hourly Rate (₹)"
            onChange={handleChange}
            className="border p-2 rounded-lg"
          />

          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            className="border p-2 rounded-lg"
          />

          <select name="language" onChange={handleChange} className="border p-2 rounded-lg">
            <option value="">Preferred Language</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
          </select>

          <select name="education_level" onChange={handleChange} className="border p-2 rounded-lg">
            <option value="">Education Level</option>
            <option>Primary</option>
            <option>Secondary</option>
            <option>Higher Secondary</option>
            <option>College</option>
          </select>

          <input
            name="board"
            placeholder="Board (CBSE/ICSE/State)"
            onChange={handleChange}
            className="border p-2 rounded-lg"
          />

          <textarea
            name="about"
            placeholder="Short Bio"
            onChange={handleChange}
            className="col-span-2 border p-2 rounded-lg"
          />

          <button
            type="submit"
            className="col-span-2 bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700"
          >
            Submit Tutor Details
          </button>
        </form>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 🔵 Header Component                                                        */
/* -------------------------------------------------------------------------- */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showTutorPrompt, setShowTutorPrompt] = useState(false);
  const [showTutorForm, setShowTutorForm] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            PickMyTutor
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link className=" text-purple-600" href="/find-tutors">Find Tutors</Link>
            <Link className=" text-purple-600" href="/pricing">Pricing</Link>
            <Link className=" text-purple-600" href="/how-works">How It Works</Link>
            <Link className=" text-purple-600" href="/blog">Blog</Link>
            <Link className=" text-purple-600" href="/educationalcounselor">Educational Counselor</Link>
          </nav>

          {/* Auth Buttons / Profile */}
          <div className="hidden md:flex items-center gap-4 relative">
            {!user ? (
              <>
                <Button variant="ghost" onClick={() => setShowLogin(true)}>
                  Sign In
                </Button>
                <Button
                  onClick={() => setShowRegister(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-105 transition-transform"
                >
                  Get Started
                </Button>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200"
                >
                  <User className="w-5 h-5" />
                  <span>{user.name}</span>
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-40">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => setUser(null)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`fixed top-16 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Menu Navigation */}
          <nav className="flex flex-col gap-4 p-6">
            <Link
              href="/find-tutors"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-blue-600 transition"
            >
              Find Tutors
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-blue-600 transition"
            >
              Pricing
            </Link>
            <Link
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-blue-600 transition"
            >
              How It Works
            </Link>
            <Link
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-blue-600 transition"
            >
              Blog
            </Link>
            <Link
              href="/educationalcounselor"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-blue-600 transition"
            >
              Educational Counselor
            </Link>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Mobile Auth Buttons */}
            {!user ? (
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowLogin(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => {
                    setShowRegister(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                >
                  Get Started
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <User className="w-5 h-5" />
                  <span>{user.name}</span>
                </div>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 bg-gray-100 rounded-lg text-center hover:bg-gray-200"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setUser(null);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </nav>
        </div>

        {/* Overlay backdrop for mobile menu */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </header>

      {/* Modals */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => setShowRegister(true)}
          onLoginSuccess={(user) => {
            setShowLogin(false);
            setUser(user);
          }}
        />
      )}

      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => setShowLogin(true)}
          onRegisterSuccess={(user) => {
            setShowRegister(false);
            setShowTutorPrompt(true);
            setUser(user);
          }}
        />
      )}

      {showTutorPrompt && (
        <TutorRolePrompt
          onClose={() => setShowTutorPrompt(false)}
          onYes={() => {
            setShowTutorPrompt(false);
            setShowTutorForm(true);
          }}
          onNo={() => setShowTutorPrompt(false)}
        />
      )}

      {showTutorForm && <TutorForm onClose={() => setShowTutorForm(false)} />}
    </>
  );
}
