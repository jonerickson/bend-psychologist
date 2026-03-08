import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RiverFlow Psychology Services | Dr. R. Andrew Barram, Psy.D.",
  description:
    "Licensed Psychologist in Bend, Oregon specializing in First Responder mental health, counseling, psychological evaluations, and consultation. Dr. R. Andrew Barram, Psy.D.",
  keywords: [
    "psychologist Bend Oregon",
    "First Responder mental health",
    "counseling Bend OR",
    "psychological evaluations",
    "Dr. Barram",
    "RiverFlow Psychology",
    "therapy Bend Oregon",
    "forensic psychology",
    "expert testimony",
  ],
  openGraph: {
    title: "RiverFlow Psychology Services | Dr. R. Andrew Barram, Psy.D.",
    description:
      "Compassionate, evidence-based psychological services in Bend, Oregon. Specializing in First Responder mental health, counseling, evaluations, and consultation.",
    url: "https://bendpsychologist.com",
    siteName: "RiverFlow Psychology Services",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
