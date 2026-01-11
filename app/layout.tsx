import Header from "@/components/header";
import './globals.css';
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import CustomCursor from '@/components/custom-cursor';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Sarah Aliriel - Portfólio',
  description: 'Portfólio pessoal de uma desenvolvedora web.',
  icons: '/favicon.ico?v=1',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
    <body
  className={`${inter.className} bg-dots bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 transition-colors duration-500 dark:bg-black dark:text-white`}>
     <div className="bg-[#101c3d] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#AA9D8D]"></div>
     <div className="bg-[#AA9D8D] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#101c3d]"></div>

      <CustomCursor />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

      </body>
    </html>
  );
}