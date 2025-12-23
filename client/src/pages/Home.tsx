import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight, CheckCircle2, Gavel, HeartHandshake, Scale } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import couple1 from "@assets/stock_images/happy_diverse_couple_ccf02584.jpg";
import couple2 from "@assets/stock_images/happy_diverse_couple_ef77461c.jpg";
import couple3 from "@assets/stock_images/happy_diverse_couple_6a358c84.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white to-transparent transform skew-x-12" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-5 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-foreground border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase">Australia-Wide Service</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1]">
              Dignified.<br />
              Inclusive.<br />
              <span className="text-accent">Legally Robust.</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
              Experience the confidence of a ceremony conducted by an Authorised Civil Marriage Celebrant who is also a Legal Professional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white shadow-xl shadow-accent/20">
                  Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/requirements">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-primary-foreground border-primary-foreground/20 hover:bg-white/10">
                  Requirements
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block animate-in fade-in duration-1000 delay-300">
            {/* Marriage Moments Carousel */}
            <Carousel className="w-full">
              <CarouselContent>
                {[
                  { img: couple1, caption: "Celebrating Love" },
                  { img: couple2, caption: "Inclusive & Equal" },
                  { img: couple3, caption: "Your Special Day" }
                ].map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <img 
                        src={item.img} 
                        alt={item.caption}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-8 left-8 z-20 text-white">
                        <p className="font-display text-2xl font-bold">{item.caption}</p>
                        <p className="text-sm opacity-80">Across Australia</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-16 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border-white/30 text-white" />
              <CarouselNext className="absolute -right-16 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border-white/30 text-white" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3">
              <Scale className="h-8 w-8 text-primary" />
              <span className="font-display font-bold text-lg">Authorised Celebrant</span>
            </div>
            <div className="flex items-center gap-3">
              <Gavel className="h-8 w-8 text-primary" />
              <span className="font-display font-bold text-lg">Legal Professional</span>
            </div>
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-8 w-8 text-primary" />
              <span className="font-display font-bold text-lg">Justice of the Peace</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="More Than Just A Ceremony" 
            subtitle="Providing a marriage service that honors the weight of the law and the warmth of your commitment."
          />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Legal Expertise",
                description: "As a Lawyer and JP, I ensure every legal aspect of your union is handled with precision and care.",
                icon: Gavel
              },
              {
                title: "Inclusive Service",
                description: "We proudly celebrate love in all its forms. All couples are welcome, respected, and celebrated.",
                icon: HeartHandshake
              },
              {
                title: "Australia Wide",
                description: "From city registries to remote outback locations, we travel to you to officiate your special day.",
                icon: Scale
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Ready to take the next step?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Whether you're planning a wedding, elopement, or registry-style ceremony, we are here to guide you through.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-white min-w-[200px] h-14 text-lg">
                Get in Touch
              </Button>
            </Link>
            <Link href="/noim-form">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 min-w-[200px] h-14 text-lg">
                Start NOIM Form
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
