// app/components/Footer.jsx
"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Facebook, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl">PickMyTour</h3>
            <p className="text-sm opacity-75">
              Connecting students with expert tutors for online and home sessions worldwide.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="/find-tutors" className="hover:opacity-100 transition-opacity">
                  Find Tutors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  For Tutors
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:opacity-100 transition-opacity">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:opacity-100 transition-opacity">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:opacity-100 transition-opacity">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
          <p>© 2025 PickMyTour. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:opacity-100 transition-opacity">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
