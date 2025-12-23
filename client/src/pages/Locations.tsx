import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Locations() {
  return (
    <main>
      <PageHeader 
        title="Our Offices & Coverage" 
        subtitle="Based in Brisbane, Serving Australia."
        imageSrc="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
              Headquarters
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary">Brisbane Legal District</h2>
            <p className="text-lg text-muted-foreground">
              Our primary chambers are located within the precinct of the Brisbane Magistrates Court. This central location allows us to serve the metropolitan community effectively while maintaining close links with the legal fraternity.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Brisbane CBD</h4>
                  <p className="text-muted-foreground">George Street Precinct<br/>Brisbane QLD 4000</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+61 7 3000 0000</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground">admin@auscivilmarriage.com.au</p>
                </div>
              </li>
            </ul>

            <Link href="/contact">
              <Button size="lg" className="mt-4">Make an Appointment</Button>
            </Link>
          </div>

          <div className="relative">
             {/* Unsplash: Minimal map or city abstraction */}
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2033&auto=format&fit=crop" 
                alt="Brisbane City"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20" />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur p-6 rounded-xl shadow-lg border border-white/20">
                <h3 className="font-serif font-bold text-primary mb-2">National Travel</h3>
                <p className="text-sm text-muted-foreground">
                  We frequently travel to remote and regional Australia to perform ceremonies. No location is too far for love and the law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Areas Grid */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Service Areas</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {["Gold Coast", "Sunshine Coast", "Toowoomba", "Remote QLD", "Interstate (By Request)", "Regional NSW", "Melbourne", "Sydney"].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm border border-border/50 text-foreground font-medium hover:border-primary/50 transition-colors">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
