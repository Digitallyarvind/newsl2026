import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t bg-background py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-brand-blue">Scalify Labs</h3>
                        <p className="text-sm text-muted-foreground">
                            Data-Driven Marketing That Scales Your Business.
                        </p>
                        <p className="text-sm text-muted-foreground font-medium">
                            Scale Smarter | Grow Faster
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-brand-blue">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-brand-blue">Services</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-blue">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground">Contact</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>phone: +91 8788424727</li>
                            <li>email: hello@scalifylabs.com</li>
                            <li>address: Lane No 5, Kamlesh Dubey Chowk, Pirra, Ratu, Ranchi 835222</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-brand-blue">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-brand-blue">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Scalify Labs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
