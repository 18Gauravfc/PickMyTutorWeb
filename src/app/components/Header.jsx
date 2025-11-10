// app/components/Header.jsx
"use client"; // optional if you use hooks like useState/useEffect

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Pick My Tutor</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-300">Find Tutor</a></li>
            <li><a href="/carrer" className="hover:text-gray-300">Find Tutor Jobs</a></li>
            <li><a href="/assignment" className="hover:text-gray-300">Assignment</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
