import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/layout/layout";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata = {
  title: "Terrin & Chevillot",
  description:
    "Terrin & Chevillot Bâtiments - Experts en construction et rénovation.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.terrin-chevillot.com",
    title: "Terrin & Chevillot - Bâtiments",
    description: "Découvrez nos services de construction et rénovation.",
    images: [
      {
        url: "https://www.terrin-chevillot.com/hero-image.jpg",
        width: 1008,
        height: 617,
        alt: "Terrin & Chevillot Bâtiments",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} antialiased font-sans`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
