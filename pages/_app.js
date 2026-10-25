import Footer from '../components/newComponents/footer'
import Header from '../components/newComponents/header'
import Head from 'next/head'
import '../styles/globals.css'

const SITE_URL = 'https://www.mufaqar.com'
const OG_IMAGE = `${SITE_URL}/images/og.png`

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": `${SITE_URL}/`,
  "name": "Mufaqar Islam — Full Stack Web Developer",
  "inLanguage": "en-US",
  "publisher": { "@id": `${SITE_URL}/#person` }
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  "name": "Mufaqar Islam",
  "url": `${SITE_URL}/`,
  "image": OG_IMAGE,
  "jobTitle": "Full Stack Web Developer",
  "description": "Full stack web developer with over a decade of experience building, launching and maintaining WordPress, React, Next.js and PHP websites and web applications.",
  "telephone": "+92 302-6006-280",
  "email": "info@mufaqar.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "134 B Ahmed Housing Multan Lahore",
    "addressCountry": "PK"
  },
  "sameAs": [
    "https://www.facebook.com/mufaqar",
    "https://www.linkedin.com/in/mufaqar",
    "https://twitter.com/mufaqar",
    "https://github.com/mufaqar"
  ],
  "knowsAbout": ["WordPress", "React", "Next.js", "PHP", "TailwindCSS", "MySQL", "E-commerce", "Web Development", "API Development", "DevOps"]
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#professional-service`,
  "name": "Mufaqar Islam - Full Stack Web Developer",
  "url": `${SITE_URL}/`,
  "image": OG_IMAGE,
  "telephone": "+92 302-6006-280",
  "email": "info@mufaqar.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "134 B Ahmed Housing Multan Lahore",
    "addressCountry": "PK"
  },
  "areaServed": ["PK", "Worldwide"],
  "priceRange": "$$",
  "founder": { "@id": `${SITE_URL}/#person` },
  "description": "Full stack web developer specialising in WordPress, React, Next.js and PHP. Services include full stack development, WordPress development, e-commerce and website maintenance.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Stack Web Development", "description": "Front-end, back-end, database, API and DevOps delivery for websites and web applications." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WordPress Development", "description": "Custom WordPress themes, plugins and WooCommerce e-commerce stores." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "React & Next.js Application Development", "description": "Modern front-end and full-stack applications built with React, Next.js and Tailwind CSS." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Maintenance & Support", "description": "Updates, security, backups and managed hosting for WordPress and React or Next.js sites." } }
    ]
  }
}

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  </Head>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
}

export default MyApp
