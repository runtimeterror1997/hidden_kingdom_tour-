import { KnowBhutanDetail } from "@/components/KnowBhutanDetail";

export default function BuddhismPage() {
  return (
    <KnowBhutanDetail
      title="Buddhism in Bhutan"
      subtitle="The Spiritual Essence of the Thunder Dragon Kingdom"
      heroImage="/assets/home/tigernest.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           To understand Bhutan, one must understand Buddhism. It is not merely a religion here; it is the very fabric of life. It influences the arts, the architecture, the festivals, and the daily routine of every Bhutanese. The prayer flags fluttering on mountain passes and the soft hum of "Om Mani Padme Hum" from spinning prayer wheels are the constant background music of the nation.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">A Vajrayana Stronghold</h2>
            <p className="mb-4">
                Bhutan is the only country in the world where <strong>Vajrayana Buddhism</strong> (The Diamond Vehicle) is the state religion. This form of Buddhism, also known as Tantric Buddhism, emphasizes the use of rituals, mantras, and visualization to achieve enlightenment in a single lifetime.
            </p>
            <p className="mb-4">
                While Buddhism was introduced in the 7th century by the Tibetan King Songtsän Gampo, it flourished in the 8th century with the arrival of Guru Rinpoche (Padmasambhava). Today, two main schools of Buddhism coexist in Bhutan:
            </p>
            <ul className="list-disc pl-6 space-y-3">
                <li><strong>The Drukpa Kagyu School:</strong> This is the state religion. It was established by Tsangpa Gyare Yeshe Dorji in Tibet and brought to Bhutan by Phajo Drugom Zhigpo. It was later unified and solidified by Zhabdrung Ngawang Namgyal in the 17th century. The Je Khenpo (Chief Abbot) heads this lineage.</li>
                <li><strong>The Nyingma School:</strong> The "Ancient" school founded by Guru Rinpoche himself. It is widely practiced in central and eastern Bhutan. It is less hierarchical and often involves lay practitioners (Gomchens) who are married and live in their villages.</li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Monastic Body</h2>
            <p className="mb-4">
                The monastic body plays a central role in Bhutanese society. The Central Monastic Body (Zhung Dratshang) consists of over 5,000 monks and is headquartered in Thimphu (summer) and Punakha (winter). It is led by the <strong>Je Khenpo</strong>, who is considered equal in rank to the King.
            </p>
            <p className="mb-4">
                Becoming a monk is a choice, not a compulsion. Many boys enter the monastery at a young age (6-9 years old). Their education includes reading and writing Dzongkha/Choekey (classical Tibetan), memorizing scriptures, learning ritual instruments (horns, cymbals, drums), and studying Buddhist philosophy.
            </p>
            <p className="mb-4">
                Monks are involved in all major life events. They name newborns, bless new houses, perform rituals for the sick, and conduct elaborate funeral rites to guide the consciousness of the deceased. In return, the community supports the monasteries with food and donations.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Sacred Landscapes</h2>
            <p className="mb-4">
                The physical landscape of Bhutan is viewed through a spiritual lens. Mountains are considered the abodes of deities and are often not climbed out of respect. Lakes are seen as the dwelling places of underwater spirits (Tshomen).
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Prayer Flags (Lung Ta)</h3>
            <p className="mb-4">
                One cannot visit Bhutan without noticing the colorful flags fluttering everywhere—on bridges, mountain passes, and house rooftops. These are called <em>Lung Ta</em> (Wind Horse).
            </p>
            <p className="mb-4">
                They come in five colors representing the five elements: Blue (Sky), White (Air/Clouds), Red (Fire), Green (Water), and Yellow (Earth). They are inscribed with sacred mantras. The Bhutanese believe that as the wind blows, it carries the blessings and prayers from the flags across the land to all sentient beings. They are usually hoisted for luck, happiness, and prosperity, or to guide the spirit of the dead.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Chortens (Stupas)</h3>
            <p className="mb-4">
                Thousands of Chortens dot the landscape. These distinctive white structures represent the mind of the Buddha. They are built to suppress evil spirits, commemorate great teachers, or simply to act as receptacles for offerings.
            </p>
            <p className="mb-4">
                There are different styles of Chortens in Bhutan, including the Tibetan style (rounded dome) and the Bhutanese style (square with a red band). It is customary to walk around a Chorten in a clockwise direction (circumambulation) while chanting mantras, earning merit with each step.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Prayer Wheels (Mani Dungkor)</h3>
            <p className="mb-4">
                Prayer wheels are cylindrical wheels filled with thousands (sometimes millions) of written mantras. Spinning the wheel clockwise is believed to have the same merit as reciting the mantras orally. You will see them everywhere—huge ones at monastery entrances turned by pilgrims, tiny hand-held ones spun by elderly people, and even water-driven wheels in streams that bless the water flowing downstream.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Buddhism and Daily Life</h2>
            <p className="mb-4">
                For the average Bhutanese, karma (cause and effect) is a guiding principle. The belief that one's actions in this life determine the quality of the next life encourages compassion and ethical behavior. This is why Bhutan possesses a culture of kindness; crime rates are low, and there is a deep respect for all forms of life.
            </p>
            <p className="mb-4">
                Every Bhutanese home has an altar room (Choesham), often the most beautiful room in the house. Families start their day by offering fresh water (Yonchang) and butter lamps to the deities. The year is punctuated by auspicious days (Zakar) based on the lunar calendar, where eating meat is prohibited and people visit temples to pray.
            </p>
            <p className="mb-4">
                This spiritual grounding is perhaps the key to Bhutan's happiness. It provides a sense of contentment and a perspective that values inner peace over material accumulation.
            </p>
        </div>
      </div>
    </KnowBhutanDetail>
  );
}
