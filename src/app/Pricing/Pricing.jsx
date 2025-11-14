"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("monthly")

  const packages = [
    {
      name: "Starter",
      monthlyPrice: 99,
      annualPrice: 1068,
      description: "Perfect for students getting started",
      features: [
        "4 tutoring sessions per month",
        "One subject focus",
        "Email support",
        "Study materials included",
        "Progress reports monthly",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      monthlyPrice: 249,
      annualPrice: 2688,
      description: "Best for serious academic growth",
      features: [
        "12 tutoring sessions per month",
        "Unlimited subjects",
        "Priority support",
        "Personalized study plans",
        "Weekly progress reports",
        "Access to tutor library",
        "Free revision sessions",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      monthlyPrice: 399,
      annualPrice: 4308,
      description: "Complete academic excellence program",
      features: [
        "Unlimited tutoring sessions",
        "All subjects covered",
        "24/7 priority support",
        "Custom curriculum design",
        "Exam preparation guarantee",
        "One-on-one mentorship",
        "Career guidance included",
        "Family account access",
      ],
      highlighted: false,
    },
  ]

  const getPrice = (pkg) => {
    return activeTab === "monthly" ? pkg.monthlyPrice : pkg.annualPrice
  }

  const getSavings = (pkg) => {
    const monthlyTotal = pkg.monthlyPrice * 12
    const annualPrice = pkg.annualPrice
    return Math.round(((monthlyTotal - annualPrice) / monthlyTotal) * 100)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Hero Section */}
      <section className="pt-10 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 text-blue-700 text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300">
              Flexible Pricing Plans
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 animate-fade-in leading-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Perfect Plan
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-12 animate-fade-in text-balance">
            Invest in your education with transparent pricing. No hidden fees, cancel anytime.
          </p>

          {/* Tab Switch - WORKING PROPERLY */}
          <div className="flex items-center justify-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 p-1.5 bg-gray-100 rounded-full border border-gray-300 backdrop-blur-sm shadow-lg">
              <button
                onClick={() => setActiveTab("monthly")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform ${
                  activeTab === "monthly"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 scale-105"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActiveTab("annual")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform ${
                  activeTab === "annual"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 scale-105"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
              >
                Annual
              </button>
            </div>
            {activeTab === "annual" && (
              <div className="ml-4 px-4 py-2 rounded-full bg-green-100 border border-green-300 animate-bounce-subtle">
                <span className="text-green-700 text-sm font-bold">💰 Save up to 20%</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`group relative animate-fade-in-up transition-all duration-500 hover:scale-105 cursor-pointer ${
                  pkg.highlighted ? "md:scale-105 md:z-10" : ""
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    pkg.highlighted
                      ? "bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-0.5 animate-gradient-border"
                      : "bg-gradient-to-br from-blue-200 to-purple-200 p-0.5 group-hover:from-blue-400 group-hover:to-purple-400 group-hover:animate-gradient-border"
                  }`}
                >
                  <div className="absolute inset-0.5 bg-white rounded-2xl" />
                </div>

                {/* Card Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Recommended Badge */}
                  {pkg.highlighted && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                      <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xs font-bold shadow-lg shadow-blue-500/50 uppercase tracking-wider">
                        ⭐ Recommended
                      </div>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mb-8 relative overflow-hidden">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text transition-all duration-300 group-hover:scale-110 origin-left">
                        ${getPrice(pkg)}
                      </span>
                      <span className="text-gray-600 text-lg">/{activeTab === "monthly" ? "mo" : "yr"}</span>
                    </div>
                    {activeTab === "annual" && (
                      <p className="text-green-600 text-sm mt-2 font-bold animate-fade-in">
                        Save ${pkg.monthlyPrice * 12 - pkg.annualPrice} ({getSavings(pkg)}% off)
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-bold mb-8 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group/btn ${
                      pkg.highlighted
                        ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-blue-500/50 hover:shadow-purple-500/60"
                        : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 hover:from-gray-300 hover:to-gray-400 border border-gray-400"
                    }`}
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover/btn:opacity-5 transition-opacity duration-300" />
                  </button>

                  {/* Features List */}
                  <ul className="space-y-4 flex-1">
                    {pkg.features.map((feature, featureIdx) => (
                      <li
                        key={featureIdx}
                        className="flex items-start gap-3 group/item animate-fade-in-left"
                        style={{ animationDelay: `${idx * 100 + featureIdx * 50}ms` }}
                      >
                        <div className="flex-shrink-0 mt-1 p-1 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 group-hover/item:from-blue-200 group-hover/item:to-purple-200 transition-all duration-300 group-hover/item:scale-125">
                          <Check className="w-4 h-4 text-blue-600 group-hover/item:text-blue-700 transition-colors duration-300" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
