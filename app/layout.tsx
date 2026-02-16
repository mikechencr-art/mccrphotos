import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mike Chen Photography",
  description: "Editorial graduation and portrait photography in New York City.",
  icons: {
    icon: [{ url: "/brand/logo.png", type: "image/png" }],
    apple: "/brand/logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
