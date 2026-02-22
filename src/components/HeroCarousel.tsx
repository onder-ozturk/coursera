"use client";

import { useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    bg: "#1c1d1f",
    dark: true,
    hasLogo: true,
    logoSrc:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/2RUX0RmYZsl7YlAxQx2zdc/6728bad98595bae5b0efc6acff80de1b/Google-White-Logo.svg?auto=format%2Ccompress&dpr=1&w=1232&h=27",
    logoSrcset:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/2RUX0RmYZsl7YlAxQx2zdc/6728bad98595bae5b0efc6acff80de1b/Google-White-Logo.svg?auto=format%2Ccompress&dpr=2&w=1232&h=27 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/2RUX0RmYZsl7YlAxQx2zdc/6728bad98595bae5b0efc6acff80de1b/Google-White-Logo.svg?auto=format%2Ccompress&dpr=3&w=1232&h=27 3x",
    title: "Master in-demand AI skills from Google experts",
    desc: "Master in-demand AI skills you can apply immediately from Google experts",
    cta: {
      label: "Register now",
      href: "https://www.coursera.org/professional-certificates/google-ai",
      variant: "outline" as const,
    },
    // Floating badges positioned on the image
    floatingBadges: [],
    image: {
      desktop: {
        src: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/2lKX7Y1gH4N95w5vpPml92/53e7d1d6ca852ae506b7e782853b451d/BC-5307_Google_AI_Professional_Certificate_LOHP_Desktop_326x138.png?auto=format%2C%20compress&dpr=1&w=323&q=40&fit=clip",
        srcset:
          "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/2lKX7Y1gH4N95w5vpPml92/53e7d1d6ca852ae506b7e782853b451d/BC-5307_Google_AI_Professional_Certificate_LOHP_Desktop_326x138.png?auto=format%2C%20compress&dpr=1&w=323&q=40&fit=clip 1x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/2lKX7Y1gH4N95w5vpPml92/53e7d1d6ca852ae506b7e782853b451d/BC-5307_Google_AI_Professional_Certificate_LOHP_Desktop_326x138.png?auto=format%2C%20compress&dpr=2&w=323&q=40&fit=clip 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/2lKX7Y1gH4N95w5vpPml92/53e7d1d6ca852ae506b7e782853b451d/BC-5307_Google_AI_Professional_Certificate_LOHP_Desktop_326x138.png?auto=format%2C%20compress&dpr=3&w=323&q=40&fit=clip 3x",
      },
      mobile: {
        src: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/62PT8hrfk7vv1X36m0j34p/b309f45061f82b92ee57b216a7e21d85/BC-5307_Google_AI_Professional_Certificate_Mobile_326x138.png?auto=format%2C%20compress&dpr=1&w=273&q=40&fit=clip",
        srcset:
          "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/62PT8hrfk7vv1X36m0j34p/b309f45061f82b92ee57b216a7e21d85/BC-5307_Google_AI_Professional_Certificate_Mobile_326x138.png?auto=format%2C%20compress&dpr=1&w=273&q=40&fit=clip 1x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/62PT8hrfk7vv1X36m0j34p/b309f45061f82b92ee57b216a7e21d85/BC-5307_Google_AI_Professional_Certificate_Mobile_326x138.png?auto=format%2C%20compress&dpr=2&w=273&q=40&fit=clip 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/62PT8hrfk7vv1X36m0j34p/b309f45061f82b92ee57b216a7e21d85/BC-5307_Google_AI_Professional_Certificate_Mobile_326x138.png?auto=format%2C%20compress&dpr=3&w=273&q=40&fit=clip 3x",
      },
    },
  },
  {
    id: 2,
    bg: "#f2f7ff",
    dark: false,
    hasLogo: true,
    logoSrc:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/2xszb1MyP1ukja0xtEf8hz/2fbc69ed225fef79015ef644125499ff/google_logo.png?auto=format%2Ccompress&dpr=1&w=559&h=27",
    logoSrcset:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/2xszb1MyP1ukja0xtEf8hz/2fbc69ed225fef79015ef644125499ff/google_logo.png?auto=format%2Ccompress&dpr=2&w=559&h=27 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/2xszb1MyP1ukja0xtEf8hz/2fbc69ed225fef79015ef644125499ff/google_logo.png?auto=format%2Ccompress&dpr=3&w=559&h=27 3x",
    title: "Get the skills you need for the job you want",
    desc: "Discover top-rated Google Professional Certificates",
    cta: {
      label: "Learn more",
      href: "https://www.coursera.org/google-career-certificates",
      variant: "solid" as const,
    },
    floatingBadges: [],
    image: {
      desktop: {
        src: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/VgF3DzSVddMYEtQr0qhgR/898077b1aa76e67c89cda68f9218ebf0/BC-5307_Google_AI_Professional_Certificate-2_330x304.png?auto=format%2C%20compress&dpr=1&w=323&q=40&fit=clip",
        srcset:
          "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/VgF3DzSVddMYEtQr0qhgR/898077b1aa76e67c89cda68f9218ebf0/BC-5307_Google_AI_Professional_Certificate-2_330x304.png?auto=format%2C%20compress&dpr=1&w=323&q=40&fit=clip 1x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/VgF3DzSVddMYEtQr0qhgR/898077b1aa76e67c89cda68f9218ebf0/BC-5307_Google_AI_Professional_Certificate-2_330x304.png?auto=format%2C%20compress&dpr=2&w=323&q=40&fit=clip 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/VgF3DzSVddMYEtQr0qhgR/898077b1aa76e67c89cda68f9218ebf0/BC-5307_Google_AI_Professional_Certificate-2_330x304.png?auto=format%2C%20compress&dpr=3&w=323&q=40&fit=clip 3x",
      },
      mobile: {
        src: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/6LvWXl9OoAEOcu6T1OLSN7/aeed11926beb2b4cc65f099a428d7b78/BC-5307_Google_AI_Professional_Certificate-2_Mobile_326x138.png?auto=format%2C%20compress&dpr=1&w=273&q=40&fit=clip",
        srcset:
          "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/6LvWXl9OoAEOcu6T1OLSN7/aeed11926beb2b4cc65f099a428d7b78/BC-5307_Google_AI_Professional_Certificate-2_Mobile_326x138.png?auto=format%2C%20compress&dpr=1&w=273&q=40&fit=clip 1x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/6LvWXl9OoAEOcu6T1OLSN7/aeed11926beb2b4cc65f099a428d7b78/BC-5307_Google_AI_Professional_Certificate-2_Mobile_326x138.png?auto=format%2C%20compress&dpr=2&w=273&q=40&fit=clip 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/6LvWXl9OoAEOcu6T1OLSN7/aeed11926beb2b4cc65f099a428d7b78/BC-5307_Google_AI_Professional_Certificate-2_Mobile_326x138.png?auto=format%2C%20compress&dpr=3&w=273&q=40&fit=clip 3x",
      },
    },
  },
  {
    id: 3,
    bg: "#f8fafc",
    dark: false,
    hasLogo: false,
    title: "Start, switch, or advance your career",
    desc: "Grow with courses from top organizations",
    cta: {
      label: "Join for Free",
      href: "/onboarding",
      variant: "solid" as const,
    },
    floatingBadges: [],
    image: {
      desktop: {
        src: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/3S3B2Fkv9RzncshAU3v44W/035cedad8f6ab1cc7e9986d0045371e4/JoinForFreeDesktop.png?auto=format%2C%20compress&dpr=1&w=323&q=40&fit=clip",
        srcset:
          "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/3S3B2Fkv9RzncshAU3v44W/035cedad8f6ab1cc7e9986d0045371e4/JoinForFreeDesktop.png?auto=format%2C%20compress&dpr=1&w=323&q=40&fit=clip 1x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/3S3B2Fkv9RzncshAU3v44W/035cedad8f6ab1cc7e9986d0045371e4/JoinForFreeDesktop.png?auto=format%2C%20compress&dpr=2&w=323&q=40&fit=clip 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/3S3B2Fkv9RzncshAU3v44W/035cedad8f6ab1cc7e9986d0045371e4/JoinForFreeDesktop.png?auto=format%2C%20compress&dpr=3&w=323&q=40&fit=clip 3x",
      },
      mobile: {
        src: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/58sXhT0eBFnK0e9mLWlX3s/6f85590688efbd2e07a687a54bbbbbb8/JoinForFreeMobile.png?auto=format%2C%20compress&dpr=1&w=273&q=40&fit=clip",
        srcset:
          "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/58sXhT0eBFnK0e9mLWlX3s/6f85590688efbd2e07a687a54bbbbbb8/JoinForFreeMobile.png?auto=format%2C%20compress&dpr=1&w=273&q=40&fit=clip 1x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/58sXhT0eBFnK0e9mLWlX3s/6f85590688efbd2e07a687a54bbbbbb8/JoinForFreeMobile.png?auto=format%2C%20compress&dpr=2&w=273&q=40&fit=clip 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/58sXhT0eBFnK0e9mLWlX3s/6f85590688efbd2e07a687a54bbbbbb8/JoinForFreeMobile.png?auto=format%2C%20compress&dpr=3&w=273&q=40&fit=clip 3x",
      },
    },
  },
];

type FloatingBadge = {
  text: string;
  position: { top: string; left: string };
  style: "gradient-purple" | "outline-dark" | "gradient-blue" | "gradient-orange";
};

function FloatingBadge({ badge }: { badge: FloatingBadge }) {
  const getBadgeStyles = () => {
    switch (badge.style) {
      case "gradient-purple":
        return {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#ffffff",
          border: "none",
        };
      case "gradient-blue":
        return {
          background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
          color: "#ffffff",
          border: "none",
        };
      case "gradient-orange":
        return {
          background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
          color: "#ffffff",
          border: "none",
        };
      case "outline-dark":
        return {
          background: "rgba(0, 0, 0, 0.6)",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        };
      default:
        return {
          background: "rgba(0, 0, 0, 0.5)",
          color: "#ffffff",
          border: "none",
        };
    }
  };

  const styles = getBadgeStyles();

  return (
    <span
      className="absolute inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap z-10"
      style={{
        ...styles,
        top: badge.position.top,
        left: badge.position.left,
        transform: "translateX(-50%)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      {badge.text}
    </span>
  );
}

function CTAButton({
  label,
  href,
  variant,
  dark,
}: {
  label: string;
  href: string;
  variant: "outline" | "solid";
  dark: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 rounded px-4 py-2 text-sm font-semibold transition ${
        variant === "outline"
          ? dark
            ? "bg-white text-[#0056d2] hover:bg-slate-100"
            : "border-2 border-slate-900 bg-white text-slate-900 hover:bg-slate-100"
          : "bg-[#0056d2] text-white hover:bg-[#00419e]"
      }`}
    >
      {label}
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  );
}

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const maxActive = slides.length - 2; // show 2 slides at a time

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(maxActive, a + 1));

  const cardWidth = "calc(50% - 6px)";

  return (
    <section className="w-full py-2">
      <div className="group relative">
          <div className="overflow-hidden">
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(calc(-${active} * 50%))`,
                gap: '12px',
              }}
              role="list"
            >
              {slides.map((slide, index) => (
                <article
                  key={slide.id}
                  role="listitem"
                  className="relative shrink-0 overflow-hidden rounded-2xl"
                  style={{
                    width: cardWidth,
                    backgroundColor: slide.bg,
                  }}
                >
                  {/* Layout: Text left, Image right with floating badges */}
                  <div className="flex h-full">
                {/* Text content area - 50% */}
                <div className="flex min-w-0 flex-1 flex-col p-4">
                  <div>
                    {/* Logo */}
                    {slide.hasLogo ? (
                      <div className="mb-2">
                        <img
                          src={(slide as typeof slides[0]).logoSrc}
                          srcSet={(slide as typeof slides[0]).logoSrcset}
                          alt=""
                          style={{
                            maxWidth: "100%",
                            maxHeight: "27px",
                            height: "auto",
                            width: "auto",
                          }}
                        />
                      </div>
                    ) : (
                      <div style={{ height: "24px" }} />
                    )}

                    {/* Title */}
                    <h2
                      className="text-[24px] font-bold leading-[1.25] tracking-tight lg:text-[28px]"
                      style={{ color: slide.dark ? "#ffffff" : "#1f1f1f" }}
                    >
                      {slide.title}
                    </h2>

                    {/* Description */}
                    <p
                      className="mt-3 text-[15px] leading-relaxed"
                      style={{ color: slide.dark ? "#d1d1d1" : "#636363" }}
                    >
                      {slide.desc}
                    </p>
                  </div>

                  {/* CTA button */}
                  <div className="mt-3">
                    <CTAButton
                      label={slide.cta.label}
                      href={slide.cta.href}
                      variant={slide.cta.variant}
                      dark={slide.dark}
                    />
                  </div>
                </div>

                {/* Image area - 50% with floating badges - no padding */}
                <div className="relative flex flex-1 items-stretch justify-center">
                  {/* Floating badges on image */}
                  {slide.floatingBadges && slide.floatingBadges.map((badge, idx) => (
                    <FloatingBadge key={idx} badge={badge} />
                  ))}
                  
                  <picture className="h-full w-full flex items-center justify-center">
                    <source
                      srcSet={slide.image.mobile.srcset}
                      media="(max-width: 768px)"
                    />
                    <source
                      srcSet={slide.image.desktop.srcset}
                      media="(min-width: 769px)"
                    />
                    <img
                      src={slide.image.desktop.src}
                      alt=""
                      fetchPriority={index < 2 ? "high" : "auto"}
                      className="h-full w-full object-cover"
                    />
                  </picture>
                </div>
              </div>
                </article>
              ))}
            </div>
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className={`absolute -left-2 top-1/2 z-20 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg transition-all duration-200 hover:scale-105 ${
              active === 0
                ? "pointer-events-none opacity-0"
                : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <svg className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className={`absolute -right-2 top-1/2 z-20 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg transition-all duration-200 hover:scale-105 ${
              active >= maxActive
                ? "pointer-events-none opacity-0"
                : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <svg className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-4 flex items-center gap-2">
          {Array.from({ length: maxActive + 1 }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-[#636363]"
                  : "w-2 bg-[#c4c4c4] hover:bg-[#a0a0a0]"
              }`}
            />
          ))}
        </div>
    </section>
  );
}
