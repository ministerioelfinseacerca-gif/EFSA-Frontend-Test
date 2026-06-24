import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import CustomCursor from "@/components/custom-cursor";
import Preloader from "@/components/preloader";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plataforma Digital - El Fin Se Acerca",
  description: "Ministerio Evangelístico Pentecostal El Fin Se Acerca - Recursos doctrinales y estudio profético para la edificación en los tiempos finales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full text-on-background flex flex-col font-body">
        <SmoothScrollProvider>
          <CustomCursor />
          <Preloader>
            {children}
          </Preloader>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
