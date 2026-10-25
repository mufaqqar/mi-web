import Head from 'next/head';

const SITE_URL = 'https://www.mufaqar.com';
const OG_IMAGE = `${SITE_URL}/images/og.png`;
const OG_IMAGE_ALT =
  'Mufaqar Islam — Full Stack Web Developer specialising in WordPress, React and Next.js';

const PageHead = ({
  title,
  description,
  url,
  curl,
  ogType,
  noIndex,
  image,
  schema,
  updated = '2026-10-25',
}) => {
  const ogImage = image || OG_IMAGE;
  const schemas = schema ? [].concat(schema) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={
          noIndex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      <meta name="author" content="Mufaqar Islam" />
      <meta name="last-modified" content={updated} />
      <meta property="og:updated_time" content={`${updated}T00:00:00+05:00`} />
      <link rel="canonical" href={curl ? curl : url} />
      <link rel="alternate" hrefLang="en" href={curl ? curl : url} />
      <link rel="alternate" hrefLang="x-default" href={curl ? curl : url} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType || 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Mufaqar Islam" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mufaqar" />
      <meta name="twitter:creator" content="@mufaqar" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

      {schemas.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Head>
  );
};

export default PageHead;
