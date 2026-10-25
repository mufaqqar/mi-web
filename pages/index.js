import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Workbox from '../components/newComponents/workbox';
import Testimonial from '../components/newComponents/testimonial';
import CTA from '../components/newComponents/cta';
import { Categories } from '../const/works';
import { SITE_URL, serviceSchema } from '../const/schema';
import PageHead from '../components/pagesmeta';

const faqs = [
  {
    q: 'What does a full stack web developer do?',
    a: 'A full stack developer handles both sides of a website. I build the front end that users see, the back end that runs it, and the databases, APIs and hosting behind them.',
  },
  {
    q: 'Which technologies do you work with?',
    a: 'My core tools are WordPress, React, Next.js, PHP, Tailwind CSS and MySQL. I choose the stack that fits your goals, timeline and budget.',
  },
  {
    q: 'Do you maintain websites after launch?',
    a: 'Yes. I offer maintenance and support plans that cover updates, security checks, backups and hosting management for WordPress and React or Next.js apps.',
  },
  {
    q: 'How do I get a quote for my project?',
    a: 'Send a short brief through the contact page or email info@mufaqar.com. I reply with a clear scope, timeline and price before any work starts.',
  },
  {
    q: 'Where are you based and do you work remotely?',
    a: 'I am based in Lahore, Pakistan and work with clients worldwide. Projects run over email, phone and video calls, so location is never a blocker.',
  },
  {
    q: 'How much does a website cost?',
    a: 'Every project is quoted after a short brief. WordPress sites, custom React or Next.js applications and maintenance plans are priced separately, and you get a fixed scope and price before work starts.',
  },
  {
    q: 'How long does a project take?',
    a: 'Timelines depend on scope. A small WordPress site is usually measured in weeks, while a custom React or Next.js application is measured in months. You get a delivery schedule with the quote.',
  },
  {
    q: 'Can you improve an existing website without rebuilding it?',
    a: 'Yes. I handle redesigns, migrations, Core Web Vitals and speed work, technical SEO, security fixes and new features on existing WordPress, React and Next.js codebases.',
  },
  {
    q: 'Do you work with existing teams and agencies?',
    a: 'Yes. I work directly with founders and marketing teams, and I also support agencies as an extra senior developer on WordPress, React and Next.js projects.',
  },
];

const reasons = [
  {
    title: 'You work directly with me',
    text: 'There are no account managers and no handoffs. The person who scopes your project is the person who builds it.',
  },
  {
    title: '15+ years in production',
    text: 'I have designed, launched and maintained live websites for more than 15 years, from small business sites to complex web apps.',
  },
  {
    title: 'One team for the whole build',
    text: 'Design, development, launch and ongoing support sit with one developer. Nothing gets lost between vendors.',
  },
  {
    title: 'Plain-language communication',
    text: 'I answer quickly, explain technical trade-offs clearly and flag risks early so you can make fast decisions.',
  },
];

const processSteps = [
  {
    title: 'Discovery and scope',
    text: 'We agree on goals, pages, integrations and success metrics. You get a written scope, timeline and fixed price before work starts.',
  },
  {
    title: 'Design and build',
    text: 'I design in the browser and build in weekly increments, so you review real progress instead of waiting for a big reveal.',
  },
  {
    title: 'Test and launch',
    text: 'Cross-browser and mobile testing, Core Web Vitals checks, technical SEO, analytics and a launch checklist.',
  },
  {
    title: 'Maintain and improve',
    text: 'After launch I handle updates, backups, security and new features on a monthly retainer or as needed.',
  },
];

const stackGroups = [
  { label: 'CMS & e-commerce', value: 'WordPress, WooCommerce, Shopify' },
  { label: 'Front end', value: 'React, Next.js, Tailwind CSS, TypeScript' },
  { label: 'Back end', value: 'PHP, Laravel, CodeIgniter, Node.js, MySQL' },
  { label: 'Integrations', value: 'REST APIs, headless CMS, third-party services' },
  { label: 'Hosting & DevOps', value: 'Vercel, managed WordPress hosting, CI/CD' },
];

export default function home2() {
  const allWorks = Categories.flatMap((category) =>
    category.works.map((work) => ({
      ...work,
      categoryId: category.id,
      category: category.category,
    }))
  );

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@id': `${SITE_URL}/#professional-service` },
    author: { '@type': 'Person', name: 'Nikola, NSigma' },
    reviewBody:
      'I’ve been working with Mufaqar since 2015, and the experience has been exceptional. He is incredibly responsive, which is crucial when your business depends on your website, yet he was equally patient with us as our requirements evolved. I highly recommend Mufaqar to anyone looking to elevate their website and have a trustworthy professional manage it.',
  };

  const servicesSchema = [
    serviceSchema({
      name: 'Full Stack Web Development',
      serviceType: 'Full stack web development',
      description:
        'Front-end, back-end, database, API and DevOps delivery for websites and web applications.',
      url: '/services',
    }),
    serviceSchema({
      name: 'WordPress Development',
      serviceType: 'WordPress development',
      description:
        'Custom WordPress themes, plugins and WooCommerce e-commerce stores.',
      url: '/services',
    }),
    serviceSchema({
      name: 'React & Next.js Application Development',
      serviceType: 'React and Next.js development',
      description:
        'Modern front-end and full-stack applications built with React, Next.js and Tailwind CSS.',
      url: '/services',
    }),
    serviceSchema({
      name: 'Website Maintenance & Support',
      serviceType: 'Website maintenance and support',
      description:
        'Updates, security, backups and managed hosting for WordPress and React or Next.js sites.',
      url: '/services',
    }),
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${SITE_URL}/#process`,
    name: 'How Mufaqar Islam delivers a web development project',
    description:
      'A four-step process for scoping, designing, building, launching and maintaining a WordPress, React or Next.js project.',
    step: processSteps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.text,
      url: `${SITE_URL}/#process`,
    })),
  };

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${SITE_URL}/#portfolio-reel`,
    name: 'Mufaqar Islam — Web Development Portfolio Reel',
    description:
      'A 28-second portfolio reel showing WordPress, React and Next.js projects built and maintained by Mufaqar Islam, including Anypos, Solution Founder, Mams House, Breeze, Smapy and Fund Gazer.',
    thumbnailUrl: `${SITE_URL}/video/portfolio-reel-poster.jpg`,
    uploadDate: '2026-10-25',
    duration: 'PT28S',
    contentUrl: `${SITE_URL}/video/portfolio-reel.mp4`,
    embedUrl: `${SITE_URL}/#portfolio-reel`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    creator: { '@id': `${SITE_URL}/#person` },
    inLanguage: 'en-US',
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: `${SITE_URL}/`,
    name: 'Mufaqar Islam — Full Stack Web Developer',
    description:
      'Full stack web developer with 15+ years building WordPress, React and Next.js websites and web applications for clients worldwide.',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#person` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/new-banner.png`,
      width: 942,
      height: 975,
    },
    dateModified: '2026-10-25',
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#key-facts'],
    },
  };

  return (
    <>
      <PageHead
        title="Mufaqar Islam — WordPress, React & Next.js Developer"
        description="Full stack web developer with 15+ years building fast, secure WordPress, React and Next.js sites. See live work and get a fixed-scope quote."
        url="https://www.mufaqar.com"
        schema={[
          webPageSchema,
          faqSchema,
          howToSchema,
          videoSchema,
          reviewSchema,
          ...servicesSchema,
        ]}
      />
      <main className="overflow-x-hidden">
        <section className="relative">
          <div className="container mx-auto px-4 flex md:flex-row flex-col gap-6 items-center">
            <div className="md:w-1/2 w-full">
              <h1 className="md:text-6xl md:leading-[1] text-4xl font-bold text-[#1F2B37] mb-4">
                Mufaqar Islam — Full Stack Web Developer
              </h1>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F2B37] mb-4">
                WordPress &middot; React &middot; Next.js &middot; PHP
              </p>
              <p className="md:text-2xl text-lg font-normal text-[#212121] mb-3">
                I&apos;m Mufaqar Islam, a WordPress, React and Next.js developer
                based in Lahore, Pakistan. I design, build, launch and maintain
                fast, secure websites and web apps for organizations that depend
                on them.
              </p>
              <p className="md:text-xl text-base font-normal text-[#212121] mb-6">
                Over 15 years of full-stack experience across front-end,
                back-end, databases, DevOps and APIs.
              </p>
              <div className="flex flex-wrap gap-4 items-center sm:mb-10">
                <Link
                  href="/contact"
                  className="text-sm font-normal text-white bg-[#36CCDA] hover:bg-bs_link_color hover:border-bs_link_color py-[0.688rem] px-[1.813rem] border-2 border-[#36CCDA] inline-block transition-all duration-300"
                >
                  GET A PROJECT QUOTE
                </Link>
                <Link
                  href="/works"
                  className="text-sm font-normal text-[#1F2B37] hover:text-white hover:bg-[#1F2B37] py-[0.688rem] px-[1.813rem] border-2 border-[#1F2B37] inline-block transition-all duration-300"
                >
                  SEE LIVE PROJECTS
                </Link>
              </div>
              <dl
                id="key-facts"
                className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-normal text-[#212121] mb-8"
              >
                <div>
                  <dt className="font-semibold">Experience</dt>
                  <dd>15+ years in production</dd>
                </div>
                <div>
                  <dt className="font-semibold">Stack</dt>
                  <dd>WordPress, React, Next.js &amp; PHP</dd>
                </div>
                <div>
                  <dt className="font-semibold">Based in</dt>
                  <dd>Lahore, Pakistan — working worldwide</dd>
                </div>
                <div>
                  <dt className="font-semibold">Response time</dt>
                  <dd>Within 24 hours</dd>
                </div>
              </dl>
            </div>
            <div className="md:w-1/2 w-full">
              <Image
                src="/images/new-banner.png"
                alt="Mufaqar Islam, full stack web developer, at work"
                width={942}
                height={975}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <Image
            src="/images/svgs/blocks.svg"
            alt=""
            aria-hidden="true"
            width={426}
            height={286}
            className="absolute 2xl:left-0 lg:left-[-131px] left-0 lg:bottom-[-150px] bottom-[-75px] md:w-auto w-1/2 z-10"
          />
        </section>

        <section className="bg-bs_secondary md:py-[12.5rem] py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
            <div>
              <h2 className="md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-12 max-w-[340px]">
                Full Stack Development Services
              </h2>
              <p className="md:text-2xl text-base text-title_color mb-9 max-w-[474px]">
                I work across the whole stack. That covers front-end, back-end,
                databases, DevOps and APIs. You get one developer who can ship
                the complete product.
              </p>
              <ul className="flex flex-col gap-2 list-disc list-inside marker:text-bs_btn_bg marker:!mr-0">
                <li>
                  <Link
                    href="/services"
                    className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    Next.js Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    TailwindCSS Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    API &amp; Headless CMS Integration
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/branding.png"
                alt="Full stack development services covering Next.js, Tailwind CSS and API integrations"
                width={1000}
                height={667}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="md:ml-auto md:mr-0"
              />
            </div>
          </div>
        </section>

        <section className="bg-bs_info md:py-[12.5rem] py-20 relative">
          <div className="container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
            <div>
              <h2 className="md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-12 max-w-[340px]">
                WordPress Development Services
              </h2>
              <p className="md:text-2xl text-base text-title_color mb-9 max-w-[460px]">
                I build fast, secure and scalable WordPress websites. That
                includes custom themes, custom plugins and full e-commerce
                stores.
              </p>
              <ul className="flex flex-col gap-2 list-disc list-inside marker:text-bs_btn_bg marker:!mr-0">
                <li>
                  <Link
                    href="/services"
                    className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    Custom Themes &amp; Plugins
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    WooCommerce E-commerce Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    WordPress Maintenance &amp; Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/wordpress.png"
                alt="WordPress development services with custom themes, plugins and e-commerce"
                width={886}
                height={746}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="md:ml-auto"
              />
            </div>
          </div>
          <Image
            src="/images/svgs/blocks2.svg"
            alt=""
            aria-hidden="true"
            width={426}
            height={286}
            className="absolute 2xl:left-0 lg:left-[-131px] left-0 lg:bottom-[-150px] bottom-[-75px] md:w-auto w-1/2 z-10"
          />
        </section>

        <section className="bg-bs_secondary md:py-[12.5rem] py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
            <div>
              <h2 className="md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-12 max-w-[340px]">
                Maintenance &amp; Support
              </h2>
              <p className="md:text-2xl text-base text-title_color mb-9 max-w-[460px]">
                Websites need care after launch. I handle updates, security
                checks, backups and hosting for WordPress and React or Next.js
                apps.
              </p>
              <ul className="flex flex-col gap-2 list-disc list-inside marker:text-bs_btn_bg marker:!mr-0">
                <li>
                  <Link
                    href="/services"
                    className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    Managed Web Hosting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    WordPress Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    React &amp; Next.js Application Maintenance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/hosting.png"
                alt="Website maintenance, support and hosting services for WordPress and React apps"
                width={993}
                height={669}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="md:ml-auto"
              />
            </div>
          </div>
        </section>

        <section className="md:py-[12.5rem] py-20 bg-bs_info">
          <div className="container mx-auto px-4">
            <h2 className="md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-6 text-center">
              Why Clients Keep Working With Me
            </h2>
            <p className="md:text-2xl text-base text-title_color text-center mb-12 max-w-[720px] mx-auto">
              Hiring a developer is a trust decision. These are the four things
              clients tell me matter most.
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="bg-white p-8 shadow-3xl h-full"
                >
                  <h3 className="text-xl font-semibold text-title_color mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-base font-normal text-title_color">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="process"
          className="bg-bs_secondary md:py-[12.5rem] py-20"
        >
          <div className="container mx-auto px-4">
            <h2 className="md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-6 text-center">
              How I Work
            </h2>
            <p className="md:text-2xl text-base text-title_color text-center mb-12 max-w-[720px] mx-auto">
              Every project follows the same four steps. You always know what is
              happening, what it costs and when it ships.
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="bg-white p-8 shadow-3xl h-full"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-bs_btn_bg mb-2">
                    Step {index + 1}
                  </p>
                  <h3 className="text-xl font-semibold text-title_color mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base font-normal text-title_color">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-title_color md:py-[12.5rem] py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="md:text-5xl text-2xl font-semibold text-white underline decoration-bs_link_color mb-6 text-center">
              Work I&apos;m Proud Of
            </h2>
            <p className="md:text-2xl text-base text-white text-center mb-12 max-w-[720px] mx-auto">
              A sample of the platforms I have designed, built and still
              maintain. Each one is a live product with real users.
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
              {allWorks.slice(0, 2).map((work, idx) => (
                <Workbox
                  key={idx}
                  data={work}
                  cstm_class={`${
                    work.categoryId === 1
                      ? 'bg-bs_secondary'
                      : work.categoryId === 2
                      ? 'bg-bs_link_color'
                      : 'bg-bs_btn_bg'
                  }`}
                />
              ))}
            </div>
            <p className="text-center mt-12">
              <Link
                href="/works"
                className="text-base font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300"
              >
                See all case studies
              </Link>
            </p>
          </div>
        </section>

        <section id="portfolio-reel" className="bg-white md:py-[10rem] py-16">
          <div className="container max-w-[900px] mx-auto px-4">
            <h2 className="md:text-4xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-6 text-center">
              Portfolio reel
            </h2>
            <p className="text-base md:text-lg font-normal text-title_color text-center mb-8 max-w-[720px] mx-auto">
              A 28-second walkthrough of recent WordPress, React and Next.js
              work. Every project shown is live and was built by Mufaqar Islam.
            </p>
            <video
              controls
              preload="metadata"
              playsInline
              width={1280}
              height={720}
              poster="/video/portfolio-reel-poster.jpg"
              className="w-full h-auto bg-title_color"
            >
              <source src="/video/portfolio-reel.mp4" type="video/mp4" />
              Your browser does not support the video tag.{' '}
              <a href="/video/portfolio-reel.mp4">Download the reel</a>.
            </video>
            <details className="mt-6 text-base font-normal text-title_color">
              <summary className="cursor-pointer font-semibold">
                Video transcript
              </summary>
              <ol className="list-decimal pl-5 mt-4 flex flex-col gap-2">
                <li>
                  Mufaqar Islam — full stack web developer working with
                  WordPress, React, Next.js and PHP.
                </li>
                <li>
                  Anypos — a commercial POS platform built with Next.js, Tailwind
                  CSS and Vercel.
                </li>
                <li>
                  Solution Founder — a commercial WordPress website with managed
                  hosting.
                </li>
                <li>
                  Mams House — a WordPress e-commerce store and product
                  catalogue.
                </li>
                <li>
                  Breeze Chrome Extension — a browser extension for online
                  shopping.
                </li>
                <li>Smapy — an education platform built on WordPress.</li>
                <li>
                  Fund Gazer — an education and funding platform built on
                  WordPress.
                </li>
                <li>
                  Next project — mufaqar.com, info@mufaqar.com.
                </li>
              </ol>
            </details>
          </div>
        </section>

        <section className="bg-bs_info md:py-[12.5rem] py-20">
          <div className="container max-w-[860px] mx-auto px-4">
            <h2 className="md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-6 text-center">
              Stack &amp; Tools
            </h2>
            <p className="md:text-2xl text-base text-title_color text-center mb-12 max-w-[720px] mx-auto">
              The technologies I use to build, launch and maintain WordPress,
              React and Next.js projects.
            </p>
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Technologies used by Mufaqar Islam
              </caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3 pr-6 text-sm font-semibold uppercase tracking-[0.15em] text-title_color border-b border-gray-300"
                  >
                    Layer
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-sm font-semibold uppercase tracking-[0.15em] text-title_color border-b border-gray-300"
                  >
                    Technologies
                  </th>
                </tr>
              </thead>
              <tbody>
                {stackGroups.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="py-4 pr-6 align-top text-base font-semibold text-title_color border-b border-gray-200"
                    >
                      {row.label}
                    </th>
                    <td className="py-4 text-base font-normal text-title_color border-b border-gray-200">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white md:py-[8rem] py-16">
          <div className="container max-w-[960px] mx-auto px-4 flex md:flex-row flex-col gap-8 md:items-center">
            <Image
              src="/images/me.jpg"
              alt="Portrait of Mufaqar Islam, full stack web developer in Lahore, Pakistan"
              width={718}
              height={982}
              sizes="(max-width: 768px) 60vw, 220px"
              className="w-[200px] md:w-[220px] h-auto"
            />
            <div>
              <h2 className="md:text-4xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-4">
                About Mufaqar Islam
              </h2>
              <p className="text-base md:text-lg font-normal text-title_color mb-3">
                Mufaqar Islam is a full stack web developer based in Lahore,
                Pakistan. Over the last 15 years he has designed, built and
                maintained WordPress, React and Next.js websites and
                applications for clients in e-commerce, education and commercial
                sectors.
              </p>
              <p className="text-base md:text-lg font-normal text-title_color mb-4">
                He has delivered 880+ projects, works directly with every client
                from scope to launch, and provides ongoing maintenance after
                release.
              </p>
              <ul className="flex flex-wrap gap-6 text-base font-normal text-title_color mb-4">
                <li>
                  <Link
                    href="/about"
                    className="underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cv"
                    className="underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/mufaqar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/mufaqar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:decoration-bs_btn_bg transition-all duration-300"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
              <p className="text-sm font-normal text-title_color mb-2">
                Performance work follows{' '}
                <a
                  href="https://web.dev/vitals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:decoration-bs_btn_bg transition-all duration-300"
                >
                  Google&apos;s Core Web Vitals
                </a>{' '}
                and builds follow the{' '}
                <a
                  href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:decoration-bs_btn_bg transition-all duration-300"
                >
                  W3C accessibility guidelines
                </a>
                .
              </p>
              <p className="text-sm font-normal text-title_color">
                Last updated:{' '}
                <time dateTime="2026-10-25">October 25, 2026</time>
              </p>
            </div>
          </div>
        </section>

        <Testimonial />

        <section className="md:py-[12.5rem] py-20 bg-bs_secondary">
          <div className="container max-w-[860px] mx-auto px-4">
            <h2 className="md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-8">
              {faqs.map((item) => (
                <div key={item.q}>
                  <h3 className="text-xl md:text-2xl font-semibold text-title_color mb-3">
                    {item.q}
                  </h3>
                  <p className="text-base md:text-lg font-normal text-title_color">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}
