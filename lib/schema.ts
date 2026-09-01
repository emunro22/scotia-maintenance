import { site, openingHoursSpecification } from './site';
import { areas } from './areas';

const areaServed = areas.map((a) => ({
  '@type': 'City',
  name: a.name,
}));

/**
 * Scotia Maintenance operates as a service-area business. No public street address
 * has been supplied, so no address or geo coordinates are asserted here.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site.url}/#business`,
    additionalType: 'https://en.wikipedia.org/wiki/Landscaping',
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    image: `${site.url}${site.ogImage}`,
    logo: `${site.url}/scotia-maintenance-logo.png`,
    openingHoursSpecification,
    areaServed,
    knowsAbout: [
      'Landscaping',
      'Garden maintenance',
      'Lawn maintenance',
      'Garden improvements',
      'Planting',
      'Outdoor maintenance',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: 'en-GB',
    publisher: { '@id': `${site.url}/#business` },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaNames: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    url: opts.url,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${site.url}/#business`,
      name: site.name,
      url: site.url,
      telephone: site.phoneE164,
      email: site.email,
    },
    areaServed: opts.areaNames.map((name) => ({ '@type': 'City', name })),
  };
}
