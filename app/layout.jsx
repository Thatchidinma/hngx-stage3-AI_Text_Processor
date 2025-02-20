import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/layout/SideBar";
import { TextContextProvider } from "@/context/TextInputContext";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Powered Text processor",
  description: "AI-Powered Text Processing Interface using Chrome's AI APIs. This application will allow users to input text and utilize features such as summarization, translation, and language detection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta http-equiv="origin-trial" content="AuyrbOsdceRniYIdkxD8e9dicnhvTOpFUjA22Evir52BvBiEmH1SQcoJokZiJW8/MgbFCyNhBPHPGxbXO4HaygUAAAB7eyJvcmlnaW4iOiJodHRwczovL2FpLXRleHQtcHJvY2Vzc29yLW9uZS52ZXJjZWwuYXBwOjQ0MyIsImZlYXR1cmUiOiJUcmFuc2xhdGlvbkFQSSIsImV4cGlyeSI6MTc1MzE0MjQwMCwiaXNTdWJkb21haW4iOnRydWV9" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-4 flex h-svh`}
      >
        <TextContextProvider>
        <SideBar/>
        {children}
        </TextContextProvider>
      </body>
    </html>
  );
}
