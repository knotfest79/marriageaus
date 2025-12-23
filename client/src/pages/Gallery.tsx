import { SectionHeader } from "@/components/SectionHeader";

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    caption: "Intimate ceremony in the Botanic Gardens",
    category: "Ceremony"
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    caption: "Signing the registry",
    category: "Legal"
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    caption: "Celebrating diversity and love",
    category: "Community"
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    caption: "Moments of joy",
    category: "Ceremony"
  },
  {
    src: "https://images.unsplash.com/photo-1529636721199-28d752423533?w=800&q=80",
    caption: "Formal legal proceedings",
    category: "Legal"
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    caption: "Family focused gatherings",
    category: "Community"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Moments of Connection" 
          subtitle="A glimpse into the diverse celebrations of love we have had the honor to officiate."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden aspect-square shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10" />
              <img 
                src={item.src} 
                alt={item.caption}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                <p className="text-white font-medium">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
