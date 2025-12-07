"use client";

import { animate } from "framer-motion";
import { useEffect } from "react";

const XLoader = () => {
    useEffect(() => {
        const loader = document.getElementById("global-loader");
        if (loader) {
            const controls = animate(loader, { opacity: 0 }, { duration: 0.5, delay: 2 });
            controls.then(() => {
                loader.style.display = "none";
            });
            return () => controls.stop();
        }
    }, []);

    return <></>;
};

export default XLoader;
