import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Afrolink | Agence de communication digitale',
  description:
    'Afrolink imagine et déploie des expériences de communication digitale inspirantes pour les marques ambitieuses.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={poppins.variable} suppressHydrationWarning>
      <body className={poppins.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
