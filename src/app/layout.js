import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hotjar from "@hotjar/browser";
import GoogleAnalytics from "./GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raen AI",
  description: "",
};

const siteId = 4993381;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={inter.className}>
        <div className="">
          <Header />
        </div>
        <div className="">{children}</div>
        {/* Footer  */}
        <Footer />
      </body>
    </html>
  );
}
