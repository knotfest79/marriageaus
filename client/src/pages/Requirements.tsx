import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertCircle, FileText } from "lucide-react";

export default function Requirements() {
  return (
    <div className="min-h-screen bg-background section-padding">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader 
          title="Marriage Requirements in Australia" 
          subtitle="Understanding the legal process is the first step towards your union. We handle the complexities for you."
        />

        <div className="grid gap-8">
          {/* Main Requirement: NOIM */}
          <Card className="border-l-4 border-l-primary overflow-hidden">
            <div className="bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-primary text-white p-4 rounded-full shrink-0">
                <FileText className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-primary mb-3">Notice of Intended Marriage (NOIM)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By law, the NOIM must be lodged with your celebrant at least <strong>one month</strong> prior to the wedding date, and no more than 18 months in advance.
                </p>
                <div className="bg-white p-4 rounded-lg border text-sm text-foreground/80 flex gap-3">
                  <AlertCircle className="h-5 w-5 text-accent shrink-0" />
                  <p>In exceptional circumstances, a "Shortening of Time" may be granted by a Prescribed Authority, though this is rare.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Documents Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  Proof of Identity & Birth
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>You must produce either:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>An original Birth Certificate; OR</li>
                  <li>A valid overseas Passport</li>
                </ul>
                <p className="text-sm mt-4 italic">Note: Drivers licenses are for ID only, not proof of birth place.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  Previous Marriages
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>If either party has been married previously, you must provide evidence of the termination:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Divorce Certificate / Decree Absolute</li>
                  <li>Death Certificate of previous spouse</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* The Ceremony */}
          <div className="bg-white rounded-2xl p-8 border shadow-sm mt-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">The Legal Ceremony</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                While we can personalize your ceremony to reflect your unique story, the Marriage Act 1961 requires certain legal wording (the "Monitum") to be spoken by the celebrant to ensure the marriage is valid.
              </p>
              <p>
                The couple must also say specific vows: <em>"I call upon the persons here present to witness that I, [Name], take thee, [Name], to be my lawful wedded wife/husband/spouse."</em>
              </p>
              <p>
                Two witnesses over the age of 18 must be present to sign the marriage certificates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
