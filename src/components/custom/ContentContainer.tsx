import { cn } from "@/lib/utils";

type ContentContainerProps = {
  children: React.ReactNode;
  classname?: string;
};

export default function ContentContainer({
  children,
  classname,
}: ContentContainerProps) {
  return (
    <section
      id="content-container"
      className={cn(
        "flex flex-col gap-8 flex-1 lg:max-w-[900px] md:max-w-[600px] sm:max-w-[320px] m-auto p-5 mt-5",
        classname
      )}
    >
      {children}
    </section>
  );
}