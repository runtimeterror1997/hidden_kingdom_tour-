import { KnowBhutanDetail } from "@/components/KnowBhutanDetail";

export default function EconomyPage() {
  return (
    <KnowBhutanDetail
      title="Economy of Bhutan"
      subtitle="Balancing Growth with Happiness: The GNH Approach"
      heroImage="/assets/home/revenu.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Bhutan's economy is a fascinating case study in sustainable development. Unlike most nations that measure progress solely by Gross Domestic Product (GDP), Bhutan is guided by the philosophy of <strong>Gross National Happiness (GNH)</strong>. This means that economic growth is not an end in itself but a means to achieve the well-being of the population. Development must be equitable, environmentally sustainable, and culturally preservative.
        </p>
        <p>
            Despite being one of the smallest economies in the world, Bhutan has seen rapid growth and poverty reduction in recent decades, transitioning from a Least Developed Country (LDC) towards a middle-income statuts.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Hydropower: The White Gold</h2>
            <p className="mb-4">
                The backbone of the Bhutanese economy is hydropower. Blessed with fast-flowing rivers fed by Himalayan glaciers and monsoons, the country has immense hydroelectric potential (estimated at 30,000 MW, of which only about 5% is tapped).
            </p>
            <p className="mb-4">
                Hydropower projects, built in cooperation with India, generate clean energy. The majority of this electricity is exported to India, providing a steady stream of revenue that funds Bhutan’s free healthcare and education systems.
            </p>
            <p className="mb-4">
                Critically, these are "run-of-the-river" projects, which involve minimal damming and do not create large reservoirs, thus reducing the environmental impact and avoiding the displacement of communities.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Tourism: High Value, Low Volume</h2>
            <p className="mb-4">
                Tourism is the second-largest revenue earner and the largest earner of hard currency (USD). However, Bhutan is not a mass tourism destination. Since opening up in 1974, the government has followed a policy of <strong>"High Value, Low Volume"</strong> tourism.
            </p>
            <p className="mb-4">
                This is implemented through a profound Sustainable Development Fee (SDF). Currently, international tourists pay a daily levy (e.g., $100 per night). This fee goes directly to the government treasury to fund social welfare programs, infrastructure, and conservation.
            </p>
            <p className="mb-4">
                The aim is to prevent the negative impacts of mass tourism—cultural dilution and environmental degradation—while attracting mindful travelers who respect the country's values. It ensures that tourism remains an exclusive and authentic experience.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Agriculture: The Green Sector</h2>
            <p className="mb-4">
                While hydropower and tourism drive growth, agriculture remains the primary livelihood for about 60% of the population. Farming is mostly subsistence-based, with families growing what they need and selling the surplus.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
                 <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Major Crops</h4>
                    <p className="text-sm">Rice (especially Red Rice), maize, potatoes, wheat, buckwheat, and barley. Cash crops include apples, oranges (mandarins), cardamom, and ginger, which are exported to Bangladesh and India.</p>
                </div>
                 <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Organic Goal</h4>
                    <p className="text-sm">Bhutan has a bold ambition to become the world's first 100% organic country. The use of chemical fertilizers is discouraged, and traditional methods are promoted. This aligns perfectly with the GNH value of environmental conservation.</p>
                </div>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Currency</h2>
            <p className="mb-4">
                The currency of Bhutan is the <strong>Ngultrum (Nu)</strong>. It is pegged 1:1 with the Indian Rupee (INR).
            </p>
            <p className="mb-4">
                Due to the close economic ties, the Indian Rupee is widely accepted as legal tender in Bhutan (except for high-denomination notes like 500 and 2000). However, the Ngultrum is not accepted in India. US Dollars are also widely exchanged.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Challenges and Future</h2>
            <p className="mb-4">
                Despite its successes, the Bhutanese economy faces challenges. The biggest is youth unemployment. As education levels rise, young people are moving away from farming, seeking white-collar jobs that are scarce in the small private sector.
            </p>
            <p className="mb-4">
                To address this, the government is promoting entrepreneurship (Cottage and Small Industries - CSI), strengthening vocational training, and investing in the IT sector (e.g., the Thimphu TechPark). The "Brand Bhutan" initiative aims to market premium Bhutanese products—like high-quality matsutake mushrooms, honey, and textiles—to the global niche market.
            </p>
        </div>
      </div>
    </KnowBhutanDetail>
  );
}
