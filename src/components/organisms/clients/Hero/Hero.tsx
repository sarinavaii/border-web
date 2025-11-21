"use client";

import XButton from "@atoms/XButton";
import XContainer from "@atoms/XContainer";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="text-light relative h-dvh min-h-[870px] bg-[url('/images/clients-bg.webp')] bg-cover bg-center">
            <div className="absolute inset-0">
                <XContainer className="h-full lg:px-0!">
                    <div className="grid lg:grid-cols-4 max-lg:hidden h-full">
                        <div className="h-full border-r border-gray"></div>
                        <div className="h-full"></div>
                        <div className="h-full"></div>
                        <div className="h-full border-l border-gray"></div>
                    </div>
                </XContainer>
            </div>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 top-[180px] mb-6">
                <XContainer>
                    <h2 className="backdrop-blur-[2px] lg:header-1-mono header-2 mb-4">
                        Building Together with Global Visionaries
                    </h2>
                    <div className="lg:paragraph-2 paragraph-4 lg:mb-32 mb-16">
                        We are proud to collaborate with leading organizations, government entities, and visionary
                        partners to deliver impactful projects across industries.
                    </div>
                    <XButton as="link" href="/">
                        Contact Us
                    </XButton>
                </XContainer>
            </div>
            <XContainer className="absolute bottom-6 left-0 right-0 flex sm:flex-row flex-col-reverse justify-between sm:items-end items-start max-sm:gap-16">
                <div className="relative paragraph-5 size-20 p-4 flex items-center overflow-hidden">
                    <div className="absolute left-0 top-0 w-px h-full bg-smoke/20">
                        <motion.div
                            className="w-full h-full bg-gray origin-top"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: [0, 1, 0] }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        />
                    </div>
                    Scroll To Explore
                </div>
                <div className="paragraph-5">Trusted by architects worldwide | BIM • Design • Consulting</div>
            </XContainer>
        </div>
    );
};

export default Hero;
