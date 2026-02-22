"use client";

import React, { useState } from "react";
import Link from "next/link";

// Sample instructor data
const instructorData: Record<string, {
  name: string;
  title: string;
  company: string;
  image: string;
  linkedIn: string;
}> = {
  "~110976035": {
    name: "Dr. Mehmet Gökce",
    title: "AI Strategy Lead",
    company: "Fractal Analytics",
    image: "/instructor-mehmet.jpg",
    linkedIn: "mehmet-gokce-data",
  },
};

// Topic categories with images and course counts - matching CourseHub's exact design
const topics = [
  { name: "Arts and Humanities", courses: 338, slug: "arts-and-humanities", image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/arts_and_humanities.png?auto=format%2Ccompress&dpr=1&w=68&h=74&q=40&fit=crop" },
  { name: "Business", courses: 1095, slug: "business", image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png?auto=format%2Ccompress&dpr=1&w=68&h=74&q=40&fit=crop" },
  { name: "Computer Science", courses: 668, slug: "computer-science", image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/computer_science.png?auto=format%2Ccompress&dpr=1&w=68&h=74&q=40&fit=crop" },
  { name: "Data Science", courses: 425, slug: "data-science", image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png?auto=format%2Ccompress&dpr=1&w=68&h=74&q=40&fit=crop" },
  { name: "Information Technology", courses: 145, slug: "information-technology", image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/information_technology.png?auto=format%2Ccompress&dpr=1&w=68&h=74&q=40&fit=crop" },
  { name: "Health", courses: 471, slug: "life-sciences", image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/health.png?auto=format%2Ccompress&dpr=1&w=68&h=74&q=40&fit=crop" },
  { name: "Math and Logic", courses: 70, slug: "math-and-logic", image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/math_and_logic.png?auto=format%2Ccompress&dpr=1&w=68&h=74&q=40&fit=crop" },
  { name: "Personal Development", courses: 137, slug: "personal-development", image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/personal_development.png?auto=format%2Ccompress&dpr=1&w=68&h=74&q=40&fit=crop" },
  { name: "Physical Science and Engineering", courses: 413, slug: "physical-science-and-engineering", image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png?auto=format%2Ccompress&dpr=1&w=68&h=74&q=40&fit=crop" },
  { name: "Social Sciences", courses: 401, slug: "social-sciences", image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/social_sciences.png?auto=format%2Ccompress&dpr=1&w=68&h=74&q=40&fit=crop" },
  { name: "Language Learning", courses: 150, slug: "language-learning", image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/language_learning.png?auto=format%2Ccompress&dpr=1&w=68&h=74&q=40&fit=crop" },
];

export default function InstructorContent({ id }: { id: string }) {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  // Decode the URL-encoded id
  const decodedId = decodeURIComponent(id);
  const instructor = instructorData[decodedId] || {
    name: "Dr. Mehmet Gökce",
    title: "AI Strategy Lead",
    company: "Fractal Analytics",
    image: "/instructor-mehmet.jpg",
    linkedIn: "mehmet-gokce-data",
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Top Meta Navigation Bar */}
      <div className="hidden border-b border-slate-800 bg-black md:block">
        <div className="mx-auto flex max-w-[1400px] items-center px-4 py-1">
          <nav className="flex items-center">
            <Link href="/" className="group py-1 pr-3 text-xs hover:bg-white">
              <span className="text-gray-400 group-hover:text-black">For</span>{" "}
              <span className="text-white group-hover:text-black">Individuals</span>
            </Link>
            <Link href="/" className="group px-3 py-1 text-xs hover:bg-white">
              <span className="text-gray-400 group-hover:text-black">For</span>{" "}
              <span className="text-white group-hover:text-black">Businesses</span>
            </Link>
            <Link href="/" className="group px-3 py-1 text-xs hover:bg-white">
              <span className="text-gray-400 group-hover:text-black">For</span>{" "}
              <span className="text-white group-hover:text-black">Universities</span>
            </Link>
            <Link href="/" className="group px-3 py-1 text-xs hover:bg-white">
              <span className="text-gray-400 group-hover:text-black">For</span>{" "}
              <span className="text-white group-hover:text-black">Governments</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-[#0056D2]">CourseHub</span>
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsExploreOpen(true)}
            >
              <button
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Explore
                <svg className="h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
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
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">İşletme</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Bilgisayar Bilimleri</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Veri Bilimi</Link>
                            <Link href="/" className="block text-sm text-blue-700 hover:underline">Bilgi Teknolojileri</Link>
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

            <Link href="/" className="hidden rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 md:block">
              My Learning
            </Link>
            <Link href="/" className="hidden rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 md:block">
              Degrees
            </Link>
          </div>

          {/* Search Bar */}
          <div className="mx-4 hidden max-w-xl flex-1 md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="w-full rounded-full border border-slate-300 bg-slate-50 py-2.5 pl-4 pr-12 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <button className="rounded-full p-2 text-slate-600 hover:bg-slate-100">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </button>
            <button className="rounded-full p-2 text-slate-600 hover:bg-slate-100">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-semibold text-white">
              U
            </button>
          </div>
        </div>
      </header>

      {/* Instructor Profile Section */}
      <div className="flex-grow">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          {/* Profile Image */}
          <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-lg bg-slate-200">
            <img
              src="/profile/img_MehmetGOKCE.jpg"
              alt={instructor.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            {/* Name and LinkedIn on same row */}
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-slate-900">{instructor.name}</h1>
              {/* LinkedIn Link */}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-blue-600">{instructor.linkedIn}...</span>
              </div>
            </div>
            <p className="mt-2 cursor-pointer text-blue-600 hover:underline">
              • {instructor.company}
            </p>
          </div>
        </div>
      </div>

      {/* Other Topics to Explore */}
      <div className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-6 text-xl font-semibold text-slate-900">Other topics to explore</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {topics.map((topic) => (
            <Link
              key={topic.name}
              href={`/browse/${topic.slug}`}
              className="group flex h-[74px] w-[200px] items-stretch overflow-hidden rounded border border-[#e5e5e5] bg-white transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
              role="listitem"
            >
              {/* Image Container - 68px width, 74px height */}
              <div className="flex h-[74px] w-[68px] flex-shrink-0 items-center justify-center">
                <img
                  src={topic.image}
                  alt=""
                  width={68}
                  height={74}
                  className="h-[74px] w-[68px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Label Container - 133px width */}
              <div className="flex w-[133px] flex-col justify-center border-l border-[#e5e5e5] py-2 pl-3 pr-2">
                <div className="text-[14px] font-semibold leading-[20px] text-[#1f1f1f]">
                  {topic.name}
                </div>
                <span className="mt-0.5 text-[14px] leading-[20px] text-[#0056d2]">
                  {topic.courses} courses
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
            {/* CourseHub Column */}
            <div>
              <h3 className="mb-4 font-semibold text-slate-900">CourseHub</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-blue-600 hover:underline">About</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">What We Offer</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Leadership</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Careers</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Catalog</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">CourseHub Plus</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Professional Certificates</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">MasterTrack® Certificates</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Degrees</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">For Enterprise</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">For Government</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">For Campus</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Become a Partner</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Social Impact</Link></li>
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h3 className="mb-4 font-semibold text-slate-900">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-blue-600 hover:underline">Learners</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Partners</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Beta Testers</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Blog</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">The CourseHub Podcast</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Tech Blog</Link></li>
              </ul>
            </div>

            {/* More Column */}
            <div>
              <h3 className="mb-4 font-semibold text-slate-900">More</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-blue-600 hover:underline">Press</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Investors</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Terms</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Privacy</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Help</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Accessibility</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Contact</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Articles</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Directory</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Affiliates</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Modern Slavery Statement</Link></li>
                <li><Link href="/" className="text-blue-600 hover:underline">Manage Cookie Preferences</Link></li>
              </ul>
            </div>

            {/* Mobile App Column */}
            <div>
              <h3 className="mb-4 font-semibold text-slate-900">Mobile App</h3>
              <div className="space-y-3">
                <Link href="/" className="block">
                  <div className="flex h-10 w-32 items-center justify-center rounded-md bg-black text-xs text-white">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    App Store
                  </div>
                </Link>
                <Link href="/" className="block">
                  <div className="flex h-10 w-32 items-center justify-center rounded-md bg-black text-xs text-white">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Google Play
                  </div>
                </Link>
              </div>

              {/* B Corp Certification */}
              <div className="mt-6 text-center">
                <p className="text-xs text-slate-500">Certified</p>
                <div className="mt-2 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-900 text-2xl font-bold">
                    B
                  </div>
                </div>
                <p className="mt-1 text-xs text-slate-500">Corporation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-200">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-3 md:flex-row">
            <p className="text-sm text-slate-500">© 2025 CourseHub Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-slate-600 hover:text-slate-900">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="/" className="text-slate-600 hover:text-slate-900">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="/" className="text-slate-600 hover:text-slate-900">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
              <Link href="/" className="text-slate-600 hover:text-slate-900">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
              <Link href="/" className="text-slate-600 hover:text-slate-900">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
