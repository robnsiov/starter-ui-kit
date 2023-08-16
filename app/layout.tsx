import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Container from "@/components/shared/containers/root";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

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
    <html>
      <body className={`${inter.className} bg-white dark:bg-dark-800`}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
