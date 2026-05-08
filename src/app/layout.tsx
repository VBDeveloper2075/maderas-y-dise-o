import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pablo Elías | Atelier de Carpintería",
  description:
    "Atelier de carpintería y diseño a medida. Pablo Elías — especialista en optimizar espacios en Tres de Febrero y Zona Oeste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-[#333333] bg-[#fafafa]">
        {children}
      </body>
    </html>
  );
}
