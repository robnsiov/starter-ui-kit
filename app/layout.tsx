import "./globals.css";
import { Inter } from "next/font/google";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
