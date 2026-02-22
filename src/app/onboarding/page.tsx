"use client";

import React from "react";
import { useRouter } from "next/navigation";

type GoalCard = {
  title: string;
  description: string;
  bg: string;
  icon: React.ReactNode;
};

const goals: GoalCard[] = [
  {
    title: "Start my career",
    description: "Essential skills for a fresh start",
    bg: "bg-[#2563EB]",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="transform rotate-45">
        <path d="M32 17
                 C 34.5 17, 37 20.5, 37 26
                 L 39 28 L 37 29 L 37 26
                 C 37 32, 35 35, 32 35
                 C 29 35, 27 32, 27 26
                 L 27 29 L 25 28 L 27 26
                 C 27 20.5, 29.5 17, 32 17 Z"
              stroke="white"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"/>
        <circle cx="32" cy="24" r="1.5" fill="white"/>
        <path d="M29 40 Q32 44 35 40" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Change my career",
    description: "Guidance for moving into a new field",
    bg: "bg-[#1E40AF]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12 text-white" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 9l-3 3 3 3m0 0l-3-3m3 3h12a2 2 0 002-2V7a2 2 0 00-2-2h-3"
        />
      </svg>
    ),
  },
  {
    title: "Advance in my current role",
    description: "Level up and take on more",
    bg: "bg-[#1D4ED8]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12 text-white" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Explore topics outside of work",
    description: "Discover what interests you",
    bg: "bg-[#1E3A8A]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12 text-white" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
];

export default function OnboardingPage() {
  const router = useRouter();

  const handleGoalClick = (goalTitle: string) => {
    if (goalTitle === "Start my career") {
      router.push("/onboarding/role-selection");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="flex w-full items-center justify-between px-6 py-4">
          <div className="text-3xl font-bold text-[#1f70ff]">coursehub</div>
          <a className="text-sm font-semibold text-[#1f70ff]" href="#">
            Exit
          </a>
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col pb-0 pt-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-sky-200 to-blue-500 shadow-md shadow-blue-200">
            <svg
              viewBox="0 0 64 64"
              className="h-12 w-12"
              aria-hidden
              fill="none"
            >
              <circle cx="32" cy="32" r="30" fill="url(#avatarGradient)" />
              <path
                d="M20 30a10 10 0 0120 0v4a12 12 0 01-12 12h-2a6 6 0 01-6-6V30z"
                fill="#f8fafc"
                stroke="#0f172a"
                strokeWidth="2"
              />
              <circle cx="25" cy="30" r="4.5" fill="#f8fafc" stroke="#0f172a" />
              <circle cx="39" cy="30" r="4.5" fill="#f8fafc" stroke="#0f172a" />
              <path
                d="M29.5 30c0 .6-.4 1-1 1h-5"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M34.5 30c0 .6.4 1 1 1h5"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="avatarGradient"
                  x1="14"
                  y1="8"
                  x2="54"
                  y2="56"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#60a5fa" />
                  <stop offset="1" stopColor="#34d399" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="mt-6 text-center">
            <h1 className="text-3xl font-semibold">Welcome back!</h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-700">
              Tell me a little about yourself so I can make the best recommendations.
              First, what&apos;s your goal?
            </p>
          </div>

          <section className="mt-10 grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
            {goals.map((goal) => (
              <div
                key={goal.title}
                onClick={() => handleGoalClick(goal.title)}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
              >
                <div
                  className={`relative flex h-40 items-center justify-center ${goal.bg} overflow-hidden`}
                >
                  {/* Decorative circle in top-left corner */}
                  <svg
                    className="absolute -left-8 -top-8 w-32 h-32"
                    viewBox="0 0 100 100"
                  >
                    <circle cx="50" cy="50" r="45" fill="white" fillOpacity="0.15" />
                  </svg>

                  {/* Decorative diagonal lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-10">
                    <line x1="50%" y1="0" x2="100%" y2="50%" stroke="white" strokeWidth="0.5"/>
                    <line x1="65%" y1="0" x2="100%" y2="35%" stroke="white" strokeWidth="0.5"/>
                  </svg>

                  <div className="relative z-10">{goal.icon}</div>
                </div>
                <div className="flex flex-1 flex-col gap-2 px-5 py-5 text-center">
                  <h3 className="text-base font-semibold text-slate-900">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-slate-600">{goal.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="mt-auto w-full pt-10">
          <div className="flex w-full justify-center rounded-2xl bg-white px-6 py-4 shadow-sm">
            <button
              className="flex items-center gap-2 rounded-xl bg-slate-200 px-8 py-3 text-sm font-semibold text-slate-500"
              disabled
            >
              Next
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
