import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";

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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
