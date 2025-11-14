"use client"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Zap } from "lucide-react"

export default function CounselorCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30">
          <Zap size={18} className="animate-bounce" />
          <span className="font-semibold">Limited Time Offer</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg text-balance">
          Ready to Start Your Educational Journey?
        </h2>

        <p className="text-xl md:text-2xl text-white/95 mb-14 max-w-2xl mx-auto font-medium drop-shadow-md">
          Get expert guidance today and take the first step toward achieving your educational and career goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-yellow-100 px-10 py-7 flex items-center gap-3 rounded-xl text-lg font-bold shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Phone size={22} />
            Call Us Now
          </Button>
          <Button
            size="lg"
            className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white/30 px-10 py-7 flex items-center gap-3 rounded-xl text-lg font-bold transition-all duration-300 hover:shadow-lg"
          >
            <Mail size={22} />
            Email Us
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/20">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            <Phone className="text-yellow-200 mx-auto mb-3" size={28} />
            <p className="text-white/80 text-sm font-medium">+91 XXXX XXXX XXX</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            <Mail className="text-yellow-200 mx-auto mb-3" size={28} />
            <p className="text-white/80 text-sm font-medium">info@educationalcounselor.com</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            <MapPin className="text-yellow-200 mx-auto mb-3" size={28} />
            <p className="text-white/80 text-sm font-medium">Available Pan India</p>
          </div>
        </div>

        <p className="text-white/70 text-sm mt-8 font-medium">Response time: Usually within 2 hours</p>
      </div>
    </section>
  )
}
