import { Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";

import Nav from "@/components/Nav";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Sweet Sting Piercing",
  description: "Mobile piercing services",
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
