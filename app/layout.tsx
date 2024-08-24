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
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            <body className={`{inter.className} w-full h-[100dvh] m-0 p-0`}>
                <Content children={children}/>
            </body>
        </html>
    );
}
