import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className, id }) => {
  return (
    <section id={id} className={cn("py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto", className)}>
      {children}
    </section>
  );
};

export default SectionWrapper;
