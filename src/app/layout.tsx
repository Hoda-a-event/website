import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Hoda'a - Conversational Event Marketing Platform",
  description:
    "Revolutionary event marketing platform connecting organizers with their audience through WhatsApp and email. Launch your events to success with Nigeria's most advanced marketing solution.",
  keywords: [
    'event marketing',
    'WhatsApp marketing',
    'email marketing',
    'event promotion',
    'Nigeria events',
    'event organizers',
    'marketing platform',
    'event management',
    'audience engagement',
    'event success',
  ],
  authors: [{ name: "Hoda'a Team" }],
  icons: {
    icon: '/images/hodaa-favicon.png',
    shortcut: '/images/hodaa-favicon.png',
    apple: '/images/hodaa-favicon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/hodaa-favicon.png',
    },
  },
  openGraph: {
    title: "Hoda'a - Conversational Event Marketing Engine",
    description:
      'Your #1 conversational event marketing platform. Transform how you promote events and connect with your audience. And how audience discover and experience events.',
    images: ['/images/hodaa-favicon.png'],
    type: 'website',
    siteName: "Hoda'a",
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hoda'a - Event Marketing Revolution",
    description:
      "Nigeria's first conversational event marketing platform launching soon. Join the waitlist!",
    images: ['/images/hodaa-favicon.png'],
    creator: '@hodaa_ng',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#003B75',
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        {children}

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-B2RXRGTT8S`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B2RXRGTT8S');
          `}
        </Script>
      </body>
    </html>
  );
}
