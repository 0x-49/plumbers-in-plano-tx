import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Professional Plumbing Services in Plano TX | Plano Plumbers',
    template: '%s | Plano Plumbers'
  },
  description: 'Expert plumbing services in Plano, Texas. Available 24/7 for emergency repairs, installations, and maintenance. Licensed and insured plumbers serving residential and commercial clients.',
  keywords: 'plumber, plumbing services, Plano TX, emergency plumber, drain cleaning, water heater repair, plumbing repair, commercial plumbing, residential plumbing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}