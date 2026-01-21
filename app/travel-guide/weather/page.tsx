import { TravelGuideDetail } from "@/components/TravelGuideDetail";

export default function WeatherPage() {
  return (
    <TravelGuideDetail
      title="Weather in Bhutan"
      subtitle="A Guide to the Seasons in the Himalayas"
      heroImage="/assets/home/weather.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Bhutan's weather is as diverse as its landscape. Due to the massive variations in altitude—from the subtropical jungle in the south (200m) to the glaciated peaks in the north (7,000m)—the climate varies significantly over short distances. Generally, Bhutan has four distinct seasons, each offering a unique charm for the traveler.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Spring (March to May)</h2>
            <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-100 mb-6">
                <span className="font-bold text-green-700 dark:text-green-400 block mb-2">Best for: Nature lovers, trekking, and festivals.</span>
                <p>Spring is widely considered the best time to visit. The valleys come alive with color. The famous rhododendrons bloom in shades of red, pink, and white, painting the hillsides. Wildflowers carpet the meadows.</p>
            </div>
            <p className="mb-4">
                <strong>Temperature:</strong> Pleasant days (15°C to 20°C) and cool nights.
                <br/>
                <strong>Visibility:</strong> Generally clear, with views of the high peaks (though not as crystal clear as winter).
                <br/>
                <strong>Highlight:</strong> The Paro Tshechu usually falls in spring, attracting thousands of visitors.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Summer / Monsoon (June to August)</h2>
            <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 mb-6">
                <span className="font-bold text-blue-700 dark:text-blue-400 block mb-2">Best for: Lush greenery, solitude, and mushroom picking.</span>
                <p>Monsoon brings rain, humidity, and leeches to the trails. However, it also turns the valleys an emerald green. The farmers are busy in the paddy fields, providing great photo opportunities of rural life.</p>
            </div>
            <p className="mb-4">
                <strong>Temperature:</strong> Warm (20°C to 25°C), sometimes reaching 30°C in lower valleys like Punakha.
                <br/>
                <strong>Visibility:</strong> Often clouded. Mountain views are rare. Flights are subject to weather delays.
                <br/>
                <strong>Highlight:</strong> The Haa Summer Festival and the abundance of wild mushrooms (including Matsutake).
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Autumn (September to November)</h2>
            <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-xl border border-orange-100 mb-6">
                <span className="font-bold text-orange-700 dark:text-orange-400 block mb-2">Best for: Mountain views, trekking, and Thimphu Tshechu.</span>
                <p>This is the second peak season. The rain stops, the skies turn a deep, piercing blue, and the air becomes crisp. It is the ideal window for high-altitude trekking like the Jomolhari or Snowman Trek.</p>
            </div>
             <p className="mb-4">
                <strong>Temperature:</strong> Mild days (15°C to 20°C) but starts getting cold at night, especially in November.
                <br/>
                <strong>Visibility:</strong> Excellent. This is the best time to see the snow-capped Himalayan range.
                <br/>
                <strong>Highlight:</strong> The Thimphu Tshechu and the Black-Necked Crane Festival in Phobjikha.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Winter (December to February)</h2>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl border border-zinc-100 mb-6">
                <span className="font-bold text-zinc-700 dark:text-zinc-400 block mb-2">Best for: Photography, clear skies, and budget travel.</span>
                <p>Winter is cold, but distinctively beautiful. The higher passes are covered in snow, and the sky is cloudless. It is much less crowded.</p>
            </div>
             <p className="mb-4">
                <strong>Temperature:</strong> Cold. Days are sunny (10°C), but nights drop below freezing (-5°C to 0°C) in Thimphu and Paro. Punakha remains pleasant.
                <br/>
                <strong>Visibility:</strong> Crystal clear.
                <br/>
                <strong>Highlight:</strong> Punakha Dromche (festival) and visiting the warm southern regions.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Packing Tips</h2>
            <p className="mb-4">
                Regardless of the season, the weather can be unpredictable. The golden rule is <strong>layers</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Bring a waterproof jacket (even in dry seasons).</li>
                <li>Warm thermal innerwear is essential for evenings in Spring, Autumn, and Winter.</li>
                <li>Sturdy walking shoes are a must.</li>
                <li>Sunscreen and sunglasses: The high altitude sun is very strong.</li>
            </ul>
        </div>
      </div>
    </TravelGuideDetail>
  );
}
