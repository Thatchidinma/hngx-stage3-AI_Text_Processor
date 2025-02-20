import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/layout/SideBar";
import { TextContextProvider } from "@/context/TextInputContext";

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
