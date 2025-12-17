import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageKitProvider from "@/components/ImageKitProvider";
import { Play, Poppins } from "next/font/google";


// Fonts
const playFont = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Only Jesus",
  description: "Official Website of Only Jesus, where you can read and grow with God's word.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={`${playFont.variable} ${poppinsFont.variable}`}>
          <ImageKitProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ImageKitProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
