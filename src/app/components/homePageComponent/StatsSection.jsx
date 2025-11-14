import React from "react";
import { Award, Users, Star, Globe } from "lucide-react"; // optional icons
import { Button } from "@/components/ui/button"; // optional if you use it later

const StatsSection = () => {
  // ✅ Define the stats array
  const stats = [
    {
      value: "25K+",
      label: "Active Students",
      description: "Learning with top-rated tutors worldwide",
    },
    {
      value: "4.9/5",
      label: "Average Rating",
      description: "Thousands of 5-star reviews from our learners",
    },
    {
      value: "10K+",
      label: "Expert Tutors",
      description: "Qualified professionals in multiple subjects",
    },
    {
      value: "100+",
      label: "Countries",
      description: "Global presence connecting students and tutors",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Growing Community
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Trusted by students and tutors worldwide for quality education
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 p-6 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
              <div className="text-lg font-semibold">{stat.label}</div>
              <div className="text-sm opacity-80">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
