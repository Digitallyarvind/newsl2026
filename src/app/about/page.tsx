
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
    title: "About Scalify Labs | Top SEO Experts in Jharkhand",
    description: "Meet the team of data nerds and creative rebels at Scalify Labs. We are the leading digital marketing agency in Ranchi, committed to your business growth.",
};
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Heart, Zap, ShieldCheck, Target, BarChart } from 'lucide-react';

const values = [
    {
        title: "Radical Transparency",
        description: "No hidden fees, no jargon, no BS. You see exactly what we see. We believe in building trust through complete openness.",
        color: "bg-brand-cream",
        textColor: "text-foreground",
        icon: <ShieldCheck className="w-8 h-8" />
    },
    {
        title: "Speed & Execution",
        description: "The market doesn't wait. Neither do we. We ship fast, test often, and iterate constantly to keep you ahead of the curve.",
        color: "bg-brand-orange",
        textColor: "text-white",
        icon: <Zap className="w-8 h-8" />
    },
    {
        title: "Data Over Ego",
        description: "We don't care who had the idea; we care about what the data says. Results drive our decisions, not opinions.",
        color: "bg-brand-blue",
        textColor: "text-white",
        icon: <BarChart className="w-8 h-8" />
    },
    {
        title: "Impact First",
        description: "We're here to make a dent. Every campaign, every strategy is aligned with driving tangible business impact for you.",
        color: "bg-brand-pink",
        textColor: "text-black",
        icon: <Target className="w-8 h-8" />
    }
];



export default function AboutPage() {
    return (
        <main className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
                        The Agency<br />
                        for the <span className="text-brand-pink">Bold.</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl mx-auto mb-8">
                        We are Scalify Labs. We don&apos;t just do marketing; we engineer growth for brands ready to dominate.
                    </p>
                </div>
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] -z-10" />
            </Section>

            {/* Story / Manifesto Section */}
            <Section className="py-20 lg:py-32 bg-brand-cream text-foreground rounded-[3rem] mx-4 lg:mx-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                {/* Placeholder for Team/Office Image - Using a gradient for now if no image is available, or a reliable placeholder */}
                                <Image
                                    src="/motivated-team.png"
                                    alt="Motivated Team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                                We got tired of <br /><span className="text-brand-orange">boring marketing.</span>
                            </h2>
                            <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed opacity-90">
                                <p>
                                    Most agencies focus on deliverables—reports, checklists, and vanity metrics that look good on paper but do nothing for your bottom line.
                                </p>
                                <p>
                                    We started Scalify Labs to change that. We&apos;re a team of data nerds, creative rebels, and growth hackers obsessed with one thing: <strong>Revenue.</strong>
                                </p>
                                <p>
                                    We believe that marketing should be bold, measurable, and fun. It shouldn&apos;t feel like a chore; it should feel like a superpower. That&apos;s why we bring &quot;Get Hyped&quot; energy to every project we touch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Values Grid */}
            <Section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-center">Our <span className="text-brand-green">DNA.</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className={cn("p-10 rounded-[2.5rem] flex flex-col justify-start transition-all hover:-translate-y-2 duration-300", value.color)}>
                                <div className="bg-white/20 backdrop-blur-md self-start p-4 rounded-full mb-6 text-current">
                                    {value.icon}
                                </div>
                                <h3 className={cn("text-3xl font-black mb-4 tracking-tight", value.textColor)}>{value.title}</h3>
                                <p className={cn("text-lg font-medium leading-relaxed opacity-90", value.textColor)}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Team CTA */}
            <Section className="py-20 lg:py-32 bg-black text-white rounded-t-[3rem] mt-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
                        Join the <span className="text-brand-orange">Movement.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Whether you&apos;re a brand looking to scale or a creator looking to build, we want to hear from you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-xl px-12 py-8 h-auto font-black rounded-full">
                                WORK WITH US <ArrowUpRight className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
