import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-200 dark:from-slate-800 dark:via-indigo-900 dark:to-slate-900 transition-colors duration-500`}>
        {children}
      </body>
    </html>
  );
}