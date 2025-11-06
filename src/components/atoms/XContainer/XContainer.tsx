import { cn } from "@core/utils";
import React from "react";

interface XContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
}

const XContainer: React.FC<XContainerProps> = ({ className = "", children, ...rest }) => {
    return (
        <div className={cn("max-w-[1440px] lg:px-12 px-6 mx-auto", className)} {...rest}>
            {children}
        </div>
    );
};

export default XContainer;
