"use client"

import { CheckCircle2, GraduationCap, Users2, Compass, TrendingUp } from "lucide-react"

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: "Expert Career Mentorship",
    desc: "Guidance from certified counselors and industry experts who help you discover your true potential.",
  },
  {
    icon: <Users2 className="w-8 h-8 text-white" />,
    title: "Personalized Counseling",
    desc: "Tailored one-on-one sessions that focus on your individual strengths, goals, and aspirations.",
  },
  {
    icon: <Compass className="w-8 h-8 text-white" />,
    title: "Roadmap to Success",
    desc: "Clear step-by-step plans for academics, admissions, and long-term career goals.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Proven Results",
    desc: "Thousands of students have achieved academic success and dream careers through our programs.",
  },
]

const benefits = [
  "Interactive career tests & aptitude assessments",
  "Dedicated counselor support for every student",
  "Online & offline session availability",
  "Access to 100+ college and course insights",
  "Transparent pricing with no hidden costs",
  "Progress tracking and follow-up support",
]

export default function CounselorBenefits() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-28 px-6">
      {/* Background decorative shapes */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/30 to-purple-500/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/20 to-blue-500/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Transform Your Future with Expert Guidance
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            Personalized counseling designed to guide students toward the right academic and career path.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-24">
          {features.map((item, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-b from-white to-blue-50/40 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
            >
              <div className="absolute -top-6 left-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                {item.icon}
              </div>
              <div className="pt-12 pb-8 px-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Benefits List Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Illustration / Side Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-[90%] h-[400px] bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-40"></div>
              <div className="relative z-10 text-center text-white">
                <h3 className="text-4xl font-bold mb-3 drop-shadow-lg">Start Your Journey</h3>
                <p className="text-lg font-medium opacity-90">
                  Step into a brighter academic and career future with us.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit Points */}
          <div>
            <h4 className="text-3xl font-bold mb-6 text-gray-900">
              What You’ll Gain from Our Program
            </h4>
            <div className="space-y-5">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/80 backdrop-blur-md rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md">
                    <CheckCircle2 className="text-white" size={22} />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
