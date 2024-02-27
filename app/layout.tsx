import type { Metadata } from 'next';

import PlausibleAnalytics from 'next-plausible';

import './globals.css';

import { getFontConfig } from '@/fonts/fonts.config';
const { accent, sans } = getFontConfig();

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { Providers } from './providers';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${accent.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <PlausibleAnalytics domain="productcraft.io" />
        {/* <meta name="og:image" /> is generated. */}
        <meta property="og:image:alt" content="Binod Aryal" />
        {/* <meta name="twitter:image" /> is generated. */}
        <meta property="og:image:alt" content="Binod Aryal" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="productcraft.io – Blog"
          href="/rss.xml"
        />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen" data-page-root>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};

/**
 * Exports
 */

export const metadata: Metadata = {
  metadataBase: new URL('https://productcraft.io'),
  authors: { name: 'Binod Aryal' },
  creator: 'Binod Aryal',
  publisher: 'Binod Aryal',
  title: {
    template: '%s | ProductCraft',
    default: 'ProductCraft – Crafting Vision into Reality',
  },
  description:
    'Turn your product’s pain into production-ready features that unlock opportunities. For startups and scale-ups.',
  keywords: [
    'Web Development',
    'Freelancer',
    'Product Engineer',
    'Product Development',
    'Product Management',
    'MVP',
    'Startups',
  ],
  viewport: { width: 'device-width', initialScale: 1 },
  alternates: {
    canonical: 'https://productcraft.io',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  manifest: '/manifest.json',
  twitter: {
    card: 'summary_large_image',
    site: '@binodaryal21',
    creator: '@binodaryal21',
    title: 'Binod Aryal – Product Engineer',
    description:
      'Turn your product’s pain into production-ready features that unlock opportunities. For startups and scale-ups.',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Binod',
    lastName: 'Aryal',
    username: 'binod',
    gender: 'he/him',
    emails: ['hello@productcraft.io'],
    url: 'https://productcraft.io',
    siteName: 'ProductCraft',
    title: 'ProductCraft – Crafting Vision into Reality',
    description:
      'Turn your product’s pain into production-ready features that unlock opportunities. For startups and scale-ups.',
    countryName: 'Nepal',
    locale: 'en_US',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ProductCraft',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default RootLayout;
