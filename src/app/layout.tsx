import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "ReclaimNature | Advanced Plastic Recycling & Sustainable Infrastructure in Bihar",
  description: "ReclaimNature transforms plastic waste into high-performance raw materials and sustainable infrastructure products, pioneering the circular economy and driving global Net Zero goals.",
  keywords: [
    "plastic recycling",
    "sustainability Bihar",
    "HDPE granules",
    "LDPE granules",
    "PP granules",
    "PET flakes",
    "terrace tiles",
    "plastic lumber",
    "recycled pavers",
    "circular economy India",
    "green manufacturing",
    "climate tech",
    "IIT Patna collaboration",
    "CIPET partners"
  ],
  authors: [{ name: "ReclaimNature Team", url: "https://reclaimnature.co.in" }],
  creator: "ReclaimNature",
  metadataBase: new URL("https://reclaimnature.co.in"),
  openGraph: {
    title: "ReclaimNature | Advanced Plastic Recycling & Sustainable Infrastructure",
    description: "Transforming plastic waste into tomorrow's resources. Building a cleaner Bihar and a more sustainable future through advanced recycling technology.",
    url: "https://reclaimnature.co.in",
    siteName: "ReclaimNature",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReclaimNature | Advanced Plastic Recycling",
    description: "Transforming plastic waste into high-performance raw materials and infrastructure in Bihar.",
  }
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
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
