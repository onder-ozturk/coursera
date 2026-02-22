import React from "react";
import Link from "next/link";
import SpecializationContent from "./SpecializationContent";

// Sample data - in production this would come from an API/database
const specializationData = {
  "generative-ai-for-business-consultants": {
    title: "Generative AI for Business Consultants",
    provider: "SAP",
    providerLogo: "/sap-logo.png",
    rating: 4.6,
    reviewCount: 52,
    enrolledCount: "5,138",
    level: "Beginner",
    duration: "1 month",
    hoursPerWeek: "10 hours/week",
    schedule: "Flexible schedule",
    language: "English",
    description:
      "Leverage generative AI to transform consulting practices and deliver exceptional business insights. This specialization teaches you how to use AI tools to enhance your consulting workflow, from data analysis to client presentations.",
    skills: [
      "ChatGPT",
      "Market Research",
      "Responsible AI",
      "Market Intelligence",
      "Large Language Modeling",
      "Prompt Engineering",
      "Microsoft Copilot",
      "Generative AI",
      "Google Gemini",
      "Consulting",
      "Data Ethics",
      "Business Consulting",
      "Critical Thinking",
      "Quality Assurance",
      "Anthropic Claude",
      "Technical Consulting",
      "AI Product Strategy",
      "Management Consulting",
      "Innovation",
      "Artificial Intelligence",
    ],
    courses: [
      {
        number: 1,
        title: "Introduction to Generative AI for Business",
        duration: "12 hours",
        rating: 4.7,
        reviewCount: 234,
      },
      {
        number: 2,
        title: "AI-Powered Data Analysis and Insights",
        duration: "15 hours",
        rating: 4.5,
        reviewCount: 189,
      },
      {
        number: 3,
        title: "Building AI Solutions for Consulting Projects",
        duration: "18 hours",
        rating: 4.6,
        reviewCount: 156,
      },
      {
        number: 4,
        title: "Capstone: AI Consulting Case Study",
        duration: "10 hours",
        rating: 4.8,
        reviewCount: 98,
      },
    ],
    instructors: [
      {
        name: "Dr. Mehmet Gökce",
        title: "AI Strategy Lead at SAP",
        image: "/instructor-1.jpg",
        courses: 12,
        learners: "45K+",
      },
    ],
    outcomes: [
      "Apply generative AI tools to real consulting scenarios",
      "Create AI-enhanced presentations and reports",
      "Develop data-driven business recommendations",
      "Build automated workflows for consulting tasks",
    ],
  },
};

type Params = Promise<{ slug: string }>;

export default async function SpecializationPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const specialization =
    specializationData[slug as keyof typeof specializationData] ||
    specializationData["generative-ai-for-business-consultants"];

  return <SpecializationContent specialization={specialization} />;
}

// Generate static params for static export
export function generateStaticParams() {
  return [{ slug: "generative-ai-for-business-consultants" }];
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const specialization =
    specializationData[slug as keyof typeof specializationData];

  return {
    title: specialization
      ? `${specialization.title} | CourseHub`
      : "Specialization | CourseHub",
    description:
      specialization?.description || "Learn with CourseHub specializations",
  };
}
