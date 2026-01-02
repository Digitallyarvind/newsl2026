
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Expert SEO, PPC & Social Media Services in Ranchi | Scalify Labs",
    description: "From technical SEO audits to results-driven PPC campaigns, Scalify Labs offers comprehensive digital marketing services in Ranchi, Jharkhand to skyrocket your growth.",
};
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ArrowUpRight, CheckCircle2, Zap, BarChart, Users } from 'lucide-react';
import { CTA } from '@/components/shared/CTA';

const servicesList = [
    {
        id: "01",
        title: "SEO & Strategy",
        description: "We don't just guess; we strategize. Our comprehensive SEO audits and long-term roadmaps ensure you rank higher and stay there. We target high-intent keywords that drive actual revenue, not just vanity traffic.",
        features: ["Technical SEO Audit", "Keyword Research", "Competitor Analysis", "On-page Optimization"],
        color: "bg-brand-cream",
        textColor: "text-foreground",
        icon: <BarChart className="w-6 h-6" />
    },
    {
        id: "02",
        title: "Content Creation",
        description: "Content is king, but context is queen. We produce high-quality, engaging content that resonates with your audience and builds authority. From blog posts to video scripts, we tell your story.",
        features: ["Blog Writing", "Social Media Content", "Video Scripting", "Newsletter Campaigns"],
        color: "bg-brand-pink",
        textColor: "text-black",
        icon: <Users className="w-6 h-6" />
    },
    {
        id: "03",
        title: "Performance & Ads",
        description: "Stop wasting budget on clicks that don't convert. Our performance marketing campaigns on Google, Meta, and LinkedIn are laser-focused on ROI and lowering your CAC.",
        features: ["PPC Management", "Social Media Ads", "Retargeting Campaigns", "A/B Testing"],
        color: "bg-brand-green",
        textColor: "text-black",
        icon: <Zap className="w-6 h-6" />
    },
    {
        id: "04",
        title: "Data & AI",
        description: "Leverage the power of data and Artificial Intelligence to automate decisions and predict market trends. We help you implement AI tools that streamline operations and scale your marketing efforts.",
        features: ["Data Visualization", "AI Automation", "Predictive Analytics", "Custom Reporting"],
        color: "bg-brand-blue",
        textColor: "text-white",
        icon: <CheckCircle2 className="w-6 h-6" />
    },
];

const processSteps = [
    {
        step: "01",
        title: "Discovery",
        description: "We dive deep into your business, goals, and audience to understand what makes you tick."
    },
    {
        step: "02",
        title: "Strategy",
        description: "We build a custom roadmap tailored to your specific needs and growth targets."
    },
    {
        step: "03",
        title: "Execution",
        description: "Our team goes to work, implementing campaigns, creating content, and optimizing every detail."
    },
    {
        step: "04",
        title: "Scale",
        description: "We analyze the data, refine the approach, and double down on what's working to scale your results."
    }
];

export default function ServicesPage() {
    return (
        <main className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8 text-center">
                        Our<br />
                        <span className="text-brand-orange">Expertise.</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Comprehensive digital marketing solutions designed to help you dominate your market.
                    </p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[100px] -z-10" />
            </Section>

            {/* Services Grid */}
            <Section className="py-20 bg-background" id="services-list">
                <div className="flex flex-col space-y-8">
                    {servicesList.map((service, index) => (
                        <div key={index} className={cn("rounded-[3rem] p-8 md:p-12 lg:p-20 transition-all flex flex-col md:flex-row gap-12 group", service.color)}>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-current">
                                            {service.icon}
                                        </div>
                                        <span className={cn("text-xl font-bold uppercase tracking-widest", service.textColor)}>{service.id}</span>
                                    </div>
                                    <h2 className={cn("text-4xl md:text-6xl font-black tracking-tighter mb-6", service.textColor)}>
                                        {service.title}
                                    </h2>
                                    <p className={cn("text-lg md:text-xl font-medium leading-relaxed max-w-xl opacity-90", service.textColor)}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                    <h4 className={cn("text-2xl font-bold mb-6", service.textColor)}>What fits inside:</h4>
                                    <ul className="space-y-4">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className={cn("flex items-center text-lg font-medium", service.textColor)}>
                                                <div className="mr-4 w-2 h-2 rounded-full bg-current opacity-60" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Process Section */}
            <Section className="py-20 lg:py-32">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-center">How We <span className="text-brand-blue">Work.</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative p-8 rounded-[2rem] bg-secondary hover:-translate-y-2 transition-transform duration-300">
                                <span className="text-6xl font-black text-muted/20 absolute top-4 right-6">{step.step}</span>
                                <h3 className="text-3xl font-bold mb-4 mt-8">{step.title}</h3>
                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <CTA />
        </main>
    );
}
