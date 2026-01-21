import { KnowBhutanDetail } from "@/components/KnowBhutanDetail";

export default function PopulationPage() {
  return (
    <KnowBhutanDetail
      title="Population of Bhutan"
      subtitle="A Mosaic of Ethnicities and Traditions"
      heroImage="/assets/home/population.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Bhutan is a small nation with a small population, estimated at around 780,000 people. Yet, within this small number lies a surprising diversity. The harsh, mountainous terrain has historically isolated communities in their respective valleys, leading to the development of distinct languages, customs, and dress. Despite these differences, the Bhutanese people share a strong sense of national identity, united by their faith and allegiance to the King.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Three Major Ethnic Groups</h2>
            <p className="mb-4">
                Broadly speaking, the population can be divided into three main ethnic groups: the Ngalops, the Sharchops, and the Lhotshampas.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. The Ngalops (People of the West)</h3>
            <p className="mb-4">
                The Ngalops inhabit the western and central regions of Bhutan (Thimphu, Paro, Punakha, Haa, Wangdue, Trongsa, Bumthang). They are descendants of Tibetan immigrants who arrived in the 9th century.
            </p>
            <p className="mb-4">
                <strong>Culture:</strong> They brought Buddhism with them, and their culture is closely linked to the establishment of the state religion. They are traditionally farmers, cultivating red rice, potatoes, and barley.
            </p>
            <p className="mb-4">
                <strong>Language:</strong> They speak <strong>Dzongkha</strong>, which translates to "The Language of the Fortress." It is the national language of Bhutan and is mandatory in schools and government offices.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. The Sharchops (People of the East)</h3>
            <p className="mb-4">
                The Sharchops are the largest ethnic group and live in the eastern districts (Mongar, Trashigang, Lhuentse, Trashiyangtse, Pemagatshel, Samdrup Jongkhar). They are believed to be the earliest inhabitants of Bhutan, possibly of Tibeto-Burman or Indo-Mongoloid origin.
            </p>
            <p className="mb-4">
                <strong>Culture:</strong> Sharchop culture is distinct, with its own festivals and deities. They are renowned for their weaving skills, producing vibrant raw silk textiles called <em>Bura</em>. Maize is their staple diet, unlike the rice-eating westerners.
            </p>
            <p className="mb-4">
                <strong>Language:</strong> They speak <strong>Tshangla</strong> (also known as Sharchopkha). While not a written language historically, it is widely spoken across the east. It is mutually unintelligible with Dzongkha.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. The Lhotshampas (People of the South)</h3>
            <p className="mb-4">
                The Lhotshampas inhabit the southern foothills of Bhutan. They are of Nepali origin and began settling in Bhutan in the late 19th and early 20th centuries, invited by the government to clear the jungles for agriculture.
            </p>
            <p className="mb-4">
                <strong>Culture:</strong> They are predominantly Hindu, although many are Buddhist or Christian. They celebrate festivals like Dashain and Tihar (Diwali). Their agriculture is focused on cash crops like oranges, cardamom, and ginger.
            </p>
            <p className="mb-4">
                <strong>Language:</strong> They speak <strong>Lhotshamkha</strong> (Nepali), an Indo-Aryan language.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Indigenous and Nomadic Tribes</h2>
            <p className="mb-4">
                Beyond the three main groups, Bhutan is home to several smaller, indigenous tribes living in remote areas.
            </p>
            <ul className="list-disc pl-6 space-y-3">
                <li><strong>The Layaps:</strong> Living in the high-altitude Laya village (3,800m) in the north, they are semi-nomadic yak herders. The women are famous for their unique conical bamboo hats.</li>
                <li><strong>The Lunaps:</strong> Even more remote are the Lunaps of Lunana, a region often cut off by snow for six months of the year. They are known for their hardiness and distinct dialect.</li>
                <li><strong>The Brokpas:</strong> Located in the far east (Merak and Sakteng), the Brokpas are semi-nomads who herd yaks and sheep. They wear a distinctive hat made of twisted yak hair with five "dreadlocks" to drain rainwater.</li>
                <li><strong>The Doyas:</strong> An indigenous group living in the Lhop community in Samtse, believed to be the aboriginal inhabitants of the land.</li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Social Structure and Women in Bhutan</h2>
            <p className="mb-4">
                Bhutanese society is relatively egalitarian. There is no rigid caste system. One of the most remarkable features is the high status of women.
            </p>
            <p className="mb-4">
                Traditionally, Bhutan follows a <strong>matrilineal inheritance system</strong>. Property and land are passed down from mother to daughter. This means that in many households, the head of the family is the woman. When a couple gets married, it is often the groom who moves into the bride's house (matrilocality), although this is changing in urban areas.
            </p>
            <p className="mb-4">
                Women play an active role in the economy, running businesses, working in fields, and holding government posts. The pursuit of gender equality is actively promoted by the government.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Rural vs. Urban Life</h2>
            <p className="mb-4">
                While Bhutan is urbanizing rapidly, the majority of the population (approx. 60%) still lives in rural villages.
            </p>
            <p className="mb-4">
                <strong>Rural Life:</strong> Life in the village revolves around the seasons and agriculture. Communities are tight-knit, often helping each other with harvest or house construction. Houses are large, multi-story rammed earth structures. The ground floor is for livestock, the middle for the family, and the attic for drying crops.
            </p>
            <p className="mb-4">
                <strong>Urban Life:</strong> Thimphu represents the modern face of Bhutan. Here, you will see young people in western clothes frequenting cafes, clubs, and gyms. The internet and social media have connected Bhutanese youth with the world, creating a fusion culture that blends global trends with traditional values.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Gross National Happiness and Society</h2>
            <p className="mb-4">
                The philosophy of Gross National Happiness (GNH) has a profound impact on the population. It shapes the education system, which teaches "GNH values" like mindfulness and environmental care. It influences community interactions, prioritizing social cohesion over individual competition.
            </p>
            <p className="mb-4">
                Visitors often remark on the warmth and contentment of the Bhutanese people. It is a society that values relationships, laughter, and a simple life.
            </p>
        </div>
      </div>
    </KnowBhutanDetail>
  );
}
