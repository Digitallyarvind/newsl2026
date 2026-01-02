import Link from "next/link";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "01",
        title: "SEO & Strategy",
        description: "Rank higher, attract the right audience, and convert local searches into leads.",
        color: "bg-brand-cream", // Default card style
        textColor: "text-foreground",
        accentParams: "text-brand-orange",
    },
    {
        id: "02",
        title: "Content Creation",
        description: "Create meaningful engagement through content that builds authority and trust.",
        color: "bg-brand-pink",
        textColor: "text-black",
        accentParams: "text-white",
    },
    {
        id: "03",
        title: "Performance & Ads",
        description: "Smarter targeting across Google, Meta & LinkedIn — optimized for cost and conversions.",
        color: "bg-brand-green",
        textColor: "text-black",
        accentParams: "text-white",
    },
    {
        id: "04",
        title: "Data & AI",
        description: "Automate decisions and scale campaigns faster with machine learning insights.",
        color: "bg-brand-blue",
        textColor: "text-white",
        accentParams: "text-white",
    },
];

const Services = () => {
    return (
        <Section className="" id="services">
            <div className="flex flex-col space-y-12">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={cn(
                            "relative overflow-hidden rounded-[3rem] p-8 md:p-12 lg:p-16 transition-all min-h-[400px] flex flex-col justify-between group",
                            service.color
                        )}
                    >
                        <div className="flex justify-between items-start">
                            <div className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-black">
                                Service
                            </div>
                            <span className={cn("text-6xl md:text-8xl font-bold opacity-30", service.textColor)}>
                                {service.id}
                            </span>
                        </div>

                        <div className="max-w-2xl relative z-10 mt-auto">
                            <h3 className={cn("text-4xl md:text-6xl font-black tracking-tighter mb-6", service.textColor)}>
                                {service.title}
                            </h3>
                            <p className={cn("text-lg md:text-xl font-medium max-w-lg mb-8 opacity-90", service.textColor)}>
                                {service.description}
                            </p>
                            <Link href="/services">
                                <Button className="rounded-full bg-white text-black hover:bg-black hover:text-white font-bold px-6">
                                    Learn More <ArrowUpRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>

                        {/* Soft gradient overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 pointer-events-none" />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Services;
