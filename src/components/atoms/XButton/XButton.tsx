"use client";
import { cn } from "@core/utils";
import { Button, ButtonProps } from "@mantine/core";
import Link from "next/link";
import React from "react";

type BaseXButtonProps = Omit<ButtonProps, "component">;

type XButtonAsButton = BaseXButtonProps & {
    as?: "button";
    mode?: "light" | "dark" | "book";
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;

type XButtonAsLink = BaseXButtonProps & {
    as: "link";
    href: string;
    mode?: "light" | "dark" | "book";
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, keyof ButtonProps | "href">;

type XButtonProps = XButtonAsButton | XButtonAsLink;

const XButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, XButtonProps>(
    ({ as = "button", mode = "light", classNames, ...props }, ref) => {
        // Define mode-specific styles
        const modeStyles = {
            book: {
                base: "bg-light text-dark hover:text-light border-l border-gray",
                hover: "before:bg-green",
            },
            light: {
                base: "bg-smoke text-dark",
                hover: "before:bg-sand",
            },
            dark: {
                base: "bg-green text-light",
                hover: "before:bg-emerald",
            },
        };

        const currentMode = modeStyles[mode];

        const internalClassNames = {
            ...classNames,
            root: cn("relative overflow-hidden group", (classNames as Record<string, string>)?.root),
            label: cn("relative z-10", (classNames as Record<string, string>)?.label),
            inner: cn(
                currentMode.base,
                "px-8 py-[18px] button",
                "before:content-['']",
                "before:absolute before:left-0 before:top-0 before:h-full before:w-0",
                currentMode.hover,
                "before:z-0 before:transition-all before:duration-300",
                "group-hover:before:w-full",
                "relative z-10",
                (classNames as Record<string, string>)?.inner,
            ),
        };

        if (as === "link") {
            const { href, ...linkProps } = props as XButtonAsLink;
            return (
                <Button
                    classNames={internalClassNames}
                    unstyled
                    component={Link}
                    href={href}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    {...linkProps}
                />
            );
        }

        return (
            <Button
                classNames={internalClassNames}
                unstyled
                ref={ref as React.Ref<HTMLButtonElement>}
                {...(props as XButtonAsButton)}
            />
        );
    },
);

XButton.displayName = "XButton";

export default XButton;
