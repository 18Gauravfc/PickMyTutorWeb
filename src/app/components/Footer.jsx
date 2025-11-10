// app/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold border-b border-teal-400 inline-block mb-4 pb-1">
            Resources
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-teal-400">Learning mind </a></li>
            <li><a href="#" className="hover:text-teal-400">About us</a></li>
            <li><a href="#" className="hover:text-teal-400">Stay safe</a></li>
            <li><a href="#" className="hover:text-teal-400">Blog</a></li>
            <li><a href="#" className="hover:text-teal-400">Refer & earn coins</a></li>
            <li><a href="#" className="hover:text-teal-400">FAQs</a></li>
            <li><a href="#" className="hover:text-teal-400">Coins & Pricing</a></li>
            <li><a href="#" className="hover:text-teal-400">How it works - Students</a></li>
            <li><a href="#" className="hover:text-teal-400">Pay teachers</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold border-b border-teal-400 inline-block mb-4 pb-1">
            For teachers
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-teal-400">Get paid</a></li>
            <li><a href="#" className="hover:text-teal-400">Premium membership</a></li>
            <li><a href="#" className="hover:text-teal-400">Online teaching guide</a></li>
            <li><a href="#" className="hover:text-teal-400">How it works - Teachers</a></li>
            <li><a href="#" className="hover:text-teal-400">How to get jobs</a></li>
            <li><a href="#" className="hover:text-teal-400">Applying to jobs</a></li>
            <li><a href="#" className="hover:text-teal-400">Teacher Rankings</a></li>
            <li><a href="#" className="hover:text-teal-400">Share a story</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold border-b border-teal-400 inline-block mb-4 pb-1">
            Help and Feedback
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-teal-400">Feedback</a></li>
            <li><a href="#" className="hover:text-teal-400">Testimonials</a></li>
            <li><a href="#" className="hover:text-teal-400">Contact us</a></li>
            <li><a href="#" className="hover:text-teal-400">Refund Policy</a></li>
            <li><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-teal-400">Terms</a></li>
            <li className="border-t border-gray-500 pt-2">
              <a href="#" className="hover:text-teal-400">Games</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} My Pick my Tutor. All rights reserved as pearl Organisation.
      </div>
    </footer>
  );
}

