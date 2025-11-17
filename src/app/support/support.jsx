"use client";
import React,{useState} from "react";
import CTASection from "../components/homePageComponent/CTASection";
import { ChevronDown, MessageCircle, Phone, Mail, BookOpen, AlertCircle, Users, Zap, Sparkles } from 'lucide-react';

const faqItems = [
{
question: 'How do I find the right tutor for me?',
answer: 'Browse our directory of certified tutors, filter by subject, experience level, and teaching style. Read reviews from other students and schedule a free consultation call to find your perfect match.'
},
{
question: 'What is your cancellation policy?',
answer: 'You can cancel or reschedule sessions up to 24 hours in advance without any penalty. Cancellations within 24 hours may incur a fee depending on your subscription plan.'
},
{
question: 'Do you offer group sessions or only one-on-one tutoring?',
answer: 'We offer both! Choose between personalized one-on-one sessions, small group sessions (2-4 students), or larger workshop-style classes depending on your learning preference.'
},
{
question: 'What subjects and levels do you cover?',
answer: 'We cover K-12 academics, standardized test prep (SAT, ACT, GRE), college courses, professional certifications, and language learning. Tutors specialize in various levels from beginner to advanced.'
},
{
question: 'How are session fees calculated?',
answer: 'Pricing varies by tutor experience and subject complexity. Most sessions range from $25-75/hour. Subscribe to save up to 20% on regular sessions with monthly or annual plans.'
},
{
question: 'Can I switch tutors if I am not satisfied?',
answer: 'We want you to succeed. You can request to switch tutors anytime within your first three sessions. We\'ll help match you with a better fit at no extra cost.'
}
];

const helpCategories = [
{
icon: BookOpen,
title: 'Getting Started',
description: 'Learn how to set up your account, find tutors, and schedule your first session.',
link: '#'
},
{
icon: Users,
title: 'Account & Profile',
description: 'Manage your profile, payment methods, preferences, and account settings.',
link: '#'
},
{
icon: Zap,
title: 'Sessions & Scheduling',
description: 'Reschedule sessions, join video calls, and track your learning progress.',
link: '#'
},
{
icon: AlertCircle,
title: 'Technical Issues',
description: 'Troubleshoot video/audio problems, browser compatibility, and connection issues.',
link: '#'
}
];

const SupportPage = () => {
 const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/30 shadow-lg shadow-blue-500/20">
            <Sparkles size={18} className="animate-bounce" />
            WE'RE HERE TO HELP
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance drop-shadow-lg">
            Support{" "}
            <span className="text-yellow-200 font-extrabold">Center</span>{" "}
          </h1>
          <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md">
            Find answers to common questions, browse our help articles, or
            connect with our support team.
          </p>
        </div>
      </section>

      <div className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:outline-none text-lg"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600">
              🔍
            </button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Browse Help Topics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <a
                  key={index}
                  href={category.link}
                  className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all group"
                >
                  <Icon className="w-8 h-8 text-blue-600 mb-4 group-hover:text-purple-600 transition-colors" />
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{category.title}</h4>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-600 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-left">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200 text-gray-700">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Still Need Help?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 hover:border-blue-600 transition-colors">
              <MessageCircle className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">Live Chat</h4>
              <p className="text-gray-700 mb-4">
                Chat with our support team in real-time. Available Monday-Friday, 9AM-6PM EST.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Start Chat →</button>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 hover:border-purple-600 transition-colors">
              <Mail className="w-10 h-10 text-purple-600 mb-4" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">Email Support</h4>
              <p className="text-gray-700 mb-4">
                Send us an email and our team will respond within 24 hours.
              </p>
              <a href="mailto:support@pickmytutor.com" className="text-purple-600 font-semibold hover:text-purple-700">
                support@pickmytutor.com →
              </a>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 hover:border-cyan-600 transition-colors">
              <Phone className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="font-bold text-lg text-gray-900 mb-2">Phone Support</h4>
              <p className="text-gray-700 mb-4">
                Call our support line. Available Monday-Friday, 10AM-7PM EST.
              </p>
              <a href="tel:1-800-TUTOR-01" className="text-blue-600 font-semibold hover:text-blue-700">
                1-800-TUTOR-01 →
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default SupportPage;
