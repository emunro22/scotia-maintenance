import type { Metadata, Viewport } from 'next';
import { Outfit, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCallBar from '@/components/MobileCallBar';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema, websiteSchema } from '@/lib/schema';
import { site, canonical } from '@/lib/site';
import './globals.css';

// Outfit is geometric and holds up at heavy weights, which carries the bold
// headline treatment; Inter stays quiet underneath it for long-form copy.
const display = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Landscaping Glasgow & West Scotland | Scotia Maintenance',
    template: '%s',
  },
  description:
    'Professional landscaping and garden maintenance across Glasgow and surrounding areas. Contact Scotia Maintenance on 07766 636189 for a quote.',
  applicationName: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [{ url: '/icon-192.png', sizes: '192x192', type: 'image/png' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: site.name,
    url: canonical('/'),
    title: 'Landscaping Glasgow & West Scotland | Scotia Maintenance',
    description:
      'Landscaping and garden maintenance across Glasgow, Renfrewshire and Dunbartonshire. Seven days a week, 8am to 4pm.',
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'Scotia Maintenance: landscaping and garden maintenance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landscaping Glasgow & West Scotland | Scotia Maintenance',
    description:
      'Landscaping and garden maintenance across Glasgow, Renfrewshire and Dunbartonshire. Call 07766 636189.',
    images: [site.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: '#0e2a52',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col pb-[68px] lg:pb-0">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-card focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
        <Analytics />
      </body>
    </html>
  );
}
