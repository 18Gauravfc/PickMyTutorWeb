"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Class 12 Student",
    image: "👨‍🎓",
    text: "The counselor helped me choose the right stream and I scored 95% in my boards. Highly recommended!",
    rating: 5,
    achievement: "95% in Boards",
  },
  {
    name: "Priya Patel",
    role: "College Graduate",
    image: "👩‍🎓",
    text: "Career counseling sessions gave me clarity on my goals. Now working in my dream company!",
    rating: 5,
    achievement: "Dream Job Secured",
  },
  {
    name: "Rohit Kumar",
    role: "Parent",
    image: "👨‍💼",
    text: "Outstanding service! The counselors are very professional and helped my child make the right choices.",
    rating: 5,
    achievement: "Best Decision",
  },
  {
    name: "Isha Verma",
    role: "Class 10 Student",
    image: "👩‍🎓",
    text: "Personalized guidance and exam tips really made a difference. Thanks for the support!",
    rating: 5,
    achievement: "Grade Improvement",
  },
  {
    name: "Vikram Singh",
    role: "Class 11 Student",
    image: "👨‍🎓",
    text: "The online counseling sessions were convenient and very insightful. Helped me focus on the right subjects!",
    rating: 5,
    achievement: "Subject Selection",
  },
];

export default function CounselorTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  // 🧠 Determine number of slides per view based on screen width
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // 🔁 Auto slide
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="py-24 px-6 bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              What Our Students Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Join thousands of satisfied students who achieved their goals with our expert guidance
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div
            className={`grid gap-8 transition-all duration-500 ${
              itemsPerView === 3
                ? "md:grid-cols-3"
                : itemsPerView === 2
                ? "md:grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-500 transform hover:scale-100 relative overflow-hidden group"
              >
                {/* Subtle gradient accent */}
                <div className="absolute -top-1 -right-1 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl drop-shadow-md">{testimonial.image}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                      <p className="text-xs text-purple-600 font-semibold mt-1 bg-purple-50 w-fit px-3 py-1 rounded-full">
                        {testimonial.achievement}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed font-medium">{`"${testimonial.text}"`}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Nav buttons */}
          <button
            onClick={goToPrevious}
            className="absolute -left-6 md:-left-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full hover:shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-6 md:-right-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full hover:shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoPlay(false);
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8 shadow-lg shadow-blue-500/50"
                    : "bg-gray-300 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
