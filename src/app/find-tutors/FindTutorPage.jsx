"use client";

import React, { useMemo, useState, useEffect } from "react";

export default function FindTutorPage() {
  const MOCK_TUTORS = [
    {
      id: 1,
      name: "Aisha Khan",
      subjects: ["Mathematics", "Physics"],
      level: "High School",
      location: "Nashik",
      rating: 4.9,
      pricePerHour: 800,
      bio: "Experienced tutor for Class 9-12 maths & physics. Focus on concepts and problem solving.",
      avatarColor: "bg-indigo-500",
    },
    {
      id: 2,
      name: "Ravi Verma",
      subjects: ["English", "Communication Skills"],
      level: "College",
      location: "Pune",
      rating: 4.6,
      pricePerHour: 600,
      bio: "English language & soft skills coach with 5+ years teaching experience.",
      avatarColor: "bg-emerald-500",
    },
    {
      id: 3,
      name: "Meera Joshi",
      subjects: ["Chemistry"],
      level: "High School",
      location: "Mumbai",
      rating: 4.8,
      pricePerHour: 900,
      bio: "Concept-driven chemistry tutoring and NEET prep support.",
      avatarColor: "bg-pink-500",
    },
    {
      id: 4,
      name: "Sandeep Rao",
      subjects: ["Computer Science", "JavaScript"],
      level: "College",
      location: "Nashik",
      rating: 4.7,
      pricePerHour: 750,
      bio: "Hands-on JS & React coach. Builds projects with students.",
      avatarColor: "bg-yellow-500",
    },
  ];
    const SUBJECTS = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Computer Science",
    "JavaScript",
    "Communication Skills",
  ];
  const LEVELS = ["Primary", "Middle School", "High School", "College", "Competitive Exams"];
  const LOCATIONS = ["Nashik", "Pune", "Mumbai", "Delhi", "Bengaluru"];
  const [tutors] = useState(MOCK_TUTORS);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;

  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchQuery.trim()), 250);
    return () => clearTimeout(t);
  }, [searchQuery]);

  const filtered = useMemo(() => {
    let list = tutors.slice();

    if (selectedSubject) {
      list = list.filter((t) => t.subjects.includes(selectedSubject));
    }
    if (selectedLevel) {
      list = list.filter((t) => t.level === selectedLevel);
    }
    if (selectedLocation) {
      list = list.filter((t) => t.location === selectedLocation);
    }
    if (debouncedSearch) {
      const q = debouncedSearch.toLowerCase();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.subjects.join(" ").toLowerCase().includes(q) ||
          t.bio.toLowerCase().includes(q)
      );
    }

    if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "priceAsc") {
      list.sort((a, b) => a.pricePerHour - b.pricePerHour);
    } else if (sortBy === "priceDesc") {
      list.sort((a, b) => b.pricePerHour - a.pricePerHour);
    }

    return list;
  }, [tutors, selectedSubject, selectedLevel, selectedLocation, debouncedSearch, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  useEffect(() => {
    // If filters change, reset to page 1
    setPage(1);
  }, [selectedSubject, selectedLevel, selectedLocation, debouncedSearch, sortBy]);

  const paginated = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  // Minimal accessibility-friendly input component
  function Select({ label, value, onChange, children }) {
    return (
      <label className="flex flex-col text-sm">
        <span className="mb-1 font-medium">{label}</span>
        <select
          className="rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-1"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {children}
        </select>
      </label>
    );
  }

  return (
    <main className="min-h-screen p-6  inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">Find a Tutor</h1>
            <p className="text-sm text-gray-600">Filter by subject, level, and location. Browse tutors and book a trial.</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-72">
              <label className="">Search tutors</label>
              <input
                placeholder="Search by name, subject or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                aria-label="Search tutors"
              />
            </div>

            <div>
              <Select label="Sort by" value={sortBy} onChange={setSortBy}>
                <option value="rating">Top rated</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <aside className="md:col-span-1 bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Filters</h3>
            <div className="space-y-3">
              <Select label="Subject" value={selectedSubject} onChange={setSelectedSubject}>
                <option value="">All subjects</option>
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </Select>

              <Select label="Level" value={selectedLevel} onChange={setSelectedLevel}>
                <option value="">All levels</option>
                {LEVELS.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </Select>

              <Select label="Location" value={selectedLocation} onChange={setSelectedLocation}>
                <option value="">Anywhere</option>
                {LOCATIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </Select>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => {
                    setSelectedSubject("");
                    setSelectedLevel("");
                    setSelectedLocation("");
                    setSearchQuery("");
                    setSortBy("rating");
                  }}
                  className="flex-1 rounded border px-3 py-2 text-sm hover:bg-gray-50"
                >
                  Reset
                </button>
                <button
                  onClick={() => {
                    setSelectedSubject("Mathematics");
                    setSelectedLevel("High School");
                    setSelectedLocation("Nashik");
                  }}
                  className="rounded bg-primary-600 px-3 py-2 text-sm text-white"
                >
                  Quick Apply
                </button>
              </div>
            </div>
          </aside>
          <section className="md:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">{filtered.length} tutors found</p>

              <div className="text-sm text-gray-500">Page {page} of {totalPages}</div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {paginated.map((tutor) => (
                <article key={tutor.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
                  <div className="flex items-start gap-3">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold ${tutor.avatarColor}`}>
                      {tutor.name.split(" ")[0].charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold">{tutor.name}</h4>
                      <div className="text-xs text-gray-500">{tutor.subjects.join(", ")} • {tutor.level}</div>
                      <div className="mt-2 text-sm text-gray-700 flex-1">{tutor.bio}</div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm">
                      <div className="font-medium">₹{tutor.pricePerHour}/hr</div>
                      <div className="text-xs text-gray-500">{tutor.location} • {tutor.rating} ★</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => alert(`Contact request sent to ${tutor.name}`)}
                        className="rounded border px-3 py-2 text-sm hover:bg-gray-50"
                      >
                        Contact
                      </button>
                      <button
                        onClick={() => alert(`Booked a trial with ${tutor.name}`)}
                        className="rounded bg-blue-600 px-3 py-2 text-sm text-white"
                      >
                        Book Trial
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <nav className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="rounded border px-3 py-2 text-sm disabled:opacity-50"
                >
                  Previous
                </button>

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="rounded border px-3 py-2 text-sm disabled:opacity-50"
                >
                  Next
                </button>
              </div>

              <div className="text-sm text-gray-600">Showing {paginated.length} of {filtered.length}</div>
            </nav>
          </section>
        </div>
      </div>
    </main>
  );
}
