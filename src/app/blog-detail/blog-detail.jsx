import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle } from "lucide-react";
import { ArrowRight, MessageCircle, Eye, Share2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const blogDetail = () => {
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/30 shadow-lg shadow-blue-500/20">
            <Sparkles size={18} className="animate-bounce" />
            BLOG DETAILS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance drop-shadow-lg">
            Elements of a Strong{" "}
            <span className="text-yellow-200 font-extrabold">
              Corporate Travel
            </span>{" "}
            Program
          </h1>
          <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md">
            Discover the essential components that make corporate travel
            programs successful and how to optimize your organization's travel
            strategy.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <span className="font-semibold text-2xl">22</span>
                <span className="text-sm">DEC</span>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2 text-gray-600">
                <MessageCircle size={18} />
                <span className="text-sm">20 Comments</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Eye size={18} />
                <span className="text-sm">466 Views</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-600 text-sm">Share:</span>
              <button className="p-2 hover:bg-gray-200 rounded-lg transition">
                <Share2 size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/blog.jpg"
            alt="Elements of a Strong Corporate Travel Program"
            className="w-full rounded shadow-lg object-cover h-96"
          />
        </div>
      </section>

      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A well-designed corporate travel program is more than just booking
              flights and hotels—it's a strategic framework that balances
              employee satisfaction, cost management, and organizational
              efficiency. In today's dynamic business environment, companies
              need to create travel policies that are flexible, transparent, and
              aligned with both employee needs and corporate goals.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-5">
              Key Components
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  1. Clear Travel Policy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Establish comprehensive guidelines that outline approval
                  processes, booking procedures, accommodation standards, and
                  reimbursement policies. A clear policy reduces confusion and
                  ensures consistency across the organization.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  2. Technology Integration
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Implement travel management systems that streamline booking,
                  provide real-time reporting, and offer mobile accessibility.
                  Technology should make the travel process seamless for both
                  employees and administrators.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  3. Vendor Partnerships
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Negotiate partnerships with airlines, hotels, and ground
                  transportation providers to secure competitive rates and
                  exclusive benefits. Strong vendor relationships directly
                  impact your program's cost-effectiveness.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  4. Employee Wellness
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Prioritize traveler health and safety by providing travel
                  insurance, 24/7 support, and flexible policies that prevent
                  burnout. Happy travelers contribute to better productivity and
                  company loyalty.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-5">
              Measuring Success
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Track key metrics such as cost per trip, policy compliance rates,
              traveler satisfaction scores, and booking lead times. Regular
              analysis helps you optimize your program and make data-driven
              decisions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-5">
              Conclusion
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A successful corporate travel program requires careful planning,
              the right technology, strong partnerships, and a commitment to
              employee satisfaction. By focusing on these key elements,
              organizations can create a travel experience that supports
              business objectives while keeping employees happy and safe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Latest Blog Posts
              </span>
            </h2>
            <p className="text-gray-600">
              Explore more insights from our experts
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={false}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={index}>
                <div className="relative p-0 border-0 bg-white hover:shadow-xl transition-all duration-500 transform hover:scale-105 overflow-hidden group cursor-pointer rounded-xl shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>

                  <div
                    className="h-56 bg-cover bg-center rounded-t-xl relative"
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
                        href="/blog-detail"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default blogDetail;
