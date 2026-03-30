import type { Metadata } from "next";
import "./globals.css";
import { ClientRoot } from "./ClientRoot";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Apprentice Hub",
  description: "Browse and track degree apprenticeships across the UK.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
