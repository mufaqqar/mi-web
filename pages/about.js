import { Brands } from '../components/brands';
import InnerPages_Banner from '../components/innerPages-banner';
import CTA from '../components/newComponents/cta';
import Testimonial from '../components/newComponents/testimonial';
import PageHead from '../components/pagesmeta';
import Story from '../components/story';
import { breadcrumbSchema, SITE_URL } from '../const/schema';

const aboutSchema = [
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Mufaqar Islam',
    url: `${SITE_URL}/about`,
    description:
      'Background, experience and skills of Mufaqar Islam, a full stack web developer specialising in WordPress, React and Next.js.',
    mainEntity: { '@id': `${SITE_URL}/#person` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    dateModified: '2026-10-25',
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#about-answer'],
    },
  },
];

export default function About() {
  return (
    <main className='overflow-x-hidden'>
      <PageHead
        title="About Mufaqar Islam | 15+ Years Full Stack Developer"
        description="15+ years shipping WordPress, React and Next.js products for clients worldwide. How I work, what I specialise in and how to start a project."
        url="https://www.mufaqar.com/about"
        schema={aboutSchema}
      />
    
      <InnerPages_Banner subtitle="Full Stack Developer | WordPress | React | NextJs | Tailwind" title="About Me" />

      <section className="bg-white md:py-[5rem] py-12">
        <div className="container max-w-[860px] mx-auto px-4">
          <h2 className="md:text-4xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-6">
            Who is Mufaqar Islam?
          </h2>
          <p
            id="about-answer"
            className="text-base md:text-lg font-normal text-title_color mb-6"
          >
            Mufaqar Islam is a full stack web developer based in Lahore,
            Pakistan, with more than 15 years of experience. He has delivered
            880+ projects for 200+ clients worldwide, building WordPress,
            WooCommerce, React and Next.js websites and applications, and he
            works directly with every client from scope to launch.
          </p>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-base font-normal text-title_color mb-6">
            <div>
              <dt className="font-semibold">Experience</dt>
              <dd>15+ years in production</dd>
            </div>
            <div>
              <dt className="font-semibold">Projects delivered</dt>
              <dd>880+ for 200+ clients</dd>
            </div>
            <div>
              <dt className="font-semibold">Core stack</dt>
              <dd>WordPress, React, Next.js, PHP, Tailwind CSS, MySQL</dd>
            </div>
            <div>
              <dt className="font-semibold">Based in</dt>
              <dd>Lahore, Pakistan — working worldwide</dd>
            </div>
            <div>
              <dt className="font-semibold">Typical response time</dt>
              <dd>Within 24 hours</dd>
            </div>
            <div>
              <dt className="font-semibold">Engagement</dt>
              <dd>Fixed-scope projects and monthly retainers</dd>
            </div>
          </dl>
          <p className="text-sm font-normal text-title_color">
            Last updated:{' '}
            <time dateTime="2026-10-25">October 25, 2026</time>
          </p>
        </div>
      </section>

      <Story />

      <Brands />
      <CTA />
    </main>
  );
}
