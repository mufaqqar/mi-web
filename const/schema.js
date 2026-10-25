export const SITE_URL = 'https://www.mufaqar.com';

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.url ? { item: `${SITE_URL}${item.url}` } : {}),
  })),
});

export const serviceSchema = ({ name, description, url, serviceType }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  serviceType,
  url: `${SITE_URL}${url}`,
  provider: { '@id': `${SITE_URL}/#professional-service` },
  areaServed: ['Pakistan', 'Worldwide'],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: `${SITE_URL}${url}`,
    servicePhone: '+92 302-6006-280',
  },
});
