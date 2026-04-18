import './globals.css';

export const metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Lumina — The customer intelligence platform',
    template: '%s · Lumina',
  },
  description:
    'Lumina is the unified customer intelligence platform trusted by the teams building the future — turn product, sales, and support signals into revenue.',
  keywords: [
    'customer intelligence',
    'product analytics',
    'revenue operations',
    'SaaS',
    'B2B platform',
  ],
  authors: [{ name: 'Lumina' }],
  openGraph: {
    title: 'Lumina — The customer intelligence platform',
    description:
      'Turn every product, sales, and support signal into revenue. Built for modern go-to-market teams.',
    type: 'website',
    siteName: 'Lumina',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina — The customer intelligence platform',
    description:
      'Turn every product, sales, and support signal into revenue. Built for modern go-to-market teams.',
  },
  icons: { icon: '/favicon.ico' },
};

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
