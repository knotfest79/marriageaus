import { SectionHeader } from "@/components/SectionHeader";
import { Heart } from "lucide-react";

export default function Equality() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Banner */}
      <div className="h-[40vh] bg-primary relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40 mix-blend-overlay z-10" />
        <div className="text-center z-20 space-y-4 px-4">
          <Heart className="h-16 w-16 text-accent mx-auto animate-pulse" fill="currentColor" />
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white">Love is Love</h1>
          <p className="text-xl text-white/90 font-light">Celebrating Marriage Equality in Australia since 2017</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg mx-auto text-muted-foreground">
          <p className="lead text-2xl font-display text-primary mb-8">
            We believe that marriage is a fundamental right that belongs to all consenting adults, regardless of gender or sexual orientation.
          </p>
          
          <p>
            The passage of marriage equality laws in Australia was a historic moment for justice and inclusion. As a legal professional and celebrant, I was proud to see our laws finally reflect the values of fairness and equality.
          </p>

          <p>
            Our service is, and always has been, a safe, welcoming, and celebratory space for the LGBTQIA+ community. We don't just "tolerate" diversity—we champion it.
          </p>

          <blockquote className="border-l-4 border-accent pl-6 italic text-foreground my-12 bg-white p-6 rounded-r-lg shadow-sm">
            "Marriage, according to law in Australia, is the union of two people to the exclusion of all others, voluntarily entered into for life."
          </blockquote>

          <h3 className="text-primary font-display font-bold text-2xl mt-12 mb-4">Our Commitment</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="h-2 w-2 bg-accent rounded-full mt-2.5 shrink-0" />
              <span>Inclusive language in all forms and ceremonies.</span>
            </li>
            <li className="flex gap-3">
              <span className="h-2 w-2 bg-accent rounded-full mt-2.5 shrink-0" />
              <span>Respect for all gender identities and pronouns.</span>
            </li>
            <li className="flex gap-3">
              <span className="h-2 w-2 bg-accent rounded-full mt-2.5 shrink-0" />
              <span>A judgement-free environment where you can be your authentic selves.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
