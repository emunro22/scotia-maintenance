export const site = {
  name: 'Scotia Maintenance',
  legalName: 'Scotia Maintenance',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://scotiamaintenance.com').replace(/\/$/, ''),
  description:
    'Landscaping and garden maintenance across Glasgow, Renfrewshire, West Dunbartonshire and East Renfrewshire.',
  phone: '07766 636189',
  phoneHref: 'tel:+447766636189',
  phoneE164: '+447766636189',
  email: 'enquiries@scotiamaintenance.com',
  category: 'Landscaper',
  openingHours: 'Monday to Sunday, 8:00am – 4:00pm',
  openingHoursShort: '7 days, 8am–4pm',
  ogImage: '/images/rear-garden-after-7.jpg',
} as const;

export const openingHoursSpecification = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '16:00',
  },
];

/** Canonical URL helper: always returns a clean, absolute, lowercase URL. */
export function canonical(path = '/'): string {
  const clean = path === '/' ? '' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return `${site.url}${clean}`;
}
