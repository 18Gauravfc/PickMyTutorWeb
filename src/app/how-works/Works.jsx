'use client'

import React, { useState, useEffect } from 'react'
import { Video, MapPin, Home, Zap, Users, Award, Rocket, Clock, CheckCircle2, ArrowRight, Star } from 'lucide-react'

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMode, setHoveredMode] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const steps = [
    {
      number: 1,
      title: 'Sign Up',
      description: 'Create your profile in seconds with basic information and learning goals',
      features: ['1-min setup', 'Secure & verified', 'Free account'],
      icon: Users,
    },
    {
      number: 2,
      title: 'Match & Connect',
      description: 'Get matched with expert tutors based on your needs and preferences',
      features: ['AI-powered matching', 'Read reviews', 'View rates'],
      icon: Award,
    },
    {
      number: 3,
      title: 'Learn & Grow',
      description: 'Start personalized sessions and track your progress in real-time',
      features: ['Custom curriculum', 'Real-time feedback', 'Track progress'],
      icon: Rocket,
    },
  ]

  const modes = [
    {
      title: 'Online Tutoring',
      subtitle: 'Learn anywhere, anytime',
      description: 'Seamless video sessions with cutting-edge tools',
      icon: Video,
      features: [
        'HD video conferencing',
        'Real-time whiteboard',
        'Screen sharing',
        'Session recordings',
        'Instant chat & messaging'
      ],
      stats: '24/7 Available',
      color: 'blue',
      gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    },
    {
      title: 'Home Tutoring',
      subtitle: 'Professional in-home sessions',
      description: 'One-on-one learning in your comfort zone',
      icon: Home,
      features: [
        'Scheduled visits',
        'Personalized attention',
        'Comfortable environment',
        'Professional tutors',
        'Flexible timing'
      ],
      stats: 'Premium Experience',
      color: 'purple',
      gradient: 'from-purple-600 via-purple-500 to-pink-500',
    },
    {
      title: 'Offline Learning',
      subtitle: 'Meet & learn together',
      description: 'Traditional face-to-face tutoring at convenient locations',
      icon: MapPin,
      features: [
        'Coffee shops & cafes',
        'Libraries & study centers',
        'One-on-one sessions',
        'Flexible locations',
        'Immediate help'
      ],
      stats: 'Direct Interaction',
      color: 'emerald',
      gradient: 'from-emerald-600 via-green-500 to-teal-500',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden relative">
      
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl " />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl " style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl " style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative px-4 py-32 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="relative mx-auto max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              {/* Badge */}
              <div className="mb-8 inline-block">
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur" />
                  <div className="relative flex items-center gap-2 rounded-full bg-slate-900/50 backdrop-blur-xl px-4 py-2 border border-blue-500/30 hover:border-blue-400/60 transition-all">
                    <Zap className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-100">Get Started in 3 Easy Steps</span>
                  </div>
                </div>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text ">
                  How It Works
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Connect with world-class tutors in minutes. Choose your learning style and start your transformation today.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10 text-slate-800">
                {[
                  { number: '50K+', label: 'Active Students' },
                  { number: '10K+', label: 'Expert Tutors' },
                  { number: '98%', label: 'Satisfaction' },
                ].map((stat, i) => (
                  <div key={i} className="group">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                      {stat.number}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 font-bold text-white rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all active:scale-95 overflow-hidden">
                  <span className="relative flex items-center justify-center gap-2">
                    Start Learning Now
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-4 font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent border-2 border-blue-400/50 rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all">
                  Browse Tutors
                </button>
              </div>
            </div>

            {/* Right side - Animated graphic */}
            <div className={`relative h-96 lg:h-full transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative w-full h-full flex items-center justify-center">
                {/* 3D card effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 rounded-3xl backdrop-blur-xl border border-blue-400/20 transform hover:scale-105 transition-transform duration-300" />
                
                {/* Animated content inside card */}
                <div className="relative z-10 text-center px-8">
                  <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                      <Rocket className="w-12 h-12 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to Learn?</h3>
                  <p className="text-white mb-6">Join thousands of students achieving their goals</p>
                  <div className="space-y-3">
                    {['Expert Tutors', 'Flexible Schedule', '24/7 Support'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 justify-center text-white">
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Three Simple Steps
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-800 max-w-2xl mx-auto">
              Start your learning journey in minutes with our streamlined process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Animated connecting line */}
            <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

            {steps.map((step, index) => {
              const StepIcon = step.icon
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Glowing background */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Card */}
                 <div className="relative h-full rounded-2xl 
bg-[linear-gradient(135deg,_#e7ecff_0%,_#fde7e4_40%,_#ffe2c6_100%)]
backdrop-blur-xl p-8 border border-blue-400/30 
group-hover:border-purple-400/60 transition-all duration-300 
group-hover:shadow-2xl group-hover:shadow-purple-500/20 
group-hover:-translate-y-4">

  {/* Number badge */}
  <div className="absolute -top-6 left-8 z-20">
    <div className="relative h-16 w-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50 group-hover:shadow-2xl transition-all" />
      <div className="absolute inset-0.5 bg-white/70 rounded-full flex items-center justify-center">
        <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          {step.number}
        </span>
      </div>
    </div>
  </div>

  {/* Icon */}
  <div className="mb-6 mt-4 inline-flex h-14 w-14 items-center justify-center rounded-xl 
  bg-gradient-to-br from-blue-500/20 to-purple-500/20 
  group-hover:from-blue-500/40 group-hover:to-purple-500/40 
  transition-all duration-300">
    <StepIcon className="h-7 w-7 text-blue-500" />
  </div>

  {/* Title */}
  <h3 className="text-2xl font-bold text-slate-700 mb-3 
  group-hover:text-transparent group-hover:bg-gradient-to-r 
  group-hover:from-blue-400 group-hover:to-purple-400 
  group-hover:bg-clip-text transition-all">
    {step.title}
  </h3>

  {/* Description */}
  <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
    {step.description}
  </p>

  {/* Features list */}
  <div className="space-y-2 mb-6">
    {step.features.map((feature, i) => (
      <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
        {feature}
      </div>
    ))}
  </div>

  {/* Arrow */}
  {index < steps.length - 1 && (
    <div className="absolute -right-12 top-1/3 hidden md:flex items-center justify-center">
      <ArrowRight className="h-6 w-6 text-blue-400 group-hover:translate-x-2 transition-transform" />
    </div>
  )}
</div>

                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tutoring Modes Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Choose Your Learning Path
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-800 max-w-2xl mx-auto">
              Pick the tutoring mode that fits your lifestyle and learning preferences
            </p>
          </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
  {modes.map((mode, index) => {
    const ModeIcon = mode.icon
    return (
      <div
        key={index}
        onMouseEnter={() => setHoveredMode(index)}
        onMouseLeave={() => setHoveredMode(null)}
        className={`group relative rounded-2xl transition-all duration-500 cursor-pointer transform ${
          hoveredMode === index
            ? 'scale-105 -translate-y-6 md:-translate-y-8'
            : 'hover:scale-102 hover:-translate-y-2'
        }`}
      >
        {/* Glow effect */}
        <div
          className={`absolute -inset-1 bg-gradient-to-r ${mode.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
        />

        {/* Card */}
        <div
          className="relative rounded-2xl 
          bg-[linear-gradient(135deg,_#e7ecff_0%,_#fde7e4_40%,_#ffe2c6_100%)]
          backdrop-blur-xl border border-white/40 
          group-hover:border-purple-300/60 overflow-hidden 
          transition-all duration-300 h-full flex flex-col shadow-lg"
        >
          {/* Top accent bar */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${mode.gradient}`} />

          {/* Content */}
          <div className="p-8 flex-1 flex flex-col">
            {/* Icon */}
            <div
              className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl 
              bg-gradient-to-br ${mode.gradient} text-white shadow-lg 
              group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}
            >
              <ModeIcon className="h-8 w-8" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-black text-slate-800 mb-1">
              {mode.title}
            </h3>
            <p className="text-sm font-semibold text-blue-700 mb-3">
              {mode.subtitle}
            </p>

            {/* Description */}
            <p className="text-slate-700 leading-relaxed mb-6 text-sm flex-1">
              {mode.description}
            </p>

            {/* Features */}
            <div className="space-y-2.5 mb-8">
              {mode.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    className={`h-5 w-5 flex-shrink-0 mt-0.5 bg-gradient-to-r ${mode.gradient} text-transparent bg-clip-text`}
                  />
                  <span className="text-sm text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              className={`mb-6 text-center py-3 rounded-lg 
              bg-gradient-to-r ${mode.gradient} bg-opacity-10 
              border border-white/40`}
            >
              <p className="text-sm font-bold text-blue-700">{mode.stats}</p>
            </div>

            {/* CTA Button */}
            <button
              className={`w-full py-3 px-4 rounded-lg font-bold text-white 
              bg-gradient-to-r ${mode.gradient} transition-all 
              hover:shadow-xl hover:shadow-purple-400/40 
              active:scale-95 group-hover:scale-105`}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    )
  })}
</div>

        </div>
      </section>

      {/* Why Choose Us Section */}
<section className="relative px-4 py-24 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-5xl">
    <h2 className="text-4xl sm:text-5xl font-black text-center mb-16">
      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
        Why Choose Us
      </span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { icon: Award, title: 'Verified Experts', desc: 'All tutors are carefully selected and verified for quality' },
        { icon: Clock, title: '24/7 Availability', desc: 'Learn anytime that fits your schedule perfectly' },
        { icon: Zap, title: 'Instant Matching', desc: 'AI-powered system matches you with perfect tutors' },
        { icon: Star, title: 'Guaranteed Results', desc: 'See measurable improvement in your grades and skills' },
      ].map((item, i) => {
        const ItemIcon = item.icon
        return (
          <div
            key={i}
            className="group rounded-xl 
            bg-[linear-gradient(135deg,_#e7ecff_0%,_#fde7e4_40%,_#ffe2c6_100%)]
            backdrop-blur-xl border border-white/40
            p-6 hover:border-purple-300/60 hover:shadow-xl hover:shadow-purple-400/20 
            transition-all"
          >
            {/* Icon */}
            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg 
              bg-gradient-to-br from-blue-500/20 to-purple-500/20 
              group-hover:from-blue-500/40 group-hover:to-purple-500/40 
              transition-all mb-4"
            >
              <ItemIcon className="h-6 w-6 text-blue-600" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-700">
              {item.desc}
            </p>
          </div>
        )
      })}
    </div>
  </div>
</section>


      {/* Final CTA Section */}
      <section className="relative px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl" />

          <div className="relative text-center">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Ready to Transform Your Learning?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-800 max-w-2xl mx-auto mb-10">
              Join thousands of students who have achieved their academic goals with expert tutors
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-10 py-4 font-bold text-white rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all active:scale-95">
                <span className="relative flex items-center justify-center gap-2">
                  Start Your Journey Today
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-10 py-4 font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent border-2 border-blue-400/50 rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all">
                Explore All Tutors
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
