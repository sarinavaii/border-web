"use client";

import XButton from "@atoms/XButton";
import XContainer from "@atoms/XContainer";
import { cn } from "@core/utils";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const STATIC_LINKS = [
        { label: "Services", href: "/" },
        { label: "Projects", href: "/" },
        { label: "About Us", href: "/" },
        { label: "Clients", href: "/" },
        { label: "Solutions", href: "/" },
    ];

    return (
        <>
            <div className="fixed top-0 h-20 backdrop-blur-md z-1000 left-0 right-0 lg:bg-black/50 bg-black text-light border-b border-gray/50">
                <XContainer className="h-full px-0!">
                    <div className="lg:grid flex lg:grid-cols-4 h-full max-lg:justify-between">
                        <XButton
                            onClick={opened ? close : open}
                            mode="dark"
                            classNames={{
                                root: "aspect-square lg:hidden bg-black cursor-pointer border-r border-gray/50",
                                inner: cn(
                                    "p-0! flex justify-center items-center bg-black before:bg-green hover:none h-full",
                                    { "bg-green": opened },
                                ),
                            }}
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M32 8H0" stroke="white" />
                                <path d="M32 16H0" stroke="white" />
                                <path d="M32 24H0" stroke="white" />
                            </svg>
                        </XButton>
                        <div className="h-full lg:border-r border-gray/50">
                            <div className="flex items-center h-full gap-2 lg:ps-4 max-lg:pe-4">
                                <Image src="/images/logo.jpg" width={28} height={28} alt="BordarPlus" />
                                <h2 className="paragraph-2">Bordar Plus.</h2>
                            </div>
                        </div>
                        <div className="h-full col-span-2 max-lg:hidden">
                            <div className="flex link">
                                <Link
                                    className="flex-1 flex justify-center items-center border-r border-gray/50 text-center h-20 hover:text-sand transition"
                                    href="/"
                                >
                                    Services
                                </Link>
                                <Link
                                    className="flex-1 flex justify-center items-center border-r border-gray/50 text-center h-20 hover:text-sand transition"
                                    href="/"
                                >
                                    Projects
                                </Link>
                                <Link
                                    className="flex-1 flex justify-center items-center border-r border-gray/50 text-center h-20 hover:text-sand transition"
                                    href="/"
                                >
                                    About us
                                </Link>
                                <Link
                                    className="flex-1 flex justify-center items-center border-r border-gray/50 text-center h-20 hover:text-sand transition"
                                    href="/"
                                >
                                    Clients
                                </Link>
                                <Link
                                    className="flex-1 flex justify-center items-center text-center h-20 hover:text-sand transition"
                                    href="/"
                                >
                                    Solutions
                                </Link>
                            </div>
                        </div>
                        <div className="h-full max-lg:hidden border-l border-gray/50 flex items-center p-6 xl:gap-8 gap-2">
                            <Link className="link" href="/">
                                Contanct Us
                            </Link>
                            <Link className="link" href="/">
                                Get a Free Consultation
                            </Link>
                        </div>
                    </div>
                </XContainer>
            </div>
            <Drawer
                opened={opened}
                position="bottom"
                onClose={close}
                withCloseButton={false}
                styles={{
                    content: {
                        height: "calc(100dvh - 80px)",
                    },
                }}
                padding={0}
            >
                {STATIC_LINKS.map((item) => (
                    <Link className="block paragraph-1 p-6 border-b border-[#575757]" key={item.label} href={item.href}>
                        {item.label}
                    </Link>
                ))}
                <Link className="block paragraph-1 p-6 border-b border-[#575757]" href={"/"}>
                    Contanct Us
                </Link>
                <Link className="block paragraph-1 p-6 border-b border-[#575757]" href={"/"}>
                    Get a Consultation
                </Link>
            </Drawer>
        </>
    );
};

export default Header;
