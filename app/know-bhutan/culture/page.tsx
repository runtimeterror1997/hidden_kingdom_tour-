import { KnowBhutanDetail } from "@/components/KnowBhutanDetail";

export default function CulturePage() {
  return (
    <KnowBhutanDetail
      title="Bhutan's Cultural Heritage"
      subtitle="The Living Arts and Traditions of the Himalayas"
      heroImage="/assets/home/phalus.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           In a rapidly globalizing world, Bhutan stands out for its fierce commitment to preserving its cultural heritage. Culture in Bhutan is not merely a museum piece; it is a living, breathing entity that shapes the daily lives of its people. From the architecture of the farmhouses to the intricate patterns of the national dress, and the solemnity of religious rituals, the Bhutanese identity is vibrant and distinct.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Driglam Namzha: The Way of Harmony</h2>
            <p className="mb-4">
                At the heart of Bhutanese society is <strong>Driglam Namzha</strong>, the official code of etiquette and conduct. Introduced by the unifier Zhabdrung Ngawang Namgyal in the 17th century, it dictates how citizens should dress, eat, speak, and behave in formal settings.
            </p>
            <p className="mb-4">
                While it may seem rigid to outsiders, locals view it as a way to promote harmony, respect, and civic consciousness. It emphasizes respect for elders, authority, and spiritual institutions. For example, when visiting a Dzong or office, Bhutanese men wear a <em>Kabney</em> (a silk scarf) over their Gho, the color of which denotes their rank (white for commoners, orange for ministers, yellow for the King). Women wear a <em>Rachu</em> (an embroidered cloth) over their left shoulder.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Zorig Chusum: Thirteen Arts and Crafts</h2>
            <p className="mb-4">
                Bhutanese art is deeply spiritual and symbolic. It is not intended for individual expression but rather for religious merit (sonam). The arts are categorized into thirteen traditional crafts known as <strong>Zorig Chusum</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">1. Thagzo (Weaving)</h4>
                    <p className="text-sm">One of the most advanced arts. Women weave intricate textiles from cotton, silk, and wool using backstrap looms. The patterns, such as <em>Kishuthara</em>, are incredibly complex and can take years to complete.</p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">2. Lhazo (Painting)</h4>
                    <p className="text-sm">Painters create the vibrant murals found on temple walls, thangkas (religious scrolls), and furniture. The paints are traditionally made from mineral pigments.</p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">3. Shingo (Carpentry)</h4>
                    <p className="text-sm">Carpenters build the magnificent Dzongs and temples without using a single nail, relying on complex interlocking wood joinery.</p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">4. Jimzo (Sculpting)</h4>
                    <p className="text-sm">Sculptors work with clay to create statues of deities, which are then painted and gilded. They also make ritual masks.</p>
                </div>
            </div>
             <p className="mt-4 text-sm italic text-muted-foreground">The other arts include Parzo (Carving), Dozo (Masonry), Garzo (Blacksmithing), Troeko (Ornament making), Tshazo (Bamboo weaving), etc.</p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Tshechus: The Festival of Deities</h2>
            <p className="mb-4">
                The highlight of Bhutan’s cultural calendar is the <strong>Tshechu</strong> (literally "Day Ten"). Held annually in each district on the 10th day of a month in the Bhutanese lunar calendar, these festivals honor Guru Rinpoche.
            </p>
            <p className="mb-4">
                During a Tshechu, monks perform masked dances known as <em>Chams</em>. Each dance is a meditation in motion, depicting the life of Guru Rinpoche, terrifying deities, or moral stories. It is believed that simply witnessing these dances washes away sins and accumulates merit.
            </p>
            <p className="mb-4">
                The festivals are also a grand social occasion. Locals dress in their finest hand-woven clothes, pack picnic lunches, and gather in the Dzong courtyards to celebrate community and faith. The atmosphere is a riot of color, sound, and joy, often culminating in the unfurling of a giant Thongdrel (a massive thangka applique), which liberates onlookers upon sight.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">National Dress</h2>
            <p className="mb-4">
                The distinct Bhutanese dress is one of the most visible markers of its culture.
            </p>
            <ul className="list-disc pl-6 space-y-3">
                <li><strong>Gho:</strong> Men wear a knee-length robe that is wrapped around the body and tied at the waist with a woven belt (Kera). The upper part forms a large pouch, which traditionally served as a pocket for carrying everything from bowls to baby yaks!</li>
                <li><strong>Kira:</strong> Women wear a long, ankle-length dress. It is a rectangular piece of woven fabric wrapped around the body and pinned at the shoulders with silver brooches (Koma). It is worn with a long-sleeved inner blouse (Wonju) and a short outer jacket (Toego).</li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Traditional Architecture</h2>
            <p className="mb-4">
                Bhutanese architecture is striking and uniform. Whether it is a humble farmhouse or a majestic fortress, the style is consistent. Buildings feature white-washed mud or stone walls, timber frames, and sloping roofs held down by stones. Windows are distinctive, often trefoil-shaped with intricate lintels.
            </p>
            <p className="mb-4">
                The most imposing structures are the <strong>Dzongs</strong>. Built without blueprints or nails, these massive fortresses dominate the valleys. Their tapering walls, red bands (kemar), and golden roofs are masterpieces of engineering and aesthetics. Inside, they house the monastic body and the district administration, physically representing the dual system of governance.
            </p>
        </div>
      </div>
    </KnowBhutanDetail>
  );
}
