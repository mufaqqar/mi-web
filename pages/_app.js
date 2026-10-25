import Footer from '../components/newComponents/footer'
import Header from '../components/newComponents/header'
import Head from 'next/head'
import '../styles/globals.css'

const SITE_URL = 'https://www.mufaqar.com'
const OG_IMAGE = `${SITE_URL}/images/og.png`

const portraitSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": `${SITE_URL}/#portrait`,
  "contentUrl": `${SITE_URL}/images/me.jpg`,
  "url": `${SITE_URL}/images/me.jpg`,
  "name": "Mufaqar Islam",
  "caption": "Mufaqar Islam, full stack web developer based in Lahore, Pakistan",
  "width": 718,
  "height": 982
}

const logoSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": `${SITE_URL}/#logo`,
  "contentUrl": `${SITE_URL}/images/logo.png`,
  "url": `${SITE_URL}/images/logo.png`,
  "name": "Mufaqar Islam logo",
  "width": 303,
  "height": 66
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "Mufaqar Islam Web Development",
  "alternateName": "Mufaqar Islam",
  "url": `${SITE_URL}/`,
  "logo": { "@id": `${SITE_URL}/#logo` },
  "image": { "@id": `${SITE_URL}/#portrait` },
  "founder": { "@id": `${SITE_URL}/#person` },
  "foundingDate": "2010",
  "email": "info@mufaqar.com",
  "telephone": "+92 302-6006-280",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "134 B Ahmed Housing, Multan Road",
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
    "addressCountry": "PK"
  },
  "sameAs": [
    "https://www.facebook.com/mufaqar",
    "https://www.linkedin.com/in/mufaqar",
    "https://twitter.com/mufaqar",
    "https://github.com/mufaqar"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "info@mufaqar.com",
    "telephone": "+92 302-6006-280",
    "availableLanguage": ["English", "Urdu"],
    "areaServed": "Worldwide"
  }
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": `${SITE_URL}/`,
  "name": "Mufaqar Islam — Full Stack Web Developer",
  "inLanguage": "en-US",
  "publisher": { "@id": `${SITE_URL}/#organization` }
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  "name": "Mufaqar Islam",
  "url": `${SITE_URL}/`,
  "image": { "@id": `${SITE_URL}/#portrait` },
  "jobTitle": "Full Stack Web Developer",
  "description": "Full stack web developer with over 15 years of experience building, launching and maintaining WordPress, React, Next.js and PHP websites and web applications.",
  "telephone": "+92 302-6006-280",
  "email": "info@mufaqar.com",
  "knowsLanguage": ["en", "ur"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "134 B Ahmed Housing, Multan Road",
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
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
  "logo": { "@id": `${SITE_URL}/#logo` },
  "telephone": "+92 302-6006-280",
  "email": "info@mufaqar.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "134 B Ahmed Housing, Multan Road",
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
    "addressCountry": "PK"
  },
  "areaServed": ["PK", "Worldwide"],
  "priceRange": "$$",
  "founder": { "@id": `${SITE_URL}/#person` },
  "sameAs": [
    "https://www.facebook.com/mufaqar",
    "https://www.linkedin.com/in/mufaqar",
    "https://twitter.com/mufaqar",
    "https://github.com/mufaqar"
  ],
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
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Mufaqar Islam — Full Stack Web Developer"
      href="/feed.xml"
    />
    <link rel="llms" type="text/plain" href="/llms.txt" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(portraitSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(logoSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
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
