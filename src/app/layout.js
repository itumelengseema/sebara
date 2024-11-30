import localFont from 'next/font/local';
import '../app/lux-bootstrap.main.css';
import BootstrapClient from '@/components/common/BootstrapClient';
import Header from '@/components/common/Header';

import './globals.css';
import Footer from '@/components/common/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Sabara Malele Projects',
  description:
    'Sabara Malele Projects (PTY) LTD is a leading construction and civil engineering firm dedicated to delivering high-quality projects across residential, commercial, and industrial sectors. We specialize in tailored construction solutions, infrastructure development, and project management.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
