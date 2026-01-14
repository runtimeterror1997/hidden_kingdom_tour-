import { FAQ } from "@/components/FAQ";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#fdfdfc]">
      <Navbar />
      <div className="pt-24 pb-12">
        <FAQ />
      </div>

    </main>
  );
}
