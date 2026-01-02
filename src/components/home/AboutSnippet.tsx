import { Section } from "../ui/Section";
import { CheckCircle } from "lucide-react";

const AboutSnippet = () => {
    return (
        <Section className="bg-brand-light">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Why Businesses Trust <span className="text-brand-blue">Scalify Labs</span>
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Jharkhand&apos;s premier AI-powered digital marketing agency. We help businesses scale smarter with cutting-edge automation, proven strategies, and data-driven insights. Trusted by 500+ growing businesses.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                            <div>
                                <span className="font-bold text-foreground">High-Intent Leads:</span>
                                <p className="text-muted-foreground">Focus on customers ready to buy, moving beyond vanity metrics.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                            <div>
                                <span className="font-bold text-foreground">AI-Optimized Strategies:</span>
                                <p className="text-muted-foreground">Using AI for audience identification, ad spend optimization, and automated follow-ups.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                            <div>
                                <span className="font-bold text-foreground">Data-Backed Transparency:</span>
                                <p className="text-muted-foreground">Clear and honest reporting on campaign performance.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden bg-gradient-to-br from-brand-blue/20 to-brand-dark/20 p-8 flex items-center justify-center">
                    {/* Placeholder for an image or graphic */}
                    <div className="text-center p-8 bg-background/80 backdrop-blur rounded-lg shadow-xl">
                        <p className="text-4xl font-bold text-brand-blue">500+</p>
                        <p className="text-lg font-medium text-foreground">Trusted Clients</p>
                        <div className="mt-4 pt-4 border-t border-border">
                            <p className="text-sm text-muted-foreground">Across various industries</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AboutSnippet;
