import InnerPages_Banner from '../components/innerPages-banner'
import Service from '../components/service-box'
import PageHead from '../components/pagesmeta'
import Testimonial from '../components/newComponents/testimonial'
import CTA from '../components/newComponents/cta'
import { breadcrumbSchema, serviceSchema } from '../const/schema'

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
        schema={servicesSchema}
      />
      <InnerPages_Banner subtitle="THIS IS WHAT I LOVE TO DO." title="WHAT I OFFER" />

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
      <Testimonial />
      <CTA />
    </>
  )
}
