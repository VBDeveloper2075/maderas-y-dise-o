import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Carpintería Tres de Febrero | Muebles a Medida y Diseño",
  description:
    "Muebles de autor y diseño a medida. Especialista en optimizar espacios reducidos en Tres de Febrero. Vestidores, placares, cocinas y restauración.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-neutral-900 bg-white">
        {children}
      </body>
    </html>
  );
}
