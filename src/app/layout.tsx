import App from "@/app/app";

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
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
