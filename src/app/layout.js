import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Goodness Volunteering – Xayriya va Ko‘ngillilik Platformasi",
  description:
    "Goodness Volunteering — ko‘ngillilik asosida xayriya loyihalariga qo‘shiling! Jamiyatga foydali bo‘lish, ehtiyojmand insonlarga yordam berish va yangi do‘stlar orttirish uchun bizga qo‘shiling.",
  keywords:
    "xayriya, ko‘ngillilik, yordam, jamiyat, Goodness Volunteering, volontyorlik, ijtimoiy loyiha, insonparvarlik",
  author: "Goodness Volunteering jamoasi",
  openGraph: {
    title: "Goodness Volunteering – Xayriya va Ko‘ngillilik Platformasi",
    description:
      "Ko‘ngillilik asosida xayriya loyihalariga qo‘shiling! Jamiyatga foydali bo‘lish, ehtiyojmand insonlarga yordam berish va yangi do‘stlar orttirish uchun bizga qo‘shiling.",
    type: "website",
    url: "https://goodness.uz", 
    images: [
      {
        url: "https://goodness.uz/favicon.ico", 
        width: 1200,
        height: 630,
        alt: "Goodness Volunteering – Xayriya va Ko‘ngillilik Platformasi",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
