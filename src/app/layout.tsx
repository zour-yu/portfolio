import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

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

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Yasith Rathnayaka | Software Engineering & Full Stack Developer",
    template: "%s | Yasith Rathnayaka",
  },
  description:
    "Portfolio of Yasith Rathnayaka — Software Engineering undergraduate at SLIIT specializing in full-stack web development with Next.js, React, Node.js, and SQL databases.",
  keywords: [
    "Yasith Rathnayaka",
    "Software Engineering",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Nest.js",
    "PostgreSQL",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "Sri Lanka",
  ],
  authors: [{ name: "Yasith Rathnayaka" }],
  creator: "Yasith Rathnayaka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/zour-yu",
    title: "Yasith Rathnayaka | Software Engineering & Full Stack Developer",
    description:
      "Software Engineering undergraduate specializing in full-stack web development using React, Next.js, Node.js, and SQL databases.",
    siteName: "Yasith Rathnayaka Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasith Rathnayaka | Software Engineer",
    description: "Full Stack Web Developer specializing in React, Next.js, Node.js, and SQL databases.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased font-sans selection:bg-cyan-500/20 selection:text-cyan-200 overflow-x-clip">
        <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-60 z-0" />
        <div className="fixed inset-0 pointer-events-none bg-radial-gradient z-0" />
        <SmoothScrollProvider>
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
