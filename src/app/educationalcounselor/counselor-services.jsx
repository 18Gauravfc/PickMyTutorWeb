"use client"
import { Card } from "@/components/ui/card"
import { BookOpen, Users, Briefcase, TrendingUp, Award, Target } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Subject Selection",
    description: "Get expert guidance on choosing the right subjects aligned with your career goals and interests.",
  },
  {
    icon: TrendingUp,
    title: "Career Path Planning",
    description: "Explore diverse career options and develop a comprehensive roadmap for your professional journey.",
  },
  {
    icon: Users,
    title: "Online & Offline Support",
    description: "Choose your preferred mode of counseling - virtual sessions or in-person consultations.",
  },
  {
    icon: Award,
    title: "Exam Preparation",
    description: "Strategic guidance for competitive exams including time management and study techniques.",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Define clear, achievable educational and career goals with structured action plans.",
  },
  {
    icon: Briefcase,
    title: "College Selection",
    description: "Navigate through college options and admission requirements with expert recommendations.",
  },
]

export default function CounselorServices() {
  return (
    <section className="py-24 px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Our Counseling Services
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Comprehensive educational guidance to help you succeed at every stage of your academic journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="relative p-8 border-0 bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden group cursor-pointer"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top gradient accent */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl w-fit shadow-lg shadow-blue-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/40 transition-all">
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
