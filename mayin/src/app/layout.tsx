import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-60d7d1ff.vercel.app"),
  title: {
    default: "GRUPO MAYIN | Aliados en la vida diaria de Zaragoza",
    template: "%s | GRUPO MAYIN",
  },
  description:
    "GRUPO MAYIN reúne servicios modernos y confiables para Zaragoza y municipios cercanos. Conoce MAYIN EXPRESS, entregas 24/7 que te llevan lo que necesites desde cualquier comercio local.",
  openGraph: {
    title: "GRUPO MAYIN | Aliados cercanos para Zaragoza",
    description:
      "Descubre cómo MAYIN EXPRESS y las unidades de GRUPO MAYIN impulsan la vida cotidiana de Zaragoza, Puebla y su región.",
    url: "https://agentic-60d7d1ff.vercel.app",
    siteName: "GRUPO MAYIN",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRUPO MAYIN | Aliados en la vida diaria de Zaragoza",
    description:
      "Servicios útiles, confiables y modernos para Zaragoza, Puebla. Conoce MAYIN EXPRESS y su cobertura 24/7.",
  },
  keywords: [
    "Grupo Mayin",
    "Mayin Express",
    "entregas 24/7 Zaragoza Puebla",
    "servicio a domicilio Zaragoza",
    "delivery regional Zaragoza",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
