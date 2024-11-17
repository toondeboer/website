import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Toon de Boer",
  description: "Website by Toon de Boer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
