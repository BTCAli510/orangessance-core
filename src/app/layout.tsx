import type { Metadata } from "next";
import { Inter_Tight, Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-inter-tight",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Orangessance — Where Urban Culture Meets Decentralization",
  description:
    "Culture without tech can't scale. Tech without culture can't onboard everyone. Orangessance builds the onchain coordination infrastructure for BASE Oakland bloc and the BASEbloc network.",
  openGraph: {
    title: "Orangessance",
    description: "Power to the People. Onchain.",
    url: "https://orangessance.com",
    siteName: "Orangessance",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${spaceMono.variable} ${dmSans.variable}`}
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
