import { cn } from "@/lib/utils";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Title({ children, className }: TitleProps) {
  return (
    <div
      id="title"
      className={cn(
        "flex justify-between gap-1 text-3xl border-b-2 border-purple-600 w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
