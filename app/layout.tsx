import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://themaskedbit.com"),
  title: { default: "TheMaskedBit — Technology. Ideas. Better living.", template: "%s — TheMaskedBit" },
  description: "TheMaskedBit builds thoughtful products and experiences across tools, media and betterment.",
  openGraph: { title: "TheMaskedBit", description: "Technology. Ideas. Better living.", url: "https://themaskedbit.com", siteName: "TheMaskedBit", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en"><body>{children}</body></html>; }
