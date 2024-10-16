// src/app/layout.tsx
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { ThemeProvider } from '@/components/theme-provider';
import ClientComponent from './ClientComponent';

const dmSans = DM_Sans({ subsets: ['latin'] });

// Server-side metadata
export const metadata: Metadata = {
  title: 'Neobr',
  icons: {
    icon: '/fav.avif', // Add this line to link to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={dmSans.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <ClientComponent />
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
