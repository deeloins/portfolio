import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Podeke — Full-Stack & Frontend Engineer",
  description:
    "Full-stack engineer building fast, accessible web products with React, Next.js, and Node.js. Based in Lagos, Nigeria. Open to remote roles.",
  keywords: ["Michael Podeke", "frontend engineer", "React developer", "Next.js", "full-stack", "Lagos", "Nigeria"],
  authors: [{ name: "Michael Podeke" }],
  openGraph: {
    title: "Michael Podeke — Full-Stack & Frontend Engineer",
    description:
      "Full-stack engineer building fast, accessible web products with React, Next.js, and Node.js.",
    url: "https://michaelpodeke.dev",
    siteName: "Michael Podeke",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Podeke — Full-Stack & Frontend Engineer",
    description: "Full-stack engineer · React · Next.js · Node.js · Lagos",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
