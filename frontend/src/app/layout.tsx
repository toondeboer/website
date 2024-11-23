"use client";

import "./globals.css";
import { CognitoAuthProvider } from "@/src/auth/CognitoAuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CognitoAuthProvider>{children}</CognitoAuthProvider>
      </body>
    </html>
  );
}
