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
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY.current && y > 50) {
        // scrolling DOWN → show both
        setShowFirst(true);
      } else {
        // scrolling UP → hide 1st, show only 2nd
        setShowFirst(false);
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div
        className="transition-all duration-300 overflow-hidden"
        style={{ maxHeight: showFirst ? "100px" : "0px" }}
      >
        {firstHeader}
      </div>
      {secondHeader}
    </div>
  );
}
