import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Head from "next/head";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ['latin'],
});

export const metadata = {
  title: "Climate Care Network | CCN",
  icons: {
    icon: "/images/ccn-favicon.png",  // Corrected path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/ccn-favicon.png" />  {/* Corrected path */}
      </Head>
      <body className={`${JetBrainsMono.variable} antialiased`}>
        <Header style={{
          position: 'fixed',
          zIndex: '1000'
        }} />
        {children}
      </body>
    </html>
  );
}
