import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'iPhone 17 Pro',
  description: 'Khám phá iPhone 17 Pro với chip A19 Pro, cụm camera sau 48MP và khung Titanium nguyên khối.',
  keywords: ['iPhone 17 Pro', 'Apple', 'Smartphone', 'Công nghệ'],
  
  openGraph: {
    title: 'iPhone 17 Pro',
    description: 'Khám phá iPhone 17 Pro với chip A19 Pro và cụm camera sau 48MP.',
    url: '/',
    siteName: 'Apple VN',
    images: [
      {
        url: '/camera_hero_endframe__bj7hg5poypn6_xlarge_2x (1).jpg',
        width: 1200,
        height: 630,
        alt: 'iPhone 17 Pro',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
