import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Scale } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "Requirements", href: "/requirements" },
  { label: "Our Offices", href: "/locations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary text-white p-2 rounded shadow-lg group-hover:bg-primary/90 transition-colors">
            <Scale className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-none text-primary">
              Aus Civil Marriage
            </span>
            <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
              Authorised Celebrant & Legal Services
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer",
                  location === item.href
                    ? "text-accent bg-accent/5 font-semibold"
                    : "text-foreground/80 hover:text-primary hover:bg-muted"
                )}
              >
                {item.label}
              </div>
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l h-6 flex items-center">
            <Link href="/noim">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-lg transition-all">
                Lodge NOIM
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white px-4 py-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-md cursor-pointer",
                    location === item.href
                      ? "bg-accent/10 text-accent"
                      : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
            <Link href="/noim">
              <div
                className="mt-2 w-full text-center px-4 py-3 bg-primary text-white font-medium rounded-md cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Lodge NOIM Form
              </div>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
