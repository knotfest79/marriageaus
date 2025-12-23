import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, className, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4 mb-12", align === "center" && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 bg-accent rounded-full",
        align === "center" ? "mx-auto" : "ml-0"
      )} />
    </div>
  );
}
