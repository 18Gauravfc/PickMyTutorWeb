import React from 'react'
import Link from 'next/link'
import { Users, Target, Award, Zap, Sparkles } from "lucide-react";
import CTASection from '../../components/homePageComponent/CTASection';
import StatsSection from '../../components/homePageComponent/StatsSection';
import HeroSection from '../../components/homePageComponent/hero-section';

const About = () => {
  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/30 shadow-lg shadow-blue-500/20">
            <Sparkles size={18} className="animate-bounce" />
            ABOUT US
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance drop-shadow-lg">
            Connecting Students with {" "}
            <span className="text-yellow-200 font-extrabold">
              Excellence
            </span>{" "}
          </h1>
          <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md">
            PickMyTutor is on a mission to democratize quality education by connecting students worldwide with expert tutors who are passionate about teaching and making a difference.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Founded in 2015, PickMyTutor started with a simple vision: to make quality education accessible to everyone, regardless of their location or background. We believed that learning should be personalized, engaging, and within reach.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                What began as a small platform with just 50 tutors has grown into a global community of over 10,000 qualified educators serving more than 100,000 students across 50+ countries. Our growth is a testament to the power of quality education and dedicated mentorship.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we're proud to have helped millions of students achieve their academic goals, build confidence, and unlock their full potential through personalized tutoring.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl h-96 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">10K+</div>
                <div className="text-2xl font-semibold">Expert Tutors</div>
                <div className="text-lg mt-4 opacity-90">Serving students worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Mission & <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Values</span>
          </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything we do is guided by our commitment to education excellence and student success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower students globally by providing access to high-quality, personalized tutoring from expert educators, enabling them to achieve academic success and personal growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
              <Zap className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where every student has access to excellent education and the opportunity to reach their full potential, regardless of their circumstances or location.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 border border-pink-200">
              <Award className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Excellence, integrity, inclusivity, and student-centricity. We believe in quality education, transparent practices, and creating opportunities for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Meet Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Leadership</span>
          </h2>
            <p className="text-gray-600 text-lg">Passionate educators leading the revolution in online learning</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', role: 'Founder & CEO', bio: 'Education innovator with 15+ years of experience in EdTech' },
              { name: 'Michael Rodriguez', role: 'Head of Education', bio: 'Former university professor committed to curriculum excellence' },
              { name: 'Emma Thompson', role: 'CTO', bio: 'Tech leader building scalable platforms for global impact' },
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32"></div>
                <div className="p-6 -mt-12 relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4 border-4 border-white"></div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-semibold text-center mb-3">{member.role}</p>
                  <p className="text-gray-600 text-center text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HeroSection />

      <CTASection />
    </>
  )
}

export default About
