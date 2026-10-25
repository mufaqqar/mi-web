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
    inLanguage: 'en-US',
  },
];

export default function About() {
  return (
    <main className='overflow-x-hidden'>
      <PageHead
        title="About Mufaqar Islam | 10+ Years Full Stack Developer"
        description="10+ years shipping WordPress, React and Next.js products for clients worldwide. How I work, what I specialise in and how to start a project."
        url="https://www.mufaqar.com/about"
        schema={aboutSchema}
      />
    
      <InnerPages_Banner subtitle="Full Stack Developer | WordPress | React | NextJs | Tailwind" title="About Me" />

      <Story />

      <Brands />
      <CTA />
    </main>
  );
}
