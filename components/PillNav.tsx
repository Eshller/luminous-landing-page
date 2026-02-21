import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoverPillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className = "",
  ease = "power3.easeOut",
  baseColor = "#0a0a0aff",
  pillColor = "#e1d8eeff",
  hoverPillColor,
  hoveredPillTextColor = "#060010",
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | HTMLElement | null>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const white = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" },
          0,
        );

        if (label) {
          tl.to(
            label,
            { y: -(h + 8), duration: 2, ease, overwrite: "auto" },
            0,
          );
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(
            white,
            { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" },
            0,
          );
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0, scaleY: 1, y: 0 });
    }

    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;

      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, {
          scale: 1,
          duration: 0.6,
          ease,
        });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: "hidden" });
        gsap.to(navItems, {
          width: "auto",
          duration: 0.6,
          ease,
        });
      }
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line");
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: "top center",
          },
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: "top center",
          onComplete: () => {
            gsap.set(menu, { visibility: "hidden" });
          },
        });
      }
    }

    onMobileMenuClick?.();
  };

  const isExternalLink = (href: string) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  const isAnchorLink = (href: string) => href.startsWith("#") || href.startsWith("/#");

  const isRouterLink = (href?: string) =>
    href && !isExternalLink(href) && !isAnchorLink(href);

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    let id = href;
    if (id.startsWith('/#')) {
      id = id.slice(2);
    } else if (id.startsWith('#')) {
      id = id.slice(1);
    }
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + id;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--pill-bg-hover"]: hoverPillColor || pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor,
    ["--nav-h"]: "64px",
    ["--logo"]: "50px",
    ["--pill-pad-x"]: "24px",
    ["--pill-gap"]: "40px",
  } as React.CSSProperties;

  useEffect(() => {
    const checkDarkSection = () => {
      const navRect = { top: 0, bottom: 100, left: 0, right: window.innerWidth };
      let overlapping = false;

      const allSections = document.querySelectorAll('section, div[class*="bg-"], header, main');
      
      allSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        
        if (rect.top < 100 && rect.bottom > 0) {
          const element = section as HTMLElement;
          const computedStyle = window.getComputedStyle(element);
          const bgColor = computedStyle.backgroundColor;
          
          const rgbaMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (rgbaMatch) {
            const r = parseInt(rgbaMatch[1]);
            const g = parseInt(rgbaMatch[2]);
            const b = parseInt(rgbaMatch[3]);
            
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
            
            if (luminance < 128) {
              overlapping = true;
            }
          }
          
          const className = element.className || '';
          if (
            className.includes('bg-[#0A1628]') ||
            className.includes('bg-black') ||
            className.includes('bg-gray-9') ||
            className.includes('bg-slate-9') ||
            className.includes('bg-indigo-') ||
            className.includes('bg-blue-9')
          ) {
            overlapping = true;
          }
        }
      });

      setIsOverDark(overlapping);
    };

    window.addEventListener("scroll", checkDarkSection);
    window.addEventListener("resize", checkDarkSection);
    checkDarkSection();

    return () => {
      window.removeEventListener("scroll", checkDarkSection);
      window.removeEventListener("resize", checkDarkSection);
    };
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-[1000] px-4 sm:px-6">
      <nav
        className={`flex items-center justify-between md:justify-center box-border rounded-2xl md:rounded-full transition-all duration-300 bg-white/90 backdrop-blur-md shadow-lg md:bg-transparent md:backdrop-blur-none md:shadow-none ${className} px-4 py-3 md:p-0 max-w-7xl mx-auto`}
        aria-label="Primary"
        style={cssVars}
      >
        <div className="md:hidden flex items-center">
          <a
            href="/"
            aria-label="Home"
            className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
          >
            <img
              src={logo}
              alt={logoAlt}
              className="h-10 w-auto object-contain"
              style={{ background: "transparent" }}
            />
          </a>
        </div>


        <div
          ref={navItemsRef}
          className={`relative items-center rounded-full hidden md:flex ml-2 backdrop-blur-md border shadow-lg transition-all duration-300 ${isOverDark ? "bg-white/95 border-gray-200" : "bg-white/10 border-white/20"}`}
          style={{
            height: "var(--nav-h)",
          }}
        >
          <div className="flex items-center justify-center pl-3 pr-2 h-full">
            {isRouterLink(items?.[0]?.href) ? (
              <Link
                to={items[0].href}
                aria-label="Home"
                role="menuitem"
                ref={(el) => {
                  logoRef.current = el;
                }}
                className="inline-flex items-center justify-center p-0 transition-all duration-300 hover:scale-105"
                style={{ background: "transparent" }}
              >
                <div
                  style={{ width: "var(--logo)", height: "var(--logo)" }}
                  className="flex-shrink-0"
                >
                  <img
                    src={logo}
                    alt={logoAlt}
                    ref={logoImgRef}
                    className="w-full h-full object-contain block"
                    style={{ background: "transparent" }}
                  />
                </div>
              </Link>
            ) : (
              <a
                href={items?.[0]?.href || "#"}
                aria-label="Home"
                ref={(el) => {
                  logoRef.current = el;
                }}
                className="inline-flex items-center justify-center p-0 transition-all duration-300 hover:scale-105"
                style={{ background: "transparent" }}
              >
                <div
                  style={{ width: "var(--logo)", height: "var(--logo)" }}
                  className="flex-shrink-0"
                >
                  <img
                    src={logo}
                    alt={logoAlt}
                    ref={logoImgRef}
                    className="w-full h-full object-contain block"
                    style={{ background: "transparent" }}
                  />
                </div>
              </a>
            )}
          </div>

          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: "var(--pill-gap)" }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              const pillStyle: React.CSSProperties = {
                background: "var(--pill-bg, #fff)",
                color: "var(--pill-text, var(--base, #000))",
                paddingLeft: "var(--pill-pad-x)",
                paddingRight: "var(--pill-pad-x)",
              };

              const PillContent = (
                <>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{
                      background: "var(--pill-bg-hover, var(--base, #000))",
                      willChange: "transform",
                    }}
                    aria-hidden="true"
                    ref={(el) => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span
                      className="pill-label relative z-[2] inline-block leading-[1]"
                      style={{ willChange: "transform" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                      style={{
                        color: "var(--hover-text, #fff)",
                        willChange: "transform, opacity",
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                      style={{ background: "var(--base, #000)" }}
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              const basePillClasses =
                "relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0";

              return (
                <li key={item.href} role="none" className="flex h-full">
                  {isRouterLink(item.href) ? (
                    <Link
                      role="menuitem"
                      to={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                                        onClick={
                        (item.href === "/" && window.location.pathname === "/") ||
                        (item.href === "/contact" && window.location.pathname === "/contact") ||
                        (item.href === "#contact" && window.location.pathname === "/contact")
                          ? (e) => e.preventDefault()
                          : undefined
                      }
                    >
                      {PillContent}
                    </Link>
                  ) : (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                      onClick={
                        isAnchorLink(item.href)
                          ? (e) => handleAnchorClick(e, item.href)
                          : undefined
                      }
                    >
                      {PillContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden rounded-lg border-0 flex flex-col items-center justify-center gap-1.5 cursor-pointer p-3 relative bg-[#040B23] hover:bg-[#0a1a3d] transition-colors"
        >
          <span className="hamburger-line w-5 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] bg-white" />
          <span className="hamburger-line w-5 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] bg-white" />
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] z-[998] origin-top bg-white border border-gray-100"
      >
        <ul className="list-none m-0 p-2 flex flex-col gap-1">
          {items.map((item) => {
            const linkClasses =
              "block py-3 px-4 text-[16px] font-medium rounded-xl transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] text-[#313755] hover:bg-[#040B23] hover:text-white";

            return (
              <li key={item.href}>
                {isRouterLink(item.href) ? (
                  <Link
                    to={item.href}
                    className={linkClasses}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={linkClasses}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (isAnchorLink(item.href)) {
                        handleAnchorClick(e, item.href);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
