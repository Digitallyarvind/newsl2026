import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://scalifylabs.com'), // Replace with actual domain when live
  title: {
    default: "Scalify Labs | Best Digital Marketing & SEO Agency in Ranchi, Jharkhand",
    template: "%s | Scalify Labs - Ranchi",
  },
  description: "Scalify Labs is the top-rated digital marketing and SEO agency in Ranchi, Jharkhand. We offer expert SEO services, local SEO, PPC, and growth strategies to help businesses dominate their market. Get ROI-focused results today.",
  keywords: [
    "SEO services in Ranchi", "SEO company Ranchi", "Local SEO Ranchi", "Best SEO agency in Jharkhand",
    "Digital marketing agency Ranchi", "SEO consultant Ranchi", "Search engine optimization services Ranchi",
    "PPC management Ranchi", "Content marketing services Ranchi", "Social media marketing Ranchi",
    "Affordable SEO services in Ranchi", "SEO company for small business Ranchi", "SEO for clinics in Ranchi",
    "SEO for schools Ranchi", "SEO for real estate in Ranchi", "Lead generation services Ranchi"
  ],
  authors: [{ name: "Scalify Labs Team" }],
  creator: "Scalify Labs",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://scalifylabs.com",
    title: "Scalify Labs | Best Digital Marketing & SEO Agency in Ranchi, Jharkhand",
    description: "Grow your business with Scalify Labs, Ranchi's #1 digital marketing agency. We specialize in SEO, PPC, and data-driven growth strategies.",
    siteName: "Scalify Labs",
    images: [
      {
        url: "/motivated-team.png", // Using the new team image
        width: 1200,
        height: 630,
        alt: "Scalify Labs Team - Digital Marketing Experts in Ranchi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalify Labs | Best Digital Marketing & SEO Agency in Ranchi, Jharkhand",
    description: "Grow your business with Scalify Labs, Ranchi's #1 digital marketing agency. Expert SEO & PPC services.",
    images: ["/motivated-team.png"],
    creator: "@scalifylabs", // Placeholder handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
