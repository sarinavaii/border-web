"use client";

import { nprogress } from "@mantine/nprogress";
import Link from "next/link";
import { ComponentProps } from "react";

type XLinkProps = ComponentProps<typeof Link>;

const XLink = ({ onClick, ...props }: XLinkProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        nprogress.start();
        onClick?.(e);
    };

    return <Link onClick={handleClick} {...props} />;
};

export default XLink;
