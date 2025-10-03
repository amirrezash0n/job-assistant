import "./globals.css";
// import Footer from "@/components/public/footer/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سفر کن | صفحه اصلی",
  description: "با سفر کن بهترین سفر ها رو تجربه کنید.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen text-custom-white bg-gray-50 fon">
        {/* <Navbar /> */}
        <main className="container mx-auto px-4 py-8">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
