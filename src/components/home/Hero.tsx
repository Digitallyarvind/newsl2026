import Link from "next/link";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import Image from "next/image";
import * as React from "react";

const Hero = () => {
    return (
        <Section className="flex flex-col items-center justify-center text-center pt-20 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
            <div className="space-y-8 max-w-5xl mx-auto z-10 relative">
                <h1 className="text-6xl font-black tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
                    Get Scaled.<br />
                    Get Noticed.<br />
                    Get Results.
                </h1>
                <p className="mx-auto max-w-[600px] text-xl font-medium text-muted-foreground md:text-2xl leading-relaxed">
                    Scalify Labs helps you reach the right customers and boost ROI with strategies built around your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Link href="/contact">
                        <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-xl px-10 py-8 h-auto font-black rounded-full shadow-[0_10px_40px_-15px_rgba(255,85,51,0.5)]">
                            🚀 START NOW
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Decorative colored blobs/glows to simulate the vibrant energy */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-pink/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[100px] -z-10" />
        </Section>
    );
};

export default Hero;
