"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Role = {
  title: string;
  icon: React.ReactNode;
  color: string;
};

// Icon components
const IconFlash = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconDocument = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const IconLightbulb = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const IconGear = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconChart = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const IconCube = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconTrendUp = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

const IconDatabase = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const IconGrid = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconGame = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
  </svg>
);

const IconServer = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const IconTruck = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

const IconCalculator = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const IconRobot = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconHome = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const IconWrench = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const IconCloud = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconLayers = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const IconShoppingCart = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IconCode = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const IconNetwork = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const IconClipboard = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const IconMegaphone = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
);

const IconSearch = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const IconPencil = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const IconUser = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconTerminal = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconLock = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const IconShare = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

const IconHeart = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const IconDollar = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconBeaker = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconCog = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const IconList = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

// All roles data
const allRoles: Role[] = [
  // Row 1
  { title: "Data Scientist", color: "bg-yellow-500", icon: <IconFlash /> },
  { title: "IT Project Manager", color: "bg-blue-600", icon: <IconDocument /> },
  { title: "Technology Consultant", color: "bg-purple-600", icon: <IconLightbulb /> },
  // Row 2
  { title: "Machine Learning Engineer", color: "bg-yellow-500", icon: <IconGear /> },
  { title: "Business Intelligence Analyst", color: "bg-yellow-600", icon: <IconChart /> },
  { title: "Product Manager", color: "bg-blue-700", icon: <IconCube /> },
  // Row 3
  { title: "Business / Management Analyst", color: "bg-purple-600", icon: <IconClock /> },
  { title: "Data Analyst", color: "bg-yellow-600", icon: <IconTrendUp /> },
  { title: "Data Warehouse Developer", color: "bg-blue-700", icon: <IconDatabase /> },
  // Row 4
  { title: "Cyber Security Engineer", color: "bg-yellow-500", icon: <IconGrid /> },
  { title: "Statistician", color: "bg-yellow-600", icon: <IconTrendUp /> },
  { title: "Video Game Developer", color: "bg-blue-600", icon: <IconGame /> },
  // Row 5
  { title: "Data Architect", color: "bg-yellow-500", icon: <IconGrid /> },
  { title: "Mainframe Developer", color: "bg-blue-600", icon: <IconServer /> },
  { title: "Marketing Analytics Specialist", color: "bg-purple-700", icon: <IconChart /> },
  // Row 6
  { title: "Logistics / Supply Chain Analyst", color: "bg-blue-600", icon: <IconTruck /> },
  { title: "Project Manager", color: "bg-blue-600", icon: <IconClipboard /> },
  { title: "Business Analyst (General)", color: "bg-purple-600", icon: <IconClock /> },
  // Row 7
  { title: "Tax Analyst / Specialist", color: "bg-blue-700", icon: <IconCalculator /> },
  { title: "Automation Engineer", color: "bg-blue-600", icon: <IconRobot /> },
  { title: "Cyber / Information Security Engineer / Analyst", color: "bg-purple-700", icon: <IconShield /> },
  // Row 8
  { title: "Real Estate Agent", color: "bg-yellow-500", icon: <IconHome /> },
  { title: "Technical Support Engineer / Analyst", color: "bg-blue-500", icon: <IconWrench /> },
  { title: "Social Media Strategist / Specialist", color: "bg-purple-700", icon: <IconShare /> },
  // Row 9
  { title: "User Interface / User Experience (UI / UX) Manager", color: "bg-purple-600", icon: <IconLayers /> },
  { title: "Back End Developer / Engineer", color: "bg-blue-600", icon: <IconCode /> },
  { title: "Data Engineer", color: "bg-yellow-500", icon: <IconGear /> },
  // Row 10
  { title: "iOS Developer / Engineer", color: "bg-blue-500", icon: <IconPhone /> },
  { title: "Cloud Architect", color: "bg-blue-500", icon: <IconCloud /> },
  { title: "Sales Representative", color: "bg-purple-700", icon: <IconShoppingCart /> },
  // Row 11
  { title: "Human Resources Specialist", color: "bg-yellow-500", icon: <IconUsers /> },
  { title: "Scrum Master", color: "bg-blue-700", icon: <IconClipboard /> },
  { title: "Full Stack Developer", color: "bg-blue-500", icon: <IconLayers /> },
  // Row 12
  { title: "Sales Development Representative", color: "bg-blue-700", icon: <IconMegaphone /> },
  { title: "Digital Marketing Specialist", color: "bg-blue-500", icon: <IconMegaphone /> },
  { title: "Bookkeeper / Accounting Clerk", color: "bg-purple-700", icon: <IconCalculator /> },
  // Row 13
  { title: "Solutions / Application Architect", color: "bg-yellow-500", icon: <IconGrid /> },
  { title: "Network / Systems Administrator", color: "bg-yellow-500", icon: <IconNetwork /> },
  { title: "DevOps Engineer", color: "bg-blue-500", icon: <IconCloud /> },
  // Row 14
  { title: "Customer Service Representative", color: "bg-yellow-500", icon: <IconHome /> },
  { title: "Front End Developer", color: "bg-blue-600", icon: <IconTerminal /> },
  { title: "Sales Operations Specialist", color: "bg-blue-500", icon: <IconTrendUp /> },
  // Row 15
  { title: "Application Developer / Engineer", color: "bg-blue-600", icon: <IconTerminal /> },
  { title: "Cyber Security Specialist / Technician", color: "bg-blue-500", icon: <IconLock /> },
  // Row 16
  { title: "Network Engineer / Architect", color: "bg-yellow-500", icon: <IconNetwork /> },
  { title: "Actuary", color: "bg-yellow-500", icon: <IconDollar /> },
  { title: "Risk Consultant", color: "bg-blue-700", icon: <IconChart /> },
  // Row 17
  { title: "Computer Support Specialist", color: "bg-blue-600", icon: <IconGear /> },
  { title: "Career Counselor", color: "bg-yellow-500", icon: <IconUsers /> },
  { title: "Computer Scientist", color: "bg-slate-200 !text-slate-600", icon: <IconUser /> },
  // Row 18
  { title: "Business Intelligence Architect / Developer", color: "bg-yellow-500", icon: <IconLightbulb /> },
  { title: "Analytics Manager", color: "bg-blue-500", icon: <IconDollar /> },
  { title: "Market Research Analyst", color: "bg-purple-700", icon: <IconSearch /> },
  // Row 19
  { title: "Chief Data Officer", color: "bg-blue-700", icon: <IconDatabase /> },
  { title: "Risk Analyst", color: "bg-blue-700", icon: <IconChart /> },
  { title: "Chief Information Officer", color: "bg-blue-600", icon: <IconDatabase /> },
  // Row 20
  { title: "Strategic Planner / Analyst", color: "bg-blue-700", icon: <IconChart /> },
  { title: "Data Warehousing Specialist", color: "bg-blue-500", icon: <IconDatabase /> },
  { title: "Business / Management Consultant", color: "bg-blue-700", icon: <IconChart /> },
  // Row 21
  { title: "Diversity, Equity, and Inclusion Specialist", color: "bg-yellow-500", icon: <IconUsers /> },
  { title: "Aerospace Engineer", color: "bg-slate-200 !text-slate-600", icon: <IconUser /> },
  { title: "Risk Manager / Analyst", color: "bg-blue-700", icon: <IconChart /> },
  // Row 22
  { title: "Fraud Examiner / Analyst", color: "bg-purple-600", icon: <IconShield /> },
  { title: "Corporate Development Analyst", color: "bg-blue-600", icon: <IconGear /> },
  { title: "Data / Data Mining Analyst", color: "bg-yellow-500", icon: <IconDatabase /> },
  // Row 23
  { title: "Advertising / Promotions Manager", color: "bg-blue-600", icon: <IconMegaphone /> },
  { title: "Business Program Analyst", color: "bg-blue-700", icon: <IconChart /> },
  { title: "Program Manager", color: "bg-blue-600", icon: <IconClipboard /> },
  // Row 24
  { title: "Pricing Analyst", color: "bg-blue-700", icon: <IconChart /> },
  { title: "Researcher / Research Associate", color: "bg-blue-500", icon: <IconSearch /> },
  { title: "Marketing Analyst", color: "bg-purple-700", icon: <IconMegaphone /> },
  // Row 25
  { title: "Risk Manager", color: "bg-blue-700", icon: <IconChart /> },
  { title: "Market Research Analyst (General)", color: "bg-purple-700", icon: <IconSearch /> },
  { title: "Data Manager", color: "bg-yellow-500", icon: <IconDatabase /> },
  // Row 26
  { title: "Biologist", color: "bg-yellow-500", icon: <IconBeaker /> },
  { title: "Sustainability Specialist", color: "bg-slate-200 !text-slate-600", icon: <IconUser /> },
  { title: "Financial Quantitative Analyst", color: "bg-blue-700", icon: <IconChart /> },
  // Row 27
  { title: "Talent Acquisition / Recruiting Manager", color: "bg-yellow-500", icon: <IconUsers /> },
  { title: "Supply Chain Analyst", color: "bg-blue-500", icon: <IconArrow /> },
  { title: "Human Resources Analyst", color: "bg-yellow-500", icon: <IconUsers /> },
  // Row 28
  { title: "Business Development Manager (General)", color: "bg-blue-600", icon: <IconBriefcase /> },
  { title: "Human Resources Consultant", color: "bg-blue-500", icon: <IconUsers /> },
  { title: "Project Management Analyst", color: "bg-blue-600", icon: <IconClipboard /> },
  // Row 29
  { title: "Business Analysis Manager", color: "bg-blue-700", icon: <IconChart /> },
  { title: "E-commerce Analyst", color: "bg-purple-700", icon: <IconShoppingCart /> },
  { title: "Writer", color: "bg-slate-200 !text-slate-600", icon: <IconUser /> },
  // Row 30
  { title: "Product Manager (General)", color: "bg-blue-700", icon: <IconList /> },
  { title: "Compensation / Benefits Analyst", color: "bg-blue-700", icon: <IconDollar /> },
  { title: "Director of Project Management", color: "bg-purple-700", icon: <IconClipboard /> },
  // Row 31
  { title: "Employee Relations Specialist", color: "bg-yellow-500", icon: <IconUsers /> },
  { title: "Systems Engineer", color: "bg-blue-600", icon: <IconGear /> },
  { title: "Product Development Manager", color: "bg-purple-600", icon: <IconList /> },
  // Row 32
  { title: "Inventory Control Manager", color: "bg-slate-200 !text-slate-600", icon: <IconUser /> },
  { title: "Budget Analyst", color: "bg-blue-700", icon: <IconChart /> },
  { title: "Chemical / Process Engineer", color: "bg-blue-500", icon: <IconBeaker /> },
  // Row 33
  { title: "Energy Engineer", color: "bg-slate-200 !text-slate-600", icon: <IconUser /> },
  { title: "Logistics Analyst", color: "bg-blue-500", icon: <IconArrow /> },
  { title: "Systems Integration Engineer / Specialist", color: "bg-blue-500", icon: <IconGear /> },
  // Row 34
  { title: "Compensation / Benefits Manager", color: "bg-yellow-500", icon: <IconUsers /> },
];

const INITIAL_VISIBLE = 10;
const LOAD_MORE_COUNT = 9;

export default function RoleSelectionPage() {
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const handleNext = () => {
    if (selectedRoles.length > 0) {
      const rolesParam = encodeURIComponent(selectedRoles.join(","));
      router.push(`/onboarding/skills?roles=${rolesParam}`);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, allRoles.length));
  };

  const toggleRole = (roleTitle: string) => {
    setSelectedRoles((prev) =>
      prev.includes(roleTitle)
        ? prev.filter((r) => r !== roleTitle)
        : [...prev, roleTitle]
    );
  };

  const visibleRoles = allRoles.slice(0, visibleCount);
  const hasMore = visibleCount < allRoles.length;

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
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6">
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
              Great! What roles are you interested in?
            </h1>
          </div>

          {/* Search Box */}
          <div className="mt-8 w-full max-w-lg">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
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
              <input
                type="text"
                placeholder="Find a role"
                className="w-full rounded-lg border border-slate-300 py-3 pl-12 pr-4 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Roles Grid */}
          <div className="mt-10 grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visibleRoles.map((role) => {
              const isSelected = selectedRoles.includes(role.title);
              return (
                <button
                  key={role.title}
                  onClick={() => toggleRole(role.title)}
                  className={`flex w-[309px] h-[82px] items-center gap-4 rounded-xl border-2 bg-white p-4 text-left shadow-sm transition hover:shadow-md hover:-translate-y-0.5 ${
                    isSelected
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-slate-200"
                  }`}
                >
                  <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${role.color}`}>
                    {role.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-slate-900 leading-tight">{role.title}</h3>
                  </div>
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

          {/* Show More Button */}
          {hasMore && (
            <button
              onClick={handleLoadMore}
              className="mt-6 mb-8 flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              <span className="text-lg">+</span>
              Show more roles
            </button>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-auto w-full pt-10">
          <div className="flex w-full justify-center gap-4 border-t border-slate-200 bg-white px-6 py-6">
            <a
              href="/onboarding"
              className="flex items-center gap-2 rounded-lg border-2 border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back
            </a>
            <button
              onClick={handleNext}
              className={`flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition ${
                selectedRoles.length > 0
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-slate-300 text-slate-500 cursor-not-allowed"
              }`}
              disabled={selectedRoles.length === 0}
            >
              Next
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
