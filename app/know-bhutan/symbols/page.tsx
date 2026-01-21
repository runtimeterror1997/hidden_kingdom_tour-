import { KnowBhutanDetail } from "@/components/KnowBhutanDetail";

export default function SymbolsPage() {
  return (
    <KnowBhutanDetail
      title="National Symbols of Bhutan"
      subtitle="Icons of Identity, Spirituality, and Heritage"
      heroImage="/assets/home/bhutan.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           A nation's symbols are the shorthand for its soul. In Bhutan, the national symbols are not mere graphics or official designations; they are deeply imbued with the country's history, mythology, and Buddhist values. They reflect the unique blend of the secular and the spiritual that defines the Kingdom.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The National Flag</h2>
            <p className="mb-4">
                The National Flag of Bhutan is a rectangular field divided diagonally from the lower hoist side to the upper fly side.
            </p>
            <div className="pl-6 border-l-4 border-yellow-400 mb-6">
                 <p className="mb-2"><strong>The Upper Yellow Triangle:</strong> Represents the secular authority of the King. It signifies that the King is the upholder of the Kingdom's laws and the protector of its people, governing according to the Chhoe-sid-nyi (dual system) tradition.</p>
                 <p className="mb-2"><strong>The Lower Orange Triangle:</strong> Represents the spiritual power of Buddhism, specifically the Drukpa Kagyud and Nyingma lineages. Orange is the color of the robes worn by the monastic body.</p>
                 <p><strong>The Dragon (Druk):</strong> Placed centrally along the dividing line, the white dragon faces away from the hoist. The white color symbolizes the purity of inner thoughts and deeds. The jewels clamped in the dragon's claws represent the wealth and perfection of the nation, while its snarling mouth symbolizes the strength of the protective deities defending Bhutan.</p>
            </div>
            <p className="mb-4">
                The flag was first designed in 1949 and has undergone several modifications to reach its current form. It is flown at all government administrative buildings and is a source of immense pride for the Bhutanese.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The National Emblem</h2>
            <p className="mb-4">
                The National Emblem is contained in a circle, composed of a double diamond-thunderbolt (Dorji) placed above a lotus, surmounted by a jewel and framed by two dragons.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>The Double Vajra (Dorji):</strong> Represents the harmony between secular and religious power.</li>
                <li><strong>The Lotus:</strong> Symbolizes purity and the absence of defilements.</li>
                <li><strong>The Jewel:</strong> Represents the sovereign power of the people.</li>
                <li><strong>The Two Dragons:</strong> Male and female dragons symbolize the name of the country, Druk Yul, which they proclaim with their great voice (thunder).</li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The National Anthem</h2>
            <p className="mb-4">
                The national anthem is titled <strong>"Druk Tsendhen"</strong> (The Thunder Dragon Kingdom). The lyrics were written by Dasho Gyaldun Thinley and the music composed by Aku Tongmi in 1953.
            </p>
            <p className="italic text-muted-foreground mb-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                "In the Kingdom of Druk, where cypresses grow in refuge to the south,<br/>
                Long may the glorious King of Druk, the Protector, reign,<br/>
                May the essence of the Doctrine flourished,<br/>
                May the peace and happiness of the people and the sun of wealth shine!"
            </p>
            <p className="mb-4">
                The anthem pays homage to the land, the King, and the spiritual traditions, praying for the continued happiness and prosperity of the people.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">National Sport: Archery (Dha)</h2>
            <p className="mb-4">
                Archery was declared the national sport in 1971, but its roots go back to ancient times when bows and arrows were used for hunting and warfare. Today, it is a celebration of community.
            </p>
            <p className="mb-4">
                Bhutanese archery is unique. The target is placed at a staggering distance of 145 meters (compared to 50m in the Olympics). Traditional tournaments are played with bamboo bows, although imported compound bows are now common.
            </p>
            <p className="mb-4">
                An archery match is a boisterous affair. It involves two teams, and every time a player hits the target, his teammates perform a victory dance and sing songs of praise. Conversely, the opposing team will stand near the target and shout insults or bawdy jokes to distract the shooter. It is a game of immense skill, mental focus, and camaraderie, often accompanied by ample amounts of food and <em>Ara</em> (local wine).
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Natural Symbols</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">National Animal: The Takin</h3>
            <p className="mb-4">
                The Takin (Budorcas taxicolor) is a rare mammal with a thick neck and short, muscular legs. It lives in bamboo forests at altitudes of 2,000 to 4,500 meters.
            </p>
            <p className="mb-4">
                <strong>The Legend:</strong> In the 15th century, the Divine Madman (Lama Drukpa Kunley) was asked by devotees to perform a miracle. He demanded a whole cow and a whole goat for lunch. After devouring the meat, he took the goat's head and stuck it onto the cow's skeleton. With a snap of his fingers, the strange creature came to life and ran up the mountain. He named it "Dong Gyem Tsey" (Takin).
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">National Flower: The Blue Poppy</h3>
            <p className="mb-4">
                The Blue Poppy (Meconopsis Grandis) is one of the rarest flowers in the world. It was discovered in 1933 by British botanist George Sherriff in the remote calm of Sakteng.
            </p>
            <p className="mb-4">
                It grows on rocky mountain terrain above the tree line (3,500m - 4,500m). For years, its existence was considered a myth because it is so difficult to find. It blooms only once, briefly, during the monsoon season (late May to July). Its vibrant blue petals are a symbol of resilience and beauty in the face of harsh conditions.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">National Bird: The Raven</h3>
            <p className="mb-4">
                The Raven (Corvus Corax) represents the deity Gonpo Jarodonchen (Mahakala with a Raven’s head), one of Bhutan’s chief guardian deities. It is believed that this deity guided the Zhabdrung to Bhutan.
            </p>
            <p className="mb-4">
                The bird is so significant that it sits atop the <strong>Raven Crown</strong> worn by the Kings of Bhutan. The crown serves as a symbol of the Monarch’s authority and the protection of the guardian deities. Killing a raven is a serious crime in Bhutan.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">National Tree: The Cypress</h3>
            <p className="mb-4">
                The Himalayan Cypress (Cupressus torolusa) is the national tree. It is known locally as <em>Tsenden</em>. It is often found growing near religious structures.
            </p>
            <p className="mb-4">
                Bhutanese identify with the Cypress because it is straight, strong, and can grow in difficult terrain. Its evergreen nature symbolizes the enduring sovereignty of the nation and the vitality of its people. Its wood is highly prized for building temples and dzongs as it is resistant to termites and rot.
            </p>
        </div>
      </div>
    </KnowBhutanDetail>
  );
}
