import { KnowBhutanDetail } from "@/components/KnowBhutanDetail";

export default function GeographyPage() {
  return (
    <KnowBhutanDetail
      title="Geography of Bhutan"
      subtitle="A Land of Dramatic Landscapes and Pristine Ecosystems"
      heroImage="/assets/home/drugyel.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
          Nestled in the eastern Himalayas, Bhutan is a geo-ecological wonder. Though small in size—comparable to Switzerland or the Netherlands—its vertical geography is staggering. Within a lateral distance of less than 150 kilometers, the land rises from subtropical plains at 100 meters above sea level to perpetually snow-capped peaks soaring over 7,500 meters. This dramatic variation in altitude creates a mosaic of climates and ecosystems, making Bhutan one of the most biodiverse regions on Earth.
        </p>
        
        <p>
            Landlocked between the two Asian giants, China (Tibet) to the north and India to the south, east, and west, Bhutan's terrain is rugged and mountainous. Flat land is a rarity, primarily found in the southern foothills and the broad central valleys. The country is essentially a series of steep valleys descending from the north to the south, separated by complex ridges and mountain ranges that have historically kept its communities isolated from one another.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Three Geographic Zones</h2>
            <p className="mb-4">
                Bhutan's geography can be broadly categorized into three distinct lateral zones, each with its own climate, vegetation, and way of life.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. The Southern Foothills (Subtropical Zone)</h3>
            <p className="mb-4">
                Bordering the Indian states of West Bengal and Assam, the southern foothills form a narrow belt of plain land and low hills rising up to 1,500 meters. The climate here is hot and humid, typical of the sub-tropics, with heavy rainfall during the monsoon season (June to September).
            </p>
            <p className="mb-4">
                This region is covered in dense tropical deciduous forests and is the agricultural basket of the country, producing rice, oranges, cardamoms, and other cash crops. It is also rich in wildlife, hosting elephants, tigers, rhinos, and hornbills in protected areas like the Royal Manas National Park. The main towns in this zone include Phuntsholing (the commercial hub), Gelephu, and Samdrup Jongkhar.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. The Inner Himalayas (Temperate Zone)</h3>
            <p className="mb-4">
                Moving northwards, the land rises sharply into the Inner Himalayas, ranging from 1,500 to 3,500 meters. This is the heartland of Bhutan, where the majority of the population resides. The region is characterized by broad, fertile valleys carved by fast-flowing rivers.
            </p>
            <p className="mb-4">
                The climate here is temperate, with cool, dry winters and warm, wet summers. However, micro-climates abound; a valley floor might be warm enough for cacti and bananas (like Punakha), while the surrounding ridges are covered in rhododendrons and conifers.
            </p>
            <p className="mb-4">
                Major towns like Thimphu, Paro, Punakha, Wangdue Phodrang, Trongsa, Bumthang, Mongar, and Trashigang are located in this zone. The vegetation shifts from broadleaf forests to alpine shrubs as one ascends. This region is famous for its stunning biodiversity, including the Golden Langur, Red Panda, and Himalayan Black Bear.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. The Great Himalayas (Alpine Zone)</h3>
            <p className="mb-4">
                The northernmost region of Bhutan is dominated by the majestic peaks of the Great Himalayas. Altitudes here exceed 3,500 meters and reach up to 7,570 meters at the summit of <strong>Gangkhar Puensum</strong>, the highest unclimbed mountain in the world.
            </p>
            <p className="mb-4">
                The climate is harsh and alpine, with long, cold winters and short, cool summers. The landscape is a rugged terrain of jagged peaks, moraines, and glaciers. Due to the extreme conditions, there are no permanent settlements in the highest reaches, but the lower alpine valleys are home to semi-nomadic yak herders (Lunaps and Layaps).
            </p>
            <p className="mb-4">
                This zone is home to elusive wildlife such as the Snow Leopard, Blue Sheep, and the Takin (Bhutan's national animal). It is also the source of the medicinal cordyceps fungus, a highly valuable commodity for the local highlanders.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">River Systems</h2>
            <p className="mb-4">
                Bhutan has four major river systems that flow from the alpine glaciers in the north to the Indian plains in the south. These rivers are the lifeblood of the country, providing water for agriculture and generating hydroelectricity, which is Bhutan's largest export.
            </p>
            <ul className="list-disc pl-6 space-y-4">
                <li><strong>Drangme Chhu:</strong> The largest river system, flowing through eastern Bhutan. It is known as the Manas River once it enters India.</li>
                <li><strong>Puna Tsang Chhu:</strong> Formed by the confluence of the Mo Chhu and Pho Chhu rivers in Punakha, this river flows through western-central Bhutan.</li>
                <li><strong>Wang Chhu:</strong> Flowing through the capital, Thimphu, and Paro valleys.</li>
                <li><strong>Amo Chhu:</strong> Rising in Tibet and flowing through the western district of Haa and down to Phuntsholing.</li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Glaciers and Glacial Lakes</h2>
            <p className="mb-4">
                The northern mountains are covered with extensive glaciers, which serve as a critical freshwater reserve. As these glaciers melt (a process accelerated by climate change), they form glacial lakes. Bhutan has identified 677 glaciers and 2,674 glacial lakes.
            </p>
            <p className="mb-4">
                While these lakes are stunningly beautiful, they also pose a risk of Glacial Lake Outburst Floods (GLOFs). The government maintains rigorous monitoring of these lakes to ensure the safety of the valleys below.
            </p>
        </div>

         <div className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-2xl mt-12">
            <h2 className="text-2xl font-bold mb-4">Climate Overview</h2>
             <ul className="space-y-4">
                <li><strong>Spring (March–May):</strong> The valleys are lush and green, with profuse flowering of rhododendrons and wild-flowers. Temperatures are pleasant.</li>
                <li><strong>Summer (June–August):</strong> The monsoon brings rain and humidity. The landscape is vibrant green, but clouds often obscure the mountain views.</li>
                <li><strong>Autumn (September–November):</strong> Considered the best time for trekking. The skies are clear, offering spectacular views of the Himalayas. Rice fields turn golden.</li>
                 <li><strong>Winter (December–February):</strong> Skies remain clear, but nights are cold, often dropping below freezing in the inner valleys. Snow is common above 3,000 meters.</li>
            </ul>
        </div>
      </div>
    </KnowBhutanDetail>
  );
}
