import { SectionHeader } from "@/components/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export default function Promise() {
  return (
    <div className="min-h-screen bg-background section-padding">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <SectionHeader 
          title="Our Promise To You" 
          subtitle="Integrity, Transparency, and Respect form the cornerstone of our practice."
        />

        <div className="space-y-12 mt-16">
          {[
            {
              title: "Fair Pricing",
              content: "We believe access to marriage is a right, not a luxury. Our fees are transparent, fair, and often nominal for simple legal ceremonies."
            },
            {
              title: "Legal Accuracy",
              content: "With a background in law, we guarantee that all paperwork is flawless. You can rest assured your marriage is legally valid."
            },
            {
              title: "Absolute Confidentiality",
              content: "Your privacy is paramount. We handle your personal documents with the same strict confidentiality standards required of legal professionals."
            },
            {
              title: "Non-Judgmental Service",
              content: "We serve everyone. Regardless of background, belief, or identity, you will be treated with dignity and kindness."
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <div className="bg-green-100 p-3 rounded-full text-green-700">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-display">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
