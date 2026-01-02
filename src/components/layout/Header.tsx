import Link from "next/link";
import { Button } from "../ui/Button";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
                <div className="flex gap-2 items-center">
                    {/* Logo */}
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="text-xl font-black tracking-tighter text-foreground">Scalify Labs.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-bold tracking-tight">
                        <Link href="/services" className="transition-colors hover:text-brand-orange text-foreground/80">Services</Link>
                        <Link href="/about" className="transition-colors hover:text-brand-orange text-foreground/80">About</Link>
                        <Link href="/knowledge-hub" className="transition-colors hover:text-brand-blue text-foreground/80">Knowledge Hub</Link>
                        <Link href="/contact" className="transition-colors hover:text-brand-orange text-foreground/80">Contact</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-2">
                    <Link href="/contact">
                        <Button size="sm" variant="default" className="bg-brand-orange hover:bg-brand-orange/90 font-bold">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
