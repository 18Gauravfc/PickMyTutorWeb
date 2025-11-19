'use client';
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const FeaturesSection = ({user}) => {
  const router = useRouter();

  const handleBecomeTutor = () => {
    if (!user) {
      alert("Please login first!");
      return;
    }
    router.push("/become-tutor");
  };
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                <span className="text-sm font-semibold text-accent flex items-center gap-2">
                  <Award className="w-4 h-4" /> Premium Learning Marketplace
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Learn from <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Expert Tutors</span> Worldwide
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Connect with qualified tutors for personalized online or home sessions. Start your learning journey
                today with flexible scheduling and affordable rates.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/find-tutors" passHref>
              <Button as="a" size="lg" className="gap-2">
                Find a Tutor
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/become-tutor" passHref>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" onClick={handleBecomeTutor}>
                Become a Tutor
              </Button>
            </Link>
            </div>
            <div className="pt-8 border-t border-border space-y-4">
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-1">
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">50K+</p>
                  <p className="text-sm text-muted-foreground">Expert Tutors</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">100K+</p>
                  <p className="text-sm text-muted-foreground">Active Students</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">4.9★</p>
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-border bg-card shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/30" />
                  </div>
                  <p className="text-foreground font-semibold">Connect & Learn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
