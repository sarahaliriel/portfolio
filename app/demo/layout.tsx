import { Inter } from "next/font/google";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import '../globals.css';
import CustomCursor from '@/components/custom-cursor';
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body
        className={`${inter.className} relative h-screen flex items-center justify-center bg-gray-50 text-gray-950 dark:bg-black dark:text-white`}
      >
        <div className="bg-[#AA9D8D] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#101c3d]"></div>
        <div className="bg-[#101c3d] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#AA9D8D]"></div>

        <CustomCursor />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className="flex flex-col items-center justify-center text-center px-6">
              {children}
            </div>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}