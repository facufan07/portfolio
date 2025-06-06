import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Facundo Fandiño",
  description: "Portfolio de Facundo Fandiño",
  icons: "/faviconico.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
      className="w-dvw h-dvh overflow-hidden"
      >
        {children}
      </body>
    </html>
  );
}
