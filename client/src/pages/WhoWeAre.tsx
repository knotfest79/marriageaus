import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-background section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform -rotate-2" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              {/* Professional headshot placeholder */}
               <img 
                 src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80" 
                 alt="Professional Celebrant Portrait" 
                 className="object-cover w-full h-full"
               />
            </div>
            
            {/* Floating Credentials Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border max-w-xs hidden md:block">
              <h4 className="font-display font-bold text-lg mb-2 text-primary">Qualifications</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Bachelor of Laws (LL.B)</li>
                <li>• Graduate Diploma in Legal Practice</li>
                <li>• Registered Marriage Celebrant</li>
                <li>• Justice of the Peace (Qual)</li>
              </ul>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <Badge variant="outline" className="border-accent text-accent px-4 py-1 text-sm">Meet Your Celebrant</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              Bridging the gap between legal rigour and human connection.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                My journey began in the courtrooms of Brisbane, where I witnessed firsthand the importance of clear, fair, and accessible legal services. However, I also saw a need for more warmth in the way we handle life's significant legal milestones.
              </p>
              <p>
                As a qualified Lawyer and Justice of the Peace, I bring a level of professionalism and security to your marriage ceremony that ensures total peace of mind. But beyond the paperwork, I am a community servant at heart.
              </p>
              <p>
                I believe that every couple deserves a ceremony that is dignified, respectful, and reflective of their commitment—without the exorbitant price tag often associated with the wedding industry.
              </p>
            </div>

            <div className="pt-4 border-t">
              <p className="font-display font-bold text-xl text-primary">Volunteer Service</p>
              <p className="text-muted-foreground">Regular volunteer at Brisbane Magistrates Court & Community Legal Centers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
