import Link from 'next/link'
import InnerPages_Banner from '../components/innerPages-banner'
import Service from '../components/service-box'
import PageHead from '../components/pagesmeta'
import Testimonial from '../components/newComponents/testimonial'
import CTA from '../components/newComponents/cta'
import { breadcrumbSchema, serviceSchema, SITE_URL } from '../const/schema'

const serviceFaqs = [
  {
    q: 'Should I build my website with WordPress or Next.js?',
    a: 'Choose WordPress when the site is content-led and the team needs to publish without a developer: marketing sites, blogs and small stores. Choose Next.js when you need custom application logic, authentication, dashboards or very high performance. I build both and will recommend the option that fits your goals and budget.',
  },
  {
    q: 'What is included in a fixed-scope quote?',
    a: 'Every quote covers discovery, sitemap and scope, design, development, responsive testing, technical SEO basics, analytics setup and a launch checklist. You also get 30 days of post-launch support. The price and timeline are agreed before work starts.',
  },
  {
    q: 'Can you migrate an existing website without losing SEO?',
    a: 'Yes. I migrate WordPress, React and Next.js sites with a full content and URL audit, 301 redirects, metadata mapping and a staging environment, so rankings and traffic are protected during the move.',
  },
  {
    q: 'Do you provide hosting and ongoing maintenance?',
    a: 'Yes. I offer managed WordPress hosting, Vercel deployments for Next.js, plus monthly maintenance plans covering updates, backups, security monitoring and new feature work.',
  },
  {
    q: 'How do you handle speed and technical SEO?',
    a: 'I optimise for the Core Web Vitals that Google measures — LCP, INP and CLS — using image optimisation, caching, clean markup and minimal JavaScript. I also add schema markup, canonical tags and XML sitemaps as standard.',
  },
  {
    q: 'How do we start a project?',
    a: 'Send a short brief through the contact page or email info@mufaqar.com. Within 24 hours you get a reply with questions, a recommended approach, a fixed price and a delivery schedule.',
  },
]

const servicesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/services#faq`,
  mainEntity: serviceFaqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const servicesPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/services#webpage`,
  url: `${SITE_URL}/services`,
  name: 'Web Development Services | WordPress, React & Next.js',
  description:
    'Custom WordPress, React and Next.js development, WooCommerce stores, SEO and maintenance plans from a senior full stack developer.',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#professional-service` },
  dateModified: '2026-10-25',
  inLanguage: 'en-US',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#services-answer'],
  },
}

const stackComparison = [
  {
    need: 'Marketing site, blog or brochure site',
    stack: 'WordPress',
    timeline: '2–6 weeks',
  },
  {
    need: 'Custom app, dashboard or authenticated portal',
    stack: 'React + Next.js',
    timeline: '6–16 weeks',
  },
  {
    need: 'Small or mid-size online store',
    stack: 'WooCommerce',
    timeline: '4–8 weeks',
  },
  {
    need: 'Large catalogue or multi-channel retail',
    stack: 'Shopify',
    timeline: '4–10 weeks',
  },
  {
    need: 'Legacy PHP application modernisation',
    stack: 'Laravel + React',
    timeline: '8–20 weeks',
  },
]

const servicesSchema = [
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]),
  serviceSchema({
    name: 'WordPress Development',
    serviceType: 'WordPress development',
    description: 'Custom WordPress themes, plugins, WooCommerce stores and maintenance.',
    url: '/services',
  }),
  serviceSchema({
    name: 'React & Next.js Development',
    serviceType: 'React and Next.js development',
    description: 'Scalable web applications built with React, Next.js, TypeScript and Tailwind CSS.',
    url: '/services',
  }),
  serviceSchema({
    name: 'PHP Development',
    serviceType: 'PHP development',
    description: 'Core PHP, CodeIgniter and Laravel web applications, APIs and CMS customisation.',
    url: '/services',
  }),
  serviceSchema({
    name: 'E-commerce Development',
    serviceType: 'E-commerce development',
    description: 'WooCommerce and Shopify stores, integrations and ongoing store management.',
    url: '/services',
  }),
  serviceSchema({
    name: 'SEO',
    serviceType: 'Search engine optimisation',
    description: 'Technical, on-page and off-page SEO for WordPress, React and Next.js websites.',
    url: '/services',
  }),
  serviceSchema({
    name: 'Digital Marketing & Automation',
    serviceType: 'Digital marketing automation',
    description: 'Google Ads, Facebook Ads, UGS, AGS and marketing automation workflows.',
    url: '/services',
  }),
]

export default function Services() {
  return (
    <>
      <PageHead
        title="Web Development Services | WordPress, React & Next.js"
        description="Custom WordPress, React and Next.js development, WooCommerce stores and maintenance plans. One senior developer, fixed scope, clear timeline."
        url="https://www.mufaqar.com/services"
        schema={[...servicesSchema, servicesPageSchema, servicesFaqSchema]}
      />
      <InnerPages_Banner subtitle="THIS IS WHAT I LOVE TO DO." title="WHAT I OFFER" />

      <section className="bg-white md:py-[5rem] py-12">
        <div className="container max-w-[860px] mx-auto px-4">
          <h2 className="md:text-4xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-6">
            Web development services, explained
          </h2>
          <div id="services-answer">
            <p className="text-base md:text-lg font-normal text-title_color mb-4">
              Mufaqar Islam is a full stack web developer in Lahore, Pakistan,
              who builds and maintains WordPress, WooCommerce, React and
              Next.js websites and applications. Projects run from a fixed
              scope, with design, development, technical SEO and launch handled
              by one senior developer.
            </p>
            <p className="text-base md:text-lg font-normal text-title_color mb-4">
              The stack is chosen around the job rather than a template.
              WordPress powers more than 40% of all websites according to{' '}
              <a
                href="https://w3techs.com/technologies/details/cm-wordpress"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:decoration-bs_btn_bg transition-all duration-300"
              >
                W3Techs
              </a>
              , which makes it a strong fit for content-led sites and small
              stores. React and Next.js suit custom applications and high-traffic
              products, and Next.js is used in production by teams listed in the{' '}
              <a
                href="https://nextjs.org/showcase"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:decoration-bs_btn_bg transition-all duration-300"
              >
                official Next.js showcase
              </a>
              . Speed work follows the{' '}
              <a
                href="https://web.dev/vitals/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:decoration-bs_btn_bg transition-all duration-300"
              >
                Core Web Vitals
              </a>{' '}
              thresholds Google publishes for LCP, INP and CLS.
            </p>
          </div>
          <ul className="list-disc pl-5 text-base md:text-lg font-normal text-title_color mb-4 flex flex-col gap-2">
            <li>One senior developer from scope to launch, with no handoffs.</li>
            <li>
              Fixed price and delivery schedule agreed before any work starts.
            </li>
            <li>
              WordPress, React, Next.js, PHP, WooCommerce and Shopify covered
              in-house.
            </li>
            <li>
              Speed, technical SEO, analytics and accessibility checks included
              at launch.
            </li>
            <li>
              Optional monthly maintenance for updates, backups and security.
            </li>
          </ul>
          <p className="text-sm font-normal text-title_color">
            Last updated:{' '}
            <time dateTime="2026-10-25">October 25, 2026</time>
          </p>
        </div>
      </section>

      <section className="bg-bs_info md:py-[12.5rem] py-20 relative">
        <div className='container mx-auto px-4 grid md:grid-cols-3 gap-10'>
          <Service title="WORDPRESS SERVICES" content="I specialize in creating fast, secure, and scalable WordPress websites tailored to your needs, including custom themes, plugins, and e-commerce solutions." list1="Custom Themes & Plugins" list2="E-commerce Solutions" list3="Maintenance & Support" />
          <Service title="Fullstack React.js Developer" content="I specialize in JavaScript frameworks like React.js, Node.js, and TypeScript to build scalable web apps with Next.js, TailwindCSS, APIs, and headless CMS." list1="Next.js Applications" list2="TailwindCSS Integration" list3="API & Headless CMS Integration" />
          <Service title="PHP Development" content="I specialize in Core PHP and frameworks like CodeIgniter and Laravel to deliver scalable and high-performance web solutions." list1="Custom Web Applications" list2="API Development & Integration" list3="CMS Customization" />
          <Service title="E-COMMERCE SOLUTIONS" content="I provide tailored e-commerce solutions to help you grow your online store using platforms like WooCommerce and Shopify." list1="WooCommerce Development"  list2="Shopify Solutions" list3="Store Management & Integrations"/>
          <Service title="SEO" content="I provide comprehensive SEO solutions to boost your website's visibility and drive organic traffic through on-page and off-page optimization." list1="On-Page SEO" list2="Off-Page SEO & Backlinks" list3="Comprehensive SEO Strategy" />
          <Service title="Digital Marketing & Automation" content="I help businesses scale with UGS, AGS, Google Ads, Facebook Ads, and marketing automation solutions designed to maximize ROI and streamline growth." list1="Google & Facebook Ads Management" list2="UGS & AGS Solutions" list3="Marketing Automation & Workflows"/>
       
        </div>
      </section>

      <section className="bg-white md:py-[10rem] py-16">
        <div className="container max-w-[900px] mx-auto px-4">
          <h2 className="md:text-4xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-6 text-center">
            Which stack fits your project?
          </h2>
          <p className="text-base md:text-lg font-normal text-title_color text-center mb-10 max-w-[720px] mx-auto">
            A quick comparison of the platforms I use most. Typical timelines
            assume a clear brief and timely feedback.
          </p>
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Recommended platform and typical timeline by project type
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3 pr-6 text-sm font-semibold uppercase tracking-[0.15em] text-title_color border-b border-gray-300"
                >
                  Project type
                </th>
                <th
                  scope="col"
                  className="py-3 pr-6 text-sm font-semibold uppercase tracking-[0.15em] text-title_color border-b border-gray-300"
                >
                  Recommended stack
                </th>
                <th
                  scope="col"
                  className="py-3 text-sm font-semibold uppercase tracking-[0.15em] text-title_color border-b border-gray-300"
                >
                  Typical timeline
                </th>
              </tr>
            </thead>
            <tbody>
              {stackComparison.map((row) => (
                <tr key={row.need}>
                  <th
                    scope="row"
                    className="py-4 pr-6 align-top text-base font-normal text-title_color border-b border-gray-200"
                  >
                    {row.need}
                  </th>
                  <td className="py-4 pr-6 text-base font-semibold text-title_color border-b border-gray-200">
                    {row.stack}
                  </td>
                  <td className="py-4 text-base font-normal text-title_color border-b border-gray-200">
                    {row.timeline}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-bs_secondary md:py-[12.5rem] py-20">
        <div className="container max-w-[860px] mx-auto px-4">
          <h2 className="md:text-4xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-12 text-center">
            Service questions, answered
          </h2>
          <div className="flex flex-col gap-8">
            {serviceFaqs.map((item) => (
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
          <p className="text-center mt-12">
            <Link
              href="/contact"
              className="text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300"
            >
              Start a project
            </Link>
          </p>
        </div>
      </section>

      <Testimonial />
      <CTA />
    </>
  )
}
