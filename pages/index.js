import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import Workbox from '../components/newComponents/workbox';
import Testimonial from '../components/newComponents/testimonial';
import CTA from '../components/newComponents/cta';
import { Categories } from '../const/works';
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
    a: 'I am based in Pakistan and work with clients worldwide. Projects run over email, phone and video calls, so location is never a blocker.',
  },
];

const reasons = [
  {
    title: 'You work directly with me',
    text: 'There are no account managers and no handoffs. The person who scopes your project is the person who builds it.',
  },
  {
    title: 'Over a decade in production',
    text: 'I have designed, launched and maintained live websites for more than 10 years, from small business sites to complex web apps.',
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

  return (
    <>
      <PageHead
        title="Mufaqar Islam | Full Stack Web Developer, WordPress & React"
        description="Full stack web developer with 10+ years building fast, secure WordPress, React and Next.js websites and web apps. Let's talk about your project."
        url="https://www.mufaqar.com"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <main className="overflow-x-hidden">
        <section className="relative">
          <div className="container mx-auto px-4 flex md:flex-row flex-col gap-6 items-center">
            <div className="md:w-1/2 w-full">
              <h1 className="md:text-6xl md:leading-[1] text-4xl font-bold text-[#1F2B37] mb-4">
                Mufaqar Islam — Full Stack Web Developer for WordPress, React
                &amp; Next.js
              </h1>
              <p className="md:text-2xl text-lg font-normal text-[#212121] mb-3">
                I design, build, launch and maintain websites and web apps for
                organizations that depend on them.
              </p>
              <p className="md:text-xl text-base font-normal text-[#212121] mb-6">
                Over 10 years of full-stack experience across front-end,
                back-end, databases, DevOps and APIs.
              </p>
              <div className="flex flex-wrap gap-4 items-center sm:mb-10">
                <Link
                  href="/contact"
                  className="text-sm font-normal text-white bg-[#36CCDA] hover:bg-bs_link_color hover:border-bs_link_color py-[0.688rem] px-[1.813rem] border-2 border-[#36CCDA] inline-block transition-all duration-300"
                >
                  START A PROJECT
                </Link>
                <Link
                  href="/works"
                  className="text-sm font-normal text-[#1F2B37] hover:text-white hover:bg-[#1F2B37] py-[0.688rem] px-[1.813rem] border-2 border-[#1F2B37] inline-block transition-all duration-300"
                >
                  VIEW MY WORK
                </Link>
              </div>
              <p className="text-sm font-normal text-[#212121] mb-8">
                10+ years of experience &middot; WordPress, React, Next.js
                &amp; PHP &middot; Direct contact with your developer
              </p>
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
            priority
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
