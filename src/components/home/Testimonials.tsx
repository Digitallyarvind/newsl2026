import { Section } from "../ui/Section";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Consistent project leads helped us close sales faster.",
        author: "Real Estate Builder",
    },
    {
        quote: "Got my first digital marketing job after Scalify Labs mentorship.",
        author: "IMS Student",
    },
];

const Testimonials = () => {
    return (
        <Section className="bg-background">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col items-center text-center space-y-4 p-8 rounded-lg bg-secondary/30 border border-secondary">
                        <Quote className="w-10 h-10 text-brand-blue/40" />
                        <blockquote className="text-lg italic text-foreground">
                            &quot;{testimonial.quote}&quot;
                        </blockquote>
                        <cite className="text-sm font-semibold not-italic text-muted-foreground">
                            — {testimonial.author}
                        </cite>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
