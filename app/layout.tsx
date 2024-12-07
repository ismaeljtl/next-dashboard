import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script src="https://unpkg.com/react-scan/dist/auto.global.js"></script>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
