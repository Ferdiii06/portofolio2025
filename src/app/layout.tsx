import './globals.css';
import { Outfit } from 'next/font/google';
import { LanguageProvider } from '../context/LanguageContext';
import CustomCursor from '../components/CustomCursor';
 
const outfitFont = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});
 
export const metadata = {
  title: 'Ferdi | Portofolio',
  description: 'Portofolio Ferdi, Web Fullstack Developer, Mobile Apps Developer .',
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/image.png" />
      </head>
      <body className={`${outfitFont.variable} font-sans bg-slate-50 text-slate-800 antialiased relative`}>
        <CustomCursor />
        <main className="relative min-h-screen overflow-x-hidden">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </main>
      </body>
    </html>
  );
}