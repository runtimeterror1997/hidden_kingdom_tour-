import { TravelGuideDetail } from "@/components/TravelGuideDetail";

export default function GuidesPage() {
  return (
    <TravelGuideDetail
      title="Tourist Guides in Bhutan"
      subtitle="Your Storytellers and Guardians of the Kingdom"
      heroImage="/assets/home/guide.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           In Bhutan, a tourist guide is more than just a person who shows you the way. They are your bridge to the culture, your translator of rituals, and your companion through the vast Himalayan valleys. By law, every international tourist must be accompanied by a certified guide, ensuring that your experience is safe, respectful, and deeply enriching.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Certification & Training</h2>
            <p className="mb-4">
                The Bhutanese government takes the professional quality of guides very seriously. All guides must be certified by the <strong>Department of Tourism (DoT)</strong>. 
            </p>
            <p className="mb-4">
                To become a guide, individuals must undergo rigorous training at the <em>Royal Institute for Tourism and Hospitality</em> or recognized private institutes. They are tested on their knowledge of Bhutanese history, Buddhist philosophy, flora and fauna, and language skills.
            </p>
            <p className="mb-4">
                <strong>Cultural vs. Trekking Guides:</strong> There are two main levels of certification. Cultural guides are experts in the architecture and history of Dzongs and temples. Trekking guides receive additional specialized training in mountain safety, high-altitude physiology, and environmental ethics.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">What to Expect from Your Guide</h2>
            <p className="mb-4">
                When you book with <strong>OASIS Tours and Treks</strong>, your guide will meet you at the airport and stay with you until you depart.
            </p>
            <ul className="grid md:grid-cols-2 gap-6 mt-6">
                <li className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Cultural Interpretation</h4>
                    <p className="text-sm">They will explain the hidden meanings of murals, the etiquette inside a "Lhakhang" (temple), and the stories behind the mask dances at local festivals.</p>
                </li>
                <li className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Logistical Harmony</h4>
                    <p className="text-sm">Your guide handles all the paperwork, including entry permits for temples and restricted areas, so you can focus on the beauty of the journey.</p>
                </li>
                <li className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Local Interactions</h4>
                    <p className="text-sm">They act as your bridge to the local community, helping you talk to farmers, monks, or weavers, facilitating genuine human connections.</p>
                </li>
                 <li className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Adaptive Planning</h4>
                    <p className="text-sm">If a local festival is happening nearby or a rainbow appears over a valley, your guide will pivot the plan to ensure you don't miss the magic.</p>
                </li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Etiquette & Tipping</h2>
            <p className="mb-4">
                Guide-tourist relationships in Bhutan often turn into lifelong friendships. While guides are professionals, they appreciate being treated as a guest of yours, just as you are theirs.
            </p>
            <p className="mb-4">
                <strong>Tipping:</strong> Tipping is not mandatory but is a customary way to show appreciation for good service. There is no set percentage, but a general guideline is USD 10-15 per day for the guide and slightly less for the driver, depending on your satisfaction and group size. This is usually presented in an envelope at the end of the trip.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Specialist Guides</h2>
            <p className="mb-4">
                If you have a specific interest—such as birdwatching, botany, or photography—please let us know. We can provide specialist guides who have deep expertise in these fields, ensuring your niche interests are well-served.
            </p>
        </div>
      </div>
    </TravelGuideDetail>
  );
}
