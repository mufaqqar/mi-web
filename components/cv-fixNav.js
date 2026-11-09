import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaLanguage,
  FaLayerGroup,
  FaRocket,
  FaUser,
} from "react-icons/fa";

const sections = [
  { id: "summary", label: "Summary", icon: FaUser },
  { id: "expertise", label: "Expertise", icon: FaLayerGroup },
  { id: "experience", label: "Experience", icon: FaBriefcase },
  { id: "projects", label: "Projects", icon: FaRocket },
  { id: "skills", label: "Skills", icon: FaCode },
  { id: "education", label: "Education", icon: FaGraduationCap },
  { id: "languages", label: "Languages", icon: FaLanguage },
];

export default function CV_fixNav() {
  const [active, setActive] = useState("summary");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop rail */}
      <nav
        aria-label="Resume sections"
        className="cv-hide-print fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      >
        <ul className="overflow-hidden rounded-r-2xl border border-l-0 border-slate-200 bg-white/95 shadow-3xl backdrop-blur">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = active === section.id;

            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`group flex items-center gap-3 px-3 py-3 transition-colors duration-300 ${
                    isActive
                      ? "bg-title_color text-white"
                      : "text-title_color hover:bg-[#afd2e9]/40"
                  }`}
                >
                  <Icon aria-hidden="true" className="text-xl" />
                  <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 group-hover:max-w-[120px]">
                    {section.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile / tablet bar */}
      <nav
        aria-label="Resume sections"
        className="cv-hide-print sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur xl:hidden"
      >
        <div className="container mx-auto max-w-[1140px] px-4">
          <ul className="flex gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {sections.map((section) => {
              const isActive = active === section.id;

              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`block whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${
                      isActive
                        ? "bg-title_color text-white"
                        : "text-title_color hover:bg-slate-100"
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
