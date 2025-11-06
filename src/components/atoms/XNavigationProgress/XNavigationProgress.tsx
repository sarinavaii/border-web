"use client";

import { Suspense, useEffect } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import { NavigationProgress, nprogress } from "@mantine/nprogress";

const ProgressWithSearchParams = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        nprogress.complete();
    }, [pathname, searchParams]);

    return <NavigationProgress size={6} />;
};

const XNavigationProgress = () => {
    return (
        <Suspense fallback={null}>
            <ProgressWithSearchParams />
        </Suspense>
    );
};

export default XNavigationProgress;
