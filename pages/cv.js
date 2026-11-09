import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaCode,
  FaDatabase,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGitAlt,
  FaGlobe,
  FaGraduationCap,
  FaLanguage,
  FaLightbulb,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPrint,
  FaReact,
  FaServer,
  FaUsers,
  FaWordpress,
} from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";
import PageHead from "../components/pagesmeta";
import CV_fixNav from "../components/cv-fixNav";
import ExperienceTimeline from "../components/cv/experience-timeline";
import SectionHeading from "../components/cv/section-heading";
import SkillGroup from "../components/cv/skill-group";
import Testimonial from "../components/newComponents/testimonial";
import CTA from "../components/newComponents/cta";
import Profile_Pic from "../public/images/Profile.jpg";
import { breadcrumbSchema, SITE_URL } from "../const/schema";

const lastUpdated = "2026-11-09";
const lastUpdatedLabel = "November 9, 2026";

const cvSchema = [
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Resume", url: "/cv" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/cv#profilepage`,
    name: "Resume of Mufaqar Islam",
    url: `${SITE_URL}/cv`,
    description:
      "Resume of Mufaqar Islam, a full stack web developer with 15+ years of experience in WordPress, React, Next.js, PHP and Tailwind CSS.",
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Mufaqar Islam",
      jobTitle: "Full Stack Web Developer",
      email: "info@mufaqar.com",
      telephone: "+92 302-6006-280",
      url: SITE_URL,
      image: `${SITE_URL}/images/me.webp`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "134 B Ahmed Housing, Multan Road",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      knowsAbout: [
        "WordPress",
        "WooCommerce",
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "PHP",
        "Laravel",
        "Node.js",
        "Tailwind CSS",
        "MySQL",
        "GraphQL",
        "REST APIs",
        "Headless CMS",
        "Technical SEO",
        "Core Web Vitals",
        "Web Accessibility",
        "E-commerce Development",
      ],
      knowsLanguage: ["en", "ur"],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of the Punjab, Lahore",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Bachelor of Science in Computer Science",
          educationalLevel: "Bachelor's degree",
          recognizedBy: {
            "@type": "CollegeOrUniversity",
            name: "University of the Punjab, Lahore",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certificate",
          name: "Certification in Web Development",
        },
      ],
      worksFor: {
        "@type": "Organization",
        name: "SoftGens",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lahore",
          addressCountry: "PK",
        },
      },
      sameAs: [
        "https://www.linkedin.com/in/mufaqar",
        "https://github.com/mufaqar",
        "https://www.fiverr.com/mufaqar",
        "https://www.upwork.com/freelancers/~012991652310eb9c2a/",
        "https://twitter.com/mufaqar",
        "https://www.facebook.com/mufaqar",
      ],
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    dateModified: lastUpdated,
    inLanguage: "en-US",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "#summary-title"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: "Mufaqar Islam — Full Stack Web Developer CV",
    url: `${SITE_URL}/Mufaqar-Islam-CV.pdf`,
    fileFormat: "application/pdf",
    about: { "@id": `${SITE_URL}/#person` },
    dateModified: lastUpdated,
  },
];

const reveal = {
  offscreen: { opacity: 0, y: 24 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stats = [
  { value: "15+", label: "Years experience" },
  { value: "880+", label: "Projects delivered" },
  { value: "200+", label: "Clients worldwide" },
  { value: "24h", label: "Response time" },
];

const contactItems = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+92 302-6006-280",
    href: "tel:+923026006280",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "info@mufaqar.com",
    href: "mailto:info@mufaqar.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Lahore, Pakistan",
  },
  {
    icon: FaGlobe,
    label: "Website",
    value: "mufaqar.com",
    href: SITE_URL,
  },
];

const quickFacts = [
  { label: "Experience", value: "15+ years" },
  { label: "Projects delivered", value: "880+" },
  { label: "Clients worldwide", value: "200+" },
  { label: "Based in", value: "Lahore, Pakistan" },
  { label: "Availability", value: "Freelance & contract" },
  { label: "Response time", value: "Within 24 hours" },
  { label: "Languages", value: "English, Urdu" },
  { label: "Working style", value: "Remote worldwide" },
];

const careerHighlights = [
  "Delivered 880+ websites and applications for 200+ clients since 2010.",
  "Led front-end delivery of React and Next.js products at SoftGens since 2016.",
  "Migrated legacy WordPress sites to modern React and Next.js stacks without losing SEO.",
  "Built WooCommerce and Shopify stores with payments, shipping and CRM integrations.",
  "Improved Core Web Vitals and technical SEO on high-traffic client websites.",
  "Mentored junior developers and set front-end architecture and code standards.",
];

const competencies = [
  {
    icon: FaCode,
    title: "Full stack development",
    description:
      "End-to-end delivery from database schema and APIs to polished, accessible interfaces.",
  },
  {
    icon: FaWordpress,
    title: "WordPress & WooCommerce",
    description:
      "Custom themes, plugins, Gutenberg blocks and stores that clients can manage confidently.",
  },
  {
    icon: FaReact,
    title: "React & Next.js",
    description:
      "Component-driven SPAs, server-rendered sites and dashboards built with modern tooling.",
  },
  {
    icon: FaServer,
    title: "APIs & integrations",
    description:
      "REST and GraphQL APIs, payment gateways, CRMs and third-party services connected cleanly.",
  },
  {
    icon: FaChartLine,
    title: "Performance & SEO",
    description:
      "Core Web Vitals, technical SEO, analytics and accessibility baked in at launch.",
  },
  {
    icon: FaUsers,
    title: "Delivery & collaboration",
    description:
      "Fixed scope, clear communication, agile delivery and dependable long-term support.",
  },
];

const experience = [
  {
    role: "React.js Frontend Developer",
    company: "SoftGens",
    location: "Lahore, Pakistan",
    start: "Jul 2016",
    end: "Present",
    summary:
      "Lead front-end developer on long-running client accounts, shipping React and Next.js products and modernising legacy WordPress sites.",
    achievements: [
      "Build responsive, accessible web applications with React, Next.js, TypeScript and Tailwind CSS for clients in e-commerce, education and SaaS.",
      "Translate design systems and Figma wireframes into reusable, component-driven interfaces.",
      "Integrate headless CMS platforms such as Sanity, Strapi and WordPress REST/GraphQL into decoupled front ends.",
      "Migrate high-traffic marketing sites from WordPress to React and Next.js while protecting SEO, analytics and redirects.",
      "Define front-end architecture, API contracts and coding standards; review code and mentor junior developers.",
      "Maintain existing React systems, fix bugs and improve Core Web Vitals and accessibility.",
      "Ship to Vercel, Netlify and managed hosting with CI/CD and preview deployments.",
      "Work in agile, cross-functional teams with designers, back-end engineers and stakeholders.",
    ],
    stack: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "Sanity",
      "Strapi",
      "WordPress",
      "Vercel",
    ],
  },
  {
    role: "WordPress Developer",
    company: "SWS",
    location: "Lahore, Pakistan",
    start: "Mar 2012",
    end: "May 2016",
    summary:
      "Delivered custom WordPress themes and front ends for agency clients across multiple industries.",
    achievements: [
      "Developed custom WordPress themes from PSD designs with responsive layouts and cross-browser support.",
      "Built and customised plugins, page templates and WooCommerce stores.",
      "Integrated social media SDKs, third-party APIs and marketing tools.",
      "Improved page speed and on-page SEO for client websites.",
    ],
    stack: [
      "WordPress",
      "PHP",
      "WooCommerce",
      "HTML5",
      "CSS3",
      "jQuery",
      "MySQL",
    ],
  },
  {
    role: "PHP Web Developer",
    company: "WebRiver",
    location: "Lahore, Pakistan",
    start: "Jan 2010",
    end: "Jan 2012",
    summary:
      "Built and maintained PHP websites and database-driven applications for small business clients.",
    achievements: [
      "Developed PHP-based websites and custom features from client requirements.",
      "Customised front-end templates and connected them to MySQL back ends.",
      "Handled maintenance, bug fixes and deployments.",
    ],
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
];

const projects = [
  {
    title: "AnyPOS",
    type: "SaaS / point of sale",
    description:
      "A modern point-of-sale web application for retail teams, with a fast, responsive interface and a deployment pipeline on Vercel.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://www.anypos.app",
  },
  {
    title: "Solution Founder",
    type: "Corporate website",
    description:
      "A business consultancy website built on WordPress with a custom theme, flexible content blocks and performance-first hosting.",
    stack: ["WordPress", "Custom theme", "SEO"],
    link: "https://www.solutionfounder.com",
  },
  {
    title: "Mams House",
    type: "E-commerce",
    description:
      "A WooCommerce storefront with custom product templates, secure payments, shipping configuration and ongoing maintenance.",
    stack: ["WooCommerce", "WordPress", "PHP"],
    link: "https://mamshouse.com",
  },
  {
    title: "Fund Gazer",
    type: "Finance / content platform",
    description:
      "A content-led WordPress site for a finance platform, with custom post types, clean information architecture and technical SEO.",
    stack: ["WordPress", "Custom post types", "Technical SEO"],
    link: "https://www.fundgazer.com",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: FaReact,
    skills: [
      { name: "React.js", level: "Expert", value: 95 },
      { name: "Next.js", level: "Expert", value: 92 },
      { name: "JavaScript (ES6+)", level: "Expert", value: 93 },
      { name: "TypeScript", level: "Advanced", value: 82 },
      { name: "Tailwind CSS", level: "Expert", value: 96 },
      { name: "HTML5 & CSS3", level: "Expert", value: 98 },
    ],
  },
  {
    title: "Backend & data",
    icon: FaServer,
    skills: [
      { name: "PHP", level: "Expert", value: 92 },
      { name: "Node.js", level: "Advanced", value: 80 },
      { name: "Laravel", level: "Advanced", value: 78 },
      { name: "MySQL", level: "Expert", value: 90 },
      { name: "REST & GraphQL APIs", level: "Advanced", value: 88 },
    ],
  },
  {
    title: "CMS & e-commerce",
    icon: FaWordpress,
    skills: [
      { name: "WordPress", level: "Expert", value: 95 },
      { name: "WooCommerce", level: "Expert", value: 92 },
      { name: "Shopify", level: "Advanced", value: 80 },
      { name: "Headless CMS (Sanity, Strapi)", level: "Advanced", value: 88 },
    ],
  },
  {
    title: "Delivery & growth",
    icon: FaGitAlt,
    skills: [
      { name: "Git & GitHub", level: "Expert", value: 92 },
      { name: "Vercel & Netlify", level: "Expert", value: 90 },
      { name: "CI/CD", level: "Advanced", value: 78 },
      { name: "Technical SEO", level: "Expert", value: 90 },
      { name: "Core Web Vitals", level: "Advanced", value: 88 },
      { name: "Analytics (GA4, Search Console)", level: "Advanced", value: 85 },
    ],
  },
];

const tools = [
  "WordPress",
  "WooCommerce",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "PHP",
  "Laravel",
  "Node.js",
  "Tailwind CSS",
  "Sass",
  "MySQL",
  "GraphQL",
  "REST API",
  "Sanity",
  "Strapi",
  "Git",
  "GitHub",
  "Vercel",
  "Netlify",
  "Docker",
  "Figma",
  "GA4",
  "Google Search Console",
];

const education = [
  {
    icon: FaGraduationCap,
    institution: "University of the Punjab (PU)",
    location: "Lahore, Pakistan",
    qualification: "Bachelor of Science in Computer Science",
    period: "Jun 2006 – Mar 2010",
    detail:
      "Core computer science foundation covering programming, databases, software engineering and web technologies.",
  },
  {
    icon: FaCertificate,
    institution: "EVs Lahore",
    location: "Lahore, Pakistan",
    qualification: "Certification in Web Development",
    period: "2004 – 2006",
    detail:
      "Hands-on training in HTML, CSS, JavaScript and server-side web development.",
  },
];

const continuousLearning = [
  "Advanced React patterns",
  "Next.js App Router",
  "TypeScript",
  "Headless CMS & GraphQL",
  "Core Web Vitals",
  "Technical SEO",
  "Accessibility (WCAG)",
  "Cloud deployment",
];

const languages = [
  { name: "English", level: "Professional", value: 90 },
  { name: "Urdu", level: "Native", value: 100 },
];

const strengths = [
  "Clear written and verbal communication",
  "Ownership from scope to launch",
  "Pragmatic problem solving",
  "Attention to detail",
  "Mentoring and code review",
  "Calm under deadlines",
];

const availability = [
  "Freelance and contract projects",
  "Fixed-scope projects and monthly retainers",
  "Remote work worldwide",
  "Typical response within 24 hours",
];

export default function CV() {
  return (
    <>
      <PageHead
        title="Resume | Mufaqar Islam — Full Stack Web Developer (15+ Years)"
        description="Resume of Mufaqar Islam — a full stack web developer with 15+ years of experience in WordPress, React, Next.js, PHP and Tailwind CSS. View experience, skills, projects and education."
        url="https://www.mufaqar.com/cv"
        updated={lastUpdated}
        schema={cvSchema}
      />

      <main className="cv-page bg-white">
        {/* Hero */}
        <section
          aria-labelledby="cv-name"
          className="cv-hero relative overflow-hidden bg-title_color"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-bs_secondary blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-bs_info blur-3xl" />
          </div>

          <div className="container relative mx-auto max-w-[1140px] px-4">
            <div className="cv-hero-grid grid items-center gap-8 py-14 md:grid-cols-[260px_1fr] md:gap-12 md:py-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mx-auto md:mx-0"
              >
                <div className="cv-photo relative h-60 w-52 overflow-hidden rounded-2xl bg-white shadow-2xl ring-4 ring-white/15 md:h-[300px] md:w-[260px]">
                  <Image
                    src={Profile_Pic}
                    alt="Portrait of Mufaqar Islam, full stack web developer based in Lahore, Pakistan"
                    fill
                    priority
                    sizes="(max-width: 768px) 208px, 260px"
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <div className="text-center md:text-left">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-bs_info"
                >
                  Curriculum Vitae
                </motion.p>
                <motion.h1
                  id="cv-name"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl font-bold leading-tight text-white md:text-6xl"
                >
                  Mufaqar Islam
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="mt-3 text-xl font-semibold text-bs_info md:text-2xl"
                >
                  Full Stack Web Developer
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-white/75 md:text-base"
                >
                  WordPress · React · Next.js · PHP · Tailwind CSS
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="mx-auto mt-5 max-w-[620px] text-sm leading-relaxed text-white/80 md:mx-0 md:text-base"
                >
                  Full stack developer with 15+ years of experience building,
                  launching and maintaining websites and web applications for
                  200+ clients worldwide.
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="cv-contact-grid mx-auto mt-7 grid max-w-[620px] gap-3 sm:grid-cols-2 md:mx-0"
                >
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const inner = (
                      <>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-bs_info">
                          <Icon aria-hidden="true" />
                        </span>
                        <span className="min-w-0 text-left">
                          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-bs_info">
                            {item.label}
                          </span>
                          <span className="block truncate text-sm font-medium text-white">
                            {item.value}
                          </span>
                        </span>
                      </>
                    );

                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="flex items-center gap-3"
                          >
                            {inner}
                          </a>
                        ) : (
                          <div className="flex items-center gap-3">{inner}</div>
                        )}
                      </li>
                    );
                  })}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="cv-hide-print mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start"
                >
                  <a
                    href="/Mufaqar-Islam-CV.pdf"
                    download="Mufaqar-Islam-CV.pdf"
                    className="inline-flex items-center justify-center gap-2 bg-bs_btn_bg px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-bs_link_color"
                  >
                    <FaDownload aria-hidden="true" />
                    Download PDF
                  </a>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-title_color"
                  >
                    <FaPrint aria-hidden="true" />
                    Print / Save as PDF
                  </button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-1 py-3 text-sm font-semibold text-bs_info underline underline-offset-4 transition-colors duration-300 hover:text-white sm:px-3"
                  >
                    Hire me
                  </Link>
                </motion.div>

                <div className="cv-hide-print mt-5 flex items-center justify-center gap-3 md:justify-start">
                  <a
                    href="https://www.linkedin.com/in/mufaqar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:bg-white hover:text-title_color"
                  >
                    <FaLinkedin aria-hidden="true" />
                    <span className="sr-only">Mufaqar Islam on LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/mufaqar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:bg-white hover:text-title_color"
                  >
                    <FaGithub aria-hidden="true" />
                    <span className="sr-only">Mufaqar Islam on GitHub</span>
                  </a>
                  <a
                    href="https://www.fiverr.com/mufaqar"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Mufaqar Islam on Fiverr"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:bg-white hover:text-title_color"
                  >
                    <SiFiverr aria-hidden="true" />
                    <span className="sr-only">Mufaqar Islam on Fiverr</span>
                  </a>
                  <a
                    href="https://www.upwork.com/freelancers/~012991652310eb9c2a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Mufaqar Islam on Upwork"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:bg-white hover:text-title_color"
                  >
                    <SiUpwork aria-hidden="true" />
                    <span className="sr-only">Mufaqar Islam on Upwork</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="cv-stats grid grid-cols-2 border-t border-white/15 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`cv-stat border-white/15 px-2 py-6 text-center ${
                    index % 2 === 1 ? "border-l" : ""
                  } md:border-l ${index === 0 ? "md:border-l-0" : ""}`}
                >
                  <p className="text-2xl font-semibold text-white md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-bs_info md:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CV_fixNav />

        {/* Professional summary */}
        <section
          id="summary"
          aria-labelledby="summary-title"
          className="cv-section scroll-mt-24 bg-white py-16 md:py-20"
        >
          <div className="container mx-auto max-w-[1140px] px-4">
            <motion.div
              variants={reveal}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <SectionHeading
                eyebrow="Profile"
                title="Professional summary"
                id="summary-title"
              />

              <div className="cv-summary-grid grid gap-8 lg:grid-cols-[1.55fr_1fr]">
                <div>
                  <div className="space-y-4 text-base text-slate-700 md:text-lg">
                    <p>
                      Full stack web developer with 15+ years of experience
                      designing, building and maintaining websites and web
                      applications. I specialise in WordPress, React, Next.js,
                      PHP and Tailwind CSS, and I have delivered 880+ projects
                      for 200+ clients across e-commerce, education, SaaS and
                      professional services.
                    </p>
                    <p>
                      I work directly with clients from discovery to launch,
                      taking ownership of architecture, performance, technical
                      SEO and long-term maintenance. Comfortable across the
                      stack: custom WordPress themes and plugins, headless CMS
                      architectures, REST and GraphQL integrations, MySQL
                      databases and modern CI/CD deployments on Vercel and
                      Netlify.
                    </p>
                    <p>
                      Known for clear communication, pragmatic problem solving
                      and shipping on time. I am equally happy improving an
                      existing codebase, rescuing a stalled project or building
                      a new product from the ground up.
                    </p>
                  </div>

                  <div className="cv-card mt-7 rounded-2xl border border-slate-200/80 bg-[#afd2e9]/20 p-6 md:p-7">
                    <h3 className="text-lg font-semibold text-title_color md:text-xl">
                      Career highlights
                    </h3>
                    <ul className="cv-grid-2 mt-4 grid gap-3 sm:grid-cols-2">
                      {careerHighlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 text-sm text-slate-700"
                        >
                          <FaCheckCircle
                            aria-hidden="true"
                            className="mt-1 shrink-0 text-xs text-bs_secondary"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <aside className="cv-card h-fit rounded-2xl border border-slate-200/80 bg-white p-6 shadow-3xl md:p-7">
                  <h3 className="text-lg font-semibold text-title_color md:text-xl">
                    At a glance
                  </h3>
                  <dl className="mt-5 space-y-3">
                    {quickFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                      >
                        <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          {fact.label}
                        </dt>
                        <dd className="text-right text-sm font-medium text-title_color">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-5 rounded-xl bg-[#afd2e9]/30 p-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-title_color">
                      Availability
                    </p>
                    <p className="mt-1 text-sm font-medium text-title_color">
                      Open to freelance and contract work worldwide.
                    </p>
                  </div>
                </aside>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core competencies */}
        <section
          id="expertise"
          aria-labelledby="expertise-title"
          className="cv-section cv-print-optional scroll-mt-24 bg-[#f5f8fa] py-16 md:py-20"
        >
          <div className="container mx-auto max-w-[1140px] px-4">
            <motion.div
              variants={reveal}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <SectionHeading
                eyebrow="What I do"
                title="Core competencies"
                id="expertise-title"
                description="A practical mix of engineering, product thinking and delivery experience built over 15+ years of client work."
              />

              <div className="cv-grid-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {competencies.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="cv-card cv-print-avoid group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-3xl transition-transform duration-300 hover:-translate-y-1"
                    >
                      <span className="cv-icon mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-title_color text-lg text-white transition-colors duration-300 group-hover:bg-bs_secondary group-hover:text-title_color">
                        <Icon aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-semibold text-title_color">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          aria-labelledby="experience-title"
          className="cv-section scroll-mt-24 bg-white py-16 md:py-20"
        >
          <div className="container mx-auto max-w-[1140px] px-4">
            <motion.div
              variants={reveal}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <SectionHeading
                eyebrow="Career"
                title="Professional experience"
                id="experience-title"
                description="Sixteen years of continuous commercial experience, from PHP and WordPress foundations to modern React and Next.js product work."
              />

              <ExperienceTimeline items={experience} />

              <p className="mt-8 text-sm text-slate-500">
                Earlier roles and references available on request.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          aria-labelledby="projects-title"
          className="cv-section scroll-mt-24 bg-[#f5f8fa] py-16 md:py-20"
        >
          <div className="container mx-auto max-w-[1140px] px-4">
            <motion.div
              variants={reveal}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <SectionHeading
                eyebrow="Selected work"
                title="Projects that show the work"
                id="projects-title"
                description="A small selection of recent builds across SaaS, e-commerce, corporate and content-led websites."
              />

              <div className="cv-grid-2 grid gap-5 md:grid-cols-2">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="cv-card cv-print-avoid flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-3xl md:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-bs_btn_bg">
                          {project.type}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-title_color md:text-xl">
                          {project.title}
                        </h3>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} (opens in a new tab)`}
                        className="cv-hide-print flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-title_color transition-colors duration-300 hover:border-title_color hover:bg-title_color hover:text-white"
                      >
                        <FaExternalLinkAlt
                          aria-hidden="true"
                          className="text-xs"
                        />
                      </a>
                    </div>
                    <p className="mt-3 flex-1 text-sm text-slate-600 md:text-base">
                      {project.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="cv-chip rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-slate-600"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <p className="mt-8 text-center">
                <Link
                  href="/works"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-title_color underline underline-offset-4 transition-colors duration-300 hover:text-bs_btn_bg"
                >
                  See the full portfolio
                  <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
                </Link>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          aria-labelledby="skills-title"
          className="cv-section scroll-mt-24 bg-white py-16 md:py-20"
        >
          <div className="container mx-auto max-w-[1140px] px-4">
            <motion.div
              variants={reveal}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <SectionHeading
                eyebrow="Capabilities"
                title="Technical skills"
                id="skills-title"
                description="Grouped by how I use them day to day, with honest proficiency levels rather than vanity percentages."
              />

              <div className="cv-grid-2 grid gap-5 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <SkillGroup
                    key={group.title}
                    title={group.title}
                    icon={group.icon}
                    skills={group.skills}
                  />
                ))}
              </div>

              <div className="mt-10">
                <h3 className="mb-4 text-lg font-semibold text-title_color md:text-xl">
                  Tools & technologies
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <li
                      key={tool}
                      className="cv-chip rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          aria-labelledby="education-title"
          className="cv-section scroll-mt-24 bg-[#f5f8fa] py-16 md:py-20"
        >
          <div className="container mx-auto max-w-[1140px] px-4">
            <motion.div
              variants={reveal}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <SectionHeading
                eyebrow="Credentials"
                title="Education & certifications"
                id="education-title"
              />

              <div className="cv-grid-2 grid gap-5 md:grid-cols-2">
                {education.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.qualification}
                      className="cv-card cv-print-avoid flex h-full gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-3xl md:p-7"
                    >
                      <span className="cv-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-title_color text-lg text-white">
                        <Icon aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-bs_btn_bg">
                          {item.period}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-title_color">
                          {item.qualification}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {item.institution} · {item.location}
                        </p>
                        <p className="mt-3 text-sm text-slate-600">
                          {item.detail}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="cv-card cv-print-optional mt-5 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-3xl md:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="cv-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-title_color text-lg text-white">
                    <FaDatabase aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-title_color md:text-xl">
                    Continuous professional development
                  </h3>
                </div>
                <p className="text-sm text-slate-600 md:text-base">
                  I keep my stack current through hands-on product work, formal
                  courses and self-directed study. Recent focus areas include:
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {continuousLearning.map((topic) => (
                    <li
                      key={topic}
                      className="cv-chip rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Languages, strengths and availability */}
        <section
          id="languages"
          aria-labelledby="languages-title"
          className="cv-section scroll-mt-24 bg-white py-16 md:py-20"
        >
          <div className="container mx-auto max-w-[1140px] px-4">
            <motion.div
              variants={reveal}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <SectionHeading
                eyebrow="Beyond the code"
                title="Languages, strengths & availability"
                id="languages-title"
              />

              <div className="cv-grid-3 grid gap-5 lg:grid-cols-3">
                <div className="cv-card rounded-2xl border border-slate-200/80 bg-white p-6 shadow-3xl md:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="cv-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-title_color text-lg text-white">
                      <FaLanguage aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-title_color">
                      Languages
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {languages.map((language) => (
                      <li key={language.name}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-sm font-medium text-title_color">
                            {language.name}
                          </span>
                          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-slate-500">
                            {language.level}
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="cv-skill-fill h-full rounded-full bg-bs_secondary"
                            style={{ width: `${language.value}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cv-card rounded-2xl border border-slate-200/80 bg-white p-6 shadow-3xl md:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="cv-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-title_color text-lg text-white">
                      <FaLightbulb aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-title_color">
                      Strengths
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {strengths.map((strength) => (
                      <li
                        key={strength}
                        className="flex gap-2.5 text-sm text-slate-700"
                      >
                        <FaCheckCircle
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-xs text-bs_secondary"
                        />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cv-card rounded-2xl border border-slate-200/80 bg-white p-6 shadow-3xl md:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="cv-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-title_color text-lg text-white">
                      <FaClock aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-title_color">
                      Availability
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {availability.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm text-slate-700"
                      >
                        <FaCheckCircle
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-xs text-bs_secondary"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-xl bg-[#afd2e9]/30 p-3 text-sm font-medium text-title_color">
                    Based in Lahore, Pakistan (PKT) · working remotely
                    worldwide.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href="https://www.fiverr.com/mufaqar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-title_color transition-colors duration-300 hover:border-bs_secondary hover:bg-[#afd2e9]/40"
                    >
                      <SiFiverr aria-hidden="true" className="text-sm" />
                      Fiverr profile
                    </a>
                    <a
                      href="https://www.upwork.com/freelancers/~012991652310eb9c2a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-title_color transition-colors duration-300 hover:border-bs_secondary hover:bg-[#afd2e9]/40"
                    >
                      <SiUpwork aria-hidden="true" className="text-sm" />
                      Upwork profile
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-sm text-slate-500">
                References available on request. Last updated:{" "}
                <time dateTime={lastUpdated}>{lastUpdatedLabel}</time>.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="cv-hide-print">
          <Testimonial />
          <CTA />
        </div>
      </main>

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }

          header,
          footer,
          .cv-hide-print,
          .cv-print-optional {
            display: none !important;
          }

          body,
          .cv-page {
            background: #fff !important;
          }

          .cv-page * {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
            transition: none !important;
          }

          .cv-hero {
            background: #fff !important;
            color: #111 !important;
            padding: 0 0 10px !important;
          }

          .cv-hero h1,
          .cv-hero p,
          .cv-hero span,
          .cv-hero a,
          .cv-hero li,
          .cv-hero strong,
          .cv-hero svg {
            color: #111 !important;
          }

          .cv-hero-grid {
            display: grid !important;
            grid-template-columns: 84px 1fr !important;
            gap: 10px !important;
            padding: 0 !important;
          }

          .cv-photo {
            width: 76px !important;
            height: 92px !important;
            border-radius: 6px !important;
            box-shadow: none !important;
          }

          .cv-hero h1 {
            font-size: 22px !important;
            line-height: 1.1 !important;
          }

          .cv-hero h1 + p {
            margin-top: 2px !important;
            font-size: 12px !important;
          }

          .cv-hero p {
            margin-top: 2px !important;
            line-height: 1.35 !important;
          }

          .cv-summary-grid {
            grid-template-columns: 1.5fr 1fr !important;
            gap: 8px !important;
          }

          .cv-contact-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 3px !important;
            margin-top: 6px !important;
          }

          .cv-stats {
            grid-template-columns: repeat(4, 1fr) !important;
          }

          .cv-grid-2 {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 5px !important;
          }

          .cv-grid-3 {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 5px !important;
          }

          .cv-summary-grid > *,
          .cv-grid-2 > *,
          .cv-grid-3 > * {
            min-width: 0;
          }

          .cv-section-heading {
            margin-bottom: 8px !important;
          }

          .cv-section-heading > p {
            margin-top: 2px !important;
            margin-bottom: 2px !important;
          }

          .cv-section-heading > span {
            margin-top: 3px !important;
            height: 2px !important;
          }

          .cv-timeline {
            margin-left: 4px !important;
          }

          .cv-timeline > li {
            padding-left: 14px !important;
          }

          .cv-timeline > li + li {
            margin-top: 6px !important;
          }

          .cv-stat {
            border-color: #ddd !important;
            padding: 3px 0 !important;
          }

          .cv-stat p:first-child {
            font-size: 15px !important;
          }

          .cv-section {
            background: #fff !important;
            padding: 8px 0 !important;
          }

          .cv-card {
            border: 1px solid #ddd !important;
            border-radius: 5px !important;
            box-shadow: none !important;
            padding: 6px 8px !important;
          }

          .cv-icon {
            background: #eee !important;
            color: #111 !important;
          }

          .cv-chip {
            background: #fff !important;
            border-color: #ccc !important;
            color: #111 !important;
          }

          .cv-skill-fill {
            background: #555 !important;
          }

          .cv-print-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .cv-page a {
            color: #111 !important;
            text-decoration: none !important;
          }

          .cv-page h2 {
            font-size: 15px !important;
          }

          .cv-page h3 {
            font-size: 12px !important;
          }

          .cv-page p,
          .cv-page li,
          .cv-page span {
            font-size: 9pt !important;
            line-height: 1.3 !important;
          }
        }
      `}</style>
    </>
  );
}
