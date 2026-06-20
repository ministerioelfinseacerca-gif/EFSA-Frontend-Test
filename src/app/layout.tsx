import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

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
      <body className="min-h-full bg-background text-on-background flex flex-col font-body">
        {children}
      </body>
    </html>
  );
}
