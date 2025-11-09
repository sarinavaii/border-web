import MainProvider from "@core/providers/MainProvider";
import Footer from "@organisms/common/Footer";
import Header from "@organisms/common/Header";
import "@styles/globals.css";
import type { Metadata } from "next";
import { DM_Sans, Encode_Sans_Condensed, Encode_Sans_Expanded, Encode_Sans_Semi_Condensed } from "next/font/google";

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
                <MainProvider>
                    <main className="font-encode-sans-semi-condensed bg-light text-dark select-none">
                        <Header />
                        {children}
                        <Footer />
                    </main>
                </MainProvider>
            </body>
        </html>
    );
}
