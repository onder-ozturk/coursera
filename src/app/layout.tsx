import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CourseHub.Academy | Courses, Professional Certificates, and Degrees Online",
  description: "CourseHub learning platform interface (Next.js + Tailwind).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
