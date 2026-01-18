import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import LanguageContextProvider from "@/context/language-context";
import LanguageSwitch from "@/components/language-switch";
import { Toaster } from "react-hot-toast";
import CustomCursor from "@/components/custom-cursor";
import { FooterBlur } from "@/components/footerblurr";
import FixedButtons from "@/components/fixed-buttons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sarah Aliriel",
  description: "Portfólio pessoal de uma desenvolvedora web.",
  icons: "/favicon.ico?v=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className="!scroll-smooth">
      <body
        className={`
          ${inter.className}
          bg-dots
          bg-gray-50
          text-gray-950
          transition-colors duration-500
          dark:bg-black
          dark:text-white
          min-h-screen
          flex flex-col
          overflow-x-hidden
          relative
        `}
      >
        <div className="bg-grain" />

        <div
          className="
            absolute -z-10 top-[-10rem] right-[-8rem]
            h-[34rem] w-[34rem] sm:h-[46rem] sm:w-[46rem] lg:h-[56rem] lg:w-[56rem]
            rounded-full
            bg-[#101c3d] dark:bg-[#AA9D8D]
            bg-blob bg-blob--blend bg-blob--1
          "
        />

        <div
          className="
            absolute -z-10 top-[-6rem] left-[-18rem] sm:left-[-26rem]
            h-[30rem] w-[44rem] sm:h-[42rem] sm:w-[70rem]
            rounded-full
            bg-[#AA9D8D] dark:bg-[#101c3d]
            bg-blob bg-blob--blend bg-blob--2
          "
        />

        <div
          className="
            absolute -z-10 top-[6rem] left-[20%] sm:left-[28%]
            h-[26rem] w-[26rem] sm:h-[34rem] sm:w-[34rem] lg:h-[40rem] lg:w-[40rem]
            rounded-full
            bg-[#101c3d] dark:bg-[#AA9D8D]
            bg-blob bg-blob--blend bg-blob--3
          "
        />

        <CustomCursor />

        <ThemeContextProvider>
          <LanguageContextProvider>
            <ActiveSectionContextProvider>
              <Header />

              <main className="flex-1 pt-28 sm:pt-36">
                {children}
                <FooterBlur />
              </main>

              <Footer />
              <FixedButtons />

              <Toaster position="top-right" />
            </ActiveSectionContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}