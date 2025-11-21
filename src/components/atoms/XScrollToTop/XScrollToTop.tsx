"use client";

import { cn } from "@core/utils";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

const XScrollToTop = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const lenis = useLenis();

    console.log(lenis?.scroll, lenis?.progress);

    useEffect(() => {
        const handleScroll = () => {
            if (lenis) {
                setScrollProgress(lenis.progress * 100);
                setIsVisible(lenis.scroll > 100);
            }
        };

        // Listen to Lenis scroll events
        if (lenis) {
            lenis.on("scroll", handleScroll);
            return () => {
                lenis.off("scroll", handleScroll);
            };
        }
    }, [lenis]);

    const scrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, {
                duration: 1.2,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.button
            onClick={scrollToTop}
            className={cn(
                "fixed bottom-8 right-8 w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group z-50",
            )}
            initial={{ opacity: 0, y: 40 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 40,
            }}
            transition={{
                duration: 0.3,
            }}
            style={{
                pointerEvents: isVisible ? "auto" : "none",
            }}
            aria-label="Scroll to top"
        >
            {/* Progress Circle */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 46}`}
                    strokeDashoffset={`${2 * Math.PI * 46 * (1 - scrollProgress / 100)}`}
                    className="transition-all duration-150"
                />
            </svg>
        </motion.button>
    );
};

export default XScrollToTop;
