"use client";

import { useState } from "react";
import Link from "next/link";

type Specialization = {
  title: string;
  provider: string;
  providerLogo: string;
  rating: number;
  reviewCount: number;
  enrolledCount: string;
  level: string;
  duration: string;
  hoursPerWeek: string;
  schedule: string;
  language: string;
  description: string;
  skills: string[];
  courses: {
    number: number;
    title: string;
    duration: string;
    rating: number;
    reviewCount: number;
    image?: string;
    description?: string;
    whatYouLearn?: string[];
    skills?: string[];
  }[];
  instructors: {
    name: string;
    title: string;
    image: string;
    courses: number;
    learners: string;
  }[];
  outcomes: string[];
};

export default function SpecializationContent({
  specialization,
}: {
  specialization: Specialization;
}) {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number[]>([]);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const faqs = [
    {
      question: "Is this course really 100% online? Do I need to attend any classes in person?",
      answer: "This course is completely online, so there's no need to show up to a classroom in person. You can access your lectures, readings and assignments anytime and anywhere via the web or your mobile device."
    },
    {
      question: "Can I just enroll in a single course?",
      answer: "Yes! To get started, click the course card that interests you and enroll. You can enroll and complete the course to earn a shareable certificate. When you subscribe to a course that is part of a Specialization, you're automatically subscribed to the full Specialization. Visit your learner dashboard to track your progress."
    },
    {
      question: "Is financial aid available?",
      answer: "Yes. In select learning programs, you can apply for financial aid or a scholarship if you can't afford the enrollment fee. If fin aid or scholarship is available for your learning program selection, you'll find a link to apply on the description page."
    },
    {
      question: "Can I take the course for free?",
      answer: "No, you cannot take this course for free. When you enroll in the course, you get access to all of the courses in the Specialization, and you earn a certificate when you complete the work. If you cannot afford the fee, you can apply for financial aid."
    },
    {
      question: "Will I earn university credit for completing the Specialization?",
      answer: "This Specialization doesn't carry university credit, but some universities may choose to accept Specialization Certificates for credit. Check with your institution to learn more."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Top Meta Navigation Bar */}
      <div className="hidden border-b border-slate-800 bg-black md:block">
        <div className="mx-auto flex max-w-[1400px] items-center px-4 py-1">
          <nav className="flex items-center">
            <Link
              href="/"
              className="group py-1 pr-3 text-xs hover:bg-white"
            >
              <span className="text-gray-400 group-hover:text-black">For</span>{" "}
              <span className="text-white group-hover:text-black">Individuals</span>
            </Link>
            <Link
              href="/"
              className="group px-3 py-1 text-xs hover:bg-white"
            >
              <span className="text-gray-400 group-hover:text-black">For</span>{" "}
              <span className="text-white group-hover:text-black">Businesses</span>
            </Link>
            <Link
              href="/"
              className="group px-3 py-1 text-xs hover:bg-white"
            >
              <span className="text-gray-400 group-hover:text-black">For</span>{" "}
              <span className="text-white group-hover:text-black">Universities</span>
            </Link>
            <Link
              href="/"
              className="group px-3 py-1 text-xs hover:bg-white"
            >
              <span className="text-gray-400 group-hover:text-black">For</span>{" "}
              <span className="text-white group-hover:text-black">Governments</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Header - CourseHub Style */}
      <header className="sticky top-0 z-50 bg-white">
        {/* Row 2: Main Navigation */}
        <div className="border-b border-slate-200">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3">
          {/* Left Section - Logo, Explore, My Learning, Degrees */}
          <div className="flex items-center gap-2">
            {/* Logo */}
            <Link href="/" className="mr-4 flex items-center">
              <span className="text-3xl font-bold text-[#0056D2]">CourseHub</span>
            </Link>

            {/* Explore Button */}
            <div
              className="relative"
              onMouseEnter={() => setIsExploreOpen(true)}
            >
              <button
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Explore
                <svg
                  className={`h-4 w-4 transition-transform ${isExploreOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </button>

              {/* Explore Mega Menu */}
              {isExploreOpen && (
                <>
                  {/* Invisible bridge from button to menu */}
                  <div className="absolute left-0 top-full h-[50px] w-[200px]" />
                  {/* Backdrop - closes menu on hover */}
                  <div
                    className="fixed inset-0 top-[100px] z-40 bg-black/20"
                    onMouseEnter={() => setIsExploreOpen(false)}
                  />
                  {/* Mega Menu */}
                  <div
                    className="fixed left-0 right-0 top-[100px] z-50 border-b border-slate-200 bg-white shadow-lg"
                    onMouseEnter={() => setIsExploreOpen(true)}
                    onMouseLeave={() => setIsExploreOpen(false)}
                  >
                    <div className="mx-auto max-w-[1400px] px-6 py-8">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Column 1: Explore roles */}
                        <div>
                          <h3 className="mb-4 font-semibold text-slate-900">Explore roles</h3>
                          <div className="space-y-2">
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Data Analyst</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Project Manager</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Cyber Security Analyst</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Data Scientist</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Business Intelligence Analyst</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Digital Marketing Specialist</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">UI/UX Designer</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Machine Learning Engineer</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Social Media Specialist</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Computer Support Specialist</Link>
                            <Link href="/" className="mt-3 block text-sm font-medium text-blue-700 hover:underline">View all</Link>
                          </div>
                        </div>

                        {/* Column 2: Explore categories */}
                        <div>
                          <h3 className="mb-4 font-semibold text-slate-900">Explore categories</h3>
                          <div className="space-y-2">
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Artificial Intelligence</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Business</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Data Science</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Information Technology</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Computer Science</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Healthcare</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Physical Science and Engineering</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Personal Development</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Social Sciences</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Language Learning</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Arts and Humanities</Link>
                            <Link href="/" className="mt-3 block text-sm font-medium text-blue-700 hover:underline">View all</Link>
                          </div>
                        </div>

                        {/* Column 3: Earn a Professional Certificate + Online Degree */}
                        <div>
                          <h3 className="mb-4 font-semibold text-slate-900">Earn a Professional Certificate</h3>
                          <div className="space-y-2">
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Business</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Computer Science</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Data Science</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Information Technology</Link>
                            <Link href="/" className="mt-3 block text-sm font-medium text-blue-700 hover:underline">View all</Link>
                          </div>

                          <h3 className="mb-4 mt-8 font-semibold text-slate-900">Earn an online degree</h3>
                          <div className="space-y-2">
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Bachelor's Degrees</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Master's Degrees</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Postgraduate Programs</Link>
                            <Link href="/" className="mt-3 block text-sm font-medium text-blue-700 hover:underline">View all</Link>
                          </div>
                        </div>

                        {/* Column 4: Explore trending skills + Certification exam */}
                        <div>
                          <h3 className="mb-4 font-semibold text-slate-900">Explore trending skills</h3>
                          <div className="space-y-2">
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Python</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Artificial Intelligence</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Excel</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Machine Learning</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">SQL</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Project Management</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Power BI</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Marketing</Link>
                          </div>

                          <h3 className="mb-4 mt-8 font-semibold text-slate-900">Prepare for a certification exam</h3>
                          <div className="space-y-2">
                            <Link href="/" className="block text-sm font-medium text-blue-700 hover:underline">View all</Link>
                          </div>
                        </div>
                      </div>

                      {/* Bottom section */}
                      <div className="mt-8 border-t border-slate-200 pt-6">
                        <p className="text-sm text-slate-600">
                          Not sure where to begin?{" "}
                          <Link href="/" className="text-blue-700 underline hover:text-blue-800">Browse free courses</Link>
                          {" "}or{" "}
                          <Link href="/" className="text-blue-700 hover:text-blue-800">
                            Learn more about{" "}
                            <span className="font-bold">
                              Course<span className="text-sky-500">Hub</span>
                              <span className="ml-1 rounded bg-sky-500 px-1 py-0.5 text-[9px] font-semibold text-white">
                                PLUS
                              </span>
                            </span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* My Learning */}
            <Link
              href="/"
              className="hidden rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 md:block"
            >
              My Learning
            </Link>

            {/* Degrees */}
            <Link
              href="/"
              className="hidden rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 lg:block"
            >
              Degrees
            </Link>
          </div>

          {/* Center - Search Bar */}
          <div className="mx-4 hidden max-w-md flex-1 md:block">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-4 w-4 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What do you want to learn?"
                className="w-full rounded-full border border-slate-300 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Right Section - Icons and User */}
          <div className="flex items-center gap-1">
            {/* Language Selector */}
            <button
              className="hidden rounded-full p-2 text-slate-600 hover:bg-slate-100 sm:block"
              aria-label="Select language"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 18a7.796 7.796 0 01-3.104-.625 8.064 8.064 0 01-2.552-1.719 8.063 8.063 0 01-1.719-2.552A7.797 7.797 0 012 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 014.27-4.26A7.797 7.797 0 0110 2c1.111 0 2.15.208 3.115.625a8.095 8.095 0 014.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 01-.625 3.104 8.063 8.063 0 01-4.26 4.271A7.774 7.774 0 0110 18z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 2v16M2 10h16"
                />
              </svg>
            </button>

            {/* Notifications */}
            <button
              className="relative rounded-full p-2 text-slate-600 hover:bg-slate-100"
              aria-label="Notifications"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.756 15.5a.738.738 0 01-.537-.214.714.714 0 01-.219-.532c0-.21.072-.39.216-.535A.72.72 0 014.75 14H5V9c0-1.208.372-2.27 1.115-3.188C6.858 4.896 7.819 4.327 9 4.104V3c0-.278.097-.514.292-.708A.964.964 0 0110 2c.278 0 .514.097.708.292.195.194.292.43.292.708v1.104c1.18.222 2.142.792 2.885 1.708C14.63 6.73 15 7.793 15 9v5h.25c.213 0 .39.072.534.214a.72.72 0 01.216.532c0 .21-.072.39-.215.535a.72.72 0 01-.535.219H4.756zM9.996 18c-.414 0-.767-.147-1.059-.44A1.45 1.45 0 018.5 16.5h3c0 .417-.147.77-.442 1.063A1.456 1.456 0 019.996 18z"
                />
              </svg>
            </button>

            {/* User Avatar */}
            <button
              className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-semibold text-white"
              aria-label="User menu"
            >
              U
            </button>
          </div>
          </div>
        </div>

        {/* Row 3: Breadcrumb Navigation */}
        <div className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-[1400px] px-4 py-2">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="flex items-center gap-1 hover:text-slate-900">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Browse
              </Link>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/" className="hover:text-slate-900">
                Data Science
              </Link>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-slate-700">Data Analysis</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Wrapper for Sticky Footer */}
      <div className="flex-grow">
      {/* CourseHub Plus Banner */}
      <div className="bg-[#E6EEFD] py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6">
          <p className="flex items-center gap-1 text-sm text-black">
            Unlock access to 10,000+ courses with
            <span className="mx-1 flex items-center gap-1">
              <span className="font-semibold">Course<span className="text-[#4a90a4]">Hub</span></span>
              <span className="rounded bg-[#4a90a4] px-1.5 py-0.5 text-xs font-bold text-white">PLUS</span>
            </span>.{" "}
            <Link href="/" className="font-semibold text-blue-600 underline hover:text-blue-800">
              Start 7-Day free trial
            </Link>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Provider */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-xl font-bold text-slate-900">
                  {specialization.provider.charAt(0)}
                </div>
                <span className="text-lg font-medium text-white">
                  {specialization.provider}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {specialization.title}
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-lg text-slate-300">
                {specialization.description}
              </p>

              {/* Instructors */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {specialization.instructors.map((instructor, idx) => (
                    <img
                      key={idx}
                      src="/profile/img_MehmetGOKCE.jpg"
                      alt={instructor.name}
                      className="h-10 w-10 rounded-full border-2 border-slate-800 object-cover"
                    />
                  ))}
                </div>
                <div className="text-sm text-slate-300">
                  Instructors:{" "}
                  <Link
                    href="https://coursehub.academy/instructor/~110976035"
                    className="text-sky-400 hover:underline"
                  >
                    {specialization.instructors.map((i) => i.name).join(", ")}
                  </Link>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="font-semibold text-white">
                    {specialization.rating}
                  </span>
                  <span className="text-slate-400">
                    ({specialization.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300">
                  {specialization.enrolledCount} already enrolled
                </span>
              </div>

              {/* Included with CourseHub Plus */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-300">Included with</span>
                <span className="font-bold text-white">
                  Course<span className="text-sky-400">Hub</span>
                  <span className="ml-1 rounded bg-sky-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                    PLUS
                  </span>
                </span>
                <span className="text-slate-500">•</span>
                <Link href="/" className="font-medium text-white hover:underline">
                  Learn more
                </Link>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>{specialization.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    {specialization.duration} at {specialization.hoursPerWeek}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{specialization.schedule}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                  <span>{specialization.language}</span>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Enrollment Card */}
            <div className="lg:row-span-2">
              <div className="sticky top-20 rounded-2xl border border-slate-700 bg-slate-800/95 p-6 shadow-xl backdrop-blur">
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-slate-400">Specialization</p>
                    <p className="text-2xl font-bold text-white">
                      {specialization.courses.length} Course Series
                    </p>
                  </div>

                  <button className="w-full rounded-full bg-sky-500 py-3 text-sm font-semibold text-white transition hover:bg-sky-600">
                    Enroll for Free
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Start your 7-day free trial
                  </p>

                  <div className="border-t border-slate-700 pt-4">
                    <ul className="space-y-3 text-sm text-slate-300">
                      <li className="flex items-start gap-2">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Earn a shareable certificate
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        100% online courses
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Self-paced learning
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Hands-on projects
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <button className="w-full rounded-lg border border-slate-600 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700">
                      Try for Free: Enroll to start your 7-day full access free
                      trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="space-y-12">
            {/* What you'll learn with Share Sidebar */}
            <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
              <section>
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  What you&apos;ll learn
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {specialization.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-slate-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Share Sidebar */}
              <div className="hidden space-y-6 lg:block">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-semibold text-slate-900">Share this Specialization</h3>
                  <div className="flex gap-2">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50 hover:text-[#1877F2]">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                      </svg>
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50 hover:text-black">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50 hover:text-[#0A66C2]">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.47 2H3.53a1.45 1.45 0 00-1.47 1.43v17.14A1.45 1.45 0 003.53 22h16.94a1.45 1.45 0 001.47-1.43V3.43A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 110-3.12 1.57 1.57 0 110 3.12zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0012.85 13a2 2 0 00-.1.73v5h-3v-9h3V11a3 3 0 012.71-1.5c2 0 3.45 1.29 3.45 4.06v5.18z" />
                      </svg>
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* FAQ */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-semibold text-slate-900">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-slate-700 hover:text-sky-600">
                        When will I have access to the lectures and assignments?
                        <svg className="h-4 w-4 transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-2 text-sm text-slate-600">Access to lectures and assignments depends on your type of enrollment.</p>
                    </details>
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-slate-700 hover:text-sky-600">
                        What is the refund policy?
                        <svg className="h-4 w-4 transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-2 text-sm text-slate-600">You can request a full refund within 14 days of your payment.</p>
                    </details>
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-slate-700 hover:text-sky-600">
                        Is financial aid available?
                        <svg className="h-4 w-4 transition group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-2 text-sm text-slate-600">Yes, financial aid is available for learners who cannot afford the fee.</p>
                    </details>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills you'll gain */}
            <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
              <section>
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Skills you&apos;ll gain
                </h2>
                <ul className="m-0 flex list-none flex-wrap gap-1 p-0">
                  {(showAllSkills ? specialization.skills : specialization.skills.slice(0, 12)).map((skill, idx) => (
                    <li key={idx} className="m-0 p-0">
                      <span className="inline-block rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-700 transition hover:border-sky-300 hover:bg-sky-50">
                        {skill}
                      </span>
                    </li>
                  ))}
                  {specialization.skills.length > 12 && (
                    <li className="m-0 p-0">
                      <button
                        onClick={() => setShowAllSkills(!showAllSkills)}
                        className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {showAllSkills ? "Show less" : "View all skills"}
                      </button>
                    </li>
                  )}
                </ul>
              </section>
              <div className="hidden lg:block" />
            </div>

            {/* Details to know */}
            <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
              <section>
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Details to know
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Shareable certificate */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100">
                      <svg className="h-6 w-6 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Shareable certificate</p>
                      <p className="text-sm text-slate-500">Add to your LinkedIn profile</p>
                    </div>
                  </div>

                  {/* Taught in English */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100">
                      <svg className="h-6 w-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.333 16.667c-.458 0-.85-.164-1.177-.49A1.605 1.605 0 011.666 15V5c0-.458.164-.85.49-1.177.327-.326.72-.49 1.177-.49h13.334c.458 0 .85.164 1.177.49.326.326.49.719.49 1.177v10c0 .458-.164.85-.49 1.177-.327.326-.719.49-1.177.49H3.333zm0-1.667h13.334V5H3.333v10zm2.5-1.667h5c.236 0 .434-.08.594-.24.16-.159.24-.357.24-.593a.806.806 0 00-.24-.594.807.807 0 00-.594-.24h-5a.806.806 0 00-.593.24.806.806 0 00-.24.594c0 .236.08.434.24.594.16.16.357.24.593.24zM9.167 10h5c.236 0 .434-.08.594-.24.16-.16.24-.357.24-.593a.806.806 0 00-.24-.594.806.806 0 00-.594-.24h-5a.806.806 0 00-.594.24.806.806 0 00-.24.594c0 .236.08.434.24.593.16.16.358.24.594.24zm-3.334 0c.237 0 .434-.08.594-.24.16-.16.24-.357.24-.593a.806.806 0 00-.24-.594.806.806 0 00-.594-.24.806.806 0 00-.593.24.806.806 0 00-.24.594c0 .236.08.434.24.593.16.16.357.24.593.24zm8.334 3.333c.236 0 .434-.08.594-.24.16-.159.24-.357.24-.593a.806.806 0 00-.24-.594.806.806 0 00-.594-.24.806.806 0 00-.594.24.806.806 0 00-.24.594c0 .236.08.434.24.594.16.16.358.24.594.24z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Taught in {specialization.language}</p>
                      <button className="text-sm text-blue-600 hover:underline">24 languages available</button>
                    </div>
                  </div>
                </div>
              </section>
              <div className="hidden lg:block" />
            </div>

            {/* Business Banner */}
            <section className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    See how employees at top companies are mastering in-demand skills
                  </h3>
                  <Link
                    href="/business"
                    className="mt-2 inline-block text-sm font-medium tracking-tight text-[#0056d2] no-underline hover:underline"
                  >
                    Learn more about CourseHub for Business
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/logos/company-logos.png"
                    alt="Logos of Petrobras, TATA, Danone, Capgemini, P&G and L'Oreal"
                    className="max-h-[70px] max-w-[320px]"
                  />
                </div>
              </div>
            </section>

            {/* Advance your subject-matter expertise */}
            <section>
              <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <h2 className="mb-6 text-2xl font-bold text-slate-900">
                      Advance your subject-matter expertise
                    </h2>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                        Learn in-demand skills from university and industry experts
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                        Master a subject or tool with hands-on projects
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                        Develop a deep understanding of key concepts
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                        Earn a career certificate from {specialization.provider}
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full overflow-hidden rounded-lg" style={{ aspectRatio: '32/9' }}>
                      <img
                        src="/images/certificate.jpg"
                        alt="Student studying in library"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
              </div>
            </section>

            {/* Course Series with Instructors Sidebar */}
            <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
              <section>
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Specialization - {specialization.courses.length} course series
                </h2>
                <p className="mb-6 text-slate-600">
                  Get started with these courses and build skills towards earning
                  your certificate.
                </p>
                <div className="space-y-0 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
                  {specialization.courses.map((course) => (
                    <div key={course.number} className="group">
                      {/* Course Header - Always Visible */}
                      <div
                        className="flex items-start gap-4 p-5"
                      >
                        {/* Course Image - 16:9 aspect ratio */}
                        <div className="w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-200" style={{ aspectRatio: '16/9' }}>
                          <img
                            src={course.image || `/images/courses/course-${course.number}.jpg`}
                            alt={course.title}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement!.innerHTML = `<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-400 to-blue-600 text-xl font-bold text-white">${course.number}</div>`;
                            }}
                          />
                        </div>

                        {/* Course Info */}
                        <div className="flex-1">
                          <Link
                            href={`/courses/${course.number}`}
                            className="text-base font-semibold text-blue-700 underline hover:text-blue-800"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {course.title}
                          </Link>
                          <p className="mt-1 text-sm text-slate-500">
                            Course {course.number} • {course.duration}
                          </p>
                        </div>

                        {/* Course Details Button - Arrow always visible, text appears on button hover */}
                        <button
                          className="group/btn flex cursor-pointer items-center justify-center gap-1 self-center rounded-lg px-3 text-sm font-medium text-blue-700 transition-all hover:px-4"
                          style={{ backgroundColor: 'rgb(240, 244, 252)', height: '40px' }}
                          onClick={() => setExpandedCourse(expandedCourse === course.number ? null : course.number)}
                        >
                          <span className="hidden whitespace-nowrap group-hover/btn:inline">Course details</span>
                          <svg
                            className={`h-4 w-4 transition-transform ${expandedCourse === course.number ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>

                      {/* Expanded Content */}
                      {expandedCourse === course.number && (
                        <div className="px-5 pb-6 pt-2">
                          {/* What you'll learn */}
                          <div className="mb-6">
                            <h4 className="mb-4 text-sm font-bold text-slate-900">What you&apos;ll learn</h4>
                            <ul className="space-y-3">
                              {(course.whatYouLearn && course.whatYouLearn.length > 0 ? course.whatYouLearn : [
                                "The foundational principles and real-world impact of this subject.",
                                "How to apply key concepts using effective techniques.",
                                "Practical applications in daily life and work.",
                                "Best practices and responsible use of the technologies."
                              ]).map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills you'll gain */}
                          <div>
                            <h4 className="mb-4 text-sm font-bold text-slate-900">Skills you&apos;ll gain</h4>
                            <div className="flex flex-wrap gap-2">
                              {(course.skills && course.skills.length > 0 ? course.skills : [
                                "Critical Thinking",
                                "Problem Solving",
                                "Data Analysis",
                                "Communication",
                                "Research"
                              ]).map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                  {/* Earn a career certificate box */}
                  <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 text-slate-700">
                        <svg
                          aria-hidden="true"
                          fill="none"
                          focusable="false"
                          height="34"
                          width="34"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M13.996 9.136l-1.142.87c-.057.045-.117.045-.18 0-.062-.046-.082-.103-.059-.17l.443-1.416-1.176-.92c-.056-.045-.074-.102-.05-.17.022-.069.073-.103.153-.103h1.414l.444-1.397c.022-.069.073-.103.153-.103s.13.034.153.103l.444 1.397h1.414c.08 0 .131.034.154.103.022.068.005.125-.051.17l-1.177.92.444 1.415c.022.068.002.125-.06.17-.063.046-.122.046-.179 0l-1.142-.869z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19 8c0 1.41-.584 2.684-1.523 3.593v3.398a.832.832 0 01-1 .814l-2.613-.54-2.614.54a.832.832 0 01-1-.814v-3.684A5 5 0 1119 8zm-5 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 1.5c.702 0 1.37-.145 1.977-.406v1.576l-2.113-.436-2.114.436v-1.704A4.98 4.98 0 0014 13z"
                            fill="currentColor"
                          />
                          <path
                            d="M8.25 5.5H2.5v11h15.75a.75.75 0 010 1.5H2.5c-.413 0-.766-.147-1.06-.44A1.445 1.445 0 011 16.5v-11c0-.412.147-.766.44-1.06.294-.293.647-.44 1.06-.44h5.75a.75.75 0 010 1.5z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">
                          Earn a career certificate
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          Add this credential to your LinkedIn profile, resume, or CV. Share it on social media and in your performance review.
                        </p>
                      </div>
                    </div>
                  </div>

              </section>

              {/* Instructors & Offered By Sidebar */}
              <div className="hidden space-y-6 lg:block">
                {/* Instructors */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-semibold text-slate-900">Instructors</h3>
                  <div className="space-y-4">
                    {specialization.instructors.map((instructor, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white">
                          {instructor.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-medium text-blue-600 hover:underline cursor-pointer">{instructor.name}</p>
                          <p className="text-sm text-slate-500">{instructor.title}</p>
                          <p className="text-xs text-slate-400">{instructor.courses} Courses • {instructor.learners} learners</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Offered By */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-semibold text-slate-900">Offered by</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-xl font-bold text-slate-900 border border-slate-200">
                      {specialization.provider.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-blue-600 hover:underline cursor-pointer">{specialization.provider}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    Learn from top instructors and earn credentials from leading organizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Why people choose CourseHub - Full Width */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Why people choose CourseHub for their career
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Testimonial 1 */}
                  <div className="rounded-xl border border-gray-500/50 bg-white p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <img
                        src="/images/testimonials/felipe.jpg"
                        alt="Felipe M."
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">Felipe M.</p>
                        <p className="text-xs text-slate-500">Learner since 2018</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      &quot;To be able to take courses at my own pace and rhythm has been an amazing experience. I can learn whenever it fits my schedule and mood.&quot;
                    </p>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="rounded-xl border border-gray-500/50 bg-white p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <img
                        src="/images/testimonials/jennifer.jpg"
                        alt="Jennifer J."
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">Jennifer J.</p>
                        <p className="text-xs text-slate-500">Learner since 2020</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      &quot;I directly applied the concepts and skills I learned from my courses to an exciting new project at work.&quot;
                    </p>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="rounded-xl border border-gray-500/50 bg-white p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <img
                        src="/images/testimonials/larry.jpg"
                        alt="Larry W."
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">Larry W.</p>
                        <p className="text-xs text-slate-500">Learner since 2021</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      &quot;When I need courses on topics that my university doesn&apos;t offer, CourseHub is one of the best places to go.&quot;
                    </p>
                  </div>

                  {/* Testimonial 4 */}
                  <div className="rounded-xl border border-gray-500/50 bg-white p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <img
                        src="/images/testimonials/chaitanya.jpg"
                        alt="Chaitanya A."
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">Chaitanya A.</p>
                        <p className="text-xs text-slate-500">Learner since 2019</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      &quot;Learning isn&apos;t just about being better at your job: it&apos;s so much more than that. CourseHub allows me to learn without limits.&quot;
                    </p>
                  </div>
              </div>
            </section>

            {/* Upsell Cards */}
            <section>
              <div className="grid gap-6 lg:grid-cols-3">
                {/* CourseHub Plus Card */}
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '458/580' }}>
                  <img
                    src="/images/upsell/coursera-plus.png"
                    alt="Learner holding certificates"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectPosition: 'calc(100% + 80px) center' }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-start p-6">
                    <div className="max-w-[280px] space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-slate-900">Course<span className="text-sky-500">Hub</span></span>
                        <span className="rounded bg-sky-500 px-2 py-0.5 text-xs font-semibold text-white">
                          PLUS
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold leading-tight text-slate-900">
                        Open new doors with CourseHub Plus
                      </h3>
                      <p className="text-sm text-slate-600">
                        Unlimited access to 10,000+ world-class courses, hands-on projects, and job-ready certificate programs
                      </p>
                      <Link
                        href="/plus"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#0056d2] hover:underline"
                      >
                        Learn more
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.125 10.75H4.75a.728.728 0 01-.535-.214.72.72 0 01-.215-.532c0-.21.072-.39.215-.535a.72.72 0 01.535-.219h8.375L9.454 5.579a.721.721 0 01-.225-.527c0-.201.077-.382.23-.541a.745.745 0 011.058.006l4.954 4.96a.722.722 0 01.216.526.76.76 0 01-.052.282.692.692 0 01-.156.236l-4.958 4.958a.681.681 0 01-.521.219.776.776 0 01-.52-.23.766.766 0 01-.23-.544.71.71 0 01.23-.528l3.645-3.646z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Online Degree Card */}
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '458/580' }}>
                  <img
                    src="/images/upsell/online-degree.png"
                    alt="Person studying online"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectPosition: 'calc(100% + 230px) center' }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-start p-6">
                    <div className="max-w-[280px] space-y-3">
                      <h3 className="text-2xl font-bold leading-tight text-white">
                        Advance your career with an online degree
                      </h3>
                      <p className="text-sm text-white/90">
                        Earn a degree from world-class universities - 100% online
                      </p>
                      <Link
                        href="/degrees"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:underline"
                        style={{ color: 'white' }}
                      >
                        Explore Degrees
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.125 10.75H4.75a.728.728 0 01-.535-.214.72.72 0 01-.215-.532c0-.21.072-.39.215-.535a.72.72 0 01.535-.219h8.375L9.454 5.579a.721.721 0 01-.225-.527c0-.201.077-.382.23-.541a.745.745 0 011.058.006l4.954 4.96a.722.722 0 01.216.526.76.76 0 01-.052.282.692.692 0 01-.156.236l-4.958 4.958a.681.681 0 01-.521.219.776.776 0 01-.52-.23.766.766 0 01-.23-.544.71.71 0 01.23-.528l3.645-3.646z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Business Card */}
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '458/580' }}>
                  <img
                    src="/images/upsell/business.png"
                    alt="Professional using a laptop"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectPosition: 'calc(100% + 100px) center' }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-start p-6">
                    <div className="max-w-[280px] space-y-3">
                      <h3 className="text-2xl font-bold leading-tight text-slate-900">
                        Join over 3,400 global companies that choose CourseHub for Business
                      </h3>
                      <p className="text-sm text-slate-600">
                        Upskill your employees to excel in the digital economy
                      </p>
                      <Link
                        href="/business"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#0056d2] hover:underline"
                      >
                        Learn more
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.125 10.75H4.75a.728.728 0 01-.535-.214.72.72 0 01-.215-.532c0-.21.072-.39.215-.535a.72.72 0 01.535-.219h8.375L9.454 5.579a.721.721 0 01-.225-.527c0-.201.077-.382.23-.541a.745.745 0 011.058.006l4.954 4.96a.722.722 0 01.216.526.76.76 0 01-.052.282.692.692 0 01-.156.236l-4.958 4.958a.681.681 0 01-.521.219.776.776 0 01-.52-.23.766.766 0 01-.23-.544.71.71 0 01.23-.528l3.645-3.646z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Frequently Asked Questions */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Frequently asked questions
              </h2>
              <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                {/* FAQ Accordion */}
                <div className="rounded-2xl border border-slate-200 bg-white">
                  {(showAllFaqs ? faqs : faqs.slice(0, 3)).map((faq, idx) => (
                    <div key={idx} className={idx !== 0 ? "border-t border-slate-200" : ""}>
                      <button
                        className="flex w-full items-start gap-3 p-5 text-left"
                        onClick={() => {
                          setExpandedFaq(prev =>
                            prev.includes(idx)
                              ? prev.filter(i => i !== idx)
                              : [...prev, idx]
                          );
                        }}
                      >
                        <svg
                          className={`mt-1 h-4 w-4 flex-shrink-0 text-slate-500 transition-transform ${expandedFaq.includes(idx) ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        <span className="font-medium text-slate-900">{faq.question}</span>
                      </button>
                      {expandedFaq.includes(idx) && (
                        <div className="px-5 pb-5 pl-12">
                          <p className="text-sm text-slate-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Show all / Show less button */}
                  <div className="border-t border-slate-200 p-4 text-center">
                    <button
                      className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900"
                      onClick={() => setShowAllFaqs(!showAllFaqs)}
                    >
                      {showAllFaqs ? "Show less" : `Show all ${faqs.length} frequently asked questions`}
                      <svg
                        className={`h-4 w-4 transition-transform ${showAllFaqs ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* More Questions Sidebar */}
                <div className="self-start rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300">
                    <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold text-slate-900">More questions</h3>
                  <Link href="#" className="text-sm text-blue-600 hover:underline">
                    Visit the learner help center
                  </Link>

                  <div className="mt-6 border-t border-slate-200 pt-6">
                    <p className="text-sm text-slate-600">
                      <Link href="#" className="text-blue-600 hover:underline">Financial aid available,</Link>
                      {" "}
                      <Link href="#" className="text-blue-600 hover:underline">learn more</Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>

        </div>
      </main>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-4">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {/* CourseHub */}
            <div>
              <h4 className="mb-4 font-semibold text-slate-900">Course<span className="text-sky-500">Hub</span></h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link href="#" className="hover:text-blue-600 hover:underline">About</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">What We Offer</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Leadership</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Careers</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Catalog</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">CourseHub Plus</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Professional Certificates</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">MasterTrack® Certificates</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Degrees</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">For Enterprise</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">For Government</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">For Campus</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Become a Partner</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Social Impact</Link></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="mb-4 font-semibold text-slate-900">Community</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Learners</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Partners</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Beta Testers</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Blog</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">The CourseHub Podcast</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Tech Blog</Link></li>
              </ul>
            </div>

            {/* More */}
            <div>
              <h4 className="mb-4 font-semibold text-slate-900">More</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Press</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Investors</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Terms</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Privacy</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Help</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Accessibility</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Contact</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Articles</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Directory</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Affiliates</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Modern Slavery Statement</Link></li>
                <li><Link href="#" className="hover:text-blue-600 hover:underline">Manage Cookie Preferences</Link></li>
              </ul>
            </div>

            {/* Mobile App & B Corp */}
            <div>
              <h4 className="mb-4 font-semibold text-slate-900">Mobile App</h4>
              <div className="space-y-3">
                <Link href="https://itunes.apple.com/app/apple-store/id736535961" className="block">
                  <img
                    src="/images/footer/app-store.svg"
                    alt="Download on the App Store"
                    className="h-[45px] w-auto"
                  />
                </Link>
                <Link href="http://play.google.com/store/apps/details?id=org.coursera.android" className="block">
                  <img
                    src="/images/footer/google-play.png"
                    alt="Get it on Google Play"
                    className="h-[45px] w-auto"
                  />
                </Link>
              </div>

              {/* Certified B Corporation */}
              <div className="mt-8">
                <img
                  src="/images/footer/b-corp-logo.png"
                  alt="Logo of Certified B Corporation"
                  className="h-[120px] w-auto"
                />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-4">
            <p className="text-sm leading-none text-slate-600">
              © 2025 CourseHub Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://facebook.com/coursera" aria-label="CourseHub Facebook" className="text-slate-500 hover:text-slate-700">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="https://linkedin.com/company/coursera" aria-label="CourseHub LinkedIn" className="text-slate-500 hover:text-slate-700">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com/coursera" aria-label="CourseHub Twitter" className="text-slate-500 hover:text-slate-700">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="https://youtube.com/coursera" aria-label="CourseHub YouTube" className="text-slate-500 hover:text-slate-700">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
              <Link href="https://instagram.com/coursera" aria-label="CourseHub Instagram" className="text-slate-500 hover:text-slate-700">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
