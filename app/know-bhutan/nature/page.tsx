import { KnowBhutanDetail } from "@/components/KnowBhutanDetail";

export default function NaturePage() {
  return (
    <KnowBhutanDetail
      title="Bhutan's Natural Heritage"
      subtitle="The World's First Constitutional Conservationist"
      heroImage="/assets/home/nature.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Bhutan is often described as the last Shangri-La, a title it earns not just for its culture but for its pristine environment. In a world grappling with climate change and deforestation, Bhutan stands as a beacon of hope. It is the only carbon-negative country in the world, absorbing more greenhouse gases than it emits. This is not an accident but a result of deliberate policy choices that prioritize the planet over profit.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">A Constitutional Commitment</h2>
            <p className="mb-4">
               Conservation is at the very heart of Bhutan's identity. It is one of the four pillars of Gross National Happiness. This commitment is legally binding: Article 5 of the Constitution of Bhutan mandates that a minimum of 60% of Bhutan's total land area must remain under forest cover for all time.
            </p>
            <p className="mb-4">
                Currently, the forest cover stands at over 70%. The government has set aside more than 50% of the country as protected areas—National Parks, Wildlife Sanctuaries, and Strict Nature Reserves. This is one of the highest percentages of protected land of any country in the world.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Biological Corridors: A Gift to Wildlife</h2>
            <p className="mb-4">
                What makes Bhutan's conservation model truly unique is the network of <strong>Biological Corridors</strong>. In 1999, the government established these corridors to connect all the protected areas.
            </p>
            <p className="mb-4">
                Since animals do not recognize human borders, these corridors allow wildlife to migrate freely between parks, ensuring genetic diversity and adaptation to climate change. A tiger, for instance, can theoretically walk from the tropical jungles of the south to the cool alpine heights of the north without ever leaving protected land. This visionary approach has allowed populations of endangered species to thrive.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Flora: The Botanist's Paradise</h2>
            <p className="mb-4">
                Bhutan's flora is exceptionally diverse due to its wide altitudinal range and location at the intersection of the Indo-Malayan and Palearctic realms.
            </p>
            <ul className="list-disc pl-6 space-y-3">
                <li><strong>Rhododendrons:</strong> Bhutan loves rhododendrons. There are 46 recorded species, ranging from towering trees in the temperate forests to tiny carpets of flowers in the alpine meadows. The annual Rhododendron Festival celebrates this diversity.</li>
                <li><strong>Blue Poppy (Meconopsis Grandis):</strong> The national flower is a rare and elusive beauty. It grows in high altitudes (above 3,500m) on rocky terrain. Unlike common poppies, it is a hardy perennial that survives harsh winters to bloom a brilliant blue in the late spring.</li>
                <li><strong>Medicinal Plants:</strong> Historically, Bhutan was known as <em>Lhoman Menjong</em> (The Southern Land of Medicinal Herbs). Over 300 species of medicinal plants are found here, which form the basis of the traditional Sowa Rigpa medicine.</li>
                <li><strong>Orchids:</strong> The humid southern forests are home to over 360 species of orchids, creating a dazzling display of colors and shapes.</li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Fauna: A Sanctuary for the Rare</h2>
            <p className="mb-4">
                The thriving forests of Bhutan support a density of wildlife that is rare in Asia.
            </p>
            <h3 className="text-xl font-bold mt-4 mb-2">The Big Cats</h3>
            <p className="mb-2">
                Bhutan is a stronghold for the <strong>Bengal Tiger</strong>. Recent surveys have found tigers roaming at altitudes as high as 4,000 meters, a discovery that stunned the scientific community. The high Himalayas are the domain of the elusive <strong>Snow Leopard</strong>, the "Ghost of the Mountains."
            </p>

            <h3 className="text-xl font-bold mt-4 mb-2">The Takin</h3>
            <p className="mb-2">
                The National Animal, the <strong>Takin</strong>, is a biological curiosity. It looks like a moose's nose attached to a cow's body with a goat's tail. Legend says the Divine Madman created it by slapping the head of a goat onto the skeleton of a cow. Taxonomically unique, it has its own genus (Budorcas).
            </p>

            <h3 className="text-xl font-bold mt-4 mb-2">The Black-Necked Crane</h3>
            <p className="mb-2">
                These majestic birds (Grus nigricollis) are revered as heavenly messengers. They migrate from the Tibetan plateau to the Phobjikha and Bumdeling valleys in Bhutan every winter. The locals believe their arrival signals a good harvest. A festival is held every November to welcome them, and the birds are so respected that they are known to circle the Gangtey Monastery three times upon arrival and departure.
            </p>

             <h3 className="text-xl font-bold mt-4 mb-2">The Golden Langur</h3>
            <p className="mb-2">
                Found only in a small pocket of Bhutan and neighboring India, this primate is famous for its shimmering golden fur. They are considered sacred by the locals and are a common sight in the forests of Trongsa and Zhemgang.
            </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl mt-12 border border-green-100 dark:border-green-900">
            <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Why is Bhutan Carbon Negative?</h2>
            <p className="mb-4">
                "Carbon Negative" means Bhutan removes more Carbon Dioxide (CO2) from the atmosphere than it emits.
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Sink:</strong> Bhutan's vast forests act as a carbon sink, absorbing approximately 6 million tons of carbon annually.</li>
                <li><strong>Source:</strong> The country only emits about 1.5 million tons of carbon annually, thanks to low industrialization and the use of renewable hydropower.</li>
                <li><strong>Result:</strong> This makes Bhutan a net carbon sink of over 4 million tons a year. Furthermore, by exporting clean hydroelectricity to India, Bhutan helps offset millions of tons of carbon that would otherwise be generated by fossil fuels.</li>
            </ul>
        </div>
      </div>
    </KnowBhutanDetail>
  );
}
