
import "./globals.css";
import { Footer } from "@/components/pages/Home/Footer/Footer";
import { Navbar } from "@/components/pages/Home/Navbar/Navbar";

export const metadata = {
  title: "MindSpot Healthcare",
  description: "we help to care and create ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="inter">
        <div className="flex flex-col">
            <div><Navbar /></div>
            <div>{children}</div>
            <div><Footer /></div>
        </div>
      </body>
    </html>
  );
}
