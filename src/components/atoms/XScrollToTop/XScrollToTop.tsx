"use client";

import { cn } from "@core/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const XScrollToTop = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;

            setScrollProgress(progress);
            setIsVisible(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.button
            onClick={scrollToTop}
            className={cn(
                "fixed max-sm:hidden bottom-8 cursor-pointer right-8 w-14 h-14 rounded-full bg-white duration-300 flex items-center justify-center group z-50",
            )}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0,
            }}
            transition={{
                duration: 0.1,
            }}
            style={{
                pointerEvents: isVisible ? "auto" : "none",
            }}
        >
            <svg
                className="absolute inset-0 w-full h-full backdrop-blur-[2px] rounded-full -rotate-90"
                viewBox="0 0 100 100"
            >
                <circle cx="50" cy="50" r="46" fill="none" className="stroke-gray" strokeWidth="4" />
                <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 46}`}
                    strokeDashoffset={`${2 * Math.PI * 46 * (1 - scrollProgress / 100)}`}
                    className="transition-all duration-300 stroke-green"
                />
            </svg>
            <svg
                className="-rotate-90 z-50"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14.4297 5.93018L20.4997 12.0002L14.4297 18.0702"
                    className="stroke-gray"
                    strokeWidth={1.5}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M3.5 12H20.33"
                    className="stroke-gray"
                    strokeWidth={1.5}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </motion.button>
    );
};

export default XScrollToTop;
