import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  as: Component = "div",
}) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-7xl px-4",
        className
      )}
    >
      {children}
    </Component>
  );
}
