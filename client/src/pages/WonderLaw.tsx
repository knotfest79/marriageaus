import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Globe } from "lucide-react";

export default function WonderLaw() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Professional Legal Header */}
      <div className="bg-[#0f172a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-6 opacity-80">
            <Globe className="h-5 w-5" />
            <span className="uppercase tracking-widest text-sm font-medium">International Legal Services</span>
          </div>
          <h1 className="text-5xl font-serif font-bold tracking-tight mb-6">Guangdong Wonder Law Firm</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            A strategic partnership delivering cross-border legal solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white p-10 rounded-xl shadow-sm border space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About The Firm</h2>
            <p className="text-slate-600 leading-relaxed">
              Guangdong Wonder Law Firm represents excellence in international commercial law. Through our association, we bridge the gap between Australian and Chinese legal systems, offering robust support for clients with cross-jurisdictional interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Commercial Law</h3>
              <p className="text-sm text-slate-500">Contract review, business formation, and international trade disputes.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Immigration</h3>
              <p className="text-sm text-slate-500">Partner visas, skilled migration, and citizenship applications.</p>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <Button className="bg-slate-900 text-white hover:bg-slate-800 h-12 px-8">
              Visit Official Website <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
