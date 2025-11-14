"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react"

export default function CounselorHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90"></div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 opacity-80"></div>

      {/* Floating animated elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Badge with glow effect */}
        <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/30 shadow-lg shadow-blue-500/20">
          <Sparkles size={18} className="animate-bounce" />
          Your Educational Success Partner
        </div>

        {/* Main heading with shadow */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance drop-shadow-lg">
          Expert <span className="text-yellow-200 font-extrabold">Education Counseling</span> for Your Success
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
          Get personalized guidance from expert counselors. Online, offline, and home sessions available. Choose your
          path with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-yellow-100 px-10 py-7 text-lg font-bold rounded-xl flex items-center gap-3 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Book Your Session <ArrowRight size={22} />
          </Button>
          <Button
            size="lg"
            className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white/30 px-10 py-7 text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            Learn More
          </Button>
        </div>

        {/* Key benefits */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-2 text-white font-semibold">
            <CheckCircle size={20} className="text-yellow-200" />
            Online & Offline
          </div>
          <div className="flex items-center gap-2 text-white font-semibold">
            <CheckCircle size={20} className="text-yellow-200" />
            Expert Counselors
          </div>
          <div className="flex items-center gap-2 text-white font-semibold">
            <CheckCircle size={20} className="text-yellow-200" />
            Personalized Plans
          </div>
        </div>

        {/* Stats with glassmorphism */}
        <div className="grid grid-cols-3 gap-4 mt-20 pt-12 border-t border-white/20">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            <p className="text-4xl md:text-5xl font-bold text-yellow-200">500+</p>
            <p className="text-white/80 text-sm font-medium mt-2">Students Guided</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            <p className="text-4xl md:text-5xl font-bold text-yellow-200">95%</p>
            <p className="text-white/80 text-sm font-medium mt-2">Success Rate</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            <p className="text-4xl md:text-5xl font-bold text-yellow-200">20+</p>
            <p className="text-white/80 text-sm font-medium mt-2">Expert Counselors</p>
          </div>
        </div>
      </div>
    </section>
  )
}
