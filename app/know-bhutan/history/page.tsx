import { KnowBhutanDetail } from "@/components/KnowBhutanDetail";

export default function HistoryPage() {
  return (
    <KnowBhutanDetail
      title="History of Bhutan"
      subtitle="A Timeline of Spirits, Saints, and Kings"
      heroImage="/assets/home/history_.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
          The history of Bhutan is more than just a chronicle of dates and events; it is a tapestry woven with mythology, spirituality, and the resilience of a people determined to preserve their identity. For centuries, Bhutan remained hidden in the folds of the Eastern Himalayas, isolated from the outside world. This isolation allowed it to develop a unique culture that is deeply rooted in Vajrayana Buddhism.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Ancient History and The Arrival of Buddhism</h2>
            <p className="mb-4">
               Archaeological evidence, including stone tools and weapons, suggests that the valleys of Bhutan were inhabited as early as 2000 BC. However, written records from this pre-historic era are scarce. The country was known by many names in ancient times, including <em>Lho Mon</em> (Southern Darkness) because of its location south of Tibet and the perceived lack of Buddhist enlightenment at the time.
            </p>
            <p className="mb-4">
               The transformative moment in Bhutan’s history arrived in the 7th century AD. The Tibetan King Songtsän Gampo, in a bid to subdue a demoness terrorizing the Himalayas, vowed to build 108 temples in a single day. Two of these temples were built in Bhutan: <strong>Kyichu Lhakhang</strong> in Paro and <strong>Jambay Lhakhang</strong> in Bumthang. These mark the first introduction of Buddhism to the land.
            </p>
            <p className="mb-4">
               However, it was in the 8th century that Buddhism truly took root with the arrival of <strong>Guru Rinpoche</strong> (Padmasambhava). Invited by a local king to cure him of a spiritual illness, Guru Rinpoche traveled throughout the country, subduing demons and converting them into protectors of the dharma. He meditated in caves that are now sacred pilgrimage sites, most notably Taktshang (Tiger’s Nest) in Paro. He is revered as the "Second Buddha," and his teachings formed the foundation of the Nyingma school of Buddhism, which is still practiced today.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Era of Zhabdrung Ngawang Namgyal</h2>
            <p className="mb-4">
                Until the early 17th century, Bhutan was a patchwork of fragmented fiefdoms constantly at war with one another. This changed with the arrival of <strong>Zhabdrung Ngawang Namgyal</strong> in 1616. A high-ranking llama from Tibet who was forced into exile due to sectarian conflict, the Zhabdrung is arguably the most important figure in Bhutanese nation-building.
            </p>
            <p className="mb-4">
                The Zhabdrung unified the warring valleys into a single nation-state, which he named <strong>Druk Yul</strong> (Land of the Thunder Dragon). To defend the country against Tibetan invasions, he built a chain of massive fortresses known as <strong>Dzongs</strong>. These structures served as both religious and administrative centers, a dual function they retain to this day.
            </p>
            <p className="mb-4">
                He established the <em>Chhoe-sid-nyi</em> (Dual System of Government), sharing power between a spiritual leader, the <strong>Je Khenpo</strong>, and a secular administrator, the <strong>Druk Desi</strong>. He also codified the laws (Tsa Yig) and unified the cultural practices, giving Bhutan a distinct national identity separate from Tibet.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Civil Wars and the Rise of the Wangchuck Dynasty</h2>
            <p className="mb-4">
                After the passing of the Zhabdrung in 1651, his death was kept secret for 54 years to maintain stability. However, once the secret was revealed, the country descended into nearly two centuries of internal conflict and civil war. Rival Penlops (Ministers) fought for power, plunging the nation into chaos.
            </p>
            <p className="mb-4">
                Peace was finally restored in the late 19th century by the Penlop of Trongsa, <strong>Jigme Namgyel</strong>, and later his son, <strong>Ugyen Wangchuck</strong>. Through strategic alliances and military prowess, Ugyen Wangchuck consolidated power and defeated his rivals.
            </p>
            <p className="mb-4">
                In 1907, an epochal assembly of the monastic body, government officials, and heads of important families was held in Punakha. They unanimously elected Ugyen Wangchuck as the first hereditary King of Bhutan (Druk Gyalpo). This marked the end of the dual system of government and the beginning of the Wangchuck Dynasty, which has provided visionary leadership for over a century.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Successive Kings</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-bold">The First King: Gongsa Ugyen Wangchuck (Reigned 1907–1926)</h3>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">He united the country and signed the Treaty of Punakha with British India in 1910, ensuring Bhutan's internal autonomy while conducting foreign relations with British advice.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">The Second King: Jigme Wangchuck (Reigned 1926–1952)</h3>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">He continued the centralization of power, streamlined the taxation system, and began to open Bhutan slowly to the outside world. He signed the Treaty of Friendship with independent India in 1949.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">The Third King: Druk Gyalpo Jigme Dorji Wangchuck (Reigned 1952–1972)</h3>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">Known as the "Father of Modern Bhutan," he ended Bhutan's isolation. He abolished serfdom, established the National Assembly, built the first roads and schools, and guided Bhutan to join the United Nations in 1971. He passed away at a young age, leaving a transformed nation.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">The Fourth King: Druk Gyalpo Jigme Singye Wangchuck (Reigned 1972–2006)</h3>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">Ascending the throne at just 17, he famously stated that "Gross National Happiness is more important than Gross National Product." He championed environmental conservation and decentralization. In a historic move, he voluntarily abdicated the throne in 2006 in favor of his son to pave the way for democracy.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">The Fifth King: Druk Gyalpo Jigme Khesar Namgyel Wangchuck (Reigned 2006–Present)</h3>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">The "People's King" oversaw the transition to a Democratic Constitutional Monarchy in 2008. He continues to travel to every corner of the country, ensuring the welfare of his people (Kidu) and guiding Bhutan through the challenges of the 21st century.</p>
                </div>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Modern Bhutan</h2>
            <p className="mb-4">
                Today, Bhutan stands as a unique example to the world. It is the youngest democracy in South Asia, having held its first general elections in 2008. The constitution, gifted by the Throne to the people, guarantees fundamental rights and mandates the protection of the environment and culture.
            </p>
            <p className="mb-4">
                While modernization has brought electricity, internet, and roads to even the remotest villages, the core values of the nation remain unchanged. The history of Bhutan is still being written, not just in books, but in the hearts of its people who strive to balance material development with spiritual well-being.
            </p>
        </div>
      </div>
    </KnowBhutanDetail>
  );
}
