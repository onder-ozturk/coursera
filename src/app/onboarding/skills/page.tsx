"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type Skill = {
  title: string;
  color: string;
};

const roleSkills: Record<string, Skill[]> = {
  "Data Scientist": [
    { title: "Data Science", color: "bg-blue-600" },
    { title: "Machine Learning", color: "bg-blue-600" },
    { title: "Python Programming", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Statistics", color: "bg-blue-600" },
    { title: "Algorithms", color: "bg-blue-600" },
    { title: "Data Visualization", color: "bg-blue-600" },
    { title: "Deep Learning", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "IT Project Manager": [
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Planning", color: "bg-blue-600" },
    { title: "Risk Management", color: "bg-blue-600" },
    { title: "Stakeholder Management", color: "bg-blue-600" },
    { title: "Change Management", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Machine Learning Engineer": [
    { title: "Machine Learning", color: "bg-blue-600" },
    { title: "Python Programming", color: "bg-blue-600" },
    { title: "Artificial Intelligence", color: "bg-blue-600" },
    { title: "Algorithms", color: "bg-blue-600" },
    { title: "TensorFlow", color: "bg-blue-600" },
    { title: "PyTorch (Machine Learning Library)", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Data Science", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Technology Consultant": [
    { title: "Consulting", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Technical Analysis", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Business Analysis", color: "bg-blue-600" },
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Business Intelligence Analyst": [
    { title: "SQL", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Business Intelligence", color: "bg-blue-600" },
    { title: "Data Visualization", color: "bg-blue-600" },
    { title: "Power BI", color: "bg-blue-600" },
    { title: "Tableau Software", color: "bg-blue-600" },
    { title: "Analytical Skills", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Business Requirements", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Product Manager": [
    { title: "Product Management", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Strategic Planning", color: "bg-blue-600" },
    { title: "Market Research", color: "bg-blue-600" },
    { title: "User Experience", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Data Analyst": [
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "Python Programming", color: "bg-blue-600" },
    { title: "Data Visualization", color: "bg-blue-600" },
    { title: "Microsoft Excel", color: "bg-blue-600" },
    { title: "Statistics", color: "bg-blue-600" },
    { title: "Data Quality", color: "bg-blue-600" },
    { title: "Data Management", color: "bg-blue-600" },
    { title: "Data Modeling", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Cyber Security Engineer": [
    { title: "Automation", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "Vulnerability Management", color: "bg-blue-600" },
    { title: "Incident Response", color: "bg-blue-600" },
    { title: "Risk Analysis", color: "bg-blue-600" },
    { title: "Security Information and Event Management (SIEM)", color: "bg-blue-600" },
    { title: "Cloud Security", color: "bg-blue-600" },
    { title: "Python Programming", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Full Stack Developer": [
    { title: "Full-Stack Web Development", color: "bg-blue-600" },
    { title: "Javascript", color: "bg-blue-600" },
    { title: "Node.JS", color: "bg-blue-600" },
    { title: "React.js", color: "bg-blue-600" },
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "Cascading Style Sheets (CSS)", color: "bg-blue-600" },
    { title: "Hypertext Markup Language (HTML)", color: "bg-blue-600" },
    { title: "Software Development", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Business / Management Analyst": [
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Business Analysis", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Microsoft Excel", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Microsoft PowerPoint", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Data Warehouse Developer": [
    { title: "SQL", color: "bg-blue-600" },
    { title: "Data Warehousing", color: "bg-blue-600" },
    { title: "Extract, Transform, Load", color: "bg-blue-600" },
    { title: "Data Modeling", color: "bg-blue-600" },
    { title: "Data Integration", color: "bg-blue-600" },
    { title: "Business Intelligence", color: "bg-blue-600" },
    { title: "Python Programming", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Data Quality", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Statistician": [
    { title: "Technology Solutions", color: "bg-blue-600" },
    { title: "Statistics", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Biostatistics", color: "bg-blue-600" },
    { title: "Statistical Programming", color: "bg-blue-600" },
    { title: "Machine Learning", color: "bg-blue-600" },
    { title: "Detail Oriented", color: "bg-blue-600" },
    { title: "Epidemiology", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Video Game Developer": [
    { title: "Video Game Development", color: "bg-blue-600" },
    { title: "Software Engineering", color: "bg-blue-600" },
    { title: "C and C++", color: "bg-blue-600" },
    { title: "Unity Engine", color: "bg-blue-600" },
    { title: "Unreal Engine", color: "bg-blue-600" },
    { title: "Game Design", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Augmented Reality", color: "bg-blue-600" },
    { title: "Virtual Reality", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Data Architect": [
    { title: "Data Architecture", color: "bg-blue-600" },
    { title: "Data Modeling", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "Data Warehousing", color: "bg-blue-600" },
    { title: "Data Governance", color: "bg-blue-600" },
    { title: "Data Management", color: "bg-blue-600" },
    { title: "Data Integration", color: "bg-blue-600" },
    { title: "Data Quality", color: "bg-blue-600" },
    { title: "Python Programming", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Mainframe Developer": [
    { title: "COBOL (Programming Language)", color: "bg-blue-600" },
    { title: "Mainframe Computing", color: "bg-blue-600" },
    { title: "IBM DB2", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "Software Development Life Cycle", color: "bg-blue-600" },
    { title: "Software Development", color: "bg-blue-600" },
    { title: "Job Control Language (JCL)", color: "bg-blue-600" },
    { title: "Coordinating", color: "bg-blue-600" },
    { title: "z/OS", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Marketing Analytics Specialist": [
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Market Research", color: "bg-blue-600" },
    { title: "Analytical Skills", color: "bg-blue-600" },
    { title: "Statistics", color: "bg-blue-600" },
    { title: "Microsoft Excel", color: "bg-blue-600" },
    { title: "Google Analytics", color: "bg-blue-600" },
    { title: "Data Visualization", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Marketing", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Logistics / Supply Chain Analyst": [
    { title: "Supply Chain Management", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Forecasting", color: "bg-blue-600" },
    { title: "Inventory Management", color: "bg-blue-600" },
    { title: "Microsoft Excel", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Logistics", color: "bg-blue-600" },
    { title: "Supply Chain Planning", color: "bg-blue-600" },
    { title: "SAP Applications", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Project Manager": [
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Planning", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Time Management", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Organizational Skills", color: "bg-blue-600" },
    { title: "Risk Management", color: "bg-blue-600" },
    { title: "Budgeting", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Business Analyst (General)": [
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Business Requirements", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Business Process", color: "bg-blue-600" },
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "Business Analysis", color: "bg-blue-600" },
    { title: "Requirements Elicitation", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Tax Analyst / Specialist": [
    { title: "Tax Compliance", color: "bg-blue-600" },
    { title: "Tax Preparation", color: "bg-blue-600" },
    { title: "Tax Laws", color: "bg-blue-600" },
    { title: "Tax Planning", color: "bg-blue-600" },
    { title: "Analytical Skills", color: "bg-blue-600" },
    { title: "Detail Oriented", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Financial Statements", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Automation Engineer": [
    { title: "Electrical Engineering", color: "bg-blue-600" },
    { title: "Planning", color: "bg-blue-600" },
    { title: "Test Automation", color: "bg-blue-600" },
    { title: "DevOps", color: "bg-blue-600" },
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Systems Engineering", color: "bg-blue-600" },
    { title: "Control Systems", color: "bg-blue-600" },
    { title: "Automation", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Cyber / Information Security Engineer / Analyst": [
    { title: "Cybersecurity", color: "bg-blue-600" },
    { title: "Identity and Access Management", color: "bg-blue-600" },
    { title: "Risk Analysis", color: "bg-blue-600" },
    { title: "Auditing", color: "bg-blue-600" },
    { title: "Vulnerability", color: "bg-blue-600" },
    { title: "Firewall", color: "bg-blue-600" },
    { title: "Automation", color: "bg-blue-600" },
    { title: "Cloud Security", color: "bg-blue-600" },
    { title: "Scripting", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Real Estate Agent": [
    { title: "Real Estate", color: "bg-blue-600" },
    { title: "Sales Operations", color: "bg-blue-600" },
    { title: "Negotiation", color: "bg-blue-600" },
    { title: "Customer Relationship Management", color: "bg-blue-600" },
    { title: "Marketing", color: "bg-blue-600" },
    { title: "Real Estate Transactions", color: "bg-blue-600" },
    { title: "Lead Generation", color: "bg-blue-600" },
    { title: "Time Management", color: "bg-blue-600" },
    { title: "Marketing Strategies", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Technical Support Engineer / Analyst": [
    { title: "Technical Support", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Customer Service", color: "bg-blue-600" },
    { title: "Operating Systems", color: "bg-blue-600" },
    { title: "Help Desk Support", color: "bg-blue-600" },
    { title: "Networking Hardware", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Detail Oriented", color: "bg-blue-600" },
    { title: "Active Directory", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Social Media Strategist / Specialist": [
    { title: "Social Media Strategy", color: "bg-blue-600" },
    { title: "Content Creation", color: "bg-blue-600" },
    { title: "Social Media Marketing", color: "bg-blue-600" },
    { title: "Analytics", color: "bg-blue-600" },
    { title: "Digital Marketing", color: "bg-blue-600" },
    { title: "Social Media Management", color: "bg-blue-600" },
    { title: "Writing", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Creativity", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "User Interface / User Experience (UI / UX) Manager": [
    { title: "Marketing", color: "bg-blue-600" },
    { title: "Time Management", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Prototyping", color: "bg-blue-600" },
    { title: "User Research", color: "bg-blue-600" },
    { title: "Social Media", color: "bg-blue-600" },
    { title: "Virtual Teams", color: "bg-blue-600" },
    { title: "Mobile Development", color: "bg-blue-600" },
    { title: "UI/UX Strategy", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Back End Developer / Engineer": [
    { title: "Java Programming", color: "bg-blue-600" },
    { title: "Python Programming", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "Back-End Web Development", color: "bg-blue-600" },
    { title: "Microservices", color: "bg-blue-600" },
    { title: "Docker (Software)", color: "bg-blue-600" },
    { title: "Kubernetes", color: "bg-blue-600" },
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "Amazon Web Services", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Data Engineer": [
    { title: "Data Engineering", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "Python Programming", color: "bg-blue-600" },
    { title: "Extract, Transform, Load", color: "bg-blue-600" },
    { title: "Data Pipelines", color: "bg-blue-600" },
    { title: "Data Warehousing", color: "bg-blue-600" },
    { title: "Big Data", color: "bg-blue-600" },
    { title: "Apache Spark", color: "bg-blue-600" },
    { title: "Data Modeling", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "iOS Developer / Engineer": [
    { title: "Swift Programming", color: "bg-blue-600" },
    { title: "iOS Development", color: "bg-blue-600" },
    { title: "Apple iOS", color: "bg-blue-600" },
    { title: "Objective-C (Programming Language)", color: "bg-blue-600" },
    { title: "Mobile Development", color: "bg-blue-600" },
    { title: "Application Programming Interface (API)", color: "bg-blue-600" },
    { title: "Git (Version Control System)", color: "bg-blue-600" },
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "Debugging", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Cloud Architect": [
    { title: "Cloud Computing", color: "bg-blue-600" },
    { title: "Cloud Solutions", color: "bg-blue-600" },
    { title: "Amazon Web Services", color: "bg-blue-600" },
    { title: "Microsoft Azure", color: "bg-blue-600" },
    { title: "Google Cloud Platform", color: "bg-blue-600" },
    { title: "Infrastructure as Code (IaC)", color: "bg-blue-600" },
    { title: "DevOps", color: "bg-blue-600" },
    { title: "Cloud Security", color: "bg-blue-600" },
    { title: "Cloud Services", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Sales Representative": [
    { title: "Sales Operations", color: "bg-blue-600" },
    { title: "Customer Relationship Management", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Negotiation", color: "bg-blue-600" },
    { title: "Selling Techniques", color: "bg-blue-600" },
    { title: "Lead Generation", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Time Management", color: "bg-blue-600" },
    { title: "Self-Motivation", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Human Resources Specialist": [
    { title: "Human Resource Management", color: "bg-blue-600" },
    { title: "Talent Acquisition", color: "bg-blue-600" },
    { title: "Employee Relations", color: "bg-blue-600" },
    { title: "Training and Development", color: "bg-blue-600" },
    { title: "Performance Management", color: "bg-blue-600" },
    { title: "Labor Law", color: "bg-blue-600" },
    { title: "HR Tech", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Recruitment Strategies", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Scrum Master": [
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "Scrum (Software Development)", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Coaching", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Sprint Planning", color: "bg-blue-600" },
    { title: "Sprint Retrospectives", color: "bg-blue-600" },
    { title: "User Story", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Sales Development Representative": [
    { title: "Sales Operations", color: "bg-blue-600" },
    { title: "Customer Service", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Negotiation", color: "bg-blue-600" },
    { title: "Selling Techniques", color: "bg-blue-600" },
    { title: "Customer Relationship Management", color: "bg-blue-600" },
    { title: "Sales Prospecting", color: "bg-blue-600" },
    { title: "Self-Motivation", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Digital Marketing Specialist": [
    { title: "Digital Marketing", color: "bg-blue-600" },
    { title: "Search Engine Optimization", color: "bg-blue-600" },
    { title: "Social Media Marketing", color: "bg-blue-600" },
    { title: "Google Analytics", color: "bg-blue-600" },
    { title: "Content Marketing", color: "bg-blue-600" },
    { title: "Email Marketing", color: "bg-blue-600" },
    { title: "Search Engine Marketing", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Bookkeeper / Accounting Clerk": [
    { title: "Accounting", color: "bg-blue-600" },
    { title: "Bookkeeping", color: "bg-blue-600" },
    { title: "Microsoft Excel", color: "bg-blue-600" },
    { title: "Accounts Payable", color: "bg-blue-600" },
    { title: "Accounts Receivable", color: "bg-blue-600" },
    { title: "Financial Statements", color: "bg-blue-600" },
    { title: "Data Entry", color: "bg-blue-600" },
    { title: "Reconciliation", color: "bg-blue-600" },
    { title: "Generally Accepted Accounting Principles (GAAP)", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Solutions / Application Architect": [
    { title: "Solution Architecture", color: "bg-blue-600" },
    { title: "Cloud Computing", color: "bg-blue-600" },
    { title: "Microsoft Azure", color: "bg-blue-600" },
    { title: "Amazon Web Services", color: "bg-blue-600" },
    { title: "Software Development", color: "bg-blue-600" },
    { title: "Application Programming Interface (API)", color: "bg-blue-600" },
    { title: "Systems Architecture", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Network / Systems Administrator": [
    { title: "Systems Administration", color: "bg-blue-600" },
    { title: "Network Administration", color: "bg-blue-600" },
    { title: "Cybersecurity", color: "bg-blue-600" },
    { title: "Operating Systems", color: "bg-blue-600" },
    { title: "Linux", color: "bg-blue-600" },
    { title: "Windows Servers", color: "bg-blue-600" },
    { title: "TCP/IP", color: "bg-blue-600" },
    { title: "Firewall", color: "bg-blue-600" },
    { title: "Scripting", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "DevOps Engineer": [
    { title: "DevOps", color: "bg-blue-600" },
    { title: "Automation", color: "bg-blue-600" },
    { title: "CI/CD", color: "bg-blue-600" },
    { title: "Kubernetes", color: "bg-blue-600" },
    { title: "Docker (Software)", color: "bg-blue-600" },
    { title: "Terraform", color: "bg-blue-600" },
    { title: "Git (Version Control System)", color: "bg-blue-600" },
    { title: "Linux", color: "bg-blue-600" },
    { title: "Amazon Web Services", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Customer Service Representative": [
    { title: "Customer Service", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Empathy", color: "bg-blue-600" },
    { title: "Interpersonal Communications", color: "bg-blue-600" },
    { title: "Multitasking", color: "bg-blue-600" },
    { title: "Time Management", color: "bg-blue-600" },
    { title: "Detail Oriented", color: "bg-blue-600" },
    { title: "Customer Relationship Management", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Front End Developer": [
    { title: "Javascript", color: "bg-blue-600" },
    { title: "Front-End Web Development", color: "bg-blue-600" },
    { title: "Cascading Style Sheets (CSS)", color: "bg-blue-600" },
    { title: "Hypertext Markup Language (HTML)", color: "bg-blue-600" },
    { title: "React.js", color: "bg-blue-600" },
    { title: "User Interface (UI)", color: "bg-blue-600" },
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "Responsive Web Design", color: "bg-blue-600" },
    { title: "Git (Version Control System)", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Sales Operations Specialist": [
    { title: "Sales Operations", color: "bg-blue-600" },
    { title: "Customer Relationship Management (CRM) Software", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Negotiation", color: "bg-blue-600" },
    { title: "Selling Techniques", color: "bg-blue-600" },
    { title: "Sales Prospecting", color: "bg-blue-600" },
    { title: "Time Management", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Lead Generation", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Application Developer / Engineer": [
    { title: "Android Development", color: "bg-blue-600" },
    { title: "Kotlin", color: "bg-blue-600" },
    { title: "Java Programming", color: "bg-blue-600" },
    { title: "Mobile Development", color: "bg-blue-600" },
    { title: "Android Studio", color: "bg-blue-600" },
    { title: "Application Programming Interface (API)", color: "bg-blue-600" },
    { title: "Unit Testing", color: "bg-blue-600" },
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "Debugging", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Android Developer / Engineer": [
    { title: "Android Development", color: "bg-blue-600" },
    { title: "Kotlin", color: "bg-blue-600" },
    { title: "Java Programming", color: "bg-blue-600" },
    { title: "Mobile Development", color: "bg-blue-600" },
    { title: "Android Studio", color: "bg-blue-600" },
    { title: "Application Programming Interface (API)", color: "bg-blue-600" },
    { title: "Unit Testing", color: "bg-blue-600" },
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "Debugging", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Cyber Security Specialist / Technician": [
    { title: "Cybersecurity", color: "bg-blue-600" },
    { title: "Risk Management", color: "bg-blue-600" },
    { title: "Vulnerability Management", color: "bg-blue-600" },
    { title: "Network Security", color: "bg-blue-600" },
    { title: "Information Assurance", color: "bg-blue-600" },
    { title: "Incident Management", color: "bg-blue-600" },
    { title: "Penetration Testing", color: "bg-blue-600" },
    { title: "Security Information and Event Management (SIEM)", color: "bg-blue-600" },
    { title: "Cyber Threat Intelligence", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Network Engineer / Architect": [
    { title: "Network Engineering", color: "bg-blue-600" },
    { title: "Network Security", color: "bg-blue-600" },
    { title: "Network Routing", color: "bg-blue-600" },
    { title: "Network Troubleshooting", color: "bg-blue-600" },
    { title: "Firewall", color: "bg-blue-600" },
    { title: "TCP/IP", color: "bg-blue-600" },
    { title: "Automation", color: "bg-blue-600" },
    { title: "Dynamic Host Configuration Protocol (DHCP)", color: "bg-blue-600" },
    { title: "Local Area Networks", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Actuary": [
    { title: "Statistics", color: "bg-blue-600" },
    { title: "Risk Management", color: "bg-blue-600" },
    { title: "Financial Statements", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Advanced Mathematics", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "R Programming", color: "bg-blue-600" },
    { title: "Actuarial Science", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Risk Consultant": [
    { title: "Microsoft Excel", color: "bg-blue-600" },
    { title: "Prioritization", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Internal Controls", color: "bg-blue-600" },
    { title: "Governance", color: "bg-blue-600" },
    { title: "Python Programming", color: "bg-blue-600" },
    { title: "Risk Management", color: "bg-blue-600" },
    { title: "Financial Services", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Computer Support Specialist": [
    { title: "Technical Support", color: "bg-blue-600" },
    { title: "Customer Service", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Help Desk Support", color: "bg-blue-600" },
    { title: "Operating Systems", color: "bg-blue-600" },
    { title: "Information Technology Operations", color: "bg-blue-600" },
    { title: "Computer Hardware", color: "bg-blue-600" },
    { title: "Detail Oriented", color: "bg-blue-600" },
    { title: "Interpersonal Communications", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Career Counselor": [
    { title: "Case Management", color: "bg-blue-600" },
    { title: "Social Work", color: "bg-blue-600" },
    { title: "Human Services", color: "bg-blue-600" },
    { title: "Marketing", color: "bg-blue-600" },
    { title: "Workforce Development", color: "bg-blue-600" },
    { title: "Psychology", color: "bg-blue-600" },
    { title: "Medical Records", color: "bg-blue-600" },
    { title: "Disabilities", color: "bg-blue-600" },
    { title: "Student Services", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Computer Scientist": [
    { title: "Computer Science", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Electrical Engineering", color: "bg-blue-600" },
    { title: "Agile Methodology", color: "bg-blue-600" },
    { title: "Software Engineering", color: "bg-blue-600" },
    { title: "Data Science", color: "bg-blue-600" },
    { title: "Statistics", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "R Programming", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Business Intelligence Architect / Developer": [
    { title: "SQL", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Business Intelligence", color: "bg-blue-600" },
    { title: "Data Warehousing", color: "bg-blue-600" },
    { title: "Power BI", color: "bg-blue-600" },
    { title: "Tableau Software", color: "bg-blue-600" },
    { title: "Data Modeling", color: "bg-blue-600" },
    { title: "Extract, Transform, Load", color: "bg-blue-600" },
    { title: "Dashboard", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Analytics Manager": [
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Data Science", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "Python Programming", color: "bg-blue-600" },
    { title: "Machine Learning", color: "bg-blue-600" },
    { title: "Data Visualization", color: "bg-blue-600" },
    { title: "R Programming", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Market Research Analyst": [
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Market Research", color: "bg-blue-600" },
    { title: "Analytical Skills", color: "bg-blue-600" },
    { title: "Statistics", color: "bg-blue-600" },
    { title: "Microsoft Excel", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Data Visualization", color: "bg-blue-600" },
    { title: "Google Analytics", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Chief Data Officer": [
    { title: "Data Governance", color: "bg-blue-600" },
    { title: "Data Management", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Data Strategy", color: "bg-blue-600" },
    { title: "Data Quality", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Ethical Standards And Conduct", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Risk Analyst": [
    { title: "Risk Management", color: "bg-blue-600" },
    { title: "Interpersonal Communications", color: "bg-blue-600" },
    { title: "Operational Risk", color: "bg-blue-600" },
    { title: "Governance", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Analytical Skills", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Financial Services", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Chief Information Officer": [
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Strategic Planning", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Information Technology Operations", color: "bg-blue-600" },
    { title: "Cybersecurity", color: "bg-blue-600" },
    { title: "Innovation", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Digital Transformation", color: "bg-blue-600" },
    { title: "Risk Management", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Strategic Planner / Analyst": [
    { title: "Strategic Planning", color: "bg-blue-600" },
    { title: "Analytical Skills", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Decision Making", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "General Finance", color: "bg-blue-600" },
    { title: "Business Strategies", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Data Warehousing Specialist": [
    { title: "Data Quality", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Data Integrity", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Automation", color: "bg-blue-600" },
    { title: "Technology Solutions", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "Microsoft Excel", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Business / Management Consultant": [
    { title: "Consulting", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Strategic Planning", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Customer Relationship Management", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Financial Analysis", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Diversity, Equity, and Inclusion Specialist": [
    { title: "Coaching", color: "bg-blue-600" },
    { title: "Presentations", color: "bg-blue-600" },
    { title: "Marketing", color: "bg-blue-600" },
    { title: "Prioritization", color: "bg-blue-600" },
    { title: "Advocacy", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Training and Development", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Aerospace Engineer": [
    { title: "Systems Engineering", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Matlab", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Computer-Aided Design", color: "bg-blue-600" },
    { title: "Systems Integration", color: "bg-blue-600" },
    { title: "Mechanical Engineering", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Risk Manager / Analyst": [
    { title: "Risk Management", color: "bg-blue-600" },
    { title: "Risk Analysis", color: "bg-blue-600" },
    { title: "Governance", color: "bg-blue-600" },
    { title: "Risk Mitigation", color: "bg-blue-600" },
    { title: "Analytical Skills", color: "bg-blue-600" },
    { title: "Internal Controls", color: "bg-blue-600" },
    { title: "Regulatory Compliance", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Fraud Examiner / Analyst": [
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Investigation", color: "bg-blue-600" },
    { title: "Financial Services", color: "bg-blue-600" },
    { title: "Critical Thinking", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "Microsoft Excel", color: "bg-blue-600" },
    { title: "Time Management", color: "bg-blue-600" },
    { title: "Risk Analysis", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Corporate Development Analyst": [
    { title: "Financial Analysis", color: "bg-blue-600" },
    { title: "Financial Modeling", color: "bg-blue-600" },
    { title: "Mergers & Acquisitions", color: "bg-blue-600" },
    { title: "Collaboration", color: "bg-blue-600" },
    { title: "Analytical Skills", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Detail Oriented", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Data / Data Mining Analyst": [
    { title: "Automation", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Data Quality", color: "bg-blue-600" },
    { title: "Data Warehousing", color: "bg-blue-600" },
    { title: "Dashboard", color: "bg-blue-600" },
    { title: "Power BI", color: "bg-blue-600" },
    { title: "Analytical Skills", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Advertising / Promotions Manager": [
    { title: "Digital Marketing", color: "bg-blue-600" },
    { title: "Marketing", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Advertising Campaigns", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Analytics", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Business Program Analyst": [
    { title: "Communication", color: "bg-blue-600" },
    { title: "Writing", color: "bg-blue-600" },
    { title: "Process Improvement", color: "bg-blue-600" },
    { title: "Accounting", color: "bg-blue-600" },
    { title: "Coordinating", color: "bg-blue-600" },
    { title: "Milestones (Project Management)", color: "bg-blue-600" },
    { title: "Decision Making", color: "bg-blue-600" },
    { title: "Financial Management", color: "bg-blue-600" },
    { title: "Management Consulting", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Program Manager": [
    { title: "Program Management", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Strategic Planning", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Organizational Skills", color: "bg-blue-600" },
    { title: "Time Management", color: "bg-blue-600" },
    { title: "Budgeting", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Pricing Analyst": [
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Marketing", color: "bg-blue-600" },
    { title: "Innovation", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Organizational Skills", color: "bg-blue-600" },
    { title: "Project Coordination", color: "bg-blue-600" },
    { title: "Financial Systems", color: "bg-blue-600" },
    { title: "Financial Reporting", color: "bg-blue-600" },
    { title: "Financial Analysis", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Researcher / Research Associate": [
    { title: "R Programming", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Microsoft Excel", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Interpersonal Communications", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Clinical Research", color: "bg-blue-600" },
    { title: "Laboratory Experience", color: "bg-blue-600" },
    { title: "Machine Learning", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Marketing Analyst": [
    { title: "Data Visualization", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Market Research", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Customer Relationship Management", color: "bg-blue-600" },
    { title: "Analytics", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Tableau Software", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Risk Manager": [
    { title: "Risk Management", color: "bg-blue-600" },
    { title: "Governance", color: "bg-blue-600" },
    { title: "Risk Analysis", color: "bg-blue-600" },
    { title: "Risk Mitigation", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Analytical Skills", color: "bg-blue-600" },
    { title: "Decision Making", color: "bg-blue-600" },
    { title: "Regulatory Compliance", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Market Research Analyst (General)": [
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Writing", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Presentations", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "Microsoft PowerPoint", color: "bg-blue-600" },
    { title: "Forecasting", color: "bg-blue-600" },
    { title: "Key Performance Indicators (KPIs)", color: "bg-blue-600" },
    { title: "Time Management", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Data Manager": [
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Writing", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Presentations", color: "bg-blue-600" },
    { title: "SQL", color: "bg-blue-600" },
    { title: "Microsoft PowerPoint", color: "bg-blue-600" },
    { title: "Forecasting", color: "bg-blue-600" },
    { title: "Key Performance Indicators (KPIs)", color: "bg-blue-600" },
    { title: "Time Management", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Biologist": [
    { title: "Biology", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Molecular Biology", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Writing", color: "bg-blue-600" },
    { title: "Biochemistry", color: "bg-blue-600" },
    { title: "Laboratory Experience", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Sustainability Specialist": [
    { title: "Environmental Social And Corporate Governance (ESG)", color: "bg-blue-600" },
    { title: "Sustainability Reporting", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Research", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Environmental Science", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Financial Quantitative Analyst": [
    { title: "Econometrics", color: "bg-blue-600" },
    { title: "Quantitative Research", color: "bg-blue-600" },
    { title: "R Programming", color: "bg-blue-600" },
    { title: "Python Programming", color: "bg-blue-600" },
    { title: "Machine Learning", color: "bg-blue-600" },
    { title: "Financial Services", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Analytical Skills", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Talent Acquisition / Recruiting Manager": [
    { title: "Talent Acquisition", color: "bg-blue-600" },
    { title: "Recruitment Strategies", color: "bg-blue-600" },
    { title: "Talent Sourcing", color: "bg-blue-600" },
    { title: "Full Cycle Recruitment", color: "bg-blue-600" },
    { title: "Relationship Building", color: "bg-blue-600" },
    { title: "Negotiation", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "Supply Chain Analyst": [
    { title: "Supply Chain Management", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Microsoft Excel", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Inventory Management", color: "bg-blue-600" },
    { title: "Forecasting", color: "bg-blue-600" },
    { title: "Procurement", color: "bg-blue-600" },
    { title: "Communication", color: "bg-blue-600" },
    { title: "Planning", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
  "default": [
    { title: "Communication", color: "bg-blue-600" },
    { title: "Problem Solving", color: "bg-blue-600" },
    { title: "Critical Thinking", color: "bg-blue-600" },
    { title: "Leadership", color: "bg-blue-600" },
    { title: "Project Management", color: "bg-blue-600" },
    { title: "Data Analysis", color: "bg-blue-600" },
    { title: "Time Management", color: "bg-blue-600" },
    { title: "Teamwork", color: "bg-blue-600" },
    { title: "Adaptability", color: "bg-blue-600" },
    { title: "I don't know", color: "bg-slate-400" },
  ],
};

function SkillsContent() {
  const searchParams = useSearchParams();
  const rolesParam = searchParams.get("roles");

  // First try to match the full parameter (for roles with commas in the name)
  const decodedRoles = rolesParam ? decodeURIComponent(rolesParam) : "";

  // Check if the full param matches a role name, otherwise split by comma
  const matchedFullRole = Object.keys(roleSkills).find(
    (role) => role.toLowerCase() === decodedRoles.toLowerCase()
  );

  const selectedRole = matchedFullRole || (rolesParam ? rolesParam.split(",")[0] : "");

  // Case-insensitive role matching
  const matchedRole = matchedFullRole || Object.keys(roleSkills).find(
    (role) => role.toLowerCase() === selectedRole.toLowerCase()
  );
  const skills = roleSkills[matchedRole || ""] || roleSkills["default"];

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skillTitle: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skillTitle)
        ? prev.filter((s) => s !== skillTitle)
        : [...prev, skillTitle]
    );
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
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6">
          {/* Avatar */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-sky-200 to-blue-400 shadow-lg">
            <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none">
              <circle cx="32" cy="32" r="30" fill="url(#avatarGradient)" />
              <circle cx="32" cy="28" r="8" fill="white" stroke="black" strokeWidth="2" />
              <circle cx="29" cy="27" r="2" fill="black" />
              <circle cx="35" cy="27" r="2" fill="black" />
              <path d="M25 40c0-4 3-7 7-7s7 3 7 7" stroke="black" strokeWidth="2" fill="none" />
              <defs>
                <linearGradient id="avatarGradient" x1="14" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60a5fa" />
                  <stop offset="1" stopColor="#34d399" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Title */}
          <div className="mt-8 text-center">
            <h1 className="text-3xl font-semibold text-slate-900">
              What skills do you want to develop?
            </h1>
            {selectedRole && (
              <p className="mt-2 text-slate-600">
                Based on your interest in <span className="font-semibold text-blue-600">{selectedRole}</span>
              </p>
            )}
          </div>

          {/* Search Box */}
          <div className="mt-8 w-[513px] h-[48px]">
            <div className="relative h-full">
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  d="M8 13c-1.389 0-2.57-.486-3.542-1.458C3.486 10.569 3 9.389 3 8c0-1.389.486-2.57 1.458-3.542C5.431 3.486 6.611 3 8 3c1.389 0 2.57.486 3.542 1.458C12.514 5.431 13 6.611 13 8.001a4.78 4.78 0 01-.26 1.587 5.204 5.204 0 01-.72 1.37l4.46 4.459c.152.152.228.326.228.52a.718.718 0 01-.229.521.73.73 0 01-1.062 0l-4.459-4.437a5.204 5.204 0 01-1.37.719A4.78 4.78 0 018 13zm0-1.5c.972 0 1.799-.34 2.48-1.02.68-.681 1.02-1.508 1.02-2.48s-.34-1.799-1.02-2.48C9.798 4.84 8.971 4.5 8 4.5s-1.799.34-2.48 1.02C4.84 6.202 4.5 7.029 4.5 8s.34 1.799 1.02 2.48c.681.68 1.508 1.02 2.48 1.02z"
                  fill="currentColor"
                />
              </svg>
              <input
                type="search"
                placeholder="Find a skill"
                className="w-full h-full rounded-lg border border-slate-300 pl-12 pr-4 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mt-10 grid w-full max-w-3xl gap-y-2 gap-x-2 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {skills.map((skill) => {
              const isSelected = selectedSkills.includes(skill.title);
              return (
                <button
                  key={skill.title}
                  onClick={() => toggleSkill(skill.title)}
                  className={`flex w-[224px] min-h-[72px] items-center justify-between gap-4 rounded-xl border-2 bg-white p-4 text-left shadow-sm transition hover:shadow-md hover:-translate-y-0.5 ${
                    isSelected
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-slate-200"
                  }`}
                >
                  <h3 className="text-sm font-semibold text-slate-900">{skill.title}</h3>
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded transition ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "text-slate-400"
                    }`}
                  >
                    {isSelected ? (
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-auto w-full pt-10">
          <div className="flex w-full justify-center gap-4 border-t border-slate-200 bg-white px-6 py-6">
            <a
              href="/onboarding/role-selection"
              className="flex items-center gap-2 rounded-lg border-2 border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back
            </a>
            <button
              className={`flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition ${
                selectedSkills.length > 0
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-slate-300 text-slate-500 cursor-not-allowed"
              }`}
              disabled={selectedSkills.length === 0}
            >
              Finish
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>}>
      <SkillsContent />
    </Suspense>
  );
}
