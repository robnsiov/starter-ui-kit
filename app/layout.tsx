import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import Container from "@/components/shared/containers/root";

export const metadata = {
  title: {
    template: "Dashboard - %s",
    default: "Dashboard",
  },
};
const pop = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--pop",
});

export const san = localFont({
  src: [
    {
      path: "../public/fonts/rtl/san/normal.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/rtl/san/bold.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/rtl/san/bold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/rtl/san/bold.otf",
      weight: "700",
    },
    {
      path: "../public/fonts/rtl/san/bold.otf",
      weight: "800",
    },
  ],
  variable: "--san",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${pop.variable} ${san.variable} bg-light dark:bg-dark-800`}
      >
        <Container>{children}</Container>
      </body>
    </html>
  );
}
