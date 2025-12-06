import XLoader from "@atoms/XLoader";
import XMouseFollower from "@atoms/XMouseFollower/XMouseFollower";
import XScrollToTop from "@atoms/XScrollToTop";
import MainProvider from "@core/providers/MainProvider";
import Footer from "@organisms/common/Footer";
import Header from "@organisms/common/Header";
import "@styles/globals.css";
import { Hatch } from "ldrs/react";
import "ldrs/react/Hatch.css";
import type { Metadata } from "next";
import { DM_Sans, Encode_Sans_Condensed, Encode_Sans_Expanded, Encode_Sans_Semi_Condensed } from "next/font/google";
import Image from "next/image";

const encodeSansCondensed = Encode_Sans_Condensed({
    weight: ["600"],
});

const encodeSansExpanded = Encode_Sans_Expanded({
    weight: ["400"],
});

const encodeSansSemiCondensed = Encode_Sans_Semi_Condensed({
    weight: ["400", "600"],
});

const DMSans = DM_Sans({
    weight: ["700"],
});

export const metadata: Metadata = {
    title: "Bordar Plus",
    description: "Bordar Plus",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${encodeSansCondensed.className} ${encodeSansExpanded.className} ${encodeSansSemiCondensed.className} ${DMSans.className} antialiased`}
            >
                <div
                    id="global-loader"
                    className="fixed inset-0 backdrop-blur-lg bg-black/80 w-full h-dvh z-9999 flex flex-col gap-4 items-center justify-center"
                >
                    <Image src="/images/logo.png" width={50} height={36} alt="BordarPlus" className="object-contain" />
                    <Hatch size="36" stroke="8" speed="5" color="#6e7170" />
                </div>
                <MainProvider>
                    <main className="font-encode-sans-semi-condensed bg-light text-dark select-none">
                        <Header />
                        {children}
                        <Footer />
                        <XMouseFollower />
                        <XLoader />
                        <XScrollToTop />
                    </main>
                </MainProvider>
            </body>
        </html>
    );
}
