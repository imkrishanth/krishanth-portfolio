import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: {
    default: "Rathees Krishanth - Portfolio",
    template: "%s - Rathees Krishanth",
  },
  description:
    "Software Engineer and Frontend Developer portfolio featuring React, Next.js, and React Native work.",
  applicationName: "Rathees Krishanth Portfolio",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Rathees Krishanth - Portfolio",
    description:
      "Software Engineer and Frontend Developer portfolio featuring React, Next.js, and React Native work.",
    url: "/",
    siteName: "Rathees Krishanth Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rathees Krishanth - Portfolio",
    description:
      "Software Engineer and Frontend Developer portfolio featuring React, Next.js, and React Native work.",
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
      className="h-full antialiased"
    >
      <body className="app-body">
        <header className="header">
          <div className="container header-inner">
            <Link className="brand" href="/#top">
              <span className="brand-icon">RK</span>
              <span className="brand-sub">Software Engineer</span>
            </Link>

            <nav className="nav">
              <Link href="/#top">Home</Link>
              <Link href="/#about">About</Link>
              <Link href="/#skills">Skills</Link>
              <Link href="/#experience">Experience</Link>
              <Link href="/#projects">Projects</Link>
              <Link href="/#contact">Contact</Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
