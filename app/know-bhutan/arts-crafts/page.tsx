import { KnowBhutanDetail } from "@/components/KnowBhutanDetail";

export default function ArtsCraftsPage() {
  return (
    <KnowBhutanDetail
      title="Arts and Crafts in Bhutan"
      subtitle="Zorig Chusum: The Thirteen Traditional Arts"
      heroImage="/assets/home/cultural_tour.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           In Bhutan, art is not a luxury or a hobby; it is a spiritual practice. The creation of art is considered an act of devotion, a way to accumulate merit, and a means to visualize the divine. Unlike in the West, where art is often individualistic and signed by the artist, Bhutanese art is anonymous. The artist is a vehicle for the sacred, and the work itself is prized over the maker.
        </p>
        <p>
            These traditions were codified in the 17th century by Zhabdrung Ngawang Namgyal into the <strong>Zorig Chusum</strong> (Video Thirteen Arts). These thirteen arts define the aesthetic of the entire country.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">1. Thagzo (Weaving)</h2>
            <p className="mb-4">
                Weaving is perhaps the most celebrated art form. Bhutanese textiles are renowned worldwide for their complexity and vibrant colors.
            </p>
            <p className="mb-4">
                Women are the primary weavers, using backstrap looms to create intricate patterns. The most prestigious is the <em>Kishuthara</em>, a silk textile with elaborate supplemental weft patterns. It can take a year to weave a single piece for a Kira (woman's dress). Textiles are not just clothes; they are wealth, used for trade and tax payments in the past.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">2. Lhazo (Painting)</h2>
            <p className="mb-4">
                Painters are the visual storytellers of Buddhism. You will see their work everywhere: on the walls of Dzongs, inside temples, and on furniture.
            </p>
            <p className="mb-4">
                Their masterpiece is the <strong>Thangka</strong> (religious scroll). Painted on cotton canvas using mineral pigments (gold dust, crushed lapis lazuli, malachite), thangkas depict deities, mandalas, and the life of Buddha. They strictly follow iconometric grids; the proportions of a deity are fixed by scripture and cannot be altered.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">3. Jimzo (Sculpting)</h2>
            <p className="mb-4">
                Bhutanese sculpture is distinct because it is primarily done in <strong>clay</strong>, not stone or metal.
            </p>
            <p className="mb-4">
                Master sculptors create the giant statues found in Lhakhangs (temples). The clay is mixed with paper pulp and other ingredients (sometimes even crushed precious stones) to make it durable. The statues are hollow and are filled with "zung" (sacred relics, mantras, and grains) during a consecration ceremony, which "brings the statue to life."
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">4. Shingzo (Carpentry)</h2>
            <p className="mb-4">
                Bhutanese architecture is a testament to the skill of the carpenter.
            </p>
            <p className="mb-4">
                Carpenters build the massive Dzongs and temples without using a single nail. They rely on complex interlocking wood joinery. The windows (Rabsel) are particularly intricate, featuring multi-layered lintels and cornices.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">5. Tshemzo (Tailoring and Embroidery)</h2>
            <p className="mb-4">
                This art involves sewing the national dress (Gho and Kira) and creating the elaborate costumes for the mask dances.
            </p>
            <p className="mb-4">
                It also includes the creation of <strong>Thongdrels</strong> (giant thangkas). These are massive appliqués made of silk and brocade, sometimes as tall as a building. They are unfurled only once a year during festivals.
            </p>
        </div>

        <div className="my-12">
             <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Other Essential Arts</h2>
             <ul className="grid md:grid-cols-2 gap-6">
                 <li>
                    <h4 className="font-bold text-lg">6. Dozo (Masonry)</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Building the towering stone walls of Dzongs and Chortens.</p>
                 </li>
                 <li>
                    <h4 className="font-bold text-lg">7. Parzo (Carving)</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Carving on wood, slate, and stone. Used for printing blocks for scriptures and decorative pillars.</p>
                 </li>
                 <li>
                    <h4 className="font-bold text-lg">8. Lugzo (Bronze Casting)</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Casting statues, bells, and ritual instruments in bronze and copper.</p>
                 </li>
                 <li>
                    <h4 className="font-bold text-lg">9. Garzo (Blacksmithing)</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Making iron tools, swords, and chains (famously used by the bridge-builder Thangtong Gyalpo).</p>
                 </li>
                 <li>
                    <h4 className="font-bold text-lg">10. Tshazo (Bamboo Weaving)</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Weaving bamboo and cane into the colorful <em>Bangchung</em> (containers), baskets, and mats.</p>
                 </li>
                  <li>
                    <h4 className="font-bold text-lg">11. Shagzo (Wood Turning)</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Turning wood to make bowls and cups (dapa and phob), often lacquered.</p>
                 </li>
                 <li>
                    <h4 className="font-bold text-lg">12. Deja (Paper Making)</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Making traditional paper (Deh-sho) from the Daphne plant bark, used for scriptures.</p>
                 </li>
                 <li>
                    <h4 className="font-bold text-lg">13. Troeko (Ornament Making)</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Working with gold, silver, and turquoise to make jewelry and ritual objects.</p>
                 </li>
             </ul>
        </div>
      </div>
    </KnowBhutanDetail>
  );
}
