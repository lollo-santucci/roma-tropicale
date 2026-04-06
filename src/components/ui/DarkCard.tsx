import { cn } from "@/lib/utils";

interface DarkCardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function DarkCard({
  title,
  description,
  children,
  className,
}: DarkCardProps) {
  return (
    <div className={cn("bg-roma-dark rounded-card p-6 sm:p-8", className)}>
      {title && (
        <h3 className="text-roma-white font-[family-name:var(--font-display)] text-xl sm:text-2xl">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-roma-white/60 text-sm mt-2">{description}</p>
      )}
      {children}
    </div>
  );
}
