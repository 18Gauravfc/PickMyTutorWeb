import React from "react";
import { Award, BookOpen, Users, Star, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  // Define features array (this was missing)
  const features = [
    {
      icon: Award,
      title: "Expert Tutors",
      description: "Learn from experienced tutors verified for their subject expertise.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Learning",
      description: "Access structured lessons and personalized learning plans.",
    },
    {
      icon: Users,
      title: "Interactive Sessions",
      description: "Engage in live one-on-one or group tutoring sessions.",
    },
    {
      icon: Star,
      title: "Student Success",
      description: "Track your progress and celebrate your learning milestones.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your data and learning sessions are protected with top security standards.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose sessions that fit your timetable for seamless learning.",
    },
  ];

  return (
    <section className="py-20 md:py-25 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Why Choose <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">PickMyTour</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for effective online and offline tutoring
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300 group cursor-pointer border border-border/50"
              >
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
