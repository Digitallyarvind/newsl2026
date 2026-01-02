
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
    return (
        <Section className="bg-brand-blue/5 py-20">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                    Ready to Scale Your Business?
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                    Join hundreds of businesses that have transformed their digital presence with Scalify Labs.
                    Let&apos;s build something amazing together.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                        <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 w-full sm:w-auto text-lg h-12 px-8">
                            Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="/services">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-12 px-8">
                            Explore Services
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
};
