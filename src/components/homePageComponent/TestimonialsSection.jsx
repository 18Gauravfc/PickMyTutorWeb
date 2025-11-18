import React from "react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  // ✅ Define the testimonials array
  const testimonials = [
    {
      name: "Amit Verma",
      role: "Parent",
      avatar: "A",
      content:
        "PickMyTour helped my daughter score higher in math! The tutors are patient and professional.",
      rating: 5,
    },
    {
      name: "Sara Khan",
      role: "Student",
      avatar: "S",
      content:
        "I love the flexible timing and interactive classes. Learning feels fun and stress-free!",
      rating: 5,
    },
    {
      name: "Rohan Mehta",
      role: "Tutor",
      avatar: "R",
      content:
        "The platform is seamless and easy to use. Great experience teaching motivated students!",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Loved by Students & Tutors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from our growing community
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 border border-border/50 hover:border-primary/30 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed">
                “{testimonial.content}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
