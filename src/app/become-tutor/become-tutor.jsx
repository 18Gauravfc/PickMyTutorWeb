"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Users,
  Zap,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const becomeTutorPage = () => {
  const [step, setStep] = useState(1);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [hoursPerWeek, setHoursPerWeek] = useState("");

  const toggleSubject = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const subjects = [
    "English",
    "French",
    "Business",
    "Religious Studies",
    "Chemistry",
    "Physics",
    "Spanish",
    "Geography",
    "Economics",
    "Maths (Higher Level)",
    "Italian",
    "Psychology",
    "Latin",
    "Biology",
    "German",
  ];

  const nextStep = () => {
    if (step === 1 && selectedSubjects.length === 0) {
      alert("Please select at least one subject.");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const calculateEarnings = () => {
    const rates = {
      "about 10": 620,
      "about 20": 1240,
      "about 30": 1860,
      "about 40": 2480,
    }; 

    return rates[hoursPerWeek] || 0;
  };
  return (
    <>
      <div className="min-h-screen bg-white">
        <section className="inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="hidden md:block">
                <img
                  src="/becomeTutor.webp"
                  alt="Tutor with laptop"
                  className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="mb-8">
                  <span className="inline-flex items-center gap-3 bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    <Sparkles /> TUTOR REGISTRATION
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Join Our Community
                  </h2>
                  <p className="text-gray-600 mt-2">Step {step} of 3</p>
                </div>

                {step === 1 && (
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-900 font-semibold mb-4">
                        Which subjects would you like to teach? (Required)
                      </label>

                      <div className="grid grid-cols-2 gap-3">
                        {subjects.map((subject) => (
                          <label
                            key={subject}
                            className="flex items-center space-x-3 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedSubjects.includes(subject)}
                              onChange={() => toggleSubject(subject)}
                              className="w-5 h-5 text-blue-600 rounded border-gray-300"
                            />
                            <span className="text-gray-700 text-sm">
                              {subject}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center space-x-2"
                    >
                      <span>Next step</span>
                      <ChevronRight size={20} />
                    </button>
                  </form>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      What teaching levels do you cover?
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        {subjects.map((subject) => (
                          <label
                            key={subject}
                            className="flex items-center space-x-3 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedSubjects.includes(subject)}
                              onChange={() => toggleSubject(subject)}
                              className="w-5 h-5 text-blue-600 rounded border-gray-300"
                            />
                            <span className="text-gray-700 text-sm">
                              {subject}
                            </span>
                          </label>
                        ))}
                    </div>
                

                    <div className="flex items-center justify-between pt-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center text-gray-700 font-medium"
                      >
                        <ChevronLeft size={18} /> Back
                      </button>

                      <button
                        type="button"
                        onClick={nextStep}
                        className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Which subjects do you teach?
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                        {subjects.map((subject) => (
                          <label
                            key={subject}
                            className="flex items-center space-x-3 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedSubjects.includes(subject)}
                              onChange={() => toggleSubject(subject)}
                              className="w-5 h-5 text-blue-600 rounded border-gray-300"
                            />
                            <span className="text-gray-700 text-sm">
                              {subject}
                            </span>
                          </label>
                        ))}
                      </div>

                    <div className="flex items-center justify-between pt-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center text-gray-700 font-medium"
                      >
                        <ChevronLeft size={18} /> Back
                      </button>

                      <button
                        type="button"
                        className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700"
                        onClick={() => alert("Form submitted successfully!")}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}

                {/* FOOTNOTE */}
                <p className="text-xs text-gray-600 text-center mt-6">
                  Please register using only one email address. Multiple
                  submissions will lead to disqualification.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why become a tutor?
              </h2>
              <p className="text-gray-600 text-lg">
                Your opportunities at PickMyTutor.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img
                  src="/tutorSection.webp"
                  alt="Student learning"
                  className="rounded-lg w-full h-auto object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Be your own boss
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Teach when and where you want, and make the most of your
                    tutoring flexibility. All you need is 50 minutes per lesson,
                    a good internet connection, a quiet environment, and a love
                    of tutoring.
                  </p>
                  <Link
                    href="#"
                    className="text-blue-600 font-semibold flex items-center hover:text-blue-700"
                  >
                    Sign up as a tutor <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-purple-100 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Make a lasting impact
                </h3>
                <p className="text-gray-700 mb-6">
                  Empower your students improve their confidence and grades -
                  with as many as 4 increasing by up to 3 grades.
                </p>
                <p className="text-sm text-gray-600">
                  We'll even find students for you can focus on establishing
                  transformative tutor-student relationships.
                </p>
              </div>

              <div className="bg-green-100 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Enhance teaching with AI
                </h3>
                <p className="text-gray-700 mb-6">
                  Plan your lessons efficiently with our AI-powered planning
                  tools and interactive smart classroom GeoClass.
                </p>
                <p className="text-sm text-gray-600">
                  Find 1000s of engaging resources on Pick My Tutor Learning, and
                  seamlessly communicate with students via our secure messaging
                  service.
                </p>
              </div>

              <div className="bg-yellow-100 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Join a supportive community
                </h3>
                <p className="text-gray-700 mb-6">
                  Connect with thousands of tutors dedicated to to student
                  success.
                </p>
                <p className="text-sm text-gray-600">
                  You will have all the support you need to enhance your
                  tutoring experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              How much can you make as a tutor?
            </h2>

            <div className=" items-center">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Calculate your potential earnings
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 uppercase font-semibold mb-2">
                        FROM
                      </p>
                      <p className="text-3xl font-bold text-blue-600">
                        £620
                        <span className="text-sm text-gray-600">/month</span>
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        for just 10 lessons per week
                      </p>
                    </div>

                    <div className="h-1 bg-gray-300 my-6"></div>

                    <div className="mb-6">
                      <p className="text-sm text-gray-600 uppercase font-semibold mb-2">
                        TO
                      </p>
                      <p className="text-3xl font-bold text-purple-600">
                        £2480
                        <span className="text-sm text-gray-600">/month</span>
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        for about 40 lessons per week
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      How many hours are you able to tutor each week?
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {["about 10", "about 20", "about 30", "about 40"].map(
                        (hours) => (
                          <button
                            key={hours}
                            onClick={() => setHoursPerWeek(hours)}
                            className={`py-4 px-6 rounded-lg font-semibold transition text-center ${
                              hoursPerWeek === hours
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-900 border-2 border-gray-300 hover:border-blue-600"
                            }`}
                          >
                            {hours}
                          </button>
                        )
                      )}
                    </div>

                    {hoursPerWeek && (
                      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Estimated earning:
                          </span>
                        </p>
                        <p className="text-2xl font-bold text-blue-600 mt-2">
                          £{calculateEarnings()}/month
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Did you know that we offer tutor bonuses?
              </h2>
              <p className="text-gray-600 text-lg">
                Get rewarded for your efforts with Loyalty and Referral Bonuses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get rewarded
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our bonuses reward you with lesson rate increases. The more
                  lessons you tutor, and the more friends you successfully refer
                  to PickMyTutor, then the more you'll get!
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award
                      className="text-purple-600 mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Loyalty Bonus
                      </p>
                      <p className="text-gray-600 text-sm">
                        Earn more as you stay with us longer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users
                      className="text-purple-600 mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Referral Bonus
                      </p>
                      <p className="text-gray-600 text-sm">
                        Get rewarded for bringing new tutors
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <img
                src="/tutorSection.webp"
                alt="Video call"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-100 rounded-lg p-8 text-center">
                <Zap className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Loyalty Bonus
                </h3>
                <p className="text-gray-700">
                  Unlock higher rates and premium status as you build your
                  tutoring journey with us. Your dedication deserves
                  recognition.
                </p>
              </div>

              <div className="bg-purple-100 rounded-lg p-8 text-center">
                <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Referral Bonus
                </h3>
                <p className="text-gray-700">
                  Refer other talented tutors and earn rewards for each
                  successful referral. Build your network while earning more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start your tutoring journey?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Join thousands of successful tutors on PickMyTutor and make a
              difference in students' lives while earning on your terms.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Apply Now
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default becomeTutorPage;
