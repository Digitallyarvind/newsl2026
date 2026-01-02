import { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "Contact Us | Free SEO Audit in Ranchi | Scalify Labs",
    description: "Get in touch with Scalify Labs for affordable SEO services and digital marketing consulting in Ranchi. Visit our office or call us for a free audit.",
};
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/shared/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main>
            <Section className="bg-brand-light py-20">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Contact Us</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Ready to scale? Let&apos;s talk about your business goals.
                    </p>
                </div>
            </Section>

            <Section className="bg-background">
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-brand-blue mt-1" />
                                <div>
                                    <h3 className="font-semibold">Phone & WhatsApp</h3>
                                    <p className="text-muted-foreground">+91 8788424727</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-brand-blue mt-1" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-muted-foreground">hello@scalifylabs.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-brand-blue mt-1" />
                                <div>
                                    <h3 className="font-semibold">Office Address</h3>
                                    <p className="text-muted-foreground">
                                        Lane No 5, Kamlesh Dubey Chowk,<br />
                                        Pirra, Ratu, Ranchi 835222
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card">
                        <ContactForm />
                    </div>
                </div>
            </Section>
        </main>
    );
}
