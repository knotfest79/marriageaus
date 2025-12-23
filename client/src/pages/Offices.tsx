import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Plane } from "lucide-react";

export default function Offices() {
  return (
    <div className="min-h-screen bg-background section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Locations" 
          subtitle="Based in Brisbane, serving the entire Australian continent."
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Office */}
          <Card className="lg:col-span-1 h-full bg-primary text-primary-foreground border-none shadow-xl">
            <CardContent className="p-8 flex flex-col h-full justify-center space-y-6">
              <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center">
                <MapPin className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Brisbane HQ</h3>
                <p className="opacity-80 leading-relaxed">
                  Level 5, Sample Legal Tower<br />
                  Brisbane City, QLD 4000<br />
                  Australia
                </p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm font-medium opacity-60 uppercase tracking-wider mb-2">Operating Hours</p>
                <p>Mon - Fri: 8:30am - 5:30pm</p>
                <p>Sat - Sun: By Appointment</p>
              </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <div className="lg:col-span-2 bg-muted rounded-2xl overflow-hidden relative min-h-[400px]">
             {/* Abstract Map Graphic */}
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Australia_map_coloured.svg/2000px-Australia_map_coloured.svg.png" 
               alt="Map of Australia" 
               className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 flex items-center justify-center bg-black/10">
               <div className="bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg max-w-md text-center border">
                 <Plane className="h-8 w-8 text-primary mx-auto mb-3" />
                 <h4 className="font-bold text-lg mb-2">We Travel To You</h4>
                 <p className="text-sm text-muted-foreground">
                   We hold a federal registration allowing us to solemnize marriages anywhere within Australia, including its territories and waters.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
