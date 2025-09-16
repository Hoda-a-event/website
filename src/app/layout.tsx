import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PFP Maker - Create Your Avatar",
  description: "Create custom profile pictures with our drag & drop editor.",
  keywords: ["PFP", "avatar", "profile picture", "creator", "editor"],
  authors: [{ name: "PFP Maker Team" }],
  openGraph: {
    title: "PFP Maker - Create Your Avatar",
    description: "Create custom profile pictures with our drag & drop editor.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PFP Maker",
    description: "Create your perfect avatar",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
       
        {children}
      </body>
    </html>
  );
}
