import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gudagott — Svenska Delikatesser i Majorna, Göteborg",
  description:
    "Gudagott är en delikatessbutik i hjärtat av Majorna, Göteborg. Här hittar du närproducerat kött, vilt, charkuterier, hantverksost och lokala delikatesser.",
  keywords: "köttbutik, delikatesser, Majorna, Göteborg, chark, ost, vilt, närproducerat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
