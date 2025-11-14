"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Elements of a Strong Corporate Travel Program",
      date: "22",
      month: "Dec",
      comments: "20",
      views: "466",
      image: "/blog.jpg",
      desc: "This article will give you the basic points to consider when putting together or revamping your corporate travel.",
    },
    {
      title: "Elements of a Strong Corporate Travel Program",
      date: "22",
      month: "Dec",
      comments: "20",
      views: "466",
      image: "/blog.jpg",
      desc: "This article will give you the basic points to consider when putting together or revamping your corporate travel.",
    },
    {
      title: "Elements of a Strong Corporate Travel Program",
      date: "22",
      month: "Dec",
      comments: "20",
      views: "466",
      image: "/blog.jpg",
      desc: "This article will give you the basic points to consider when putting together or revamping your corporate travel.",
    },
  ];

  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          {/* Badge with glow effect */}
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/30 shadow-lg shadow-blue-500/20">
            <Sparkles size={18} className="animate-bounce" />
            OUR BLOGS
          </div>

          {/* Main heading with shadow */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance drop-shadow-lg">
            Our <span className="text-yellow-200 font-extrabold">Blogs</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Get personalized guidance from expert counselors. Online, offline,
            and home sessions available. Choose your path with confidence.
          </p>
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Latest Blog Posts
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Stay updated with the latest insights and knowledge from our
              experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="relative p-0 border-0 bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden group cursor-pointer rounded-xl shadow-md"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                <div
                  className="h-56 bg-cover bg-center rounded-t-xl"
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <div className="absolute top-4 left-4 bg-black/80 text-white rounded-lg px-3 py-1 text-center shadow-md">
                    <span className="block text-xl font-bold leading-none">
                      {post.date}
                    </span>
                    <span className="text-xs uppercase">{post.month}</span>
                  </div>
                </div>

                <div className="p-6 relative z-10 bg-white rounded-b-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-comments"></i>
                      <strong>{post.comments}</strong> Comments
                    </span>

                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-eye"></i>
                      <strong>{post.views}</strong> Views
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{post.desc}</p>

                  <div className="text-left">
                    <a
                      href="#"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
