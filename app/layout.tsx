import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Content from "./_ui/Content"
import Image from "next/image"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "UBERHUB",
    description: "-",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="w-full h-[100dvh]">
            <body className={`{inter.className} w-full h-[100dvh] m-0 p-0`}>
                <Content children={children}/>
            </body>
        </html>
    );
}
