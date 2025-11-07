"use client";

import XButton from "@atoms/XButton";
import XContainer from "@atoms/XContainer";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
    const words = ["Build", "Design", "Lead", "Execute", "Engineer"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="text-light relative">
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
            <div className="absolute inset-0 top-[220px] header-1-mono max-xl:text-7xl! max-lg:text-5xl! max-sm:text-4xl! mb-6">
                <XContainer>
                    <h2 className="leading-snug backdrop-blur-[2px] mb-16">
                        The future is bright for us because we{" "}
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentIndex}
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -40, opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                className="inline-block text-blue-600"
                            >
                                {words[currentIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </h2>
                    <XButton as="link" href="/">
                        Explore Projects
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
            <video playsInline muted autoPlay loop className="w-full h-[870px] object-cover">
                <source src="/video/about.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default Hero;
