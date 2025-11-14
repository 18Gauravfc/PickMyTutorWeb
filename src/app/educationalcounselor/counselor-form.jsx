"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export default function CounselorForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      class: "",
      subject: "",
      message: "",
    })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="py-24 px-6 bg-background/95 backdrop-blur relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <Card className="p-10 md:p-14 bg-white border-0 shadow-2xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Get Personalized Guidance
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Fill out the form below and our expert counselors will reach out to you within 24 hours.
            </p>
          </div>

          {isSubmitted && (
            <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl flex items-center gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0" size={28} />
              <div>
                <p className="font-bold text-green-900">Success!</p>
                <p className="text-green-800">Thank you! Our counselors will contact you soon.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50 hover:bg-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50 hover:bg-white"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50 hover:bg-white"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Current Class *</label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50 hover:bg-white"
                >
                  <option value="">Select your class</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                  <option value="graduate">Graduate</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">Area of Interest</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50 hover:bg-white"
              >
                <option value="">Select an area</option>
                <option value="science">Science</option>
                <option value="commerce">Commerce</option>
                <option value="arts">Arts</option>
                <option value="career">Career Guidance</option>
                <option value="exam">Exam Preparation</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-3">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50 hover:bg-white resize-none"
                placeholder="Tell us about your educational goals or concerns..."
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/50 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Book Your Free Consultation
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
