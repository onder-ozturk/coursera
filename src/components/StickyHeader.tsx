"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";

export default function StickyHeader({
  firstHeader,
  secondHeader,
}: {
  firstHeader: ReactNode;
  secondHeader: ReactNode;
}) {
  const [showFirst, setShowFirst] = useState(true);
  const [firstHeight, setFirstHeight] = useState(0);
  const firstRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (firstRef.current) {
      setFirstHeight(firstRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY.current && y > 50) {
        setShowFirst(true);
      } else {
        setShowFirst(false);
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="sticky z-50 transition-[top] duration-300"
      style={{ top: showFirst ? 0 : -firstHeight }}
    >
      <div ref={firstRef}>{firstHeader}</div>
      {secondHeader}
    </div>
  );
}
