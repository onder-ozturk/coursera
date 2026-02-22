"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ExploreMenu() {
  const [open, setOpen] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const btnRef = useRef<HTMLButtonElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseEnter() {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setDropdownTop(rect.bottom);
    }
    setOpen(true);
  }

  function handleMouseLeave() {
    setOpen(false);
  }

  const viewAllStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "#1f1f1f",
    textDecoration: "underline",
    marginTop: "8px",
    display: "inline-block",
  };

  const itemStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "#1f1f1f",
    lineHeight: "1.35",
    textDecoration: "none",
    display: "block",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "13px",
    fontWeight: 700,
    color: "#1f1f1f",
    marginBottom: "10px",
    lineHeight: 1.3,
  };

  const listStyle: React.CSSProperties = {
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  return (
    <div ref={ref} className="relative" onMouseLeave={handleMouseLeave}>
      <button
        ref={btnRef}
        onMouseEnter={handleMouseEnter}
        style={{ color: "#000000", cursor: "pointer" }}
        className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium hover:bg-slate-100"
      >
        Explore
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          style={{
            position: "fixed",
            top: `${dropdownTop}px`,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: "white",
            borderTop: "1px solid #e2e8f0",
            borderBottom: "1px solid #e2e8f0",
            boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
          }}
        >
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "20px 24px 16px 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0 40px" }}>

              {/* Column 1 — Explore roles */}
              <div>
                <p style={headingStyle}>Explore roles</p>
                <ul style={listStyle}>
                  {["Data Analyst", "Project Manager", "Cyber Security Analyst", "Data Scientist", "Business Intelligence Analyst", "Digital Marketing Specialist", "UI / UX Designer", "Machine Learning Engineer", "Social Media Specialist", "Computer Support Specialist"].map((item) => (
                    <li key={item} style={{ marginBottom: "6px" }}>
                      <Link href="#" style={itemStyle} className="hover:underline">{item}</Link>
                    </li>
                  ))}
                </ul>
                <Link href="#" style={viewAllStyle}>View all</Link>
              </div>

              {/* Column 2 — Explore categories */}
              <div>
                <p style={headingStyle}>Explore categories</p>
                <ul style={listStyle}>
                  {["Artificial Intelligence", "Business", "Data Science", "Information Technology", "Computer Science", "Healthcare", "Physical Science and Engineering", "Personal Development", "Social Sciences", "Language Learning", "Arts and Humanities"].map((item) => (
                    <li key={item} style={{ marginBottom: "6px" }}>
                      <Link href="#" style={itemStyle} className="hover:underline">{item}</Link>
                    </li>
                  ))}
                </ul>
                <Link href="#" style={viewAllStyle}>View all</Link>
              </div>

              {/* Column 3 — Certificates + Degrees */}
              <div>
                <p style={headingStyle}>Earn a Professional Certificate</p>
                <ul style={listStyle}>
                  {["Business", "Computer Science", "Data Science", "Information Technology"].map((item) => (
                    <li key={item} style={{ marginBottom: "6px" }}>
                      <Link href="#" style={itemStyle} className="hover:underline">{item}</Link>
                    </li>
                  ))}
                </ul>
                <Link href="#" style={viewAllStyle}>View all</Link>

                <p style={{ ...headingStyle, marginTop: "20px" }}>Earn an online degree</p>
                <ul style={listStyle}>
                  {["Bachelor's Degrees", "Master's Degrees", "Postgraduate Programs"].map((item) => (
                    <li key={item} style={{ marginBottom: "6px" }}>
                      <Link href="#" style={itemStyle} className="hover:underline">{item}</Link>
                    </li>
                  ))}
                </ul>
                <Link href="#" style={viewAllStyle}>View all</Link>
              </div>

              {/* Column 4 — Trending skills + Certification */}
              <div>
                <p style={headingStyle}>Explore trending skills</p>
                <ul style={listStyle}>
                  {["Python", "Artificial Intelligence", "Excel", "Machine Learning", "SQL", "Project Management", "Power BI", "Marketing"].map((item) => (
                    <li key={item} style={{ marginBottom: "6px" }}>
                      <Link href="#" style={itemStyle} className="hover:underline">{item}</Link>
                    </li>
                  ))}
                </ul>

                <p style={{ ...headingStyle, marginTop: "20px" }}>Prepare for a certification exam</p>
                <Link href="#" style={viewAllStyle}>View all</Link>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "14px 24px", borderTop: "1px solid #e8e8e8" }}>
            <p style={{ fontSize: "12px", color: "#4a4a4a", lineHeight: 1.5, margin: 0 }}>
              Not sure where to begin?{" "}
              <Link href="#" style={{ color: "#1f1f1f", textDecoration: "underline" }}>Browse free courses</Link>
              {" "}or{" "}
              <span>
                Learn more about{" "}
                <Link href="#" style={{ color: "#0056D2", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>CourseHub</Link>
                <span style={{
                  marginLeft: "5px",
                  display: "inline-block",
                  background: "#B8960C",
                  color: "white",
                  fontSize: "10px",
                  fontWeight: 700,
                  padding: "1px 5px",
                  borderRadius: "2px",
                  lineHeight: "15px",
                  verticalAlign: "middle",
                  letterSpacing: "0.03em",
                }}>PREMIUM</span>
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
