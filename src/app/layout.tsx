import { Inter } from "next/font/google";
import App from "@/app/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heidi's Innovation Project Q2 2023",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
