import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

// Premium SEO Metadata for VectraOS
export const metadata: Metadata = {
  title: 'VectraOS | Enterprise AI Automation Platform',
  description:
    'VectraOS is an enterprise-grade AI automation platform that streamlines workflows, accelerates intelligent decision-making, and enables scalable enterprise data operations.',
  keywords: [
    'VectraOS',
    'AI automation',
    'Enterprise AI',
    'Workflow automation',
    'CI/CD automation',
    'Data operations',
    'Secure execution',
    'Next-gen SaaS'
  ],
  authors: [{ name: 'VectraOS Systems Inc.' }],
  metadataBase: new URL('https://vectraos.com'), // Canonical Base
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'VectraOS | Enterprise AI Automation Platform',
    description:
      'VectraOS is an enterprise-grade AI automation platform that streamlines workflows, accelerates intelligent decision-making, and enables scalable enterprise data operations.',
    url: 'https://vectraos.com',
    siteName: 'VectraOS',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image-placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'VectraOS Enterprise AI Automation Dashboard'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VectraOS | Enterprise AI Automation Platform',
    description:
      'VectraOS is an enterprise-grade AI automation platform that streamlines workflows, accelerates intelligent decision-making, and enables scalable enterprise data operations.',
    images: ['/og-image-placeholder.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data Schema for rich snippet indexing (VectraOS)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'VectraOS',
    'operatingSystem': 'All',
    'applicationCategory': 'DeveloperApplication',
    'description':
      'VectraOS is an enterprise-grade AI automation platform that streamlines workflows, accelerates intelligent decision-making, and enables scalable enterprise data operations.',
    'offers': {
      '@type': 'Offer',
      'price': '19.00',
      'priceCurrency': 'USD'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '1420'
    }
  };

  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
