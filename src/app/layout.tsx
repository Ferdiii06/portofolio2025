import './globals.css';
import { DM_Sans } from 'next/font/google';
 
const dmSans = DM_Sans({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
});
 
export const metadata = {
  title: 'Ferdi | Frontend Developer',
  description: 'Portofolio Ferdi, Web Frontend Developer.',
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/image.png" />
      </head>
      <body className={`${dmSans.variable} font-sans  bg-[#fdfbf7] text-black antialiased`}>
        <main className="relative min-h-screen overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}