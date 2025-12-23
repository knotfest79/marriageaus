import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  imageSrc?: string;
}

export function PageHeader({ title, subtitle, className, imageSrc }: PageHeaderProps) {
  return (
    <div className={cn("relative w-full bg-primary py-24 md:py-32 overflow-hidden", className)}>
      {/* Background Image / Overlay */}
      {imageSrc && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      
      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-background rounded-t-[50%] md:rounded-t-[100%] translate-y-1/2 scale-x-150" />
    </div>
  );
}
