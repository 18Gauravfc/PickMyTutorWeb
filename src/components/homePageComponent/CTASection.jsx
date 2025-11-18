import React from "react";
import { Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // only if using shadcn/ui buttons
const CTASection = () => {
  return (
  <section className="py-16 md:py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
          Ready to Start Your Learning Journey?
        </h2>

        <p className="text-lg text-primary-foreground opacity-90 max-w-2xl mx-auto">
          Join thousands of students and tutors already succeeding on PickMyTour. Start your first lesson today.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button size="lg" variant="secondary" className="gap-2">
            Find a Tutor Now
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            Explore as Tutor
          </Button>
        </div>

        <p className="text-sm text-primary-foreground opacity-75">
          Get started free. Premium features available at anytime.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
