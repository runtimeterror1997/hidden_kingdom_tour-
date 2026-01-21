import { KnowBhutanDetail } from "@/components/KnowBhutanDetail";

export default function GovernmentPage() {
  return (
    <KnowBhutanDetail
      title="The Government in Bhutan"
      subtitle="A Unique Democracy Born from Royal Vision"
      heroImage="/assets/home/government.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
          The political evolution of Bhutan is a story unlike any other in the modern world. While most nations have fought devastating wars or revolutions to achieve democracy, in Bhutan, it was a gift from the Throne to the people. Today, Bhutan stands as a vibrant Democratic Constitutional Monarchy, where the wisdom of the past guides the democratic processes of the future.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Transition to Democracy</h2>
            <p className="mb-4">
                For a century (1907–2008), Bhutan was an absolute monarchy ruled by the Wangchuck dynasty. Under their benevolent reign, the country saw unprecedented peace, stability, and modernization. However, the Fourth King, His Majesty Jigme Singye Wangchuck, envisioned a future where the people played an active role in their governance.
            </p>
            <p className="mb-4">
                In a move that surprised the world and his own subjects, he initiated a process of decentralization in the early 1980s. He devolved executive powers to an elected council of ministers in 1998 and later commanded the drafting of a written constitution. In 2006, at the height of his popularity, he abdicated in favor of his son to oversee the transition.
            </p>
            <p className="mb-4">
                In 2008, Bhutan held its first historic general elections, formally transitioning to a Democratic Constitutional Monarchy. This unique "top-down" introduction of democracy ensured that the process was peaceful, orderly, and deeply respectful of the country's traditions.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Constitution</h2>
            <p className="mb-4">
                The Constitution of Bhutan is the supreme law of the land. Adopted in 2008, it safeguards the sovereignty of the nation and the fundamental rights of its citizens. Uniquely, it is perhaps the only constitution in the world that mandates environmental stewardship, requiring that at least 60% of the country remain under forest cover for all time.
            </p>
            <p className="mb-4">
                It separates the government into three distinct branches: the Legislature, the Executive, and the Judiciary, ensuring a system of checks and balances.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Three Branches of Government</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">1. The Legislature (Parliament)</h3>
            <p className="mb-4">
                The Parliament of Bhutan is bicameral, consisting of the Druk Gyalpo (The King), the National Council, and the National Assembly.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>The National Council (Upper House):</strong> This is the house of review and is apolitical. It consists of 25 members: 20 elected directly by the people (one from each Dzongkhag) and 5 eminent persons nominated by the King. Their role is to ensure that laws are not politically motivated and align with the long-term annual of the nation. They cannot belong to any political party.</li>
                <li><strong>The National Assembly (Lower House):</strong> This is the house of representatives. It consists of 47 members elected from constituencies across the country. Members belong to political parties. The party that wins the majority of seats forms the government, and its leader becomes the Prime Minister. The other party becomes the Opposition.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. The Executive (Lhengye Zhungtshog)</h3>
            <p className="mb-4">
                Executive power is vested in the Lhengye Zhungtshog (Council of Ministers), headed by the Prime Minister. They are responsible for the day-to-day administration of the country, formulating policies, and implementing development plans. The cabinet ministers are appointed by the King from among the members of the National Assembly on the recommendation of the Prime Minister.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. The Judiciary</h3>
            <p className="mb-4">
                The Judiciary is independent of the other branches. It comprises the Supreme Court, the High Court, District Courts (Dzongkhag Courts), and Sub-District Courts (Dungkhag Courts). The Chief Justice of Bhutan is the head of the Judiciary. The legal system is based on a unique blend of modern legal principles and traditional Buddhist laws codified by Zhabdrung Ngawang Namgyal in the 17th century.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Role of the Monarch</h2>
            <p className="mb-4">
                The King is the Head of State and the symbol of unity for the Kingdom. While the daily governance is handled by the elected government, the King plays a vital role in maintaining stability and ensuring the security of the nation.
            </p>
            <p className="mb-4">
                A unique aspect of the Monarch's role is the granting of <strong>Kidu</strong> (Well-being/welfare). Kidu is a traditional safety net where the King personally addresses the grievances of the people—be it landlessness, poverty, or lack of education. Any citizen can appeal directly to the King. This direct connection between the Monarch and the people is the bedrock of Bhutanese society.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Local Government</h2>
            <p className="mb-4">
                To empower grassroots democracy, significant power and resources have been decentralized to the local governments.
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dzongkhag Tshogdu:</strong> The District Council, presided over by an elected Chairperson.</li>
                <li><strong>Gewog Tshogde:</strong> The Block Council, headed by a <strong>Gup</strong> (Headman) who is directly elected by the villagers. The Gup plays a crucial role in local dispute resolution and development planning.</li>
            </ul>
        </div>
      </div>
    </KnowBhutanDetail>
  );
}
