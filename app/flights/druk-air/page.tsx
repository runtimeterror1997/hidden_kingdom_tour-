import { FlightDetail } from "@/components/FlightDetail";

export default function DrukAirPage() {
  return (
    <FlightDetail
      title="Druk Air - Royal Bhutan Airlines"
      subtitle="The Nation's Wings to the World"
      heroImage="/assets/home/drukair.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Druk Air, operating as Royal Bhutan Airlines, is the national flag carrier of the Kingdom of Bhutan. Established in 1981 by a Royal Decree, it is more than just an airline; it is a symbol of national sovereignty and the primary bridge connecting this landlocked Himalayan nation to the rest of the world. For over four decades, Druk Air has navigated some of the most challenging skies on Earth with an impeccable safety record.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">A Legacy of Pioneering Aviation</h2>
            <p className="mb-4">
                The story of Druk Air is one of courage and precision. When it began operations in 1983 with a Dornier 228, Paro Airport was little more than a small airstrip in a deep valley. Today, it is a sophisticated operation that plays a critical role in the country's tourism and economy.
            </p>
            <p className="mb-4">
                As a state-owned enterprise, Druk Air carries the responsibilities of the nation. During the COVID-19 pandemic, for instance, it was Druk Air that operated repatriation flights and delivered essential vaccines, earning it the deep gratitude of the people.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Fleet</h2>
            <p className="mb-4">
                Druk Air operates a mixed fleet designed to handle both international routes and short-haul domestic hops across the mountain ridges.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                     <h4 className="font-bold text-xl text-primary mb-2">Airbus A319 & A320neo</h4>
                     <p className="text-sm">These are the workhorses for international flights. The A320neo is the latest addition, featuring advanced engines that are quieter and more fuel-efficient—an important consideration for the environmentally conscious Kingdom. They are equipped with powerful engines to ensure safe take-offs from the short high-altitude runway of Paro.</p>
                </div>
                 <div>
                     <h4 className="font-bold text-xl text-primary mb-2">ATR 42-600</h4>
                     <p className="text-sm">These turboprop aircraft are used for domestic flights to Bumthang (Central), Yonphula (East), and Gelephu (South). They are also used on shorter international routes like Kolkata or Bagdogra. They offer an intimate flying experience with stunning views of the terrain below.</p>
                </div>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Network and Connectivity</h2>
            <p className="mb-4">
                Druk Air operates from its hub at Paro International Airport (PBH). Its network spans South and Southeast Asia, providing vital links for trade and tourism.
            </p>
             <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <li className="flex flex-col p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="font-bold text-primary text-xl">Bangkok</span>
                    <span className="text-sm text-zinc-500">BKK, Thailand</span>
                    <span className="text-xs mt-2 bg-primary/10 text-primary w-fit px-2 py-0.5 rounded">Daily Flights</span>
                </li>
                <li className="flex flex-col p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="font-bold text-primary text-xl">Singapore</span>
                    <span className="text-sm text-zinc-500">SIN, Singapore</span>
                    <span className="text-xs mt-2 bg-primary/10 text-primary w-fit px-2 py-0.5 rounded">Bi-weekly</span>
                </li>
                 <li className="flex flex-col p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="font-bold text-primary text-xl">Kathmandu</span>
                    <span className="text-sm text-zinc-500">KTM, Nepal</span>
                </li>
                 <li className="flex flex-col p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="font-bold text-primary text-xl">Delhi</span>
                    <span className="text-sm text-zinc-500">DEL, India</span>
                </li>
                 <li className="flex flex-col p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="font-bold text-primary text-xl">Kolkata</span>
                    <span className="text-sm text-zinc-500">CCU, India</span>
                </li>
                 <li className="flex flex-col p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="font-bold text-primary text-xl">Dhaka</span>
                    <span className="text-sm text-zinc-500">DAC, Bangladesh</span>
                </li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Services and My Happiness Reward</h2>
            <p className="mb-4">
                <strong>In-flight Service:</strong> Druk Air prides itself on Bhutanese hospitality. Meals often feature a taste of Bhutan (like Ema Datshi) alongside continental options. The in-flight magazine, <em>Tashi Delek</em>, is a collector's item filled with stories about the Kingdom.
            </p>
            <p className="mb-4">
                <strong>My Happiness Reward:</strong> This is Druk Air's frequent flyer program. Members earn miles for every flight, which can be redeemed for free tickets, upgrades to Business Class, and excess baggage allowance. It is affectionately named to align with the country's GNH philosophy.
            </p>
             <p className="mb-4">
                <strong>Business Class:</strong> Offers spacious leather seating (2-2 configuration on the A320), priority check-in, and access to the departure lounge, which provides a serene space to wait for your flight.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Recent Developments</h2>
            <p className="mb-4">
                In late 2022, Druk Air merged with <strong>Royal Bhutan Helicopter Services</strong>, integrating helicopter operations into its portfolio to improve efficiency and connectivity. This strategic move allows Druk Air to offer a seamless travel experience from international arrival to last-mile delivery in remote mountains.
            </p>
        </div>
      </div>
    </FlightDetail>
  );
}
