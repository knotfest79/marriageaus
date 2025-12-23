import { PageHeader } from "@/components/PageHeader";
import { Scale, Award, Users } from "lucide-react";

export default function About() {
  return (
    <main>
      <PageHeader 
        title="Who We Are" 
        subtitle="Dedicated to serving the community through legal and ceremonial excellence."
        imageSrc="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-primary">A Service, Not a Business</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We operate with a philosophy of public service. As an Authorised Civil Marriage Celebrant who is also a qualified Lawyer and Justice of the Peace, our founder brings a unique level of gravity and professionalism to the role.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              While many celebrants focus on the theatrical aspects of a wedding, we focus on the significance of the commitment and the legal protections it affords. We are here to facilitate your union with dignity, ensuring that the process is accessible, transparent, and legally sound.
            </p>
            
            <div className="pt-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-accent h-6 w-6" />
                Professional Qualifications
              </h3>
              <ul className="space-y-3">
                {[
                  "Authorised Civil Marriage Celebrant (Attorney-General's Dept)",
                  "Admitted Lawyer (Supreme Court of Queensland)",
                  "Justice of the Peace (Qualified)",
                  "Member of the Queensland Law Society"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-primary text-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4 border-b border-white/20 pb-8">
                <Scale className="h-12 w-12 text-accent" />
                <div>
                  <h3 className="text-2xl font-serif font-bold">Guangdong Wonder Law Firm</h3>
                  <p className="text-white/70">International Legal Association</p>
                </div>
              </div>
              
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  We maintain a strong professional association with Guangdong Wonder Law Firm, enhancing our ability to serve clients with international legal needs.
                </p>
                <p>
                  This background provides us with a global perspective on marriage law, immigration implications, and cross-border family matters. When you choose us, you are choosing a team that understands the broader legal landscape.
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-accent font-bold uppercase tracking-wider pt-4">
                <Users className="h-4 w-4" />
                Trusted Legal Partners
              </div>
            </div>
            
            {/* Pattern Overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8">Our Promise to You</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50">
              <h4 className="font-bold text-lg mb-2 text-primary">Ethical Service</h4>
              <p className="text-muted-foreground">We adhere to the strictest Code of Practice for Marriage Celebrants. Your privacy and dignity are paramount.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50">
              <h4 className="font-bold text-lg mb-2 text-primary">Fair Pricing</h4>
              <p className="text-muted-foreground">We view this as a community service. Our fees are structured to be accessible to all members of the public.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
