import React from 'react';
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, id, ...props }) => {
    return (
        <section
            id={id}
            className={cn("w-full py-16 md:py-24 lg:py-32 px-4 md:px-6", className)}
            {...props}
        >
            <div className="container mx-auto max-w-7xl">
                {children}
            </div>
        </section>
    );
};
