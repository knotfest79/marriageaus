import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Scale } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Marriage Requirements", href: "/requirements" },
  { label: "Equality", href: "/equality" },
  { label: "Our Offices", href: "/offices" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Promise", href: "/promise" },
  { label: "Wonder Law", href: "/wonder-law" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="bg-primary/5 p-2 rounded-lg group-hover:bg-primary/10 transition-colors">
            <Scale className="h-6 w-6 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-none text-primary">
              Civil Marriage Celebrant
            </span>
            <span className="text-xs text-muted-foreground font-medium tracking-wide">
              & LEGAL PROFESSIONAL
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-primary/5 hover:text-primary",
                location === item.href
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          {/* Dropdown for remaining items could go here, but for now simple buttons */}
          <Link href="/contact">
            <Button size="sm" className="ml-4 bg-primary hover:bg-primary/90 text-white shadow-md">
              Enquire Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-t bg-background py-4 px-4 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                  location === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                Enquire Now
              </Button>
            </Link>
            <Link href="/noim-form" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                Lodge NOIM
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
