"use client";

import { useEffect } from "react";

const XLoader = () => {
    useEffect(() => {
        const loader = document.getElementById("global-loader");
        if (loader) {
            loader.style.opacity = "0";
            loader.style.transition = "opacity 0.5s";
            setTimeout(() => (loader.style.display = "none"), 1500);
        }
    }, []);

    return <></>;
};

export default XLoader;
