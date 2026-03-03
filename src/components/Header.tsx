import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Products", href: "#products" },
        { name: "Gallery", href: "#gallery" },
        { name: "Benefits", href: "#benefits" },
        { name: "Reviews", href: "#testimonials" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2">
                    <span className="font-serif text-2xl font-bold text-foreground">
                        Herbalytix
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button className="rounded-full px-6 gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Buy Now
                    </Button>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center gap-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="w-6 h-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col gap-6 mt-10">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <Button className="rounded-full w-full mt-4 gap-2">
                                    <ShoppingCart className="w-5 h-5" />
                                    Buy Now
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
