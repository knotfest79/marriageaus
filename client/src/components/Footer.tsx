import { Link } from "wouter";
import { Scale, Heart, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-6 w-6 text-accent" />
              <span className="font-display font-bold text-xl">Civil Celebrant</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Providing dignified, inclusive, and legally robust marriage services to all couples across Australia.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Social icons placeholder */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/requirements" className="hover:text-white transition-colors">Marriage Requirements</Link></li>
              <li><Link href="/noim-form" className="hover:text-white transition-colors">Lodge NOIM</Link></li>
              <li><Link href="/equality" className="hover:text-white transition-colors">Marriage Equality</Link></li>
              <li><Link href="/wonder-law" className="hover:text-white transition-colors">Legal Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                <span>Brisbane, QLD (Serving Australia-wide)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a href="mailto:info@celebrant.com.au" className="hover:text-white">info@celebrant.com.au</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <span>+61 400 000 000</span>
              </li>
            </ul>
          </div>

          {/* Badges */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">Credentials</h3>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-white">
                Authorised Celebrant
              </span>
              <span className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-white">
                Lawyer
              </span>
              <span className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-white">
                Justice of the Peace
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Civil Marriage Celebrant & Legal Professional. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Heart className="h-3 w-3 text-accent" />
            <span>We acknowledge the Traditional Custodians of the land on which we work and live.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
